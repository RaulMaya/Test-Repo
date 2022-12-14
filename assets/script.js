const topics = "HTML, CSS, Git, JavaScript";
console.log(topics);

console.log(topics.split(", "));

// Normal For Loop
for (const topic in topics.split(", ")) {
  console.log(topics.split(", ")[topic]);
}

// For Each
const topicArr = topics.split(", ");
topicArr.forEach((topic, index, topicArr) => {
  console.log(`With forEach: ${topic}`);
});

// Control Flow

let hasFuel = false;

while (true) {
  if (hasFuel === false) {
    hasFuel = true;
    console.log("Charging Fuel in Gas Station...");
    console.log("Charging Fuel...");
    console.log("#####################");
    console.log("Fully Charged");
  } else if (hasFuel === true) {
    console.log("The truck has enough gas.");
    break;
  }
}

if (0) {
  console.log("I'm 0!");
} else if (null) {
  console.log("I'm null!");
} else if (true) {
  console.log("I'm true!");
}

const topicos = ['HTML', 'CSS', 'Git', 'JavaScript'];
for (let i = 0; i < topicos.length; i++) {
    console.log(topicos[i]);
   }
   

const myFunction = (number) => {
    const identifier = topicos[number];
    console.log(`Lets learn: ${identifier}`)
}


num = Math.floor(Math.random() * topicos.length)
console.log(num)
myFunction(num)