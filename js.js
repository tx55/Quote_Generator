 // keep track of the previous quote so the same quote isnt shown twice
let previousQuote = null;

// select button by querySelector
const QuoteButton = document.querySelector(".quote-button");

// event listener for QuoteButton
QuoteButton.addEventListener('click', function() {
    let newQuote = getQuote(previousQuote);

    // updates the text- a string literal is used for adding extra elements (like "" and —)
    document.querySelector(".quote").innerText = `\"${newQuote.quote}\"`;
    document.querySelector(".author").innerText = `— ${newQuote.author}`;

    // make newQuote previousQuote
    previousQuote = newQuote;
});

// gets a random quote object from the quoteList array and makes sure its not the same as the previous one
function getQuote(previous) {
    let newQuote = null;
    // to avoid an infinite loop in the worst case
    let iterations = 0;

    while (iterations < quoteList.length) {
        let num = Math.floor(Math.random() * quoteList.length);
        newQuote = quoteList[num];

        // checks if the new quote is the same as the last one generated
        if (newQuote !== previous) {
            return newQuote; // Return the new quote if it's different
        }
        iterations++;
    }

    // if there is some kind of issue and a quote cannot be found, return the first quote in the list
    return quoteList[0];
}

const quoteList = [
    { quote: "Goals transform a random walk into a chase.", author: "Mihaly Csikszentmihalyi"},
    { quote: "Self-control means wanting to be effective at some random point in the infinite radiations of my spiritual existence", author: "Franz Kafka"},
    { quote: "Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you.", author: "Princess Diana"},
    { quote: "If you spend too much time thinking about a thing, you'll never get it done.", author: "Bruce Lee"},
    { quote: "Only a life lived for others is a life worthwhile.", author: "Albert Einstein"},
    { quote: "Time will pass anyway; we might just as well put that passing time to the best possible use.", author: "Earl Nightingale"},
    { quote: "Don't wait around for other people to be happy for you. Any happiness you get you've got to make yourself.", author: "Alice Walker"},
    { quote: "Nobody has ever measured, even the poets, how much a heart can hold.", author: "Zelda Fitzgerald"},
    { quote: "The beautiful thing about learning is nobody can take it away from you.", author: "B.B. King"},
    { quote: "Not everything that is faced can be changed. But nothing can be changed until it is faced.", author: "James Baldwin"},
    { quote: "The time is always right to do what is right.", author: "Martin Luther King, Jr"},
];
