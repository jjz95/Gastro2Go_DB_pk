import { json } from "express/lib/express"
//\d+$
function deleteSelectedProducts() {
    var result = confirm("Want to delete?");
    if (result) {
        //Logic to delete the item

        try {
            let productsToDelete = []
            var trs = document.querySelectorAll('#tbody-interests tr');
            console.log('trs', trs)
            for (let i = 0; i < trs.length; ++i) {
                let currRow = <HTMLTableRowElement>trs[i]
                let currCheckboxCell = currRow.cells[0]

                let currIdCell = currRow.cells[1]
                let currCheckBox = <HTMLInputElement>currCheckboxCell.firstElementChild
                console.log('currRow', currRow)
                console.log('currCheckboxCell', currCheckboxCell)
                console.log('currIdCell', currIdCell)
                console.log('currCheckBox', currCheckBox)
                productsToDelete.push({
                    id: currIdCell.innerHTML,
                    toDelete: currCheckBox.checked
                })

            }
            console.log('ooooooooooooooooooooooooooooo', productsToDelete)
            console.log('llllllllllllllllllllllllllll', `${window.location.href.replace(/\/\d+(\?)?$/, '')}/deleteproducts`)

            fetch(`${window.location.href.replace(/\/\d+(\?)?$/, '')}/deleteproducts`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                body: JSON.stringify({
                    productsToDelete: productsToDelete
                })
            }).then(response => {
                window.location.reload()
                console.log(response)
            }).catch(e =>
                console.log(e)
            )
        } catch (error) {
            console.log(error)
        }
    }
}

let dontForget = document.getElementById('dontForget')
dontForget.style.color = 'grey'
setInterval(function () {
    if (dontForget.style.color == 'grey')
        dontForget.style.color = 'blue'
    else {
        dontForget.style.color = 'grey'
    }
}, 350);

// function test() {
// alert("1");
// console.log('1')
// }
// window.onload = test;