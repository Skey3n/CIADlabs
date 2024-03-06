// Importa la biblioteca ethers.js
const ethers = require('ethers');

const ALCHEMY_API_KEY = "jUlZGOoAXOye5QUSCs9_l5x8Fma7khFs";
const SEPOLIA_PRIVATE_KEY = "0x5e40c13ce210a6bac3a76d18f1cd621b03a89536a33fdddd2e7bbcf8423f5869";
const CONTRACT_ADDRESS = "0x0464Ab7D0A8B2EB76e7e63EF25090b5f1ac7577f";
// Conecta a la red de prueba (Sepolia)
const provider = new ethers.providers.JsonRpcProvider('https://eth-sepolia.g.alchemy.com/v2/TU_CLAVE_API_DE_ALCHEMY');

// Dirección del contrato (reemplaza con la dirección real después del despliegue)
const contractAddress = '0x0464Ab7D0A8B2EB76e7e63EF25090b5f1ac7577f';

// ABI del contrato (reemplaza con el ABI real después del despliegue)
const contractABI = [
    "function name() external view returns (string)",
    "function symbol() external view returns (string)",
    "function totalSupply() external view returns (uint256)",
    "function owner() external view returns (address)",
    "function transfer(address to, uint256 amount) external",
    "function balanceOf(address account) external view returns (uint256)",
];

// Crea una instancia del contrato
const contract = new ethers.Contract(contractAddress, contractABI, provider);

// Función para escuchar eventos
async function listenToEvents() {
    // Escucha el evento "Transfer"
    contract.on('Transfer', (from, to, value, event) => {
        console.log(`Evento Transfer: ${from} envió ${value} tokens a ${to}`);
        console.log('Datos del evento:', event);
    });

    console.log('Escuchando eventos. Presiona Ctrl+C para salir.');
}



