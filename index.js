// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; 
    const distance = Math.abs(pickupLocation - hqLocation); 
    return distance;
  }
  
  
  console.log(distanceFromHqInBlocks(50)); // Output: 8
  

  function distanceFromHqInFeet(pickupLocation) {
    const blockLength = 264; 
    const blocks = distanceFromHqInBlocks(pickupLocation); 
    const distanceInFeet = blocks * blockLength; 
    return distanceInFeet;
  }
  

  function distanceTravelledInFeet(startBlock, destinationBlock) {
    const blockLengthInFeet = 264;
    const distanceInBlocks = Math.abs(destinationBlock - startBlock);
    const distanceInFeet = distanceInBlocks * blockLengthInFeet;
    return distanceInFeet;
  }


  function calculatesFarePrice(startingBlock, endingBlock) {
    const distanceInFeet = Math.abs(startingBlock - endingBlock) * 264; 
  
    if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }