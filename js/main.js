const shoppingList = [
    "pane",
    "latte",
    "mele",
    "lattuga",
    "pollo",
    "uova",
    "salmone"
];

const shoppingListDom = document.getElementById("shoppingList");

let i = 0;

while (i < shoppingList.length) {
    
    let list = `<li>${shoppingList[i]}</li>` ;

    i++

    shoppingListDom.innerHTML += list;
}