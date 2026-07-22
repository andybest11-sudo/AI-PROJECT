/*=========================================
        PORTFOLIO JAVASCRIPT
=========================================*/

console.log("JavaScript Loaded Successfully!");

/*=========================================
        SCROLL TO TOP BUTTON
=========================================*/

const topButton = document.getElementById("topBtn");

if(topButton){

    window.addEventListener("scroll", function(){

        if(window.scrollY > 300){

            topButton.style.display = "block";

        }else{

            topButton.style.display = "none";

        }

    });

    topButton.addEventListener("click", function(){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

/*=========================================
            DARK MODE
=========================================*/

const darkButton = document.getElementById("darkModeBtn");

if(darkButton){

    // Check if Dark Mode was previously enabled
    if(localStorage.getItem("theme") === "dark"){

        document.body.classList.add("dark-mode");

        darkButton.innerHTML = "☀️";

    }

    // Toggle Dark Mode
    darkButton.onclick = function(){

        document.body.classList.toggle("dark-mode");

        // Save user preference
        if(document.body.classList.contains("dark-mode")){

            localStorage.setItem("theme","dark");

            darkButton.innerHTML = "☀️";

        }

        else{

            localStorage.setItem("theme","light");

            darkButton.innerHTML = "🌙";

        }

    };

}

/*=========================================
      HERO TYPING ANIMATION
=========================================*/

const typingText = document.getElementById("typing");

if(typingText){

    const words = [

        "AI Web Developer",

        "Full Stack Web Developer",

        "PHP Developer",

        "JavaScript Developer"

    ];

    let wordIndex = 0;

    let letterIndex = 0;

    let currentWord = "";

    let isDeleting = false;

    function typeEffect(){

        currentWord = words[wordIndex];

        if(isDeleting){

            typingText.textContent = currentWord.substring(0,letterIndex--);

        }

        else{

            typingText.textContent = currentWord.substring(0,letterIndex++);

        }

        if(!isDeleting && letterIndex === currentWord.length+1){

            isDeleting = true;

            setTimeout(typeEffect,1200);

            return;

        }

        if(isDeleting && letterIndex === 0){

            isDeleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

        setTimeout(typeEffect,isDeleting ? 70 : 120);

    }

    typeEffect();

}

/*=========================================
        CONTACT FORM VALIDATION
=========================================*/

// Find the form
const form = document.getElementById("contactForm");

// Check if this page has the contact form
if(form){

    // Get all fields
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    // Error containers
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const subjectError = document.getElementById("subjectError");
    const messageError = document.getElementById("messageError");

    // Run when form is submitted
    form.addEventListener("submit", function(e){

        // Stop page refresh
        e.preventDefault();

        // Clear previous errors
        nameError.textContent = "";
        emailError.textContent = "";
        subjectError.textContent = "";
        messageError.textContent = "";

        let valid = true;

        // ==========================
        // NAME
        // ==========================

        if(name.value.trim() === ""){

            nameError.textContent = "Please enter your name.";

            valid = false;

        }

        // ==========================
        // EMAIL
        // ==========================

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(email.value.trim() === ""){

            emailError.textContent = "Please enter your email.";

            valid = false;

        }

        else if(!emailPattern.test(email.value)){

            emailError.textContent = "Please enter a valid email.";

            valid = false;

        }

        // ==========================
        // SUBJECT
        // ==========================

        if(subject.value.trim() === ""){

            subjectError.textContent = "Please enter a subject.";

            valid = false;

        }

        // ==========================
        // MESSAGE
        // ==========================

        if(message.value.trim() === ""){

            messageError.textContent = "Please enter your message.";

            valid = false;

        }

        else if(message.value.length < 10){

            messageError.textContent = "Message must contain at least 10 characters.";

            valid = false;

        }

        // ==========================
        // SUCCESS
        // ==========================

        if(valid){

            alert("✅ Message sent successfully!");

            form.reset();

        }

    });

}


/*=========================================
        DYNAMIC PROJECT CARDS
=========================================*/

// Find the project container
const projectsContainer = document.getElementById("projectsContainer");

// Check if this page has the project container
if (projectsContainer) {

    // Array of project objects
    const projects = [

       {
    title:"Portfolio Website",

    description:"A personal portfolio built with HTML, CSS and JavaScript.",

    category:"html",

    demo:"#",

    github:"#"
},

      {
    title:"Real Estate Management System",

    description:"A property listing platform built with PHP and MySQL.",

    category:"php",

    demo:"#",

    github:"#"
},

       {
    title:"Hospital Management System",

    description:"A hospital system for managing patients and appointments.",

    category:"php",

    demo:"#",

    github:"#"
},
  {
    title:"Real Estate Management System",

    description:"A property listing platform built with PHP and MySQL.",

    category:"php",

    demo:"#",

    github:"#"
},
     {
    title:"Hospital Management System",

    description:"A hospital system for managing patients and appointments.",

    category:"php",

    demo:"#",

    github:"#"
},     {
    title:"Hospital Management System",

    description:"A hospital system for managing patients and appointments.",

    category:"php",

    demo:"#",

    github:"#"
},

     

    ];

    // Loop through each project
    projects.forEach(function(project){

        // Create a new project card
        projectsContainer.innerHTML += `

        <div class="project-card">

            <h3>${project.title}</h3>

            <p>${project.description}</p>

            <a href="${project.demo}">Live Demo</a>

            <a href="${project.github}">GitHub</a>

        </div>

        `;

    });

}

/*=========================================
        PROJECT SEARCH FILTER
=========================================*/

// Find the search input
const searchInput = document.getElementById("searchInput");

// Run only if we're on the Projects page
if(searchInput){

    searchInput.addEventListener("keyup", function(){

        // Get the user's search text
        let searchValue = searchInput.value.toLowerCase();

        // Get all project cards
        let cards = document.querySelectorAll(".project-card");

        // Check each project
        cards.forEach(function(card){

            let title = card.querySelector("h3").textContent.toLowerCase();

            if(title.includes(searchValue)){

                card.style.display = "block";

            }else{

                card.style.display = "none";

            }

        });

    });

}