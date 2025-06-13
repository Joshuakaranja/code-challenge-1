function calculateBodaFare() {
  let input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
  let distanceInKm = parseFloat(input);

  if (isNaN(distanceInKm) || distanceInKm <= 0) {
    console.log("Please enter a valid number of kilometers.");
    return;
  }

  const baseFare = 50;
  const perKmCharge = 15;
  const distanceFare = distanceInKm * perKmCharge;
  const totalFare = baseFare + distanceFare;

  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${distanceFare}`);
  console.log(`Total: KES ${totalFare}`);
  console.log(`\nPanda Pikipiki!`);
}

calculateBodaFare();
