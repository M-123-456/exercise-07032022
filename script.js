const title = (title) => {
  console.log(`
  ===${title}===
  `);
};

/*
1.  Closure
    1.1. Closure Countdown

        Create a closure function which will count down a number from 5 to 1 by calling the following code:

console.log(subtract());
console.log(subtract());
console.log(subtract());
console.log(subtract());
console.log(subtract());
*/
title("1.1. Closure Countdown");

const subtract = (() => {
  let counter = 6;
  return () => {
    counter--;
    return counter;
  };
})();

console.log(subtract());
console.log(subtract());
console.log(subtract());
console.log(subtract());
console.log(subtract());

/*
1.2 Closure Todo List

    Create a closure function which adds todo items to a private array variable (which can't be changed from outside the function).

console.log(addTodo('wash dishes'));
console.log(addTodo('go shopping'));
console.log(addTodo('go to bed'));

    The output should look like this:

Things to do = 1 and they are: wash dishes.
Things to do = 2 and they are: wash dishes, go shopping.
Things to do = 3 and they are: wash dishes, go shopping, go to bed.
*/
title("1.2. Closure Todo List");

const addTodo = (() => {
  let todos = [];
  return (item) => {
    todos.push(item);
    return todos;
  };
})();

console.log(addTodo("wash dishes"));
console.log(addTodo("go shopping"));
console.log(addTodo("go to bed"));

/*
2.  Recursion
    2.1. Recursive Number Adder

        Complete this recursive function which adds numbers:

const nums = [1, 2, 3, 4, 5, 6];
function add(nums) {
... // base case, return statement
... // recursive case
}
console.log(add(nums));
*/
title("2.1. Recursive Number Adder");

const numbers = [];
const add = (nums) => {
  if (nums.length >= 10) {
  } else {
    if (nums.length === 0) {
      nums.push(1);
    }
    nums.push(nums[nums.length - 1] + 1);
    add(nums);
  }
  return nums;
};

console.log(add(numbers));

/*
2.2. Recursive Counter Function

    What do you think this function outputs?
    Run it and try to explain how it works.

function counter(value, limit) {
if (value === limit) {
console.log(value);
} else {
console.log(value);
counter(value + 1, limit);
console.log(value);
}
}
counter(0, 3);
*/
title("2.2. Recursive Counter Function");
function counter(value, limit) {
  if (value === limit) {
    console.log(value);
  } else {
    console.log("going up:", value);
    counter(value + 1, limit);
    console.log("going down:", value);
  }
}
counter(0, 3);

/*
The function counter gets value and limit as its parameters.
1. if value and limit are equal,
    it prints out the value

2. if value and limit are NOT equal,
    - it prints out value
    - it gets into its recursion function which has value + 1 and limit as value. 
      In its recursion function, the value gets one number closer to the limit.
    - it prints out value

for case counter(0, 3)
0 !== 3
> print value: 0
> recursion (value + 1 = 1)
  > 1 ! == 3
  > print value: 1 (0 1)
  > recursion (value + 1 = 2)
    > 2 !== 3
    > print value: 2 (0 1 2)
    > recursion (value + 1 = 3)
      > 3 === 3, print 3 (0 1 2 3)
    > print value: 2 (0 1 2 3 2)
  > print value: 1 (0 1 2 3 2 1)
> print value: 0 (0 1 2 3 2 1)


/*
3.  Callbacks
    3.1. Callback Nametag Generator

        create a function called createNametag which receives two parameters: name and cbLanguage
        calling the function like this:

console.log(createNameTag('Lars', getGermanTagPhrase)); // "Guten Tag, ich heiße Lars"
console.log(createNameTag('Lars', getEnglishTagPhrase)); // "Hello, my name is Lars
*/
title("3.1.Callback Nametag Generator");
const getGermanTagPhrase = (name) => {
  return `Guten Tag, ich heiße ${name}`;
};

const getEnglishTagPhrase = (name) => {
  return `Hello, my name is ${name}`;
};

const createNameTag = (name, cbLanguage) => {
  return cbLanguage(name);
};

console.log(createNameTag("Lars", getGermanTagPhrase)); // "Guten Tag, ich heiße Lars"
console.log(createNameTag("Lars", getEnglishTagPhrase)); // "Hello, my name is Lars

/*
3.2. Transform Numbers Function

    create a function called transformNumbers(nums, cbTransformer)
    nums is an array of numbers, e.g. [1,2,3]
    cbTransformer is a callback function
    make three callback functions which transform the numbers in different ways:
        doubleIt, e.g. [2,4,6]
        squareIt, e.g. [2,4,9]
        makeItAWord, e.g. ["one","two","three"]
        convertToStars, e.g. ["*", "**", "***"]
*/
title("3.2. Transform Numbers Function");
const nums = [1, 2, 3];

const doubleIt = (numArr) => {
  return numArr.map((num) => num * 2);
};

const squareIt = (numArr) => {
  return numArr.map((num) => num ** 2);
};

const makeItAWord = (numArr) => {
  const wordArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ];
  const newArr = [];
  numArr.forEach((num) => {
    newArr.push(wordArr[num]);
  });
  return newArr;
};

const convertToStars = (numArr) => {
  const starArr = [];
  numArr.forEach((num) => {
    starArr.push("*".repeat(num));
  });
  return starArr;
};

const transformNumbers = (nums, cbTransformer) => {
  return cbTransformer(nums);
};

console.log(transformNumbers(nums, doubleIt));
console.log(transformNumbers(nums, squareIt));
console.log(transformNumbers(nums, makeItAWord));
console.log(transformNumbers(nums, convertToStars));
