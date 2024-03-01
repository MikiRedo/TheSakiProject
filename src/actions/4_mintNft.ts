import { account, publicClient, walletClient } from "../shared/config";
import { KEEPCODING_NFT_ABI, KEEPCODING_NFT_BYTECODE } from "../shared/contracts";
import { pinFileToIpfs, pinJsonToIpfs } from "../shared/ipfs";

async function deployNft() {
  const deploymentTx = await walletClient.deployContract({
    abi: KEEPCODING_NFT_ABI,
    bytecode: KEEPCODING_NFT_BYTECODE,
    args: [account.address],
    account,
  });
  const deploymentReceipt = await publicClient.waitForTransactionReceipt({
    hash: deploymentTx,
  });
  return deploymentReceipt.contractAddress!;
}

async function mintNft(nftAddress: `0x${string}`, tokenId: bigint, uri: string) {
  return await walletClient.writeContract({
    abi: KEEPCODING_NFT_ABI,
    address: nftAddress,
    functionName: "safeMint",
    args: [account.address, tokenId, uri],
    account,
  });
}

async function main() {
  const filePath = "assets/keepcoding.png";
  const metadata = {
    name: "Keepcoding NFT",
    description: "NFT minted in Keepcoding",
    attributes: [
      {
        trait_type: "Rarity",
        value: "Rarest",
      },
    ],
  };
  const nftAddress = await deployNft();
  console.log("NFT deployed at:", nftAddress);
  const mediaUri = await pinFileToIpfs(filePath);
  console.log("Media uploaded to IPFS at:", mediaUri);
  const metadataUri = await pinJsonToIpfs({ ...metadata, image: mediaUri });
  console.log("Metadata uploaded to IPFS at:", metadataUri);
  const tokenId = 1n;
  // @ts-ignore
  const mintTx = await mintNft(nftAddress, tokenId, metadataUri);
  console.log(`NFT edition ${tokenId} minted:`, mintTx);
}

main();
