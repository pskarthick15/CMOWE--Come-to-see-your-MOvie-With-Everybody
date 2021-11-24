# An Ethereum dApp to Decentralize the Film Industry and Empower Independent Filmmakers



## Project solution proposal video:
[Solution proposal](https://bafybeia56u3rhz4cfgoed3ci66pdrccuofplfa5rnsx7fdoisn3mplegrq.ipfs.infura-ipfs.io/)








## To learn about the product features, design decisions, and security measures of this open source project in detail, read this accompanying report:

[Project report](https://github.com/kuluruvineeth/cmowe/blob/master/Mini%20Project%20Report.pdf)
 

### Deployed Contracts

1. HeartBankCoin.sol: 0x7e4b1d67ffb30d45f46c33e40c60c77b0cd255aa
2. BoxOffice.sol: 0x0b54d5f632b7e1f0ccf96842263d4750560b9147
3. Oracle.sol: 0xa8bbbe439fa8cabe6a163d014e0e29c7697024c3
4. OracleLibrary.sol: 0x55a52c2e16c0b28443d3814fa607c9158e3a92ba
5. OracleStorage.sol: 0xf4b186b23e3278144ed578d0627cfdc6181e9ee7
6. OracleRegistry.sol: 0x3dbdf868f9bb14b83b83c82c74710865f6262326

## Main Pages

There are four main pages, each mapped to corresponding URL routes for easy bookmarking and search engine optimization. Below are explanations at a high level.

### Studio Home Page

![Studio Home Page](https://github.com/kuluruvineeth/cmowe/blob/master/screenshots/3.png)

The studio home page displays all the film projects currently in development, of which users can buy tickets to watch (or re-sell) in advance at a discount. Project-wide stats are also tabulated and shown to perpetuate network effects.

### Make Movie Page

![Make Movie Page](https://github.com/kuluruvineeth/cmowe/blob/master/screenshots/8.png)

Here, filmmakers of any background can customize movie details to create ERC20 compatible tickets that are unique to each film. On the blockchain, this means a standard ERC20 smart contract is created for each project. 

### Movie Token Page

![Movie Token Page](https://github.com/kuluruvineeth/cmowe/blob/master/screenshots/12.png)

After successful creation, anyone with an Ethereum wallet can visit this page to learn about a film project and pre-buy tickets. Project-specific stats are also collected and displayed to elicit excitement. 

### Movie Theater Page

![Movie Theater Page](https://github.com/kuluruvineeth/cmowe/blob/master/screenshots/17.png)

When the film is ready for commercial release, those with movie tickets can validate their ownership to access protected content. This page exemplifies how the blockchain securely verifies ticket possession.

When the user click on the watch movie button, the background light is dimmed and he is taken to a theatre mode to display the film (Here we can enable our users to use their tokens to watch the film that has been uploaded).
![Watch movie](https://github.com/kuluruvineeth/cmowe/blob/master/screenshots/19.png)



## How to Install

Follow these steps to install this project onto your local machine.

### Setup Project

**Fork this repo**. Then:

1. Clone your forked repo: 

```
$ git clone https://github.com/<username>/BoxOffice.git
```

2. Change to the `root` directory: 

```
$ cd ...
```

3. Delete the `build` directory: 

```
$ rm -r build
```

4. Install dependencies: 

```
$ npm install
```

### Setup Smart Contracts

To compile the smart contracts and deploy them to a local blockchain, install `truffle` and `ganache-cli` globally:

```
$ npm install -g truffle@4.1.13 ganache-cli@6.1.4
```

It's possible to simply use the default blockchain that comes with `truffle` or the `ganache` *desktop version*. You just need to change the `PORT` number to match the correct network in the `/config.js` file. Then:

1. Start up local blockchain: 

```
$ ganache-cli
```

2. Compile smart contracts: 

```
$ truffle compile
```

3. Deploy smart contracts: 

```
$ truffle migrate --network ganache
```

### Test Smart Contracts

Each smart contract has a corresponding test contract in both Solidity and JavaScript. To run the tests, execute:

```
$ truffle test
```

## How to Play via Frontend

To interact with the contracts through the frontend, install the [Chrome Metamask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn) extension. Then: 

1. Start up local server: 

```
$ npm run dev
```

2. Visit localhost: 

```
http://localhost:3000
```

For convenience, the `/scripts/oracle.js` script can be used to mimic the functionality of an oracle service. To tell the `Oracle` contract to emit an event that updates its `price` of ether in USD to the one currently at [Coinbase](https://www.coinbase.com/charts?locale=en-US), execute:

```
$ npm run oracle
```
## - NOTE: Remember to first run the 'npm run oracle' command to deploy the oracle contract so that the other components inside our webpage can run smoothly. 

Another useful script is `/scripts/boxoffice.js`, which automatically populates the `BoxOffice` contract with dummy data:

```
$ npm run boxoffice
```


## Help Contribute

Feel free to contribute a pull request to help us decentralize and disrupt the film industry!
