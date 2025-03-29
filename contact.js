// Mobile Menu Toggle
const navLinks = document.querySelectorAll('.navbar nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.navbar').classList.toggle('active');
    });
});

// Contact Form Validation
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.querySelector('input[type="text"]').value;
    let email = document.querySelector('input[type="email"]').value;
    let message = document.querySelector('textarea').value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Message sent successfully!");
        this.reset();
    }
});
function chatbotReply() {
    let userInput = document.getElementById("chatbot-input").value.toLowerCase();
    let responseBox = document.getElementById("chatbot-response");

    let responses = {
        "hello": "Hello! How can I assist you?",
        "how to file a complaint": "You can submit a complaint using our feedback form above.",
        "how to check government schemes": "Visit our Services page to check available government schemes.",
        "contact support": "You can email us at support@smartgov.com or call +1 234 567 890.",
        "bye": "Goodbye! Have a great day!"
    };

    responseBox.innerHTML = responses[userInput] || "Sorry, I don't understand that. Try asking something else.";
}
