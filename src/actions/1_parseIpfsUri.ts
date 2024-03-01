import { IPFS_PREFIX } from "../shared/config";

function parseIpfsUri(uri: string, providerPrefix: string = "https://ipfs.io/ipfs/") {
  if (!uri.startsWith(IPFS_PREFIX)) {
    return null;
  }
  return providerPrefix + uri.slice(IPFS_PREFIX.length);
}

async function main() {
  const ipfsUri = "ipfs://QmTAWALm2KrF6egnZge59TWZEv6NCQjNzJXTDBXFMSQCkS";
  const url = parseIpfsUri(ipfsUri);
  console.log("IPFS URL:", url);
}

main();
