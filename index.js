// Code your solution in this file!
const headQuarters = 42;

function distanceFromHqInBlocks(someValue){
    if (someValue > headQuarters){
        let blocks = someValue - headQuarters;
        return blocks;
    } else if (someValue < headQuarters){
        let blocks = headQuarters - someValue;
        return blocks;
    } else if (someValue = headQuarters){
        let blocks = 0;
        return blocks;
    }
}

function distanceFromHqInFeet(someValue){
    distanceFromHqInBlocks(someValue);
    let valueFromFirst = distanceFromHqInBlocks(someValue) * 264;
    return valueFromFirst;
}



function distanceTravelledInFeet(start, destination){
    if (start > destination) {
        let feet = (start - destination) * 264;
        return feet;
    } else if (start < destination){
        let feet = (destination - start) * 264;
        return feet;
    } else if (start = destination){
        return 0;
    }
}

function calculatesFarePrice(start, destination){
    distanceTravelledInFeet(start, destination);
    let feet = distanceTravelledInFeet(start, destination);
    if (feet <= 400){
        return 0;
    } else if (feet > 400 & feet <= 2000){
        let price = (feet - 400) * .02;
        return price;
    } else if (feet > 2000 & feet <=2500){
        let price = 25;
        return price;
    } else if (feet > 2500){
        return "cannot travel that far";
    }
}