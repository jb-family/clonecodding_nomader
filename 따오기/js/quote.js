const quotes = [
    {
        quote: "The road to success and the road to failure are almost exactly the same.",
        author: "- Colin R. Davis -",
    },
    {
        quote: "Success is walking from failure to failure with no loss of enthusiasm.",
        author:"- Winston Churchill -",
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "- Walt Disney -",
    },
    {
        quote: "In order to succeed, we must first believe that we can.",
        author: "- Nikos Kazantzakis -",
    },
    {
        quote: "When you go through hardships and decide not to surrender, that is strength.",
        author: "- Arnold Schwarzenegger -",
    },
    {
        quote: "It is kind of fun to do the impossible.",
        author: "- Walt Disney -",
    },
    {
        quote: "I’ve failed over and over and over again in my life and that is why I succeed.",
        author: "- Michael Jordan -",
    },
    {
        quote: "Life is a mountain. Your goal is to find your path, not to reach the top.",
        author: "- Maxime Lagacé -",
    },
    {
        quote: "The ones who are crazy enough to think they can change the world, are the ones that do.",
        author: "- Anonymous -",
    },
    {
        quote: "Do one thing every day that scares you.",
        author: "- Anonymous -",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;