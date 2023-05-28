var x= document.getElementById('input').value;

const calculateTemp=()=>{
   var  selectElement = document.querySelector('#selected');
    selectElement=selectElement.value;

    var x= document.getElementById('input').value;
    console.log(x);
    var exp=/^[A-Za-z]*$/;
if(exp.test(x)){
   alert("Enter number")
   window.location.reload();
   return;
}
    let result;
    if(selectElement==2){
        result = celTOfah(x);
        document.getElementById('result').innerHTML = "result"+ `= ${result}°Fahrenheit`;

    }

    if(selectElement==3){
        x=x*1;
        result= celtokal(x);
        result=parseFloat(result).toFixed(2);
        document.getElementById('result').innerHTML = "result"+`= ${result}°kelvin`;

    }

    if(selectElement==4){
        result=fahTOcel(x);
        i=parseFloat(result).toFixed(2);
        document.getElementById('result').innerHTML = "result"+`= ${i}°Celcius`;

    }

    if(selectElement==5){
        result= keltocel(x);
        i=parseFloat(result).toFixed(2)
        document.getElementById('result').innerHTML = "result"+`= ${i}°Celcius`;

    }
}
function celTOfah(x) {
        let fahr = x * (9 / 5) + 32;
        return fahr;
    }
    function celtokal(x){
        let kal=x+(273.15);
        return kal;
    }

    // Convert temperature from Fahrenheit to Celsius
    function fahTOcel(x) {
        let cel = ((x - 32) * 5 / 9);
        return cel;
    }

 function keltocel(x) {
        let cel = x-273.15;
        return cel;
    }
