import { nftStorage } from "../shared/config";
import { readFileSync } from "fs";
import { File } from "nft.storage";

async function storeMetadataInFilecoin(
  mediaPath: string,
  metadata: { name: string; description: string; [key: string]: any },
) {
  const mediaBuffer = readFileSync(mediaPath);
  const mediaName = mediaPath.split("/").pop() || "";
  const mediaFile = new File([mediaBuffer], mediaName, { type: "image/png" });
  const result = await nftStorage.store({
    ...metadata,
    image: mediaFile,
  });
  return result.url;
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
  const metadataUri = await storeMetadataInFilecoin(filePath, metadata);
  console.log("Metadata uploaded to IPFS at:", metadataUri);
}

main();
