const par = document.querySelector('.head');
const par1 =document.querySelector('.head2');
var names =['<h1> “Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).” </h1>',
'<h1> “Knowing yourself is the beginning of all wisdom.” </h1>',
'<h1> “May you live every day of your life.” </h1>'];
var change =['Mark Twain.','Aristotle.','Jonathan Swift.'];
var i = 0;

setInterval(
    function () {
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
   document.body.style.backgroundColor = "#"+randomColor;
   console.log('here !!!!');
     par.innerHTML   = names[i];
   //par1.innerHTML  = change[i];
     window.instance = new TypeIt("#example1", {
      speed: 50,
      strings:change[i],
      cursorChar: "<strong>//</strong>"
     }).go(); 
   
   i++;
   if(i==3){
       i=0;
   }
   
    },5000);

  //  console.log(par);
   
//    par.innerHTML ='<h1> second word </h1>';
 window.instance = new TypeIt("#example1", {
 speed: 50,
  strings: "Click somewhere.",
  cursorChar: "<strong>//</strong>"
 }).go(); 

