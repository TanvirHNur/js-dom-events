function makeRed(){
    document.body.style.backgroundColor = 'red';
}
// handle blue button click by setting function name
const resetColor = document.getElementById('resetColor');
resetColor.onclick = reset;
// just set name of the function
function reset(){
    document.body.style.backgroundColor = 'white';
}

const blueButton = document.getElementById('blue-button');
blueButton.onclick = blue;
function blue(){
document.body.style.backgroundColor = 'blue';
}
// It's anonymous function
//  handle blue button click by without function name
const greenButton = document.getElementById('green-button')
console.log(greenButton)
//    anonymous function
greenButton.onclick = function (){
    document.body.style.backgroundColor = 'green';
}
// add eventListener('click;)

const glodenButton = document.getElementById('goldenrod-button')
        // console.log(glodenButton)
        glodenButton.addEventListener('click', golden)
        function golden(){
            document.body.style.backgroundColor = 'goldenrod';
        }
        //    anonymous function with eventlistener
const hotpinkButton = document.getElementById('hotpink-button');
        hotpinkButton.addEventListener('click', function hotpink(){
            document.body.style.backgroundColor = 'hotpink'
        })

        
      
        // direct add event listener without declaring variable
        document.getElementById('lightblue-button').addEventListener('click', function(){
            document.body.style.backgroundColor = 'lightblue'
        })