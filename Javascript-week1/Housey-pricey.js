/*
const peterHouse = {
    width : 8,
    height:10,
    depth:10,
    garden:100,
    price:2500000
}
const pHousePrice = peterHouse.width * peterHouse.height*peterHouse.depth * 2.5 * 1000 + peterHouse.garden * 300;
const juliaHouse = {
    width : 5,
    height:8,
    depth:11,
    garden:70,
    price:1000000
}
const jHousePrice = juliaHouse.width * juliaHouse.height*juliaHouse.depth * 2.5 * 1000 + juliaHouse.garden * 300;
if(peterHouse.price <= pHousePrice )
    console.log("Peter is paying too little!")
else{
    console.log("Peter is paying too much!")
}
if(juliaHouse.price <= jHousePrice )
    console.log("Julia is paying too little!")
else{
    console.log("Julia is paying too much!")
}
*/
//using function for excercise:)
function housePrice(volumeInMeters, gardenSizeInM2){
    return volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300; 
}
const peterHouse = {
    width : 8,
    height:10,
    depth:10,
    garden:100,
    price:2500000
}
const volumeInMetersP = peterHouse.width*peterHouse.height*peterHouse.depth;
if(housePrice(volumeInMetersP , peterHouse.garden) > peterHouse.price)
    console.log("Peter is paying too little!");
else
    console.log("Peter is paying too much!")

const juliaHouse = {
    width : 5,
    height:8,
    depth:11,
    garden:70,
    price:1000000
}
const volumeInMetersJ = juliaHouse.width*juliaHouse.height*juliaHouse.depth;
if(housePrice(volumeInMetersJ , juliaHouse.garden) > juliaHouse.price)
    console.log("Julia is paying too little!");
else
    console.log("Julia is paying too much!")
