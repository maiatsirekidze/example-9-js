// let btn = document.getElementById('btn');
// let countt = document.getElementById('count')
// let count=0;
// btn.addEventListener('click',function (){
//      count++;
//   countt.innerHTML=count;
// })
let input = document.getElementById("input")
let name = document.getElementById('name')

input.addEventListener('input',function(){
    let nameone = input.value;
    name.innerHTML= nameone;
})