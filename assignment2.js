
//write a function which take one parameter(kilometer) and convert it as a miter
function kilometerToMeter(km){
    if(km <= 0){
        return "please input valid/positive value"
    }
    return km * 1000;
}

console.log(kilometerToMeter(1));

//write function which take three parameter watch = 50,phone=100
//laptop = 500, sum all 
function budgetCalculator(watch,phone,laptop){

    const watchPrice = watch * 50;
    const phonePrice = phone * 100;
    const laptopPrice = laptop * 500;
    if(watchPrice == 0 && phonePrice == 0 && laptopPrice == 0){
        return 'you didn\'t add one of them product'
    }
    const total = watchPrice + phonePrice + laptopPrice
    return total;
}

console.log(budgetCalculator(0,1,2));

//write a function name hotelCost and take parameter how much day stay in this hotel
// if stay 10 days the hostel bill is 100tk, if stay greater than 10 days the hostel bill 80 taka

function hotelCost(days){
   if(days == 0){
       return 'you didn\'t stay in hotel'
   }
    else if(days <= 10){
    const tenDaysBill = days * 100
        return tenDaysBill
    }else if(days > 10 && days <= 20){
        const anotherDay = days - 10;  
    
        return (anotherDay * 80) + (10 * 100)
    }
    const first = days - 10
    const second = days - 20
    return (10 * 80) + (second * 50) + (10*100)

}
console.log(hotelCost(30));


//create a function name mega friend wich take parameter as an array name of my friends
//find the biggest name of my friend from freind list

function megaFriend(friends){
    if(friends.length == 0){
        return 'you don\'t have any friend! so sad'
    }
    let bigName = friends[0]
    for(let i=0; i<friends.length; i++){
       if( friends[i].length > bigName.length){
           bigName = friends[i]
       }
    }
    return bigName
}

 console.log( megaFriend(['ab','abc','abcd']))