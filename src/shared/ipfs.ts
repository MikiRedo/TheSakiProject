import fs from "fs";
import { IPFS_PREFIX, pinata } from "./config";
import path from "path";

export async function pinFileToIpfs(filePath: string) {
  const readableStreamForFile = fs.createReadStream(filePath);
  const fileName = filePath.split("/").pop() || filePath;
  const options = { pinataMetadata: { name: fileName } };
  const result = await pinata.pinFileToIPFS(readableStreamForFile, options);
  return IPFS_PREFIX + result.IpfsHash;
}

export async function pinJsonToIpfs(metadata: {}) {
  const options = { pinataMetadata: { name: "metadata.json" } };
  const result = await pinata.pinJSONToIPFS(metadata, options);
  return IPFS_PREFIX + result.IpfsHash;
}

export async function pinDirectoryToIpfs(directoryPath: string) {
  const directoryName = directoryPath.split("/").pop() || directoryPath;
  const options = { pinataMetadata: { name: directoryName } };
  const result = await pinata.pinFromFS(path.resolve(directoryPath), options);
  return IPFS_PREFIX + result.IpfsHash;
}

