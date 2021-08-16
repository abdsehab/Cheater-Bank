function Calculate(InputValue, TotalValue, isADD) {
    
    const Amount = document.getElementById(InputValue);
    const AmountText = Amount.value;
    const AmountNum = parseFloat(AmountText);

    const CurentAmount= document.getElementById(TotalValue);
    const previousAmount = CurentAmount.innerText;

    const TotalAmount = AmountNum + parseFloat(previousAmount);
    CurentAmount.innerText = TotalAmount;
    Amount.value = "";

    const TotalBalance = document.getElementById('total-balance');
    const TotalBalanceText = TotalBalance.innerText;

    const previousBalance = parseFloat(TotalBalanceText);

    if (isADD == true) {
        const CurrentTotalBalance = previousBalance + AmountNum;
        TotalBalance.innerText = CurrentTotalBalance;
    }

    else {
        const CurrentTotalBalance = previousBalance - AmountNum;
        TotalBalance.innerText = CurrentTotalBalance;
    }
    
}


document.getElementById('deposit-btn').addEventListener('click', function () {
     

    const DepositAmount = document.getElementById('deposit-amount');
    if (DepositAmount.value >= 0) {
        const Deposit = Calculate('deposit-amount','current-deposit1' , true);
    }

    else {
        DepositAmount.value ="Check The Value"
    }

    
})

document.getElementById('withdraw-btn').addEventListener('click', function () {

    const withdrawAmount = document.getElementById('withdraw-amount');
    if (withdrawAmount.value >= 0) {
        const Withdraw = Calculate('withdraw-amount', 'total-withdraw' , false);
    }

    else {
        withdrawAmount.value ="Check The Value"
    }
    
})