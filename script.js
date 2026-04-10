//your JS code here. If required.
let btn = document.getElementById("btn")
let p = document.getElementById("counter")

btn.addEventListener("mouseover",()=>{
	btn.style.backgroundColor = "cyan"
})

btn.addEventListener("mouseout",()=>{
	btn.style.backgroundColor = "#B2FFFF"
})
btn.addEventListener("click", ()=>{
	let count = parseInt(p.innerText);
	count += 1;
	p.innerText = count;
})