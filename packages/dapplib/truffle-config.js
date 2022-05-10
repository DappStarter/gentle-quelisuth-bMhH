require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan reward stereo pulse harvest option fringe spawn'; 
let testAccounts = [
"0x378ff11bceb4e82d58579aa7206dd7c6068b664af6db7673060a3281ed61ed71",
"0x782cb7301fba460832d048efdee2ee05dfb1a46238ac319b3186ecf57c551130",
"0x156ac1f204b1f51c4290b4b2633e84beffa8633831ea49d73da9fba93bda6e0f",
"0xc02b5e6a262a539b6ab9a25a2dc3b5b9b3fb02fe7604038d225d3f5625a5527c",
"0x12e479e24b379b0c2d2d12cf8b64c4f6fcc24da14371f051a2324b008dcb5de9",
"0x5b0719f829b81ea481546f679bcf74b225751e3bceb02735973fae7589118c4c",
"0x066b53235c4d249ac7ff7e9b8f605c840379e0f3633fd322f3cf9cae181a330a",
"0x0fa9be56020796aec7aed204acaa2f07d1a27ba6df12e6ffcc2f5e35960424a8",
"0x1cbec2986e64a01f7c130c0912a8dac738029eeba1f7173db81a4b466399e7a8",
"0xc21b964385de873f82f8c69dd4ab22677503bc758202f7d5cb5ba7a1a32b2196"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

