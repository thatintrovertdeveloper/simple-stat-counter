var a=(o,n)=>()=>(n||o((n={exports:{}}).exports,n),n.exports);var l=a(r=>{(function(o){class n{constructor(t={}){let e={selector:".counting",root:null,rootMargin:"0px",threshold:.2,interval:30,incrementDivisor:50,container:null};this.options={...e,...t},this.elements=document.querySelectorAll(this.options.selector),this.observer=new IntersectionObserver(this.callback.bind(this),this.options),this.observeElements()}observeElements(){this.options.container?(this.container=document.querySelector(this.options.container),this.container&&this.observer.observe(this.container)):this.elements.forEach(t=>{this.observer.observe(t.parentElement)})}callback(t){t.forEach(e=>{e.isIntersecting&&(e.target.querySelectorAll(".counting").forEach(s=>{this.startCountAnimation(s)}),this.observer.unobserve(e.target))})}startCountAnimation(t){let e=parseInt(t.getAttribute("data-count"),10),i=0,s=Math.ceil(e/this.options.incrementDivisor),c=setInterval(()=>{i+=s,t.innerText=i,i>=e&&(t.innerText=e,clearInterval(c))},this.options.interval);t.style.opacity=1}}o.SimpleStatCounter=n})(typeof window<"u"?window:r)});export default l();
