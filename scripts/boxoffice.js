const BoxOffice = artifacts.require("BoxOffice");
// const owner = web3.eth.accounts[0];

const movies = [
    {
        salesEndDate: Date.now()/1000 + 7*60*60*24 | 0,
        availableTickets: 1000,
        price: web3.toWei(1, "szabo"),
        ticketSupply: web3.toWei(1, "finney"),
        movieName: "RRR",
        ticketSymbol: "RRR",
        logline: "It is a fictional story about two Indian revolutionaries, Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao), who fought against the British Raj and Nizam of Hyderabad respectively",
        poster: "QmWrdc5yX2iJLVrU992b5DKhHPtye5cgskQQcRiFB8ojsL",
        trailer: "sjvMJumvKbQ"
    
    },
    {
        salesEndDate: Date.now()/1000 + 14*60*60*24 | 0,
        availableTickets: 500,
        price: web3.toWei(2, "szabo"),
        ticketSupply: web3.toWei(2, "finney"),
        movieName: "Bheemla Nayak",
        ticketSymbol: "PSPK",
        logline: "While Danny tries to escape the charges using his money and influence, Bheemla Nayak (Pawan Kalyan) the efficient police officer who is popular for his strong morals and values, registers his arrest. This incident bruises the giant-sized ego of Danny who plans to avenge his insult",
        poster: "QmVcEciE2JqsSc6mWqL1Q7MHQMxzxdnxHTRP14ZtudcTb7",
        trailer: "aQ7ptAdZgHM"
    },
    {
        salesEndDate: Date.now()/1000 + 3*60*60*24 | 0,
        availableTickets: 200,
        price: web3.toWei(3, "szabo"),
        ticketSupply: web3.toWei(3, "finney"),
        movieName: "Spiderman No Way Home",
        ticketSymbol: "SPD",
        logline: "our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
        poster: "QmbYk6GzM31sg86qpET53K124AXt7YxEfcN6nVukMcmjMw",
        trailer: "JfVOs4VSpmA"
        
    }, 
    {
        salesEndDate: Date.now()/1000 + 28*60*60*24 | 0,
        availableTickets: 800,
        price: web3.toWei(4, "szabo"),
        ticketSupply: web3.toWei(4, "finney"),
        movieName: "KGF2",
        ticketSymbol: "ROCKY",
        logline: "The blood-soaked land of Kolar Gold Fields (KGF) Has a new overlord now. Rocky, whose name strikes fear in the heart of his foes. His allies look up to Rocky as their Savior, the government sees him as a threat to law and order; enemies are clamoring for revenge and conspiring for his downfall.",
        poster: "QmYue1htoyi8BApQpEat3BeGzknGHG2aPCiiesU4uJb76f",
        trailer: "Qah9sSIXJqk"
    }
];

module.exports = callback => {
    movies.map(movie => BoxOffice.deployed().then(boxOffice => boxOffice.makeFilm(movie.salesEndDate, movie.availableTickets, movie.price, movie.ticketSupply, movie.movieName, movie.ticketSymbol, movie.logline, movie.poster, movie.trailer))
    .then(tx => console.log(tx)));
    // callback();
};