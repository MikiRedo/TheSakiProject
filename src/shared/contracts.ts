export const KEEPCODING_NFT_ABI = [
    {
      inputs: [
        {
          internalType: "address",
          name: "initialOwner",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "sender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "ERC721IncorrectOwner",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "ERC721InsufficientApproval",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "approver",
          type: "address",
        },
      ],
      name: "ERC721InvalidApprover",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
      ],
      name: "ERC721InvalidOperator",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "ERC721InvalidOwner",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "receiver",
          type: "address",
        },
      ],
      name: "ERC721InvalidReceiver",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "ERC721InvalidSender",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "ERC721NonexistentToken",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "OwnableInvalidOwner",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "OwnableUnauthorizedAccount",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "approved",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "approved",
          type: "bool",
        },
      ],
      name: "ApprovalForAll",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "_fromTokenId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "_toTokenId",
          type: "uint256",
        },
      ],
      name: "BatchMetadataUpdate",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "_tokenId",
          type: "uint256",
        },
      ],
      name: "MetadataUpdate",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getApproved",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
      ],
      name: "isApprovedForAll",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "ownerOf",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "uri",
          type: "string",
        },
      ],
      name: "safeMint",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          internalType: "bool",
          name: "approved",
          type: "bool",
        },
      ],
      name: "setApprovalForAll",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes4",
          name: "interfaceId",
          type: "bytes4",
        },
      ],
      name: "supportsInterface",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "tokenURI",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ] as const;
  
  export const KEEPCODING_NFT_BYTECODE =
    "0x608060405234801562000010575f80fd5b5060405162002b5b38038062002b5b83398181016040528101906200003691906200027c565b806040518060400160405280600a81526020017f4b656570636f64696e67000000000000000000000000000000000000000000008152506040518060400160405280600281526020017f4b43000000000000000000000000000000000000000000000000000000000000815250815f9081620000b3919062000510565b508060019081620000c5919062000510565b5050505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036200013b575f6040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040162000132919062000605565b60405180910390fd5b6200014c816200015460201b60201c565b505062000620565b5f60075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160075f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f62000246826200021b565b9050919050565b62000258816200023a565b811462000263575f80fd5b50565b5f8151905062000276816200024d565b92915050565b5f6020828403121562000294576200029362000217565b5b5f620002a38482850162000266565b91505092915050565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806200032857607f821691505b6020821081036200033e576200033d620002e3565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302620003a27fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000365565b620003ae868362000365565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f620003f8620003f2620003ec84620003c6565b620003cf565b620003c6565b9050919050565b5f819050919050565b6200041383620003d8565b6200042b6200042282620003ff565b84845462000371565b825550505050565b5f90565b6200044162000433565b6200044e81848462000408565b505050565b5b818110156200047557620004695f8262000437565b60018101905062000454565b5050565b601f821115620004c4576200048e8162000344565b620004998462000356565b81016020851015620004a9578190505b620004c1620004b88562000356565b83018262000453565b50505b505050565b5f82821c905092915050565b5f620004e65f1984600802620004c9565b1980831691505092915050565b5f620005008383620004d5565b9150826002028217905092915050565b6200051b82620002ac565b67ffffffffffffffff811115620005375762000536620002b6565b5b62000543825462000310565b6200055082828562000479565b5f60209050601f83116001811462000586575f841562000571578287015190505b6200057d8582620004f3565b865550620005ec565b601f198416620005968662000344565b5f5b82811015620005bf5784890151825560018201915060208501945060208101905062000598565b86831015620005df5784890151620005db601f891682620004d5565b8355505b6001600288020188555050505b505050505050565b620005ff816200023a565b82525050565b5f6020820190506200061a5f830184620005f4565b92915050565b61252d806200062e5f395ff3fe608060405234801561000f575f80fd5b5060043610610109575f3560e01c8063715018a6116100a0578063b88d4fde1161006f578063b88d4fde146102a1578063c87b56dd146102bd578063cd279c7c146102ed578063e985e9c514610309578063f2fde38b1461033957610109565b8063715018a61461023f5780638da5cb5b1461024957806395d89b4114610267578063a22cb4651461028557610109565b806323b872dd116100dc57806323b872dd146101a757806342842e0e146101c35780636352211e146101df57806370a082311461020f57610109565b806301ffc9a71461010d57806306fdde031461013d578063081812fc1461015b578063095ea7b31461018b575b5f80fd5b61012760048036038101906101229190611a48565b610355565b6040516101349190611a8d565b60405180910390f35b610145610366565b6040516101529190611b30565b60405180910390f35b61017560048036038101906101709190611b83565b6103f5565b6040516101829190611bed565b60405180910390f35b6101a560048036038101906101a09190611c30565b610410565b005b6101c160048036038101906101bc9190611c6e565b610426565b005b6101dd60048036038101906101d89190611c6e565b610525565b005b6101f960048036038101906101f49190611b83565b610544565b6040516102069190611bed565b60405180910390f35b61022960048036038101906102249190611cbe565b610555565b6040516102369190611cf8565b60405180910390f35b61024761060b565b005b61025161061e565b60405161025e9190611bed565b60405180910390f35b61026f610646565b60405161027c9190611b30565b60405180910390f35b61029f600480360381019061029a9190611d3b565b6106d6565b005b6102bb60048036038101906102b69190611ea5565b6106ec565b005b6102d760048036038101906102d29190611b83565b610709565b6040516102e49190611b30565b60405180910390f35b61030760048036038101906103029190611fc3565b61071b565b005b610323600480360381019061031e919061202f565b61073c565b6040516103309190611a8d565b60405180910390f35b610353600480360381019061034e9190611cbe565b6107ca565b005b5f61035f8261084e565b9050919050565b60605f80546103749061209a565b80601f01602080910402602001604051908101604052809291908181526020018280546103a09061209a565b80156103eb5780601f106103c2576101008083540402835291602001916103eb565b820191905f5260205f20905b8154815290600101906020018083116103ce57829003601f168201915b5050505050905090565b5f6103ff826108ae565b5061040982610934565b9050919050565b610422828261041d61096d565b610974565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610496575f6040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161048d9190611bed565b60405180910390fd5b5f6104a983836104a461096d565b610986565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461051f578382826040517f64283d7b000000000000000000000000000000000000000000000000000000008152600401610516939291906120ca565b60405180910390fd5b50505050565b61053f83838360405180602001604052805f8152506106ec565b505050565b5f61054e826108ae565b9050919050565b5f8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036105c6575f6040517f89c62b640000000000000000000000000000000000000000000000000000000081526004016105bd9190611bed565b60405180910390fd5b60035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b610613610b91565b61061c5f610c18565b565b5f60075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600180546106559061209a565b80601f01602080910402602001604051908101604052809291908181526020018280546106819061209a565b80156106cc5780601f106106a3576101008083540402835291602001916106cc565b820191905f5260205f20905b8154815290600101906020018083116106af57829003601f168201915b5050505050905090565b6106e86106e161096d565b8383610cdb565b5050565b6106f7848484610426565b61070384848484610e44565b50505050565b606061071482610ff6565b9050919050565b610723610b91565b61072d8383611101565b610737828261111e565b505050565b5f60055f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b6107d2610b91565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610842575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016108399190611bed565b60405180910390fd5b61084b81610c18565b50565b5f634906490660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806108a757506108a682611178565b5b9050919050565b5f806108b983611259565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361092b57826040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016109229190611cf8565b60405180910390fd5b80915050919050565b5f60045f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b5f33905090565b6109818383836001611292565b505050565b5f8061099184611259565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146109d2576109d1818486611451565b5b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610a5d57610a115f855f80611292565b600160035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825403925050819055505b5f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614610adc57600160035f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8460025f8681526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b610b9961096d565b73ffffffffffffffffffffffffffffffffffffffff16610bb761061e565b73ffffffffffffffffffffffffffffffffffffffff1614610c1657610bda61096d565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610c0d9190611bed565b60405180910390fd5b565b5f60075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160075f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d4b57816040517f5b08ba18000000000000000000000000000000000000000000000000000000008152600401610d429190611bed565b60405180910390fd5b8060055f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610e379190611a8d565b60405180910390a3505050565b5f8373ffffffffffffffffffffffffffffffffffffffff163b1115610ff0578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02610e8761096d565b8685856040518563ffffffff1660e01b8152600401610ea99493929190612151565b6020604051808303815f875af1925050508015610ee457506040513d601f19601f82011682018060405250810190610ee191906121af565b60015b610f65573d805f8114610f12576040519150601f19603f3d011682016040523d82523d5f602084013e610f17565b606091505b505f815103610f5d57836040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401610f549190611bed565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614610fee57836040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401610fe59190611bed565b60405180910390fd5b505b50505050565b6060611001826108ae565b505f60065f8481526020019081526020015f20805461101f9061209a565b80601f016020809104026020016040519081016040528092919081815260200182805461104b9061209a565b80156110965780601f1061106d57610100808354040283529160200191611096565b820191905f5260205f20905b81548152906001019060200180831161107957829003601f168201915b505050505090505f6110a6611514565b90505f8151036110ba5781925050506110fc565b5f825111156110ee5780826040516020016110d6929190612214565b604051602081830303815290604052925050506110fc565b6110f78461152a565b925050505b919050565b61111a828260405180602001604052805f815250611590565b5050565b8060065f8481526020019081526020015f20908161113c91906123d4565b507ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce78260405161116c9190611cf8565b60405180910390a15050565b5f7f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061124257507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806112525750611251826115ab565b5b9050919050565b5f60025f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b80806112ca57505f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b156113fc575f6112d9846108ae565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561134357508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b80156113565750611354818461073c565b155b1561139857826040517fa9fbf51f00000000000000000000000000000000000000000000000000000000815260040161138f9190611bed565b60405180910390fd5b81156113fa57838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b8360045f8581526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b61145c838383611614565b61150f575f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036114d057806040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016114c79190611cf8565b60405180910390fd5b81816040517f177e802f0000000000000000000000000000000000000000000000000000000081526004016115069291906124a3565b60405180910390fd5b505050565b606060405180602001604052805f815250905090565b6060611535826108ae565b505f61153f611514565b90505f81511161155d5760405180602001604052805f815250611588565b80611567846116d4565b604051602001611578929190612214565b6040516020818303038152906040525b915050919050565b61159a838361179e565b6115a65f848484610e44565b505050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b5f8073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141580156116cb57508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061168c575061168b848461073c565b5b806116ca57508273ffffffffffffffffffffffffffffffffffffffff166116b283610934565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b60605f60016116e284611891565b0190505f8167ffffffffffffffff811115611700576116ff611d81565b5b6040519080825280601f01601f1916602001820160405280156117325781602001600182028036833780820191505090505b5090505f82602001820190505b600115611793578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581611788576117876124ca565b5b0494505f850361173f575b819350505050919050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361180e575f6040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016118059190611bed565b60405180910390fd5b5f61181a83835f610986565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461188c575f6040517f73c6ac6e0000000000000000000000000000000000000000000000000000000081526004016118839190611bed565b60405180910390fd5b505050565b5f805f90507a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083106118ed577a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083816118e3576118e26124ca565b5b0492506040810190505b6d04ee2d6d415b85acef8100000000831061192a576d04ee2d6d415b85acef810000000083816119205761191f6124ca565b5b0492506020810190505b662386f26fc10000831061195957662386f26fc10000838161194f5761194e6124ca565b5b0492506010810190505b6305f5e1008310611982576305f5e1008381611978576119776124ca565b5b0492506008810190505b61271083106119a757612710838161199d5761199c6124ca565b5b0492506004810190505b606483106119ca57606483816119c0576119bf6124ca565b5b0492506002810190505b600a83106119d9576001810190505b80915050919050565b5f604051905090565b5f80fd5b5f80fd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611a27816119f3565b8114611a31575f80fd5b50565b5f81359050611a4281611a1e565b92915050565b5f60208284031215611a5d57611a5c6119eb565b5b5f611a6a84828501611a34565b91505092915050565b5f8115159050919050565b611a8781611a73565b82525050565b5f602082019050611aa05f830184611a7e565b92915050565b5f81519050919050565b5f82825260208201905092915050565b5f5b83811015611add578082015181840152602081019050611ac2565b5f8484015250505050565b5f601f19601f8301169050919050565b5f611b0282611aa6565b611b0c8185611ab0565b9350611b1c818560208601611ac0565b611b2581611ae8565b840191505092915050565b5f6020820190508181035f830152611b488184611af8565b905092915050565b5f819050919050565b611b6281611b50565b8114611b6c575f80fd5b50565b5f81359050611b7d81611b59565b92915050565b5f60208284031215611b9857611b976119eb565b5b5f611ba584828501611b6f565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f611bd782611bae565b9050919050565b611be781611bcd565b82525050565b5f602082019050611c005f830184611bde565b92915050565b611c0f81611bcd565b8114611c19575f80fd5b50565b5f81359050611c2a81611c06565b92915050565b5f8060408385031215611c4657611c456119eb565b5b5f611c5385828601611c1c565b9250506020611c6485828601611b6f565b9150509250929050565b5f805f60608486031215611c8557611c846119eb565b5b5f611c9286828701611c1c565b9350506020611ca386828701611c1c565b9250506040611cb486828701611b6f565b9150509250925092565b5f60208284031215611cd357611cd26119eb565b5b5f611ce084828501611c1c565b91505092915050565b611cf281611b50565b82525050565b5f602082019050611d0b5f830184611ce9565b92915050565b611d1a81611a73565b8114611d24575f80fd5b50565b5f81359050611d3581611d11565b92915050565b5f8060408385031215611d5157611d506119eb565b5b5f611d5e85828601611c1c565b9250506020611d6f85828601611d27565b9150509250929050565b5f80fd5b5f80fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b611db782611ae8565b810181811067ffffffffffffffff82111715611dd657611dd5611d81565b5b80604052505050565b5f611de86119e2565b9050611df48282611dae565b919050565b5f67ffffffffffffffff821115611e1357611e12611d81565b5b611e1c82611ae8565b9050602081019050919050565b828183375f83830152505050565b5f611e49611e4484611df9565b611ddf565b905082815260208101848484011115611e6557611e64611d7d565b5b611e70848285611e29565b509392505050565b5f82601f830112611e8c57611e8b611d79565b5b8135611e9c848260208601611e37565b91505092915050565b5f805f8060808587031215611ebd57611ebc6119eb565b5b5f611eca87828801611c1c565b9450506020611edb87828801611c1c565b9350506040611eec87828801611b6f565b925050606085013567ffffffffffffffff811115611f0d57611f0c6119ef565b5b611f1987828801611e78565b91505092959194509250565b5f67ffffffffffffffff821115611f3f57611f3e611d81565b5b611f4882611ae8565b9050602081019050919050565b5f611f67611f6284611f25565b611ddf565b905082815260208101848484011115611f8357611f82611d7d565b5b611f8e848285611e29565b509392505050565b5f82601f830112611faa57611fa9611d79565b5b8135611fba848260208601611f55565b91505092915050565b5f805f60608486031215611fda57611fd96119eb565b5b5f611fe786828701611c1c565b9350506020611ff886828701611b6f565b925050604084013567ffffffffffffffff811115612019576120186119ef565b5b61202586828701611f96565b9150509250925092565b5f8060408385031215612045576120446119eb565b5b5f61205285828601611c1c565b925050602061206385828601611c1c565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806120b157607f821691505b6020821081036120c4576120c361206d565b5b50919050565b5f6060820190506120dd5f830186611bde565b6120ea6020830185611ce9565b6120f76040830184611bde565b949350505050565b5f81519050919050565b5f82825260208201905092915050565b5f612123826120ff565b61212d8185612109565b935061213d818560208601611ac0565b61214681611ae8565b840191505092915050565b5f6080820190506121645f830187611bde565b6121716020830186611bde565b61217e6040830185611ce9565b81810360608301526121908184612119565b905095945050505050565b5f815190506121a981611a1e565b92915050565b5f602082840312156121c4576121c36119eb565b5b5f6121d18482850161219b565b91505092915050565b5f81905092915050565b5f6121ee82611aa6565b6121f881856121da565b9350612208818560208601611ac0565b80840191505092915050565b5f61221f82856121e4565b915061222b82846121e4565b91508190509392505050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026122937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82612258565b61229d8683612258565b95508019841693508086168417925050509392505050565b5f819050919050565b5f6122d86122d36122ce84611b50565b6122b5565b611b50565b9050919050565b5f819050919050565b6122f1836122be565b6123056122fd826122df565b848454612264565b825550505050565b5f90565b61231961230d565b6123248184846122e8565b505050565b5b818110156123475761233c5f82612311565b60018101905061232a565b5050565b601f82111561238c5761235d81612237565b61236684612249565b81016020851015612375578190505b61238961238185612249565b830182612329565b50505b505050565b5f82821c905092915050565b5f6123ac5f1984600802612391565b1980831691505092915050565b5f6123c4838361239d565b9150826002028217905092915050565b6123dd82611aa6565b67ffffffffffffffff8111156123f6576123f5611d81565b5b612400825461209a565b61240b82828561234b565b5f60209050601f83116001811461243c575f841561242a578287015190505b61243485826123b9565b86555061249b565b601f19841661244a86612237565b5f5b828110156124715784890151825560018201915060208501945060208101905061244c565b8683101561248e578489015161248a601f89168261239d565b8355505b6001600288020188555050505b505050505050565b5f6040820190506124b65f830185611bde565b6124c36020830184611ce9565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffdfea2646970667358221220b844b9ef09a6d96070c8c16de29375f0ef4d62cb9ffca6caa22eaeb39f1447f364736f6c63430008160033";
  
  export const COLORIZED_NFT_ABI = [
    {
      inputs: [
        {
          internalType: "address",
          name: "initialOwner",
          type: "address",
        },
        {
          internalType: "string",
          name: "uri",
          type: "string",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "sender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "ERC721IncorrectOwner",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "ERC721InsufficientApproval",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "approver",
          type: "address",
        },
      ],
      name: "ERC721InvalidApprover",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
      ],
      name: "ERC721InvalidOperator",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "ERC721InvalidOwner",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "receiver",
          type: "address",
        },
      ],
      name: "ERC721InvalidReceiver",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "ERC721InvalidSender",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "ERC721NonexistentToken",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "OwnableInvalidOwner",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "OwnableUnauthorizedAccount",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "approved",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "approved",
          type: "bool",
        },
      ],
      name: "ApprovalForAll",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "_fromTokenId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "_toTokenId",
          type: "uint256",
        },
      ],
      name: "BatchMetadataUpdate",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "_tokenId",
          type: "uint256",
        },
      ],
      name: "MetadataUpdate",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [],
      name: "_uri",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getApproved",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
      ],
      name: "isApprovedForAll",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "ownerOf",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
      ],
      name: "safeMint",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          internalType: "bool",
          name: "approved",
          type: "bool",
        },
      ],
      name: "setApprovalForAll",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes4",
          name: "interfaceId",
          type: "bytes4",
        },
      ],
      name: "supportsInterface",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "tokenURI",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ] as const;
  
  export const COLORIZED_NFT_BYTECODE =
    "0x6080604052600160085534801562000015575f80fd5b5060405162002adc38038062002adc83398181016040528101906200003b919062000415565b816040518060400160405280600981526020017f436f6c6f72697a656400000000000000000000000000000000000000000000008152506040518060400160405280600581526020017f434c525a44000000000000000000000000000000000000000000000000000000815250815f9081620000b89190620006b0565b508060019081620000ca9190620006b0565b5050505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160362000140575f6040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620001379190620007a5565b60405180910390fd5b62000151816200016c60201b60201c565b508060099081620001639190620006b0565b505050620007c0565b5f60075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160075f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f604051905090565b5f80fd5b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6200026b8262000240565b9050919050565b6200027d816200025f565b811462000288575f80fd5b50565b5f815190506200029b8162000272565b92915050565b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b620002f182620002a9565b810181811067ffffffffffffffff82111715620003135762000312620002b9565b5b80604052505050565b5f620003276200022f565b9050620003358282620002e6565b919050565b5f67ffffffffffffffff821115620003575762000356620002b9565b5b6200036282620002a9565b9050602081019050919050565b5f5b838110156200038e57808201518184015260208101905062000371565b5f8484015250505050565b5f620003af620003a9846200033a565b6200031c565b905082815260208101848484011115620003ce57620003cd620002a5565b5b620003db8482856200036f565b509392505050565b5f82601f830112620003fa57620003f9620002a1565b5b81516200040c84826020860162000399565b91505092915050565b5f80604083850312156200042e576200042d62000238565b5b5f6200043d858286016200028b565b925050602083015167ffffffffffffffff8111156200046157620004606200023c565b5b6200046f85828601620003e3565b9150509250929050565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680620004c857607f821691505b602082108103620004de57620004dd62000483565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302620005427fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000505565b6200054e868362000505565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f62000598620005926200058c8462000566565b6200056f565b62000566565b9050919050565b5f819050919050565b620005b38362000578565b620005cb620005c2826200059f565b84845462000511565b825550505050565b5f90565b620005e1620005d3565b620005ee818484620005a8565b505050565b5b818110156200061557620006095f82620005d7565b600181019050620005f4565b5050565b601f82111562000664576200062e81620004e4565b6200063984620004f6565b8101602085101562000649578190505b620006616200065885620004f6565b830182620005f3565b50505b505050565b5f82821c905092915050565b5f620006865f198460080262000669565b1980831691505092915050565b5f620006a0838362000675565b9150826002028217905092915050565b620006bb8262000479565b67ffffffffffffffff811115620006d757620006d6620002b9565b5b620006e38254620004b0565b620006f082828562000619565b5f60209050601f83116001811462000726575f841562000711578287015190505b6200071d858262000693565b8655506200078c565b601f1984166200073686620004e4565b5f5b828110156200075f5784890151825560018201915060208501945060208101905062000738565b868310156200077f57848901516200077b601f89168262000675565b8355505b6001600288020188555050505b505050505050565b6200079f816200025f565b82525050565b5f602082019050620007ba5f83018462000794565b92915050565b61230e80620007ce5f395ff3fe608060405234801561000f575f80fd5b5060043610610114575f3560e01c806370a08231116100a0578063a22cb4651161006f578063a22cb465146102ca578063b88d4fde146102e6578063c87b56dd14610302578063e985e9c514610332578063f2fde38b1461036257610114565b806370a0823114610254578063715018a6146102845780638da5cb5b1461028e57806395d89b41146102ac57610114565b80630dccc9ad116100e75780630dccc9ad146101b257806323b872dd146101d057806340d097c3146101ec57806342842e0e146102085780636352211e1461022457610114565b806301ffc9a71461011857806306fdde0314610148578063081812fc14610166578063095ea7b314610196575b5f80fd5b610132600480360381019061012d9190611b2b565b61037e565b60405161013f9190611b70565b60405180910390f35b61015061038f565b60405161015d9190611c13565b60405180910390f35b610180600480360381019061017b9190611c66565b61041e565b60405161018d9190611cd0565b60405180910390f35b6101b060048036038101906101ab9190611d13565b610439565b005b6101ba61044f565b6040516101c79190611c13565b60405180910390f35b6101ea60048036038101906101e59190611d51565b6104db565b005b61020660048036038101906102019190611da1565b6105da565b005b610222600480360381019061021d9190611d51565b610609565b005b61023e60048036038101906102399190611c66565b610628565b60405161024b9190611cd0565b60405180910390f35b61026e60048036038101906102699190611da1565b610639565b60405161027b9190611ddb565b60405180910390f35b61028c6106ef565b005b610296610702565b6040516102a39190611cd0565b60405180910390f35b6102b461072a565b6040516102c19190611c13565b60405180910390f35b6102e460048036038101906102df9190611e1e565b6107ba565b005b61030060048036038101906102fb9190611f88565b6107d0565b005b61031c60048036038101906103179190611c66565b6107ed565b6040516103299190611c13565b60405180910390f35b61034c60048036038101906103479190612008565b6107ff565b6040516103599190611b70565b60405180910390f35b61037c60048036038101906103779190611da1565b61088d565b005b5f61038882610911565b9050919050565b60605f805461039d90612073565b80601f01602080910402602001604051908101604052809291908181526020018280546103c990612073565b80156104145780601f106103eb57610100808354040283529160200191610414565b820191905f5260205f20905b8154815290600101906020018083116103f757829003601f168201915b5050505050905090565b5f61042882610971565b50610432826109f7565b9050919050565b61044b8282610446610a30565b610a37565b5050565b6009805461045c90612073565b80601f016020809104026020016040519081016040528092919081815260200182805461048890612073565b80156104d35780601f106104aa576101008083540402835291602001916104d3565b820191905f5260205f20905b8154815290600101906020018083116104b657829003601f168201915b505050505081565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361054b575f6040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016105429190611cd0565b60405180910390fd5b5f61055e8383610559610a30565b610a49565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146105d4578382826040517f64283d7b0000000000000000000000000000000000000000000000000000000081526004016105cb939291906120a3565b60405180910390fd5b50505050565b6105e2610c54565b5f60085f8154809291906105f590612105565b9190505590506106058282610cdb565b5050565b61062383838360405180602001604052805f8152506107d0565b505050565b5f61063282610971565b9050919050565b5f8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106aa575f6040517f89c62b640000000000000000000000000000000000000000000000000000000081526004016106a19190611cd0565b60405180910390fd5b60035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b6106f7610c54565b6107005f610cf8565b565b5f60075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606001805461073990612073565b80601f016020809104026020016040519081016040528092919081815260200182805461076590612073565b80156107b05780601f10610787576101008083540402835291602001916107b0565b820191905f5260205f20905b81548152906001019060200180831161079357829003601f168201915b5050505050905090565b6107cc6107c5610a30565b8383610dbb565b5050565b6107db8484846104db565b6107e784848484610f24565b50505050565b60606107f8826110d6565b9050919050565b5f60055f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b610895610c54565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610905575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016108fc9190611cd0565b60405180910390fd5b61090e81610cf8565b50565b5f634906490660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061096a5750610969826111e1565b5b9050919050565b5f8061097c836112c2565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036109ee57826040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016109e59190611ddb565b60405180910390fd5b80915050919050565b5f60045f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b5f33905090565b610a4483838360016112fb565b505050565b5f80610a54846112c2565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610a9557610a948184866114ba565b5b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610b2057610ad45f855f806112fb565b600160035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825403925050819055505b5f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614610b9f57600160035f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8460025f8681526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b610c5c610a30565b73ffffffffffffffffffffffffffffffffffffffff16610c7a610702565b73ffffffffffffffffffffffffffffffffffffffff1614610cd957610c9d610a30565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610cd09190611cd0565b60405180910390fd5b565b610cf4828260405180602001604052805f81525061157d565b5050565b5f60075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160075f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610e2b57816040517f5b08ba18000000000000000000000000000000000000000000000000000000008152600401610e229190611cd0565b60405180910390fd5b8060055f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610f179190611b70565b60405180910390a3505050565b5f8373ffffffffffffffffffffffffffffffffffffffff163b11156110d0578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02610f67610a30565b8685856040518563ffffffff1660e01b8152600401610f89949392919061219e565b6020604051808303815f875af1925050508015610fc457506040513d601f19601f82011682018060405250810190610fc191906121fc565b60015b611045573d805f8114610ff2576040519150601f19603f3d011682016040523d82523d5f602084013e610ff7565b606091505b505f81510361103d57836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016110349190611cd0565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146110ce57836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016110c59190611cd0565b60405180910390fd5b505b50505050565b60606110e182610971565b505f60065f8481526020019081526020015f2080546110ff90612073565b80601f016020809104026020016040519081016040528092919081815260200182805461112b90612073565b80156111765780601f1061114d57610100808354040283529160200191611176565b820191905f5260205f20905b81548152906001019060200180831161115957829003601f168201915b505050505090505f611186611598565b90505f81510361119a5781925050506111dc565b5f825111156111ce5780826040516020016111b6929190612261565b604051602081830303815290604052925050506111dc565b6111d784611628565b925050505b919050565b5f7f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806112ab57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806112bb57506112ba8261168e565b5b9050919050565b5f60025f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b808061133357505f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b15611465575f61134284610971565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141580156113ac57508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b80156113bf57506113bd81846107ff565b155b1561140157826040517fa9fbf51f0000000000000000000000000000000000000000000000000000000081526004016113f89190611cd0565b60405180910390fd5b811561146357838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b8360045f8581526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b6114c58383836116f7565b611578575f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361153957806040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016115309190611ddb565b60405180910390fd5b81816040517f177e802f00000000000000000000000000000000000000000000000000000000815260040161156f929190612284565b60405180910390fd5b505050565b61158783836117b7565b6115935f848484610f24565b505050565b6060600980546115a790612073565b80601f01602080910402602001604051908101604052809291908181526020018280546115d390612073565b801561161e5780601f106115f55761010080835404028352916020019161161e565b820191905f5260205f20905b81548152906001019060200180831161160157829003601f168201915b5050505050905090565b606061163382610971565b505f61163d611598565b90505f81511161165b5760405180602001604052805f815250611686565b80611665846118aa565b604051602001611676929190612261565b6040516020818303038152906040525b915050919050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b5f8073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141580156117ae57508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061176f575061176e84846107ff565b5b806117ad57508273ffffffffffffffffffffffffffffffffffffffff16611795836109f7565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611827575f6040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161181e9190611cd0565b60405180910390fd5b5f61183383835f610a49565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146118a5575f6040517f73c6ac6e00000000000000000000000000000000000000000000000000000000815260040161189c9190611cd0565b60405180910390fd5b505050565b60605f60016118b884611974565b0190505f8167ffffffffffffffff8111156118d6576118d5611e64565b5b6040519080825280601f01601f1916602001820160405280156119085781602001600182028036833780820191505090505b5090505f82602001820190505b600115611969578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a858161195e5761195d6122ab565b5b0494505f8503611915575b819350505050919050565b5f805f90507a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083106119d0577a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083816119c6576119c56122ab565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310611a0d576d04ee2d6d415b85acef81000000008381611a0357611a026122ab565b5b0492506020810190505b662386f26fc100008310611a3c57662386f26fc100008381611a3257611a316122ab565b5b0492506010810190505b6305f5e1008310611a65576305f5e1008381611a5b57611a5a6122ab565b5b0492506008810190505b6127108310611a8a576127108381611a8057611a7f6122ab565b5b0492506004810190505b60648310611aad5760648381611aa357611aa26122ab565b5b0492506002810190505b600a8310611abc576001810190505b80915050919050565b5f604051905090565b5f80fd5b5f80fd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611b0a81611ad6565b8114611b14575f80fd5b50565b5f81359050611b2581611b01565b92915050565b5f60208284031215611b4057611b3f611ace565b5b5f611b4d84828501611b17565b91505092915050565b5f8115159050919050565b611b6a81611b56565b82525050565b5f602082019050611b835f830184611b61565b92915050565b5f81519050919050565b5f82825260208201905092915050565b5f5b83811015611bc0578082015181840152602081019050611ba5565b5f8484015250505050565b5f601f19601f8301169050919050565b5f611be582611b89565b611bef8185611b93565b9350611bff818560208601611ba3565b611c0881611bcb565b840191505092915050565b5f6020820190508181035f830152611c2b8184611bdb565b905092915050565b5f819050919050565b611c4581611c33565b8114611c4f575f80fd5b50565b5f81359050611c6081611c3c565b92915050565b5f60208284031215611c7b57611c7a611ace565b5b5f611c8884828501611c52565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f611cba82611c91565b9050919050565b611cca81611cb0565b82525050565b5f602082019050611ce35f830184611cc1565b92915050565b611cf281611cb0565b8114611cfc575f80fd5b50565b5f81359050611d0d81611ce9565b92915050565b5f8060408385031215611d2957611d28611ace565b5b5f611d3685828601611cff565b9250506020611d4785828601611c52565b9150509250929050565b5f805f60608486031215611d6857611d67611ace565b5b5f611d7586828701611cff565b9350506020611d8686828701611cff565b9250506040611d9786828701611c52565b9150509250925092565b5f60208284031215611db657611db5611ace565b5b5f611dc384828501611cff565b91505092915050565b611dd581611c33565b82525050565b5f602082019050611dee5f830184611dcc565b92915050565b611dfd81611b56565b8114611e07575f80fd5b50565b5f81359050611e1881611df4565b92915050565b5f8060408385031215611e3457611e33611ace565b5b5f611e4185828601611cff565b9250506020611e5285828601611e0a565b9150509250929050565b5f80fd5b5f80fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b611e9a82611bcb565b810181811067ffffffffffffffff82111715611eb957611eb8611e64565b5b80604052505050565b5f611ecb611ac5565b9050611ed78282611e91565b919050565b5f67ffffffffffffffff821115611ef657611ef5611e64565b5b611eff82611bcb565b9050602081019050919050565b828183375f83830152505050565b5f611f2c611f2784611edc565b611ec2565b905082815260208101848484011115611f4857611f47611e60565b5b611f53848285611f0c565b509392505050565b5f82601f830112611f6f57611f6e611e5c565b5b8135611f7f848260208601611f1a565b91505092915050565b5f805f8060808587031215611fa057611f9f611ace565b5b5f611fad87828801611cff565b9450506020611fbe87828801611cff565b9350506040611fcf87828801611c52565b925050606085013567ffffffffffffffff811115611ff057611fef611ad2565b5b611ffc87828801611f5b565b91505092959194509250565b5f806040838503121561201e5761201d611ace565b5b5f61202b85828601611cff565b925050602061203c85828601611cff565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061208a57607f821691505b60208210810361209d5761209c612046565b5b50919050565b5f6060820190506120b65f830186611cc1565b6120c36020830185611dcc565b6120d06040830184611cc1565b949350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61210f82611c33565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612141576121406120d8565b5b600182019050919050565b5f81519050919050565b5f82825260208201905092915050565b5f6121708261214c565b61217a8185612156565b935061218a818560208601611ba3565b61219381611bcb565b840191505092915050565b5f6080820190506121b15f830187611cc1565b6121be6020830186611cc1565b6121cb6040830185611dcc565b81810360608301526121dd8184612166565b905095945050505050565b5f815190506121f681611b01565b92915050565b5f6020828403121561221157612210611ace565b5b5f61221e848285016121e8565b91505092915050565b5f81905092915050565b5f61223b82611b89565b6122458185612227565b9350612255818560208601611ba3565b80840191505092915050565b5f61226c8285612231565b91506122788284612231565b91508190509392505050565b5f6040820190506122975f830185611cc1565b6122a46020830184611dcc565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffdfea26469706673582212206263ed46397655e17577c9333811eef4fb9bbd36aacad56378ba2261e64229cd64736f6c63430008160033";
  