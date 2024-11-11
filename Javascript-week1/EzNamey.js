const firstWords = [
    "Smart",
    "Bright",
    "Swift",
    "Next",
    "True",
    "Green",
    "Urban",
    "Pure",
    "Cloud",
    "Open"
];
const secondWords = [
    "Solutions",
    "Innovations",
    "Tech",
    "Wave",
    "Hub",
    "Lab",
    "Nest",
    "Sphere",
    "Engine",
    "Nest"
];
let startupName = firstWords[Math.floor(Math.random() * 10)] +" "+secondWords[Math.floor(Math.random() * 10)];
console.log(startupName);