document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let description = document.getElementById("description").value;
    let phone = document.getElementById("phone").value;
    
    if (email === "" || subject === "" || description === "" || phone === "") {
        alert("Please fill out all required fields.");
    } else {
        document.getElementById("responseMessage").textContent = "Your message has been submitted. Our team will contact you soon!";
        document.getElementById("contactForm").reset();
    }
});
