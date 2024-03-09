exports.getDate = function() {

    const today = new Date();
    // var currentDay = today.getDay();
    // const weekday = ['Sunday', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday'];
    // var currentDayName = weekday[currentDay];
    // var day = "";
    //console.log(currentDayName);
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    // if (currentDay === 6 || currentDay === 0) {
    //     day = currentDayName;
    //     //res.write("<h1>Yea it's the weekend</h1>");
    // } else {
    //     // res.write("<p>It is not the weekend.</p>");
    //     // res.write("<h1>Boo! I have to work!</h1>");
    //     // res.send();
    //     day = currentDayName;
    //     //res.sendFile(__dirname + "/index.html");
    // }
    return today.toLocaleDateString("en-US", options);
}


exports.getDay = function(){

    const today = new Date();
    
    const options = {weekday: 'long'};

    return today.toLocaleDateString("en-US", options);
}
