quotes = {
    "Anonymous" : "\"There is no way you will get a quote from me for your stupid website.\"",
    "Michel De Montaigne": "\"I quote others only in order the better to express myself.\"",
    "Winston Churchill": "\"Kites rise highest against the wind, not with it\"",
    "Albert Einstein": "\"If we knew what we were doing, it would not be called research, would it?\""
}    
authors = Object.keys(quotes);
count = 1;

function newQuote() {
    document.getElementById("quote").innerHTML = quotes[authors[count]];
    document.getElementById("author").innerHTML = authors[count];
//reset the counter, looping back to the first quote
    count++;
    if (count >= 4) {
        count = 1;
    }
}

// Tweet -----------------------------------------------------

var tweetLink = "http://twitter.com/home?status=";
function tweetQuote() {
    tweetLink += quotes[authors[count]];
    tweetLink += " " + authors[count];
    console.log(tweetLink);
    window.open(tweetLink, '_blank');
}

// Event listener
