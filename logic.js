var box = document.getElementById('box');
box.addEventListener('mouseover', function(){
    var top = Math.floor((Math.random()*90)+1);
    console.log('mouse hover ');
    box.style.marginTop= top + "vh";
    var left =  Math.floor((Math.random()*90)+1);
    box.style.marginLeft = left + "vw";
})