//ACTIVITY - 1
//Task - 1
let bookObj =  {
    title : "Atomic Habits",
    author : "James Clear",
    year :  2018
};
console.log(bookObj);

//Task - 2
let title = bookObj.title;
let author = bookObj.author;
console.log(`${title}, ${author}`);


//ACTIVITY - 2
//Task -3 
bookObj.info = function info() {
    return (`${this.title} was writtern by ${this.author}`);
}
console.log(bookObj.info());

//Task - 4
bookObj.updateYear = function updateYear(newYear){
    return this.year = newYear
}
console.log(bookObj.updateYear(2019));
console.log(bookObj);

//ACTIVITY - 3 
//Task - 5 
 let libObj = {
    libName : "Open Library",
    books : [
        {
            title : "The Psychology of Money",
            author : "Morgan Housel",
            year : 2020
        },{
            title : "Ikigai",
            author : "Héctor García",
            year : 2017
        },{
            title : "The 48 Laws of Power",
            author : "Robert Greene",
            year : 1998
        }
    ]
 };
 console.log(libObj);

//Task - 6
 console.log(`Library Name :- ${libObj.libName}`);
console.log(`Available books in our library are:- ${libObj.books.map((books) => books.title)}`);

//ACTIVITY - 4
//Task - 7
bookObj.show = function show() {
    return (`${this.title} was published on ${this.year}`);
}
console.log(bookObj.show());

//ACTIVITY - 5
//Task - 8
for ( let b in libObj) {
    console.log(`The property is ${b} and it is corresponding to ${libObj[b]}`)
}
console.log();

//Task - 9
const key = Object.keys(libObj)
const value = Object.values(libObj);

console.log(key);
console.log(value)