burger =document.querySelector('.burger')
navbar =document.querySelector('.navbar')
navlist =document.querySelector('.navlist')
rightnav =document.querySelector('.rightnav')

burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav-resp');
    navlist.classList.toggle('v-class-resp');
    rightnav.classList.toggle('v-class-resp');
})

const text= document.querySelector('.sec-text');
const textload =()=>{
  setTimeout(() =>{
text.textContent="web-Designing..";
  },0);
  setTimeout(() =>{
text.textContent="website-Developement";
  },4000);

}
textload();
setInterval(textload,8000);




//form-validation
const form=()=>{

let Name=document.myform.Name.value;
let email=document.myform.email.value;
let feedback=document.myform.Message.value;

if(Name==null || Name=="")
{
  alert("please enter your name");
  return false;
}
if(email==null || email=="")
{
  alert("please enter your email");
  return false;
}
if(feedback==null || feedback=="")
{
  alert("please give feedback");
  return false;
}

}


const toggle = document.querySelector('.toggle');
const item = document.querySelectorAll('.name,.homemain,.navlist li a,.container_para,.homemain,.contact .contactme,body,.rightnav a i,.about-text p,.text.sec-text,.box p,.box h3,.footer .box-container .box1 h3,.moon,.sun,.container_details h1,.container_details,.input,.input::placeholder,.box1,.footer,.itag2 a,.itag a,.itag,.itag2,.line');



toggle.addEventListener("click",()=>{
  item.forEach(item=>{
    item.classList.toggle('active');
  })

})
