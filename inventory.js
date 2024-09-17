function add_inventory_item(item) {
    sessionStorage.setItem(item, 1)
}

function clear_inventory() {
    sessionStorage.clear();
}

var hidden_items = document.getElementsByClassName("inventory");
for (var i = 0; i < hidden_items.length; i++) {
    var item_classes = hidden_items[i].classList;
    for (var j = 0; j < item_classes.length; j++) {
        if (item_classes[j].startsWith("with_")) {
            if (!sessionStorage.getItem(item_classes[j].substr(5))) {
                hidden_items[i].style.display = "none";
            }
        } else if (item_classes[j].startsWith("without_")) {
            if (sessionStorage.getItem(item_classes[j].substr(8))) {
                hidden_items[i].style.display = "none";
            }
        }
    }
}
