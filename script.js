

let percent = 0;
let amount = "0.00";
let tip_old = 0;
let total = "0.00";

setInterval(function(){ 
    
  let bill = parseFloat(document.querySelector('#bill').value);
  let custom = parseFloat(document.querySelector('#custom').value);
  let people = parseFloat(document.querySelector('#people').value);

// incluir a custom en la misma operacion de los demas botones
if (custom >= 1) {
    percent = custom / 100;
}

//asignar eventos a los 5 botones
document.querySelector('#cinco').addEventListener('click',function() {
    percent = parseFloat(0.05);
    this.style.backgroundColor = 'hsl(172, 67%, 45%)';
    this.style.color = 'hsl(183, 100%, 15%)';
});
document.querySelector('#diez').addEventListener('click',function() {
    percent = parseFloat(0.1);
    this.style.backgroundColor = 'hsl(172, 67%, 45%)';
    this.style.color = 'hsl(183, 100%, 15%)';
    
});
document.querySelector('#quince').addEventListener('click',function() {
    percent = parseFloat(0.15);
    this.style.backgroundColor = 'hsl(172, 67%, 45%)';
    this.style.color = 'hsl(183, 100%, 15%)';
});
document.querySelector('#veinticinco').addEventListener('click',function() {
    percent = parseFloat(0.25);
    this.style.backgroundColor = 'hsl(172, 67%, 45%)';
    this.style.color = 'hsl(183, 100%, 15%)';
});
document.querySelector('#cincuenta').addEventListener('click',function() {
    percent = parseFloat(0.50);
    this.style.backgroundColor = 'hsl(172, 67%, 45%)';
    this.style.color = 'hsl(183, 100%, 15%)';
});

if (percent != tip_old) {
    calculate();
}

function calculate() {
        if (people >= 1 && bill >=1) {
            
                tip_old = percent;
                amount = parseFloat((percent  * bill) / people);              
        }
}

let btn = document.querySelector('#reset');
btn.addEventListener('click', function(){
  
  //recarga toda la pagina. igual que presionar command R / control R
  window.location.href = window.location.href;

});

if (bill > 1) {
    
        btn.style.backgroundColor = 'hsl(172, 67%, 45%)';
        btn.style.opacity = '1';
    
    if (people  >=1) {
        
            amount = parseFloat((percent  * bill) / people);
            total = parseFloat((bill / people) + amount);
            btn.style.backgroundColor = 'hsl(172, 67%, 45%)';
            btn.style.opacity = '1';
        
    } 
    if (bill <= 0) {
        total = "0.00";
    }
}

//limitar cantidad de decimales a 2 
let amount2 = amount.toFixed(2);
let total2 = total.toFixed(2);

document.querySelector('#amount').value = `$ ${amount2}`;
document.querySelector('#total').value = `$ ${total2}`;  

}, 1000);
