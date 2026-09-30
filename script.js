const menuBtn=document.getElementById('menuBtn');
const navMenu=document.getElementById('navMenu');
const themeBtn=document.getElementById('themeBtn');
const topBtn=document.getElementById('topBtn');

menuBtn.addEventListener('click',()=>navMenu.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(link=>link.addEventListener('click',()=>navMenu.classList.remove('open')));

themeBtn.addEventListener('click',()=>{
  document.body.classList.toggle('light');
  themeBtn.textContent=document.body.classList.contains('light')?'☾':'☀';
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add('visible');});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

window.addEventListener('scroll',()=>{
  topBtn.classList.toggle('show',window.scrollY>500);
  const sections=[...document.querySelectorAll('section[id]')];
  const current=sections.find(sec=>window.scrollY>=sec.offsetTop-180 && window.scrollY<sec.offsetTop+sec.offsetHeight-180);
  document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('active',current && a.getAttribute('href')==='#'+current.id));
});

topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
document.getElementById('year').textContent=new Date().getFullYear();
