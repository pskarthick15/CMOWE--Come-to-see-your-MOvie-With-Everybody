module.exports = {
    HOST: "localhost",
    PORT: 7545, // truffle: 9545 // ganache-cli: 8545 // ganache: 7545 // geth: 8545
    SERVER_PORT: process.env.PORT || 3000,
    MNEMONIC: process.env.MNEMONIC || "pepper stable ripple enrich provide business ankle tank net lumber acquire earn",
    INFURA: process.env.INFURA || "https://rinkeby.infura.io/DPHGLx2mBJeWsuDv1jFV"
}