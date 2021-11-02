const section = document.querySelector('.wrapper');

let currentPos = window.pageYOffset;

const update = () => {
	const newPos = window.pageYOffset;
	const diff = newPos - currentPos;
	const speed = diff * 0.05;
	
	section.style.transform = `skewY(${ speed }deg)`;
	
	currentPos = newPos;
	
	requestAnimationFrame(update);
}

update();


function copyClip(txt){
    navigator.clipboard.writeText(txt);
}
document.getElementById('co1').addEventListener('click', ()=>{
    let a = document.getElementById('p1').value ;
    copyClip(a)
    document.getElementById('co1').style.color = "rgb(255, 187, 0)"
})
document.getElementById('co2').addEventListener('click', ()=>{
    let a = document.getElementById('p2').value ;
    copyClip(a)
    document.getElementById('co2').style.color = "rgb(255, 187, 0)"
})
document.getElementById('co3').addEventListener('click', ()=>{
    let a = document.getElementById('p3').value ;
    copyClip(a)
    document.getElementById('co3').style.color = "rgb(255, 187, 0)"
})
document.getElementById('co4').addEventListener('click', ()=>{
    let a = document.getElementById('p4').value ;
    copyClip(a)
    document.getElementById('co4').style.color = "rgb(255, 187, 0)"
})
document.getElementById('co5').addEventListener('click', ()=>{
    let a = document.getElementById('p5').value ;
    copyClip(a)
    document.getElementById('co5').style.color = "rgb(255, 187, 0)"
})
document.getElementById('co6').addEventListener('click', ()=>{
    let a = document.getElementById('p6').value ;
    copyClip(a)
    document.getElementById('co6').style.color = "rgb(255, 187, 0)"
})