import Pinata from "@pinata/sdk";
import { http, createPublicClient, createWalletClient } from "viem";
import { polygonMumbai } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";
import { NFTStorage } from "nft.storage";

export const IPFS_PREFIX = "ipfs://";

export const pinata = new Pinata({ pinataJWTKey: process.env.PINATA_JWT_KEY });
export const nftStorage = new NFTStorage({
  token: process.env.NFT_STORAGE_TOKEN || "",
});

const clientParams = {
  chain: polygonMumbai,
  transport: http(),
};

export const publicClient = createPublicClient(clientParams);
export const walletClient = createWalletClient(clientParams);

export const account = privateKeyToAccount(
  (process.env.PRIVATE_KEY || "0x" + "0".repeat(64)) as `0x${string}`,
);
