// Code your solution in this file!
function distanceFromHqInBlocks (someValue){
    if (someValue > 42){    // 50 - 42
    return (someValue - 42);
    } else{
        return (42 - someValue);
    }
}
distanceFromHqInBlocks(50);


function distanceFromHqInFeet (theStreet){
    return distanceFromHqInBlocks(theStreet) * 264; // Each block in ManHattan is 264 feet long

}
distanceFromHqInFeet(8); // 2112

function distanceTravelledInFeet(starting, ending){
    return Math.abs(ending - starting) * 264;
}
console.log(distanceTravelledInFeet(34, 38)); //1056 comes from (38-34) * 266 feet



//Fare Calculation

//     const distance = distanceTravelledInFeet(destination - start);
//     if (distance < 400){
//         return "Free";
//     }else if (distance > 2500){
//         return "Cannot travel that far";
//     }else{
//         return 2 * distance 

//     } 
// }

function calculatesFarePrice (destination, start){
    let distance = distanceTravelledInFeet(destination, start);
    if(distance < 400)  
    return 0;            //zero as a value not as a string
    if(distance > 2500)     //Cannot travel beyond 2500 Feet
    return "cannot travel that far";
  
    if(distance > 400 && distance <= 2000){ // Trips charged are between 400 and 2000 Feet
      return ((distance - 400) * 2)/100; // 2 cents per foot is charged 
    } else {
      return 25;
    }
}