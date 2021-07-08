
// Given n names and phone numbers, assemble a phone book that maps friends’ names 
// to their respective phone numbers. 
// You will then be given an unknown number of names to query your phone book for. 
// For each name queried, print the associated entry from your phone book on a new line 
// in the form name=phoneNumber; 
// If an entry for name is not found, print Not found instead.

// Note: Your phone book should be a Dictionary/Map/HashMap data structure.

function processData(input) {
    //Enter your code here
    let phoneDirectory={},i=0;
    let test=input.replace(/\n/g," ").split(" ");
    for(i=0;i<test[0];i++){
        phoneDirectory[test[2*i+1]]=test[2*i+2];
    }
    for(let j=2*i+1;j<test.length;j++)
    {
        if(phoneDirectory[test[j]]!== undefined)
         console.log(test[j]+'='+phoneDirectory[test[j]]);
         else
         console.log("Not found");
    }
}

console.log(processData(("sam",99912222),("tom",11122222),("harry",12299933)));