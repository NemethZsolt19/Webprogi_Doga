/*
File: index.html
Author: Németh Zsolt
Copyright: 2024, Németh zsolt
Group: Szoft I-2-N
Date: 2024-04-03
Github: https://github.com/NemethZsolt19/
Licenc: GNU GPL
*/

const inputnum = document.getElementById("inputnum");
const inputnum2 = document.getElementById("inputnum2");

const convertButton = document.getElementById("convertButton");

const result = document.getElementById("result");

convertButton.addEventListener('click', ()=>{
    //startCalc();
    let num = inputnum.value
    let num2 = inputnum2.value
    if(num==num2) {console.log('Ugyanaz')
    }else{
        console.log('Eltérő számok')
    }
    result.textContent = num && num2;
    inputnum.value = '';
});

