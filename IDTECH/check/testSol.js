async function distributePoints() {
    const maxDistributed = 300;
    const numOfUsers = 150;
    const minPointsPerUser = 0.1;
    const maxPointsPerUser = 10;
    const errorMargin = 2;

    let totalDistributed = 0;
    const distributedList = [];

    for (let i = 0; i < numOfUsers; i++) {
        // Ensure that at least 0.1 points are distributed to each user
        const minPoints = Math.min(minPointsPerUser, (maxDistributed - totalDistributed) / (numOfUsers - i));
        // Ensure that no user gets more than 10 points
        const maxPoints = Math.min(maxPointsPerUser, maxDistributed - totalDistributed - (numOfUsers - i - 1) * minPoints);

        // Generate a random number between minPoints and maxPoints
        const points = Math.random() * (maxPoints - minPoints) + minPoints;
        // Round to two decimal places
        const roundedPoints = Math.round(points * 100) / 100;

        // Update totalDistributed
        totalDistributed += roundedPoints;

        // Push userIndex and distributed points to the list
        distributedList.push({ userIndex: i + 1, points: roundedPoints });
    }

    // Check if the total distributed points are within the allowed error margin
    if (totalDistributed < maxDistributed - errorMargin || totalDistributed > maxDistributed + errorMargin) {
        throw new Error("Invalid distribution. Total points outside the allowed error margin.");
    }

    return { totalDistributed, distributedList };
}

distributePoints()
    .then(res => {
        console.log(`Total Distributed: ${res.totalDistributed}`);
        res.distributedList.forEach((item) => {
            console.log(`User ${item.userIndex} received => ${item.points} points`);
        });
    })
    .catch(error => console.error(`Error occurred:`, error.message));



// async function distributePoints() {
//     const maxDistributed = 300;
//     const numOfUsers = 150;
//     const minPointsPerUser = 0.1;
//     const maxPointsPerUser = 10;
//     const errorMargin = 2;

//     let totalDistributed = 0;
//     const distributedList = [];

//     for (let i = 0; i < numOfUsers; i++) {
//         // Ensure that at least 0.1 points are distributed to each user
//         const minPoints = Math.min(minPointsPerUser, maxDistributed - totalDistributed - (numOfUsers - i - 1) * maxPointsPerUser);
//         // Ensure that no user gets more than 10 points
//         const maxPoints = Math.min(maxPointsPerUser, maxDistributed - totalDistributed - (numOfUsers - i - 1) * minPointsPerUser);

//         // Generate a random number between minPoints and maxPoints
//         const points = Math.random() * (maxPoints - minPoints) + minPoints;
//         // Round to two decimal places
//         const roundedPoints = Math.round(points * 100) / 100;

//         // Update totalDistributed
//         totalDistributed += roundedPoints;

//         // Push userIndex and distributed points to the list
//         distributedList.push({ userIndex: i + 1, points: roundedPoints });
//     }

//     // Check if the total distributed points are within the allowed error margin
//     if (totalDistributed < maxDistributed - errorMargin || totalDistributed > maxDistributed + errorMargin) {
//         throw new Error("Invalid distribution. Total points outside the allowed error margin.");
//     }

//     return { totalDistributed, distributedList };
// }

// distributePoints()
//     .then(res => {
//         console.log(`Total Distributed: ${res.totalDistributed}`);
//         res.distributedList.forEach((item) => {
//             console.log(`User ${item.userIndex} received => ${item.points} points`);
//         });
//     })
//     .catch(error => console.error(`Error occurred:`, error.message));


// async function distributePoints() {
//     const maxDistributed = 300
//     const numOfUsers = 150

//     let totalDistributed = 0
//     const distributedList: {
//         userIndex: number, points: number 
//     }

//     return { totalDistributed, distributedList }

//     distributePoints().then(res => {
//         console.log(`Total Distributed: ${ res.totalDistributed }`);
//         res.distributedList.forEach((item) => {
//             console.log(`User ${item.userIndex} received => ${item.points} points`);
//         })
//     }).catch(error => console.error(`Error occured:`, error.message));
// }