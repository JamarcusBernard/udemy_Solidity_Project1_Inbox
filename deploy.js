const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'census situate copy fine evolve click connect warrior country unique piano figure',
  'https://rinkeby.infura.io/v3/a478c656bb444e13b50507c6e3aa709e'
);
const web3 = new Web3(provider);

const deploy = async ()=>{
  const accounts = await web3.eth.getAccounts();

  console.log('attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deployed to', result.options.address);
};
deploy();
