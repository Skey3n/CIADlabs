require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "jUlZGOoAXOye5QUSCs9_l5x8Fma7khFs";

const SEPOLIA_PRIVATE_KEY = "0x5e40c13ce210a6bac3a76d18f1cd621b03a89536a33fdddd2e7bbcf8423f5869";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/jUlZGOoAXOye5QUSCs9_l5x8Fma7khFs",
      accounts: ["0x5e40c13ce210a6bac3a76d18f1cd621b03a89536a33fdddd2e7bbcf8423f5869"]
    }
  }
};
