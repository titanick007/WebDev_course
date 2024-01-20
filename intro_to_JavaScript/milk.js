function getMilk(money){
    var numbottles =Math.floor(money/1.5);

    console.log("take left");
    console.log("take right");
    console.log("buy "+numbottles+" bottles of milk");
    console.log("leave shop");
    console.log("take left");
    console.log("take right");
    console.log("reach home");

    return money-(numbottles*1.5);
}

var change=getMilk(prompt());
console.log("remaining money "+change);