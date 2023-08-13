// Question 1
const userList = ["Mithun","Abhay"]
const isUserLoggesIn = (username) =>{
    if (userList.includes(username)) {
        return `yes, ${username} is a valid user`
    } else {
        return `No, ${username} is not a valid user`
    }
}

console.log(isUserLoggesIn("Mithun"));
console.log(isUserLoggesIn("someone"));



// question 2
function cartPriceCalculator(cartPrice) {

    let sum = 0

    for (const price of cartPrice) {
        sum += price
    }
      return sum
   }
 
   const cartPrice = [125, 20, 30]
   const totalPrice = cartPriceCalculator(cartPrice)
   console.log(`The total cart value is ${totalPrice}`);



// question 3
const students = [
    {
        name: "Mithun",
        marks: 95
    },
    {
        name: "Prabir",
        marks: 75
    },
    {
        name: "Alka",
        marks: 92
    },
    {
        name: "Shivam",
        marks: 70
    },
    {
        name: "Farman",
        marks: 99
    }
]


function resultChecker() {
    for (let i = 0; i < students.length; i++) {
        const element = students[i].marks;
        if (element > 90) {
            console.log(`Congratulations ${students[i].name}! You have cleared the exam.`);
        }else{
            console.log(`sorry ${students[i].name}! You have not cleared the exam.`);
        }
    }
}
resultChecker()


// question 4
const products = [
    {name: "laptop", price: 120000},
    {name: "mobile",price: 70000},
    {name: "Laptop Bag", price: 20000},
    {name: "Watch", price: 20000},
    {name: "Mobile Charger", price: 1500}
]

function findMinMaxProducts(productList) {
    let maxProduct = 0
    let minProduct = 0

    for (const product of productList) {
        if (!maxProduct || product.price > maxProduct.price) {
            maxProduct = product
        }
        if (!minProduct || product.price < minProduct.price) {
            minProduct = product
        }
    }
    return {maxProduct, minProduct}
}

const { maxProduct, minProduct } = findMinMaxProducts(products);
console.log(`The Product with maximum amount ${maxProduct.name} which is priced at Rs. ${maxProduct.price}`);
console.log(`The Product with maximum amount ${minProduct.name} which is priced at Rs. ${minProduct.price}`);



// question 5
const guests = ["Anuraj","Mithun","Alka","Prabir","Shivam","Farman"]

console.log(guests.toString());



// question 6
const productDetails = {
    name: "Apple 2020 Macbook Air Laptop",
    price: 82000,
    color: "grey",
    hardDisk: "256 GB"
}

console.log(`Below are the product details`);
console.log(` name : ${productDetails.name}`);
console.log(`price : ${productDetails.price}`);
console.log(`color : ${productDetails.color}`);
console.log(`hardDisk : ${productDetails.hardDisk}`);



// question 7
function otpGenerator() {

    let min = 1000
    let max = 9999

const otp3 = Math.floor(Math.random() * (max - min + 1)) + min
 return otp3.toString().padStart(4,"0")

}

const otp4 = otpGenerator()
console.log(`Here is your otp ${otp4}`);



// question 8


function calculateRemainingDays(eventDate) {
    const currentDate = new Date();
    const StartDate = new Date(eventDate);

    const timeDifference = StartDate.getTime() - currentDate.getTime();

    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysDifference;
}

let eventDate = '2023-08-31';
const daysUntilEvent = calculateRemainingDays(eventDate);
console.log(daysUntilEvent);



// question 9
function hasUniqueCharacters(username) {
    const charSet = new Set();
  
    for (let char of username) {
      if (charSet.has(char)) {
        return console.log("The input string contains duplicates");; 
      }
      charSet.add(char);
    }
  
    return console.log("The input string contains unique characters");
  }
  

  const username1 = "mithun";
  const username2 = "anuraj";
  
hasUniqueCharacters(username1)
hasUniqueCharacters(username2)



// question 10
function countWordOccurrences(sentence) {
    const words = sentence.toLowerCase().split(/\s+/); 
    const wordMap = new Map();
  
    for (let word of words) {
      if (wordMap.has(word)) {
        wordMap.set(word, wordMap.get(word) + 1);
      } else {
        wordMap.set(word, 1);
      }
    }
  
    return wordMap;
  }
  

  const sentence = "please please submit your assignment on time, your assignments are important!";
  const wordOccurrences = countWordOccurrences(sentence);
  
  for (let [word, count] of wordOccurrences.entries()) {
    console.log(` '${word}' => ${count}, `);
  }
  