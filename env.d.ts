import { EnvOption } from "./src/shared/config";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      PINATA_JWT_KEY?: string;
      NFT_STORAGE_TOKEN?: string;
      PRIVATE_KEY?: `0x${string}`;
    }
  }
}
