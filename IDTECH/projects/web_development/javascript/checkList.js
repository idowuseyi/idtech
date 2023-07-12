/**
 * This program check if a name is on attendee list or not.
 */

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
//alert(guestList.toLowerCase());

function checkList(guestName) {
    var guestName = prompt("Enter your name");
    guestName = ((guestName.slice(0, 1).toUpperCase() + guestName.slice(1, guestName.length).toLowerCase()));
    if (guestList.includes(guestName)) {
        alert("Hi " + guestName + ", You are welcome to the party.");
        return "True";
    } else {
        alert("Hi " + guestName + ", Seems you are not invited!")
        return "False";
    }
}

checkList();