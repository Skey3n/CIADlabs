const { ethers } = require("ethers");

async function main() {
  try {
    const provider = new ethers.providers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/jUlZGOoAXOye5QUSCs9_l5x8Fma7khFs", "sepolia");
    const signer = new ethers.Wallet("0x5e40c13ce210a6bac3a76d18f1cd621b03a89536a33fdddd2e7bbcf8423f5869", provider);

    console.log("Connected to the provider:", provider.connection.url);

    // Your contract address
    const contractAddress = "0x1b0B96aC95121B6B0E225E9ee759D09737D83f2A";

    // Your contract ABI (Application Binary Interface)
    const contractABI = [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "_from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "_to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ];

    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    // Call a read-only function on the contract
    const balance = await contract.balanceOf(signer.address);
    console.log("Your balance:", balance.toString());

    // Call a function that modifies the contract state (make sure you have enough tokens)
    const transferTx = await contract.transfer("0x0123456789abcdef0123456789abcdef01234567", 10);
    await transferTx.wait();

    console.log("Transfer complete!");
  } catch (error) {
    console.error(error);
  }
}

main().then(() => process.exit(0)).catch((error) => {
  console.error(error);
  process.exit(1);
});
