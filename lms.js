import chalk from "chalk";

class Book {
    constructor(title, author, year, available) {
        this.title = title
        this.author = author
        this.year = year
        this.available = 'yes'
    }
}

class Library {
    constructor(name, books) {
        this.name = name
        this.books = []
    }

    add(book) {
        this.books.push(book)

        console.log(chalk.greenBright(`'${book.title}' has been successfully added. \n`))
    }

    borrow(book, available) {
        if(book.available === 'yes') {
            book.available = 'no'
            console.log(chalk.yellow(`'${book.title}' has been successfully borrowed. \n`))
        }   else {
                console.log('This book has already been borrowed')
        }
    }

    return(book, available) {
        if(book.available === 'no') {
            book.available = 'yes'
            console.log(chalk.blue(`'${book.title}' has been successfully returned. \n`))
        }   else {
                console.log('This book has been returned')
        }
    }

    display() {
        console.log(chalk.red('\n Displaying all books \n'))
        console.table(this.books.filter(b => b.available === 'yes'))
    }
}

const pLibrary = new Library('John Saints Library')

const b1 = new Book('John can run', 'Mew', 2009)
const b2 = new Book('Jane is a girl', 'Mewowys', 2000)
const b3 = new Book('The Silent River', 'A. Cole', 2010)
const b4 = new Book('Moonlit Pages', 'J. Hart', 2011)
const b5 = new Book('Broken Compass', 'N. Reed', 2012)
const b6 = new Book('Winter Bloom', 'L. Vega', 2013)
const b7 = new Book('Echoes of Stone', 'M. Quinn', 2014)
const b8 = new Book('The Last Lantern', 'S. Bell', 2015)
const b9 = new Book('Hidden Horizons', 'T. Brooks', 2016)
const b10 = new Book('Paper Skies', 'R. Lane', 2017)
const b11 = new Book('The Orchard Key', 'C. Foster', 2018)
const b12 = new Book('Midnight Harbor', 'D. Stone', 2019)
const b13 = new Book('Velvet Ash', 'E. Morgan', 2020)
const b14 = new Book('The Copper Trail', 'P. James', 2021)
const b15 = new Book('North of Dawn', 'K. Ellis', 2022)
const b16 = new Book('After the Rainfall', 'H. Price', 2023)
const b17 = new Book('Glass and Ember', 'Y. Moore', 2024)
const b18 = new Book('The Blue Archive', 'F. Ward', 2025)
const b19 = new Book('A Map of Echoes', 'I. Brooks', 2008)
const b20 = new Book('Wild Orchard', 'J. Miles', 2007)
const b21 = new Book('The Hidden Thread', 'A. Bennett', 2006)
const b22 = new Book('Stonewater', 'N. Foster', 2005)

pLibrary.add(b1)
pLibrary.add(b2)
pLibrary.add(b3)
pLibrary.add(b4)
pLibrary.add(b5)
pLibrary.add(b6)
pLibrary.add(b7)
pLibrary.add(b8)
pLibrary.add(b9)
pLibrary.add(b10)
pLibrary.add(b11)
pLibrary.add(b12)
pLibrary.add(b13)
pLibrary.add(b14)
pLibrary.add(b15)
pLibrary.add(b16)
pLibrary.add(b17)
pLibrary.add(b18)
pLibrary.add(b19)
pLibrary.add(b20)
pLibrary.add(b21)
pLibrary.add(b22)



pLibrary.borrow(b7)
pLibrary.borrow(b12)
pLibrary.borrow(b1)
pLibrary.borrow(b8)
pLibrary.borrow(b20)
pLibrary.borrow(b22)
pLibrary.borrow(b11)
pLibrary.borrow(b6)
pLibrary.borrow(b4)
pLibrary.borrow(b19)

pLibrary.return(b12)
pLibrary.return(b20)
pLibrary.return(b1)


// Displays all book
pLibrary.display()
