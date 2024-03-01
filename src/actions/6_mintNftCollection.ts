import { account, publicClient, walletClient } from "../shared/config";
import { COLORIZED_NFT_ABI, COLORIZED_NFT_BYTECODE } from "../shared/contracts";
import { pinDirectoryToIpfs } from "../shared/ipfs";
import fs from "fs";

async function constructMetadataDirectory(originalDirectory: string, mediaUri: string) {
  const fileNames = fs.readdirSync(originalDirectory);
  const newDirectory = `${originalDirectory}-updated`;
  fs.mkdirSync(newDirectory);
  for (const fileName of fileNames) {
    const number = fileName.split(".")[0];
    const filePath = `${originalDirectory}/${fileName}`;
    const fileContent = fs.readFileSync(filePath, "utf8");
    const originalMetadata = JSON.parse(fileContent);
    const updatedMetadata = JSON.stringify({
      ...originalMetadata,
      image: mediaUri + "/" + number + ".png",
    });
    fs.writeFileSync(`${newDirectory}/${number}`, updatedMetadata);
  }
  return newDirectory;
}

async function deployNft(uri: string) {
  const deploymentTx = await walletClient.deployContract({
    abi: COLORIZED_NFT_ABI,
    bytecode: COLORIZED_NFT_BYTECODE,
    args: [account.address, uri],
    account,
  });
  const deploymentReceipt = await publicClient.waitForTransactionReceipt({
    hash: deploymentTx,
  });
  return deploymentReceipt.contractAddress!;
}

async function mintNft(nftAddress: `0x${string}`) {
  return await walletClient.writeContract({
    abi: COLORIZED_NFT_ABI,
    address: nftAddress,
    functionName: "safeMint",
    args: [account.address],
    account,
  });
}

async function main() {
  const mediaDirectoryPath = "assets/colors";
  const metadataDirectoryPath = "assets/colors-metadata";
  const mediaUri = await pinDirectoryToIpfs(mediaDirectoryPath);
  console.log("Media uploaded to IPFS at:", mediaUri);
  const updatedMetadataDirectory = await constructMetadataDirectory(
    metadataDirectoryPath,
    mediaUri,
  );
  const metadataUri = await pinDirectoryToIpfs(updatedMetadataDirectory);
  console.log("Metadata uploaded to IPFS at:", metadataUri);
  const nftAddress = await deployNft(metadataUri + "/");
  console.log("NFT deployed at:", nftAddress);
  for (let i = 1; i <= 5; i++) {
    const mintTx = await mintNft(nftAddress);
    console.log(`NFT edition ${i} minted:`, mintTx);
    await new Promise((resolve) => setTimeout(resolve, 3000));
  }
}

main();
