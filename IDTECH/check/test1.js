/*
console.log(720000000000000000 + 80) // 720000000000000100

The number 720000000000000000 is beyond the precision that Js standard 64-bit floating-point format can handle. This already gives place to precision limitation on operations involving the value. Adding a small number like 80 to this large value makes the precision loss noticeable because an appreoximated sum value was used leading to the deviation from the real value. This error can be minimized by using some library like the BigInt during this operation.  

How does nodejs handle asynchronous operations and can you explain the event loop in the context of nodejs?
In summary, Nodejs is an asynchronous event-driven Javascript runtime environment. Though by default javascript is synchronous just like other programing languages. Considering that Js is single threaded unlike some other programming languages ans since many purpose of Javascript is asynchronous in nature there must be a way to hand it.
Before ES6 event listener/handler callbacks are used with setTimeOut and setInterval. with ES6 Promises (ES6) and async/Await (ES2017). Apart from this Nodejs used a non-blocking I/O environment to extend the concept of asynchronous operations.

The event loop is a semi-infinite i.e it runs infinitely as long as a Node application runs. It is what allows Nodejs to perform non-blocking I/O operations - despite the fact that Javascript is single-threaded - by offloading operations to the system kernel whenever possible. Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background. This operation runs around six (6) different process making Nodejs asynchronicity a possibility. 

What is the best way to import selected function from a module

Let's build a simple points distribution program. 
We have 300 points to distribute randomly among 150 users.
Complete the function to distribute the points with the following constraints:
i. All 150 users must have at least 0.1 points
ii. No user should have more than 10 points
iii. The entire 300 points must be shared at the end of the distribution 
iv. You are allowed an error margin of only +-2 on the total distributed points. 
That means at the end of the distribution, the total distributed points can be >=298 or <=302

async function distributePoints() {
    const maxDistributed = 300
    const numOfUsers = 150

    let totalDistributed = 0
    const distributedList: {
        userIndex: number, points: number 
    }

    return { totalDistributed, distributedList }

    distributePoints().then(res => {
        console.log(`Total Distributed: ${ res.totalDistributed }`);
        res.distributedList.forEach((item) => {
            console.log(`User ${item.userIndex} received => ${item.points} points`);
        })
    }).catch(error => console.error(`Error occured:`, error.message));
}

*/