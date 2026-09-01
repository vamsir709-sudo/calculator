let display = document.getElementById('display');
function list(value){
    display.value += value
}
 
function change(){
    display.value = " "
}
function addcaluculator(){

    display.value = eval(display.value)
    
    
}
function del(){
      display.value = (display.value).slice(0,-1) 
}