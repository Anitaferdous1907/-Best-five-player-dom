
document.getElementById('btn-field').addEventListener('click', function () {

    const amountField = document.getElementById('amount-field');
    const newPlayerExpenseString = amountField.value;
    const newPlayerExpense = parseInt(newPlayerExpenseString);
    console.log(typeof newPlayerExpense)

    const playerAmoutTotalElement = document.getElementById('player-amount');
    /* const previousPlayerAmountTotalString = playerAmoutTotalElement.innerText;
    const previousPlayerAmountTotal = parseInt(previousPlayerAmountTotalString);
    console.log(typeof previousPlayerAmountTotal) */

    const currentAmount = 5 * newPlayerExpense;
    playerAmoutTotalElement.innerText = currentAmount;
    amountField.value = '';


})
const playerList = [];
function display(playerSlist) {
    console.log(playerSlist);
    const tableBody = document.getElementById('cart-player');

    tableBody.innerHTML = "";

    for (let i = 1; i < playerSlist.length; i++) {
        if (playerSlist.length <= 5) {
            console.log(playerList[i].playerName);
            const name = playerList[i].playerName;
            const tr = document.createElement("tr");
            tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>`;
            tableBody.appendChild(tr);


        }
        else {
            alert('Please try again');
            return;



        }
    }
}
function addToSelectedFive(element) {
    /*  console.log(element.parentNode.parentNode.children) */
    /* console.log(element.parentNode.parentNode.children[1].innerText) */
    const playerName = element.parentNode.parentNode.children[1].innerText;
    console.log(playerName)
    const playerobj = {
        playerName: playerName

    }
    playerList.push(playerobj);
    /*  console.log(playerList)
     console.log(playerList.length) */
    document.getElementById('selected-player').innerText = playerList.length;
    display(playerList);
    disablE();




}
/* function disablE() {
    document.getElementById('btn-disable').disabled = true;

} */




