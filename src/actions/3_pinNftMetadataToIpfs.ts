import { IPFS_PREFIX, pinata } from "../shared/config";
import { pinFileToIpfs } from "../shared/ipfs";

async function pinJsonToIpfs(metadata: {}) {
  const options = { pinataMetadata: { name: "metadata.json" } }; 
  const result = await pinata.pinJSONToIPFS(metadata, options);
  return IPFS_PREFIX + result.IpfsHash
}

async function pinNftMetadataToIpfs(mediaPath: string, metadata: {}) {
  const mediaUri = await pinFileToIpfs(mediaPath);
  const updatedMetadata = { ...metadata, image: mediaUri };
  const metadataUri = await pinJsonToIpfs(updatedMetadata)
  return  metadataUri
}

async function main() {
  const mediaPath = "assets/kittyCat.jpg";
  const metadata = {
    name: "Tales From The Alchemist NFT",
    description: "NFT minted in on testnet",
    attributes: [
      {
        trait_type: "Rarity",
        value: "Rarest",
      },
    ],
  };
  const uri = await pinNftMetadataToIpfs(mediaPath, metadata);
  console.log("NFT metadata pinned at:", uri);
}

main();
