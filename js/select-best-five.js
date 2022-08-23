
document.getElementById('btn-field').addEventListener('click', function () {

    const amountField = document.getElementById('amount-field');
    const newPlayerExpenseString = amountField.value;
    const newPlayerExpense = parseInt(newPlayerExpenseString);
    /*  console.log(typeof newPlayerExpense) */

    const playerAmoutTotalElement = document.getElementById('player-amount');
    /* const previousPlayerAmountTotalString = playerAmoutTotalElement.innerText;
    const previousPlayerAmountTotal = parseInt(previousPlayerAmountTotalString);
    console.log(typeof previousPlayerAmountTotal) */

    const currentAmount = 5 * newPlayerExpense;
    playerAmoutTotalElement.innerText = currentAmount;
    /* amountField.value = ''; */
    function total(playerTotal) {
        totalexpense = currentAmount;
        return;
    }



})
document.getElementById('manager-btn-field').addEventListener('click', function () {
    const ManagerAmountField = document.getElementById('manager-amount-field');
    const newManagerAmountString = ManagerAmountField.value;
    const newManagerAmount = parseInt(newManagerAmountString);


    const CoachAmountField = document.getElementById('coach-amount-field');
    const newCoachAmountString = CoachAmountField.value;
    const newCoachAmount = parseInt(newCoachAmountString);

    const FinalAmoutTotalElement = document.getElementById('manager-coach-amount');
    const currentAmountTotal = newManagerAmount + newCoachAmount + playerTotal;
    FinalAmoutTotalElement.innerText = currentAmountTotal;
    /* managerAmountField.value = ''; */
})


const playerList = [];
function display(playerSlist) {
    console.log(playerSlist);
    const tableBody = document.getElementById('cart-player');

    tableBody.innerHTML = "";

    for (let i = 0; i < playerSlist.length; i++) {
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




