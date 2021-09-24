window.onload = function () {
    initShoppingList ();
};

function initShoppingList () {
    let form = documents.getElementById("item-form");
    form.addEventListener("submit", (event) => {
        handleItemForm(event, form);
    });
}
function handleItemForm(event, formRef) {
    if (event. preventDefault()) {
        event. preventdefault();
    }
    console.log("Event: ", event);
    return false;

}