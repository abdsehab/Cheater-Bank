
function getValue() {
    const DepositAmount = document.getElementById('deposit-amount');
    const DepositAmountValueText = DepositAmount.value;
    const DepositAmountValueee = parseFloat(DepositAmountValueText);
    DepositAmount.value = "";
    return DepositAmountValueee;

}




document.getElementById('deposit-btn').addEventListener('click', function () {
    // const DepositAmount = document.getElementById('deposit-amount');
    // // DepositAmountValue means that value I entered now 
    // const DepositAmountValue = DepositAmount.value;
    // // console.log(DepositAmountValue);

    const DepositAmountValue = getValue()

    const CurrentDeposit = document.getElementById('current-deposit1');
    // console.log(CurrentDeposit.innerText)
    const previousAmount = CurrentDeposit.innerText;
    // CurrentDepositAmount Refers total Balance
    const CurrentDepositAmount = (parseFloat(previousAmount) + DepositAmountValue );
    // const CurrentDepositAmount = parseFloat (previousAmount + DepositAmountValue) ;
    CurrentDeposit.innerText = CurrentDepositAmount ;
    // DepositAmount.value = "";

    // Update Balance total

    const TotalBalance = document.getElementById('total-balance');
    const TotalBalanceText = TotalBalance.innerText;

    const previousBalance = parseFloat(TotalBalanceText);

    const CurrentTotalBalance = previousBalance + parseFloat(DepositAmountValue) ;

    TotalBalance.innerText = CurrentTotalBalance;
})

// Withdraw

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountValueText = withdrawAmount.value;
    const withdrawAmountValue = parseFloat(withdrawAmountValueText);
    console.log(withdrawAmountValue);

    const totalWithdraw= document.getElementById('total-withdraw');
    const CurentWithdrawAmount = totalWithdraw.innerText;
    const totalWithdrawValue = parseFloat(CurentWithdrawAmount) + withdrawAmountValue;

    
    totalWithdraw.innerText = totalWithdrawValue;
    withdrawAmount.value = "";
    

    // Update Balance
    const TotalBalance = document.getElementById('total-balance');
    const TotalBalanceText = TotalBalance.innerText;

    const previousBalance = parseFloat(TotalBalanceText);

    const CurrentTotalBalance = previousBalance - withdrawAmountValue;

    TotalBalance.innerText = CurrentTotalBalance;
})


