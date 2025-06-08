function esimateTransactionFee(amountToSend){
    let fee = amountToSend * 0.015;

    if(fee< 10){
        fee = 10;
    } else if (fee > 70) {
        fee = 70;
    }
    const totalDebited = amountToSend + fee;

    console.log(`sending KES ${amountToSend}:
        calculated transaction fee : KES ${fee}
        tota amount bto be debited : KES ${totalDebited}
        
        send money securely!`);
}

const input = prompt("unatuma ngapi? (KES):");
const amount = Number(input);
esimateTransactionFee(amount);