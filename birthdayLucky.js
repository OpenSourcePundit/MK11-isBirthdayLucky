const input = document.querySelectorAll('.input') ;
const checkNumberBtn = document.querySelector('#checkNumber');
const output = document.querySelector('#output');

function dobSum(dob){
    dob = dob.replaceAll("-","");
    var sum=0;
    for(index=0;index<dob.length;index++){
        sum= sum + Number(dob.charAt(index));
    }
    return sum;
}

function checkBirthday(){
    console.log(input[0].value+"       "+typeof(input[0].value))
    var dob = dobSum(input[0].value);
    var luckyNumber = Number(input[1].value);
    if(dob===luckyNumber){
        output.innerText="YESS..!! Your birthday is LUCKY..😎🤩!!"
    } else{
        output.innerText="NOOOO..!! Its not Lucky..!! Do try it in next Life.!! 😋😛 "
    }
}
checkNumberBtn.addEventListener('click',checkBirthday)