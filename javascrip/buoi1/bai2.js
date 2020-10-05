function myFun() {
    var text;
    var favDrink = prompt("what's your favorite coctaik drink", "Daiquiri");
    switch (favDrink) {
        case "Martini":
        text = "Exelent choice. Martini is good for your soul";
        break;
        case "Daquari":
        text = "Daquari is may favorite too";
        break;
        case "Cosmopolitan":
        text = "Really? Are you sure the Cosmopolitan is you favorite ";
        break;
        default:
            text="i have nerve heard of that one..";
            
    }
    document.getElementById('demo').innerHTML=text;
}