# TYPESCRIPT
[Documentation -->] (https://www.typescriptlang.org/docs/)
## SECTION 1 - INTRODUCTION TO TYPESCRIPT
### What is typescript
#### what why is it needed and  how it is different from vanilla js
Typescript (ts) is a programing language created by microsoft to address the shortcomings of javascript (js). Typescript is the brother of javascript. Simply put it cautions js from doing just anything it wants. Typescript is a language build ontop js therefore every js file is a valid ts file.

#### Benefits of Ts
- Static typing (most important feature)
- Code completion
- Refactoring
- Shorthand notations

##### Statically-typed Vs Dynamically typed language
| Statically-typed | Dynamically-typed |
|-------|------|
| c++, c#, Java | Js, Py, Ruby |
| we know the type of variable at compile time i.e while coding | Determined and may change at runtime. |
| Good to work with | Dynamically typed is dangerous because the type of variable may change and if such is passed in a type not expected then it causes issues at runtime.| Typescript helps to solve this error.

##### Type-cecking at compile time rather than at runtime
Typescript is javascript with typechecking. With typescript we explicitly set the type of our variables upon declaration and then pass it to the typescript compiler, the compiler will check and tell us if we are doing anything wrong or not. So we can catch a lot of our mistakes at compile time.
With typescript, if we declare a variable, probably declared it as a number we can't set it to a string.
```
let x: number = 10;
x = "a" // will never be permitted
```

We catch this error by just compiling our app rather than testing and testing.
Most IDE now support typesript to allow for Typechecking, code completion refactoring and new future features of js for better coding. So anything we can do with js we can do the same with ts.

#### Drawbacks of Ts
- There is always a compilation step involved because the browser do not understand typescript. Ts is compiled by the compiler to .js in a process called transpilation.
- Discipline in writing code. It sometimes seems getting in the way but it is a good one.

So you can use Js for simple projects and Ts for medium to large projects.

### Setting up the development environment

The first thing is to install nodeJs which will be used for installing the packages. Go to [Official NodeJs Website](https://nodejs.org) to install node. Ensure it is installed. You can type

`node --version`

This would show the current version of node installed on the system.It should be the latest one depending on the time you are reading this article.

Then to install Typescript, on the terminal type

`npm i -g typescript`

if permission error on mac or linux, type

`sudo npm i -g typescript`

To check if it is installed, type

`tsc -v` or use `tsc --version`

We will use vscode editor

### Creating a Typescript program
create a new folder for the project and open in vs code
```Bash
cd Desktop
mkdir hello-world
cd hello-world
code .
```
The last command open the folder in vscode and if it doesn't drag and drop the folder from file manager into vscode

add a new file called `index.ts`
ts is built on js meaning ts is a superset of js. It has everything in js with some addition.

`console.log("Hello World")`

To run the code, in vscode click on the navbar, terminal, new terminal once opened we can use ts compiled to compile our file
`tsc index.ts`
running the above we will have the index.js file in our project folder

Let's write some ts code in our ts file

`let age: number = 20;`

Once we compile this code with ts, we have our js file containing 

`var age = 20`

ts uses ES5 specification. ES specifies while js implement the specification. ES5 is an old specification.

So how do we configure ts to use latest specifications like ES6.

### Configuring the Typescript compiler
We will create a config file from the terminal with the command

`tsc --init`

It will create a tsconfig.json file with some settings. When we open this config file in vs code, a lot of the settings are commented and truly because we cannot use all right now plus nobody knows all. Let's talk about some of them.
First `target` -- specifies the ES version ts compiler will use while generating our code. It is set to 2016 we can use higher but that is the most supported.

`Module` is set to commonjs more on this later.

`rootDir` it is initialy set to `./` but we can create a new folder called src move the `index.ts` into it and set the rootDir as `./src`. We can delete the index.js

The next is `outDir` we can create the dist folder and set it to `./dist` meaning distribution folder.

`Remove comments` remove comments so our generated code is shorter.

Another is `noEmitOnError` set to `true`. By default the ts compiler always generate a code even if there is error but with this, it means no code is generated once an error is encountered.

Back to our terminal, now if we run `tsc`, it generates a `.js` file for all our `.ts` files.
Our new generated `.js` file is in the `/dist` folder.

### Debugging Typescript Aplications
This is important when something go wrong. We can know what happened by following this steps
First we go into the `tsconfig` file and allow `sourceMap`. This is a file that explains how our ts file maps with the generated js file. if we recompile with `tsc` we will found a new file in the `dist` folder named `index.js.map`. 

Let say we addded some more code
```ts
let age: number = 20;
if (age < 50)
    age += 10;
```
At the first line we can insert a breakpoint when we start decugging the execution stops at the breakpoint and we can execute our code line by line. Go to the debug panel, click on the create `launch.json` file then select `Node.js`. This create a launch.json file in our project. This file tells node how to debug our application.
We are going to add another line just after the program

`"preLaunchTask": "tsc: build - tsconfig.json"`,

With this we are telling vscode to use the typescript compiler to run our code. Close the file.

To start debugging we go to the debug pannel then we launch the program with the play button or with f5 shortcut.
The code will execute and stops at the breakpoint line.
We can clikc on the step over to run the program line by line
we can then look at the data at the left checking the variable or watch to see how our program execute line by line.

## SECTION 2 FUNDAMENTALS OF TYPESCRIPT
Learning about the built in types
- The any Type
- Arrays
- Tuples
- Enums
- Functions
- Objets

Javascript has the types number, string, boolean, null, undefined and object. Typescript extends this by adding the following types any, unknown, never, enum, tuple.

We can play with this types in ts
```ts
let sales: number = 123_456_789; // in typescript we can separate a large number with _ to make our code more readable.

let course: string = 'TypeScript';
let is_published: boolean = true;
let level;
```

We can also do without anotating the type in ts because typescript knows what type by the value assigned.
If we declare a variable without any value assinged and no annotation, ts takes it as type any.

### THE ANY TYPE
Using any type in ts defeat the reason for typescript so it is not encouraged.
```ts
let level;
level = 1;
level = 'a';
```

As a best practice avoid using the type any.
```ts
function render(document) {
    console.log(document);
}
```
The above gives an error `(Parameter 'document' implicitly has an 'any' type)` because it takes document takes the type any because we haven't  explicitly specify the type.

The above would not compile in ts. There are two options to turn the error off, we can esplicitly annotate the type as any but what if we have many of this type of function in our code. There is a nuclear way to do that.
`Press ctr + P` and go to `tsconfig.json`. In the type checking section, strict is turned on this is same as turning all most of the type checking features. The next check is `noImplicitAny` if we uncomment it, we can set it to `false` then the error in the case of our document above would be gone. This must be used with care because you lose the major feature of ts. It should not be used.

### ARRAYS
```ts
let numbers = [1, 2, '3']; // js array can be of any type
```
If we pass the numbers to a function expecting a list of numbers then there will be an error. This is where we use ts. We can explicitly apply a type annotation here
```ts
let numbers: number[] = [1, 2, '3']
```
The error appears immediately and we can fix it at compile time. If we only have numbers in the array, ts know that it is type number without the annotation but what if it is empty then it take it as type any. This means we can as well put any value in it. To avoid this, it means if we are using an empty array it is bes to annotate the type while declaring the variable. One of the advantages of specifying the type is that it allow our editor to provide some intellisense, code completion and other useful suggestions because it knows the type of our variable.
```ts
let numbers: number[] = [];
numbers.forEach(n => n.) // intellisense works here.
```
### TUPLE
Used to work with values of different types.
```ts
let user: [number, string] =  [1, 'Mosh']
```

The aray have fixed lenght and fixed type. If another element is added or the type of the value added are different then an error occured.
Using or accessing any of the elements comes with intellisense or code completion since the type is known.
```ts
let user: [number, string] = [1, 'Mosh'];
user[0]. // This brings all the methods and properties of that type.
```
Note: This still has some drawbacks becasue having `user.` will still bring the push method which is not supposed to be for anything called tuple. Hence it is good to limit the tuple to two type. If there are more then it will be hard to work or understand the code.

```ts
let user: [number, string, boolean, number] = [1, Mosh, true, 0] // This do not really mean much
```

### ENUMS
Enums is a list of related constants.
Let say we want to represent the size of T-shirt as constants.

```ts
const small = 1;
const medium = 2;
const large = 3;
```
We can just use an enum

```ts
enum Size { Small = 1, Medium, Large} // the compiler will set other numbers
let mySize: Size = size
console.log(mySize)
```

On our terminal, if we run `tsc` there is no error.
Now if we check the value of the second item though not stated, by running `node dist/index.js`, it will give us `2`. We can also look at the generated js code.
if we declare the enum as const, the genrated code becomes much better.

```ts
const enum Size { Small, = 1, Medium, Large };
let mySize: Size = Size.Medium;
console.log(mySize); // the compiler will generate a more optimized code.
```

### FUNCTIONS
Ts helps us to prevent common functions when working with functions.
```ts
function calculateTax(income: number) {
    return 0;
}
```
if it has no return, the type of return is taken as `none` but if the return value is specified, ts knows the type. But for good practice we should always annotate our functions. All the parameters including the return values should be properly annotated so it will be easy for it to use.
```ts
function calculateTax(income: number): number {
    return 'a';
}
```
The above return an error immediately because the parameter type and return type is specified.

Also if the parameter is not used, there is a settings we can turn on to catch this that is `"noUnusedParameters"` we can make it true because its not part of strict settings.

```ts
function calculateTax(income: number): number {
    if (income < 50_000) {
        return income * 1.2;
    }
    // undefined
}
```

Ts raise an error for the above because if the condition is not met then js return undefined which is not good. But if we remove the return annotation then there is no error which is not good for our application. We can use another settings to catch this also.
In our settings we will uncomment `"noImplicitReturns"` set to true.

Now that error is checked. Therefore it is always good to annotate our parameters and return values.
Also if we declare a variable in our function and it is not used, we have a settings to catch that. We can uncomment `"noUnusedLocals"` set to true. This put a warning on unsed local variables in our function. This also catch error in our parameters not used. If we set a parameter and not input it when we call the function.
```ts
function calculateTax(income: number, taxYear: number): number {
    if (taxYear < 2024) {
        return income * 1.2;
    }
    return income * 1.3;
}

calculateTax(10_000, 2024, 1) // valid in js but will not pass with ts. So we wil remove the third param
```

We can make the second parameter option by adding ? to its name. `taxYear?: number`
This will also lead to another error because when we call the function and not pass the second parameter, undefined is used for its value in the function. There are two ways to solve this,
We can use an old js trick.
```ts
if ((taxYear || 2024) < 2024) // This will use a default value of 2024 if taxYear is not supplied
``` 
There is surely a better way to this. We can set the parameter equal to a value when we set the parameter

```ts
function calculateTax(income: number, taxYear = 2022): number
```

So if we don't put the second param once we call the function. It will use the value assigned.
So function values, parameters and return values should be properly annotated.

### OBJECTS
```ts
let employee = { id: 1};
employee.name = "John";
```
The above is a valid js code but it will not pass in ts return error `(property 'name' does not exist on type '{ id: number; }')` because property name is not set when declaring the object.
Ts has already infer its shape on we declared it. We can also annotate the object just like our variables. 
```ts
let employee: {
    id: number,
    name: string
} = { id: 1, name: ""};
employee.name = "Seyi"
```
To avoid any error, we can set the name property to an empty string or make it optional so we dont need to bother about it. It is important for our code to be intellectually concise because in this case all employee should have a name so we don't abuse the features of ts unnecessarily. We can therefore just use the above or the code below

```ts
let employee: {
    id: number,
    name: string
} = { id: 1, name: "Seyi"}
```
Sometimes we want some properties to be readonly that is not changeable. In reality ID value should not change cos it should be unique to each employee. We can make it read only in Ts.
```ts
let employee: {
    readonly id: number,
    name: string
} = {
    id: 1, name: "Seyi"
}
```

What if we want to define our object method say retire.

```ts
let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: "Seyi",
    retire: (date: Date) => {
        console.log(date);
    }
}
```

There is a better way to annottate the above kind of advanced but we will check it quickly.

## SECTION 3 - ADVANCED TYPES
Here we will discuss advance types. More specifically.

### TYPE ALIASES
Looking at our last code there are some problem with it, The first problem is that to create a new employee we have to repeat the object shape which does not follow the DRY coding principle.
Second is that the other employee might have a different shape since we dont have a place to define  a single shape. This code is then hard to read and understand that is why we use the type aliase.

With type aliase we can define a custom type. Just above the object we can have


```ts
type Employee = {// we define all the properties and methods and employee object should have.
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}
let employee: Employee = {
    id: 1,
    name: "Seyi",
    retire: (date: Date) => {
        console.log(date);
    }
}
```

With the above we have a single place we define the shape of our employee object. This is one of the benefits of using type aliases.

### UNIONS AND INTERSECTIONS TO COMBINE TYPES
Union and intersections can be used to combine types for a specific variable paramenter or function in a typescript program.
#### UNION
With union types we can give a varible or a functin parameter more than one type.

Say we have a function that converts kgToLbs
```ts
function kgToLbs(weight: number | string): number {
    // if we try to use the parameter we will only have methods that are specific to number or strings. This is where we use a techniques call narrowing.
    if (typeof weight === 'number')
    return weight * 2.2;
    else
    return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs('10kg');
```

if we compile our code and we check our index.js file, our union type is not part of js and it's left for the compiler to do its type checking.

#### INTERSECTION
With union we are saying a variable or function parameter can be one of many types. Another technique is intersection where we use & which means the parameter represents a number and a string all the time.
```ts
let weight: number & string;
```
To consider a more realistic example,

```ts
type Draggable = {
    drag: () => void
};

type Resizeable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {};
    resize: () => {}
}
```
### LITERAL TYPES
Sometimes we want to limit the values we can assign to a variable, this is where we use literal types.
Say we have a variable called quantity and it can either be 20 or 40 but nothing else, if we annotate it with type number. In javascript it means it can be any valid number. To resolve this we can use a literal type.
```ts
let quantity: number;
```
Instead of annotating it with number we can use literal i.e exact, specific value
```ts
let quantity: 20 = 40;
```
If we change the value then there will be an error.
Now since we have 2 values it can be then we can use union to set it to the two values.
```ts
let quantity: 20 | 40 = 40;
```
 or 
```ts
let quantity: 20 | 40 = 20;
```
are both valid
To make this code better, we can declare a new type using aliase call Quantity
```ts
type Quantity = 20 | 40;
```
This `20 | 40` is what is call a `literal type`. Literals dont have to be numbers, it can be a string or any other type. We can have
```ts
type Metric = 'cm' | 'inch';
```
### NULLABLE TYPES AND THE UNKNOWN TYPE
This is all about working with null values. By default, Typescript is very strict about using undefined and null values because they are mostly the common source of bugs in our application.
Take a look at this
```ts
function greet(name: string) {
    console.log(name.toUpperCase());
}

greet(null);
```
The above is a valid js code but it will make our code crash since we can't call the used method on a null type. This is why null and undefine values are common source of code problems. This is why Typescript compiler by default stops us from using null and undefined values.
The null parameter where we called the greet function above will show an error `(Argument of type 'null' is not assignable to parameter of type 'string')`.
This is surely from `"strictNullChecks"` in our type checking section in our `tsconfig.json` file. It is enabled by default because strict is set to true. We can override it by uncommenting it and setting it to false. Now the error is gone. Though we shouldn't set this to false so let's undo the changes. What we can do is to use a condition checking in the code in combination with a union.
```ts
function greet(name: string | null | undefined) {
    if (name) {
        console.log(name.toUpperCase());
    } else {
        console.log('Hola')
    }
}

greet(null);
```
Using the codition above to check and union to specify the values we can both used the parameter value and null or undefined.

### OPTIONAL CHAINING
When working with nullable objects we have to do null checks.

```ts
type Customer = {
    birthday: Date
};
function getCustomer(id: number): Customer | null {
    return id === 0 ? null { birthday: new Date() }
}
let customer = getCustomer(0);
console.log(customer.birthday);
```

In the above we have a compilation error because customer might possibly be null.

One way to solve this is we check if customer is not null then we execute.

```ts
let customer = getCustomer(0);
if (customer !== null) {
    console.log(customer.birthday);
}
```

We can take this code to another level by assuming that the function might return an `undefined` and then using union to add that to our types.

```ts
type Customer = {
    birthday: Date
};
function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() }
}
let customer = getCustomer(0);
if (customer !== null && customer !== undefined) {
    console.log(customer.birthday);
}
```

In a simpler way we can rewrite the last part in ts using what we call `Optional property access operator`. We do this by adding a `?` and a `.` to the variable that might be null. i.e  

```ts
console.log(customer?.birthday);
```

The `?.` is what is reffered to as the `optional property access operator`. So that piece of code only get executed only when we have a customer that is not `null` or `undefined`. When we compile our code, 
```ts
let customer = getCustomer(0);
// Optional property access operator
console.log(customer?.birthday);
```
We can take this to the next level by making the birthday property optional

```ts
type Customer = {
    birthday?: Date
};
```

Let say we want the full year by uisng the `getFullYear` method on our object. This will result into a compilation error because the method cannot be used on type `undefined`. We can solve this by using the optional property access operator

```ts
console.log(customer?.birthday?.getFullYear());
```
The piece of code only get executed when we have a customer that has birthday.

We also have `Optional element access operator`. This is useful when dealing with arrays.
Say we have an array of customer and we want to print the first element. Though we can use conditional

```ts
if (customers !== null && customers !== undefined) {
    customers[0]
}
```
But we can simply use the Optional element access operator. Before accessing the element we use `?.`

`customer?.[0]`

We also have the `optional call operator`

```ts
let log: any = null;
log('a');
```

This program will crash because log as type `null`. We can resolve this by using the optional call operator

```ts
let log: any = null;
log?.('a');
```
This piece of code will get executed only if `log` is an actual function.

## Conclusion
Great job you made it. There are extremely ,many more things to learn about Ts but your first task is to start by applying all we have considered in this article. Pick any of your project involving Javascript, either frontend or backend or fullstack and implement types with it. Try and implement all we have discussed in this article. Also check out for any differences you can pick all along. Finally, esnure you read more or use other materials or courses to learn more. See you in the next article and keep winning.
