# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

`Try running some of the following tasks`

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

```sh
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

`To install the dependecies to be used throughout this project,  run,`  

```sh
npm install --save-dev hardhat @nomiclabs/hardhat-waffle ethereum-waffle ethereum-waffle chai @nomiclabs/hardhat-ethereum ethers@5.7.2
```

## `Updated dependency list`

````sh
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox @nomicfoundation/hardhat-network-helpers @nomicfoundation/hardhat-chai-matchers @nomicfoundation/hardhat-ethers @nomicfoundation/hardhat-verify chai ethers hardhat-gas-reporter solidity-coverage @typechain/hardhat typechain @typechain/ethers-v5
````

`To create a hardhat project, please run,`

```sh
npx hardhat
hardhat
hardhat test
```

`To deploy your smart contract, please run,`

```sh
npx hardhat run scripts/deploy.js --network <network_name>
```

`Running all tasks`

```sh
npx hardhat
```

```sh
  check                 Check whatever you need
  clean                 Clears the cache and deletes all artifacts
  compile               Compiles the entire project, building all artifacts
  console               Opens a hardhat console
  coverage              Generates a code coverage report for tests
  flatten               Flattens and prints contracts and their dependencies
  help                  Prints this message
  node                  Starts a JSON-RPC server on top of Hardhat Network
  run                   Runs a user-defined script after compiling the project
  test                  Runs mocha tests
  typechain             Generate Typechain typings for compiled contracts
  verify                Verifies contract on Etherscan
```

----------------

@0xJonaseb11
