const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

let books = [
    "1. Clean Code: A Handbook of Agile Software Craftsmanship",
    "2. Introduction to Algorithms",
    "3. Structure and Interpretation of Computer Programs (SICP)",
    "4. The Clean Coder: A Code of Conduct for Professional Programmers",
    "5. Code Complete: A Practical Handbook of Software Construction",
    "6. Design Patterns: Elements of Reusable Object-Oriented Software"
]

function restart () {
    readline.question(`Press 1, 2 or 3 to do the below actions
    1 - Show all books
    2 - Add a new book
    3 - Quit
    `, menu => {
        if(menu.includes("1")){
            console.log([...books])
            return restart();
        }
        else if(menu.includes("2")){
            readline.question(`Add the name of the book `, (bookName) => {
                console.log('Book added successfully');
                books.push(`${books.length+1}. ${bookName}`);
                return restart();
            })
        }
        else if(menu.includes("3")){
            readline.question('Are you sure you want to quit - press Y to quit ', (yesOrNo) => {
                if(yesOrNo.includes("Y")){
                    console.log("Bye Bye");
                    readline.close();
                }
            })
        }
    })
}

restart();