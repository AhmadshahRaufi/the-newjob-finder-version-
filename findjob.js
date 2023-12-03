// Get the "Home" link by its ID
const a2 = document.getElementById('a2');

// Check if it's already active in localStorage
if (localStorage.getItem("myElementClass") === "active") {
  a2.classList.add("active");
}

// Add a click event listener
a2.addEventListener("hover", function() {
  // Set it as active
  a1.classList.add("active");
  // Store the class name in localStorage
  localStorage.setItem("myElementClass", "active");
});

window.addEventListener("scroll" ,function (){
        const navbar = this.document.getElementById("d1");

        if (window.scrollY>100){
            navbar.classList.add('scroll');

        }
        else{
            navbar.classList.remove('scroll');
        }
})