document.getElementById("save-btn").disabled = true;
function totalExpense() {
const incomeInput=document.getElementById('income-input').value;
const foodInput=document.getElementById('food-input').value;
const rentInput=document.getElementById('rent-input').value;
const clothesInput=document.getElementById('clothes-input').value;

const totalExpense=parseFloat(foodInput)+parseFloat(rentInput)+parseFloat(clothesInput);
const balance=incomeInput-totalExpense;

if (isNaN(totalExpense)) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Input Can't be empty!",
       
      });
    
    }

    else if (totalExpense > incomeInput) {
       
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You have not enough income to expense!',
           
          });
    }
    else if (foodInput < 0 || rentInput < 0 || clothesInput < 0) {
 
Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Please input positive value!',
   
  });    
    }else{
        document.getElementById('total-expense').innerText = totalExpense; 
        document.getElementById('balance').innerText = balance;
        document.getElementById("save-btn").disabled = false;
        element = document.getElementById('save-btn').classList.add("btn-style");
    }
}

document.getElementById("calculate-btn").addEventListener("click", function() {
    totalExpense();
  });

  document.getElementById("save-btn").addEventListener("click", function() {
    
    const saveInput = document.getElementById('save-input').value;
    const incomeInput = document.getElementById('income-input').value;
    const savingAmount = incomeInput * (saveInput/100);

    const balance = document.getElementById('balance').innerText;
    remainingBalance = parseFloat(balance) - savingAmount;
    //if balance is zero show error
    if (balance == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please calculate expenses first!',
           
          })
    }
    else if(savingAmount<0){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Savings percentage can't be negative",
           
          });
    }
    else if(savingAmount>remainingBalance){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You have not enough money for savings!',
           
          });
            
        }    
    else{
        document.getElementById('saving-amount').innerText = savingAmount;
        document.getElementById('remaining-balance').innerText = remainingBalance;
    }
   
  });
