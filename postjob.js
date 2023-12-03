window.addEventListener('scroll', function () {
    const navbar = document.getElementById('d1');
  
    if (window.scrollY > 100) {
        navbar.classList.add('scroll');
         
    } else {
        navbar.classList.remove('scroll');
    }
  });


  // Get the "Home" link by its ID
const a3 = document.getElementById('a3');
// Check if it's already active in localStorage
if (localStorage.getItem("myElementClass") === "active") {
  a3.classList.add("active");
}
// Add a click event listener
a3.addEventListener("click", function() {
  // Set it as active
  a1.classList.add("active");
  // Store the class name in localStorage
  localStorage.setItem("myElementClass", "active");
}); 


let submitBtn= document.getElementById('submit1');
let submitn= document.getElementById('view');
 var h1=0;
function addjob(){
  console.log("wodsds");
  h1++
  var newr=document.getElementById('newro')
  newr.innerHTML=`
  <td></td>
  <td>06.02.2018, 2:54pm</td>
  <td>Project manger</td>
  <td> <a href="">cos share</a></td>
  <td>${h1}</td>
  <td>$4000</td>
  <td> Full Tsdfdsfsdfsdf</td>
  `;
    var app=document.getElementById('t1').appendChild(newr)
    localStorage.setItem(document.getElementById('t1').appendChild(newr));
};
 
submitn.addEventListener("click", function(){
  addjob();
})
