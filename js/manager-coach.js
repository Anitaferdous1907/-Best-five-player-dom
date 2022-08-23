

document.getElementById('manager-btn-field').addEventListener('click', function () {
    const ManagerAmountField = document.getElementById('manager-amount-field');
    const newManagerAmountString = ManagerAmountField.value;
    const newManagerAmount = parseInt(newManagerAmountString);


    const CoachAmountField = document.getElementById('coach-amount-field');
    const newCoachAmountString = CoachAmountField.value;
    const newCoachAmount = parseInt(newCoachAmountString);

    /* const FinalAmoutTotalElement = document.getElementById('manager-coach-amount');
    const currentAmountTotal = newManagerAmount + newCoachAmount;
    FinalAmoutTotalElement.innerText = currentAmountTotal;
    /* managerAmountField.value = ''; */

    const balanceTotalElement = document.getElementById('player-amount');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseInt(previousBalanceTotalString);

    const FinalAmoutTotalElement = document.getElementById('manager-coach-amount');
    const currentAmountTotal = newManagerAmount + newCoachAmount + previousBalanceTotal;
    FinalAmoutTotalElement.innerText = currentAmountTotal;
    /* managerAmountField.value = ''; */
})