// Budget Controller
var budgetController = (function() {
    // some code
})();


// UI Controller
var UIController = (function() {
    // some code later
})();


// Global App controller
var controller = (function(budgetCtrl, UICtrl) {
    var ctrlAddItem = function() {

        // 1. get field inp. data
        // 2. add item to the budget controller
        // 3. add item to user interface
        // 4. calculate budget
        // 5. display the budget on the UI
    }
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });
})(budgetController, UIController);