import { IPFS_PREFIX } from "../shared/config";

function parseIpfsUri(uri: string, providerPrefix: string = "https://ipfs.io/ipfs/") {
  if (!uri.startsWith(IPFS_PREFIX)) {
    return null;
  }
  return providerPrefix + uri.slice(IPFS_PREFIX.length);
}

async function main() {

  const ipfsUriImage = "";
  const urlImage = parseIpfsUri(ipfsUriImage);

  const ipfsUriMeta = "ipfs://QmeFbLGuikzfyo3ptjG3E2aHY6XDeLxrXNK1Fe83h3i7G2";
  const urlMeta = parseIpfsUri(ipfsUriMeta);

  console.log("IPFS URL:", urlImage);
  console.log("IPFS URL:", urlMeta);
}

main();
