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
text.textContent="Web-Designer";
  },0);
  setTimeout(() =>{
text.textContent="Web-Developer";
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