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
  const mediaPath = "assets/keepcoding.png";
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
  const uri = await pinNftMetadataToIpfs(mediaPath, metadata);
  console.log("NFT metadata pinned at:", uri);
}

main();
