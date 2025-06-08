function calculateChaiIngredients(numberOfCups){
    const waterPerCup = 200 ; //ml
    const milk = 50 ; //ml
    const teaLeavesPerCup = 1; //tableSpoons;
    const sugar = 2; // teaSpoons;

    console.log(`To make ${numberOfCups} cups of kenyan chai, you will need:
        water: ${water}ml
        milk: ${milk}ml
        Tea leaves (majani): ${teaLeaves} tablespoons
        sugar(sukari):${sugar} teaspoons
    
    
    enjoy your chai bora!`);
}
const input = prompt("karibu! How many cups of chai bora would you like to make?");
const cups = Number(input);
calculateChaiIngredients(cups);
