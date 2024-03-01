# Decentralized Storage

InterPlanetary File System (IPFS) and Filecoin actions using Pinata and NFT Storage libraries.

## Set-up

First, install the project dependencies using `npm`.

```bash
npm ci
```

Second, get a JWT API key in [Pinata](https://pinata.cloud).

Third, get a API key in [NFT Storage](https://nft.storage).

Fourth, configure the `.env` file as depicted in `env.d.ts`. The used private key must have funds in Polygon Mumbai or the configured testnet.

## Actions

### 1. Parse IPFS URI

Parse the URI of an IPFS file (`ipfs://...`) to displayable URL (`https://ipfs.io/ipfs/...`).

```bash
npm run ts src/actions/1_parseIpfsUri.ts
```

### 2. Pin file to IPFS

Upload and pin a file to IPFS using Pinata.

```bash
npm run ts src/actions/2_pinFileToIpfs.ts
```

### 3. Pin NFT metadata to IPFS

For an NFT edition, pin its media file, construct the metadata JSON and pin it as well to IPFS.

```bash
npm run ts src/actions/3_pinNftMetadataToIpfs.ts
```

### 4. Mint a single NFT

Deploy an NFT, pin the metadata for an edition to IPFS and mint that edition.

First, create a NFT and copy the corresponding ABI and bytecode. For example, from [OpenZeppelin ERC721 wizard](https://wizard.openzeppelin.com/#erc721).

```bash
npm run ts src/actions/4_mintNft.ts
```

### 5. Pin directory to IPFS

Upload and pin an entire directory to IPFS using Pinata.

```bash
npm run ts src/actions/5_pinDirectoryToIpfs.ts
```

### 6. Mint an NFT collection

Deploy an NFT, pin the metadata for the whole collection and mint each edition.

```bash
npm run ts src/actions/6_mintNftCollection.ts
```

### 7. Store NFT metadata in Filecoin

Upload an NFT metadata, pin it in IPFS, and store it in Filecoin using NFT Storage.

```bash
npm run ts src/actions/7_storeMetadataInFilecoin.ts
```
