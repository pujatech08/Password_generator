let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox     = document.getElementById("passBox");
let lowercase   = document.getElementById("lowercase");
let uppercase   = document.getElementById("uppercase");
let number      = document.getElementById("number");
let symbols     = document.getElementById("symbols");
let genBtn      = document.getElementById("genBtn");

sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener('input',()=>{
    sliderValue.textContent = inputSlider.value;
})

genBtn.addEventListener('click' ,()=>{
    passBox.value = generatePasswrod();
});


let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCases = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let allSymbols = "~!@#$%^&*";


// Function to generate password
function generatePasswrod()
{
    let genPasswrod = "";
    let allChars = "";

    allChars  += lowercase.checked ? lowerCases : " ";
    allChars  += uppercase.checked ? upperCase : " ";
    allChars  += number.checked ? numbers : " ";
    allChars  += symbols.checked ? allSymbols : " ";

    if(allChars  == "" || allChars.length == 0)
    {
        return genPasswrod;
    }

    let i =1;
    while(i <= inputSlider.value)
    {
        genPasswrod += allChars.charAt(Math.floor(Math.random() * allChars.length));

        i++;
    }

   
    return genPasswrod;
}