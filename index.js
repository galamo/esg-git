const Math = {};
const PI = 3.14;
//d

console.log(PI);


//this
// document.addEventListener("click",function(){
//     console.log("regular function");
//     console.log(this);
// })



document.getElementById("btn").addEventListener("click", function () {
    console.log("regular function inside button");
    console.log(this);
})

//another comment:
//this is after changes in code

//arrow function
document.getElementById("btn").addEventListener("click", (event) => {
    // console.log(event);
    console.log(this);
});

let searchAction = () => {
    alert("item ArrowFunction found!");
}


document.getElementById("btn-search").addEventListener("click", searchAction);

function search() {
    //search algo;
    alert("item found!");
}

var user = {
    age: 29,
    printAge: () => console.log(this)
}


var user2 = {
    age: 29,
    printAge: function () { console.log(this) }
}




function Arrow(type) {
    this.type = type;
    this.returnType = () => this.type
}

let returnCounter = (counter, counter2) => {
    console.log("this is another code");
    console.log("this is another code");
    console.log("this is another code");
    return counter + counter2;
};

var users = [1, 2, 3, 4, 5, 6, 7];

users.forEach((usr) => {
    console.log(usr);
})

// let tax = 1.17;
// let calculate = (price, tax) => {
//     return price * tax;
// }



let Basetax = 1.17;
let calculate = (price, tax = price * Basetax, newPrice = 100 * price) => {
    console.log(price);
    console.log(tax);
    console.log(newPrice);
}



let item = "iPhone";
let price = 2000;


let field = "model";


let iphoneProduct = {
    item, price, "printItem"() {
        return this;
    }, printItemNew: () => { console.log("iphone is the best") },
    [field]: "X"
}




// document.getElementById("btn").addEventListener("click",function(){
//     console.log("regular function inside button");
//     console.log(this);
// })

function items() {
    for (let index = 0; index < arguments.length; index++) {
        console.log(arguments[index]);

    }
}
//hi
items();

items(1, 2, 3);

items("gal", "alex", "ismail");

function itemsES6(...same) {
    //console.log(operation);
    for (let index = 0; index < numbers.length; index++) {
        console.log(numbers[index]);

    }
}

itemsES6("multiple", 1, 2, 3, 6, 7, 8);

