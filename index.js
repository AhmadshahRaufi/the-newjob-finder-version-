// Get the "Home" link by its ID
const a1 = document.getElementById('a1');

// Check if it's already active in localStorage
if (localStorage.getItem("myElementClass") === "active") {
  a1.classList.add("active");
}

// Add a click event listener
a1.addEventListener("click", function() {
  // Set it as active
  a1.classList.add("active");
  // Store the class name in localStorage
  localStorage.setItem("myElementClass", "active");
});

 


// Get references to the elements

// Initialize the current paragraph index

const paragraphs = document.querySelectorAll(".paragraph");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
 
let currentParagraphIndex = 0;

// Function to show the current paragraph and hide the others
function showCurrentParagraph() {
  paragraphs.forEach((paragraph, index) => {
    if (index === currentParagraphIndex) {
      paragraph.style.display = "block";
    } else {
      paragraph.style.display = "none";
    }
  });
}

// Initialize the display
showCurrentParagraph();

// Add event listeners for the buttons
prevButton.addEventListener("click", () => {
  currentParagraphIndex = Math.max(0, currentParagraphIndex - 1);
  showCurrentParagraph();
});

nextButton.addEventListener("click", () => {
  currentParagraphIndex = Math.min(paragraphs.length - 1, currentParagraphIndex + 1);
  showCurrentParagraph();
});
 

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