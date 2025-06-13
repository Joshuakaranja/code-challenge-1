function calculateChaiIngredients() {
  let input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
  let numberOfCups = parseInt(input);

  if (isNaN(numberOfCups) || numberOfCups <= 0) {
    console.log("Please enter a valid number.");
    return;
  }

  let water = 200 * numberOfCups;
  let milk = 50 * numberOfCups;
  let teaLeaves = numberOfCups;
  let sugar = 2 * numberOfCups;

  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${water} ml`);
  console.log(`Milk: ${milk} ml`);
  console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
  console.log(`Sugar (Sukari): ${sugar} teaspoons`);
  console.log(`\nEnjoy your Chai Bora!`);
}

calculateChaiIngredients();
