/**
 * Leap year challenge
 * Write a program that works out whether if a given year is a leap year. A normal year has 365 days, leap years have 366, with tan extra day in February. The reason why we have leap year is really fascinating. You can check youtube or online to learn more.
 * 
 * This is how to work out whether if a particular year is a leap year:
 * 
 * on every year that is evenly divisible by 4
 * except every year that is evenly divisible by 100
 * unless the year is also evely divisible by 400
 * 
 * e.g is the year 2000 a leap year?;
 * 
 * 2000/4 = 500 (leap)
 * 2000/100 = 20 (Not leap)
 * 2000/400 = 5 (leap)
 * 
 * So the year 2000 is a leap year
 * But the year 2100 is not a leap year because:
 * 
 * 2100/4 = 525 (leap)
 * 2100/100 = 21 (Not leap)
 * 2100/400 = 5.25 (Not leap)
 * 
 * In summary a leap year should be evenly divisible 4 but not with 100 and if it is evenly divisible by 100 it must also be evenly divisible by 400.
 * 
 * You can check the website known leap years.
 */

function isLeap(year) {
  if ((year % 4 == 0) && (year % 100 != 0)) {
    console.log("Leap year.");
  } else if ((year % 100 !== 0) && (year % 400 === 0)) {
    console.log("Leap year.");
  } else {
    console.log("Not leap year.");
  }
}

isLeap(2000);