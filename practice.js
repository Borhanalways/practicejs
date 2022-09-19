
    // 1) Javascript  to find the maximum between two numbers.
    var  price = 20;
    if (price > 18){
        console.log("You can buy this product");
    }
    if (price < 18){
        console.log("sorry! You can not buy this product");
    }


    // 3) Solve the problem with Javascript  to check whether a number is negative, positive or zero.

    let fastNumber = 5;

    if (fastNumber > 0) {
    console.log("the number is positive");
    } else if (fastNumber < 0) {
    console.log("the number is negative");
    } else {
    console.log("0");
    }

    let lastNumber = -7;

    if (lastNumber > 0) {
    console.log("the number is positive");
    } else if (lastNumber < 0) {
    console.log("the number is negative");
    } else {
    console.log("0");
    }

    


    // 4) Solve the problem with Javascript  to check whether a number is divisible by 10 or not.
    var newNumber = 55;
    if (newNumber % 10 == 0){
        console.log("The number is divisible by 10");
    }
    if (newNumber % 10 !== 0){
        console.log("The number is not divisible by 10");
    }

    // 7) Solve the problem with Javascript  to check weather the temperature is hot, cold or normal. (30 <=  is hot, 25 >= is cold , anyother value is normal)

    var temp = 20;
    if (temp >= 30){
        console.log("The weather is hot");
    }
    if (temp > 25){
        console.log("The weather is normal");
    }
    if (temp < 25){
        console.log("The weather is cold");
    }

     // 8) Given 3 subjects Math, English and Physics find the total marks and average of 3 subjects.
     function gpaCounter(person = "shamoli", math, english, physics) {
      let totalMarks = math + english + physics;
    
      console.log("Marks", totalMarks, english, math, physics);
    
      if (totalMarks >= 280) {
        console.log(person, "You got A+");
      } else if (totalMarks >= 250) {
        console.log(person, "You got B+");
      } else if (totalMarks >= 200) {
        console.log(person, "You got C");
      } else {
        console.log(person, "fail");
      }
    }
    gpaCounter("shamoli", 90, 95, 95);



    // 9) Find the random number between 1 to 10

    var random = Math.floor(Math.random() *10 + 1);
    console.log(random);
    

    // 10) Create 3 meaningful arrays 

    let fruits = ["apple", "orange", "kiwi", "papaya", 0, true, null, "banana"];

    console.log(fruits[0]); // using index
    console.log(fruits.length); // number of items
    console.log(fruits.indexOf("banana")); // find the index of an item

    fruits.pop(); // remove last items from the array
    fruits.push("strawberry"); // item add to the last of an array
    fruits.shift(); //remove first items from the array
    fruits.unshift("berry"); // item add to the first of an array

    console.log(fruits);


    // Create 3 meaningful  objects

        const car = {
        brand: "BMW",
        weight: "850kg",
        model: 2011,
        };

        const student = {
        stuName: "Dulal",
        age: "25",
        married: true,
        };

        console.log(car.weight, student["age"]);

    // 11) Create a while loop which prints values from 10 to 50

    for (let count = 10; count <= 50; count++) {
      console.log(count);
    }

    // 12) Create a for loop which prints values from 20 to 60

    for (let count = 20; count <= 60; count++) {
      console.log(count);
    }

    // 13) Create a function of adding two numbers. 

    function add(num1 , num2){
      console.log(num1 + num2);
      }
      add(10, 20);

    // 14) Create a function which returns a for loop which takes two parameter one is initial value & final value to return the list of number from initial to final value. 

    function forLoop(initialValue, finalValue) {
      for (let count = initialValue; count <= finalValue; count++) {
        console.log(count);
      }
    }
    forLoop(17, 38);

    // 15) Create a function which return whether the year is leap year or not

    function leapYear(year) {
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        console.log(year, "is leap year");
      } else {
        console.log(year, "is not a leap year");
      }
    }
  leapYear(2032);

    // 17) Solve the problem with Javascript  to check whether a number is even or odd.

    let number = 15;
    if (number % 2== 0) {
        console.log(number, "is an even number");
    }
    else {
        console.log(number, "is a odd number");
    }


    let countNumber = 20;
    if (countNumber % 2== 0) {
        console.log(countNumber, "is an even number");
    }
    else {
        console.log(countNumber, "is a odd number");
    }


   

  

    


