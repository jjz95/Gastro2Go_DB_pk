"use strict";
exports.__esModule = true;
//\d+$
function deleteSelectedProducts() {
    var result = confirm("Czy na pewno chcesz usunąć?!");
    if (result) {
        //Logic to delete the item
        try {
            var productsToDelete = [];
            var trs = document.querySelectorAll('#tbody-interests tr');
            console.log('trs', trs);
            for (var i = 0; i < trs.length; ++i) {
                var currRow = trs[i];
                var currCheckboxCell = currRow.cells[0];
                var currIdCell = currRow.cells[1];
                var currCheckBox = currCheckboxCell.firstElementChild;
                console.log('currRow', currRow);
                console.log('currCheckboxCell', currCheckboxCell);
                console.log('currIdCell', currIdCell);
                console.log('currCheckBox', currCheckBox);
                productsToDelete.push({
                    id: currIdCell.innerHTML,
                    toDelete: currCheckBox.checked
                });
            }
            console.log('ooooooooooooooooooooooooooooo', productsToDelete);
            console.log('llllllllllllllllllllllllllll', window.location.href.replace(/\/\d+(\?)?$/, '') + "/deleteproducts");
            fetch(window.location.href.replace(/\/\d+(\?)?$/, '') + "/deleteproducts", {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                body: JSON.stringify({
                    productsToDelete: productsToDelete
                })
            }).then(function (response) {
                window.location.reload();
                console.log(response);
            })["catch"](function (e) {
                return console.log(e);
            });
        }
        catch (error) {
            console.log(error);
        }
    }
}
var dontForget = document.getElementById('dontForget');
dontForget.style.color = 'grey';
setInterval(function () {
    if (dontForget.style.color == 'grey')
        dontForget.style.color = 'blue';
    else {
        dontForget.style.color = 'grey';
    }
}, 350);
// function test() {
// alert("1");
// console.log('1')
// }
// window.onload = test;
