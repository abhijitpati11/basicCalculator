// create a empty string to collect the input
let string = "";

// select all buttons having class = button
let buttons = document.querySelectorAll('.button');

// using the buttons create an array
Array.from(buttons).forEach((button) => {
    // add event listener as a click
    button.addEventListener('click', (e) => {
        // when we get a = we use eval function to find the result
        if(e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        
        // if we get a C we remove the last entered character
        else if(e.target.innerHTML == 'C') {
            string = string.substring(0, string.length-1);
            document.querySelector('input').value = string;
        }

        // if we get AC we remove the entire string
        else if(e.target.innerHTML == 'AC') {
            string = "";
            document.querySelector('input').value = string;
        }
        // else we continue to recieve data
        else{
            
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
        
        
    })
})