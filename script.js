document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".projects");

    let hoverEnabled = false; // Track whether hover effects are active

    function handleHoverEffect() {
        if (window.innerWidth > 1024) {
            if (!hoverEnabled) { // Only add event listeners if not already active
                projects.forEach(project => {
                    const overlay = project.querySelector(".buttons");
                    const text = overlay.querySelector("span");
                    const image = project.querySelector("img");
                    const tablet = project.querySelector(".tablet")

                    project.addEventListener("mouseenter", function () {
                        overlay.style.opacity = "1"; // Show overlay
                        text.style.opacity = "1"; // Show text
                        image.style.opacity = "0.2";
                        image.style.transition = "0.2s ease-in";
                    });

                    project.addEventListener("mouseleave", function () {
                        overlay.style.opacity = "0"; // Hide overlay
                        text.style.opacity = "0"; // Hide text
                        image.style.opacity = "1";
                    });
                    tablet.style.display = "none";
                });
                hoverEnabled = true; // Mark hover effects as active
            }
        } else {
            if (hoverEnabled) { // Remove event listeners only if they were added
                projects.forEach(project => {
                    const newProject = project.cloneNode(true); // Clone to remove events
                    project.replaceWith(newProject);
                });
                tablet.style.display = "flex"; // Ensure tablet is visible on small screens
                hoverEnabled = false; // Mark hover effects as inactive
            }
        }
    }

    handleHoverEffect(); // Run once on page load
    window.addEventListener("resize", handleHoverEffect); // Run on window resize


// eamil & name form 
    const submit = document.getElementById("send");
    submit.addEventListener("click", (event)=>{
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim(); // Get the email value
        const crossName = document.getElementById("crossname");
        const alertName = document.getElementById("alertname");
        const crossEmail = document.getElementById("crossemail");
        const alertEmail = document.getElementById("alertemail");
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format pattern

// Reset previous alerts
crossName.style.opacity = "0";
alertName.style.opacity = "0";
crossEmail.style.opacity = "0";
alertEmail.style.opacity = "0";
        if (name === ""){
            crossName.style.opacity = "1";
            alertName.style.opacity = "1";
            event.preventDefault();
            return false;
        }
          // Check if email format is valid
          if (!emailPattern.test(email)) {
            crossEmail.style.opacity = "1";
            alertEmail.style.opacity = "1";
            event.preventDefault();
            return false;
        }
   
      
   return true;
    });
    AOS.init({
        duration: 1500, // Animation duration in milliseconds
        once: true, // Animation happens only once
        mirror: false, // No repeat on scroll back
    });
    
});