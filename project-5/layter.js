let display = document.getElementById('display');
function list(value){
    display.value += value
}
 
function change(){
    display.value = ""
}
function addcaluculator(){
    try{

    display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error"
    }
}
function del(){
      display.value = (display.value).slice(0,-1) 
}