function sadaiPrice(dal, chal, tomato, kodu, carrot){

    const dalPerKg = 70;
    const chalPerKg = 30;
    const tomatoPerKg = 30;
    const koduPerPich = 20;
    const carrotPerKg = 25;

    const totaldal =  dal * dalPerKg ;
    const totalchal = chalPerKg * chal;
    const totalTomato = tomatoPerKg * tomato;
    const totalKodu = koduPerPich * kodu;
    const totalCarrot = carrot * carrotPerKg;

    const totalSadai =  totalCarrot + totalKodu + totalTomato + totalchal + totaldal;

    return totalSadai;
    

}

const bazar = sadaiPrice( 1, 2, 1,1,2);
console.log(bazar)