// Code your solution in this file!
let hq=42
function distanceFromHqInBlocks(street){
    if (street > hq){
    return street-hq
    } else {
        return hq-street
    }
}

function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(startStreet, endStreet){
    if (startStreet < endStreet){
        let blocks=endStreet-startStreet
        return blocks*264
    } else {
        let blocks= startStreet - endStreet
        return blocks*264
    }
}

function calculatesFarePrice(startStreet, endStreet){
    let distance = distanceTravelledInFeet(startStreet, endStreet)-400
    console.log(distance)
    if(distance < 0){
        return 0
    } else if ((distance > 0)&&(distance < 1600)){
        return distance*.02
    } else if (distance > 2100){
        return "cannot travel that far"
    } else {
        return 25
    }
}