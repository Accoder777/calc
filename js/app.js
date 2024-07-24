let equal_pressed = 0;

// all button

let button_input = document.querySelectorAll('.input-button')
let button_order = document.querySelectorAll('.order')
// console.log(button_input)


let display = document.getElementById('enter')
let percent = document.getElementById('per')
let del = document.getElementById('del')
let clear = document.getElementById('clear')
let equal = document.getElementById('equal')
window.onload = () =>{
    display.value = '';
}


//Access to each element with using foreach
button_input.forEach((button_class)=>{
    button_class.addEventListener('click',()=>{
        if(equal_pressed == 1)
        {
            display.value = '';
            equal_pressed = 0
        }
        display.value += button_class.value
    
  });    
});

console.log(button_order)

button_order.forEach((order_class)=>{
    order_class.addEventListener('click',()=>{
        if(equal_pressed == 1)
        {
            display.value = '';
            equal_pressed = 0
        }
        //display value of the each button
        if(display.value.length>0)
        {
            if(display.value[display.value.length-1] == order_class.value)
            {
                alert('ikkita bri xil ishora kiritildi')
            }
            else{
                display.value += order_class.value
            }
        }
        else if(display.value.length == 0){
            // display.value += order_class.value
            if(order_class.value == '-' || order_class.value == '+')
            {
                display.value += order_class.value    
            }
        }
    });
});


// solve the user inputs with equal

equal.addEventListener('click',()=>{
    equal_pressed = 1;
    let inp_val = display.value;
    try{

        let solution = eval(inp_val)

        if(Number.isInteger(solution))
        {
            display.value = solution
        }else{
            display.value = solution.toFixed(2);
        }
    }
    catch(err)
    {
        alert('you enter invalid input');
        display.value = '';
    }
})
clear.addEventListener('click',()=>{
    display.value = '';
})


del.addEventListener("click", () => {
    display.value = display.value.substr(0, display.value.length - 1);
});


percent.addEventListener('click',()=>{
    sum = eval(display.value)
    sum = sum * 0.01;
    if(Number.isInteger(sum))
    {
        display.value = sum;
    }
    else {
        display.value = sum.toFixed(2)
    }
})