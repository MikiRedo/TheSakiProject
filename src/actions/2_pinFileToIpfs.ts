import { IPFS_PREFIX, pinata } from "../shared/config";
import fs from "fs";

async function pinFileToIpfs(filePath: string) {
  const readableStreamForFile = fs.createReadStream(filePath);
  const fileName = filePath.split("/").pop() || filePath;
  const options = { pinataMetadata: { name: fileName } };
  const result = await pinata.pinFileToIPFS(readableStreamForFile, options);
  return IPFS_PREFIX + result.IpfsHash
}

async function main() {
  const filePath = "assets/keepcoding.png";
  const uri = await pinFileToIpfs(filePath);
  console.log("IPFS URI:", uri);
}

main();
