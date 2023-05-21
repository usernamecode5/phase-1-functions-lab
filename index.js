// Code your solution in this file!

const distanceFromHqInBlocks = (location) => {
    const headquarters = 42;
    const total = location > headquarters ? location - headquarters : headquarters - location
    return total
}

const distanceFromHqInFeet = (location) => {
    return distanceFromHqInBlocks(location) * 264
    
}

const distanceTravelledInFeet = (start, destination) => {
    return start < destination ? (destination - start) * 264 : (start - destination) * 264
}

const calculatesFarePrice = (start, destination) => {
    const distance = distanceTravelledInFeet(start, destination)
    if( distance < 400){
        return 0
    } else if (distance > 400 && distance < 2000){
        return (distance - 400) * .02
    } else if (distance > 2000 && distance < 2500){
        return 25
    } else {
        return 'cannot travel that far'
    }
} 
