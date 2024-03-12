import { IPFS_PREFIX, pinata } from "../shared/config";
import fs from "fs";


//function to pin image
async function pinFileToIpfs(filePath: string) {
  const readableStreamForFile = fs.createReadStream(filePath);
  const fileName = filePath.split("/").pop() || filePath;
  const options = { pinataMetadata: { name: fileName } };
  const result = await pinata.pinFileToIPFS(readableStreamForFile, options);
  return IPFS_PREFIX + result.IpfsHash
}

//in main we pass the path to the function "pinFileToIpfs()"
async function main() {
  const filePath = "assets/kittyCat.jpg";
  const uri = await pinFileToIpfs(filePath);
  console.log("IPFS URI:", uri);
}

main();
