window.addEventListener('scroll', function () {
    const navbar = document.getElementById('d1');
  
    if (window.scrollY > 100) {
        navbar.classList.add('scroll');
    } else {
        navbar.classList.remove('scroll');
    }
  });
  const btn = document.querySelector('.sidebarBtn');
  const csidebar= document.querySelector('.sidebar-container');

  btn.addEventListener('click',()=>{
     csidebar.style.visibility='visible'; 
 
    console.log("sdsdsd")
    
    } 
  )
  const closeSidebarbtn= document.querySelector(".sidebrclosebtn");
  closeSidebarbtn.addEventListener("click",()=>{
    csidebar.style.visibility='hidden'; 
  })
  const element = document.getElementById('myElement'); // Replace with the actual element ID
const hideElement = () => {
  if (window.innerWidth > 700) {
    csidebar.style.visibility = 'hidden';
  }
};

window.addEventListener('resize', hideElement); // Recheck on resize events
hideElement(); // Initial check on page load