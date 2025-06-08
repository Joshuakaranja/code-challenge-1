function calculateBodaFare(distanceInKm){
    const baseFare = 50;
    const chargePerKm = 15;
    const variableFare = distanceInKm * chargePerKm;
    const totalFare = baseFare + variableFare;

    console.log(`uko kwote? io ni ${distanceInKm}km:
        ukikalia pikipiki: KES ${baseFare}
        mpaka uko : KES${totalFare}
        
        panda pikipiki!`);
}

const input = prompt("unafika wapi mkubwa? kilometer ngapi?");
const distace = Number(input)
calculateBodaFare(distance);
