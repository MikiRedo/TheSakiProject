import { IPFS_PREFIX, pinata } from "../shared/config";
import path from "path"

async function pinDirectoryToIpfs(directoryPath: string) {
  const directoryName = directoryPath.split("/").pop() || directoryPath;
  const options = { pinataMetadata: { name: directoryName } };
  const result = await pinata.pinFromFS(path.resolve(directoryPath), options);
  return IPFS_PREFIX + result.IpfsHash;
}

async function main() {
  const filePath = "assets/colors";
  const uri = await pinDirectoryToIpfs(filePath);
  console.log("IPFS URI:", uri);
}

main();