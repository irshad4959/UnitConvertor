
var form = document.querySelector('form');

form.addEventListener('submit',function(e){

    var feet = document.querySelector('#feet');
    var result = document.querySelector('#results');

    e.preventDefault();
    feet = parseInt(feet.value);

    if(isNaN(feet)){
        results.textContent = alert("please enter a valid number!");
        }
    else if(feet <= 0){
        results.textContent = alert("please enter a feet value >0");
    }
    else{
        var con_Value = feet * 30.48 ;
        result.textContent = `${con_Value} cm`;
        document.querySelector('#feet').value = '';
        document.querySelector('#results').value = '';
       
    }

})