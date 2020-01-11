//nav bar interaction
document.querySelector('.open').addEventListener('click', ()=>{
  document.querySelector('.nav-list').classList.add('active');
})
document.querySelector('.close').addEventListener('click', ()=>{
  document.querySelector('.nav-list').classList.remove('active');
})
function clickPageLink(){
    document.querySelector('.nav-list').classList.remove('active');
}
