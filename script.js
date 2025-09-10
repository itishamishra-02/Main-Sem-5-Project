document.getElementById("shop-now").addEventListener("click", function() {
    window.location.href = "shop-now.html";
});

function openLogin() {
    document.getElementById('loginModal').style.display = 'flex';
}

function closeLogin() {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('modalError').textContent = '';
    document.getElementById('modalUsername').value = '';
    document.getElementById('modalPassword').value = '';
}

function validateModalLogin() {
    const username = document.getElementById('modalUsername').value.trim();
    const password = document.getElementById('modalPassword').value.trim();
    const errorMsg = document.getElementById('modalError');

    if (!username || !password) {
        errorMsg.textContent = "Please enter both username and password.";
        return;
    }

    if (username === "user" && password === "password") {
        errorMsg.style.color = "green";
        errorMsg.textContent = "Login successful!";
        // Further logic like redirect or storing session can be added here
    } else {
        errorMsg.style.color = "red";
        errorMsg.textContent = "Invalid username or password.";
    }
}

// Open the Contact Us modal
function openContact() {
    document.getElementById('contactModal').style.display = 'flex';
}

// Close the Contact Us modal
function closeContact() {
    document.getElementById('contactModal').style.display = 'none';
    document.getElementById('contactMsg').textContent = '';
    document.getElementById('contactForm').reset();
}

// Handle the form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const contactMsg = document.getElementById('contactMsg');

    if (!name || !email || !message) {
        contactMsg.style.color = "red";
        contactMsg.textContent = "Please fill in all fields.";
        return;
    }

    contactMsg.style.color = "green";
    contactMsg.textContent = "Thank you for contacting us!";
    this.reset();
});

// Toggle the dropdown menu
function toggleDropdown() {
    const dropdown = document.getElementById('itemsDropdown');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
}

// Close dropdown if clicking outside
window.addEventListener('click', function(e) {
    const dropdown = document.getElementById('itemsDropdown');
    if (!e.target.closest('.dropdown')) {
        dropdown.style.display = 'none';
    }
});

// Open Seller Modal
function openSeller() {
    document.getElementById('sellerModal').style.display = 'flex';
}

// Close Seller Modal
function closeSeller() {
    document.getElementById('sellerModal').style.display = 'none';
    document.getElementById('sellerMsg').textContent = '';
    document.getElementById('sellerForm').reset();
}

// Handle Seller Form Submission
document.getElementById('sellerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('sellerName').value.trim();
    const email = document.getElementById('sellerEmail').value.trim();
    const phone = document.getElementById('sellerPhone').value.trim();
    const business = document.getElementById('sellerBusiness').value.trim();
    const products = document.getElementById('sellerProducts').value.trim();
    const sellerMsg = document.getElementById('sellerMsg');

    if (!name || !email || !phone || !business || !products) {
        sellerMsg.style.color = "red";
        sellerMsg.textContent = "Please fill in all fields.";
        return;
    }

    sellerMsg.style.color = "green";
    sellerMsg.textContent = "Thank you for registering as a seller!";
    this.reset();
});

// Newsletter form submission
document.getElementById("newsletterForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const emailInput = this.querySelector("input[type='email']");
    const newsletterMsg = document.getElementById("newsletterMsg");

    if (!emailInput.value.trim()) {
        newsletterMsg.style.color = "red";
        newsletterMsg.textContent = "Please enter your email.";
        return;
    }

    // Simple email format validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emailPattern)) {
        newsletterMsg.style.color = "red";
        newsletterMsg.textContent = "Please enter a valid email.";
        return;
    }

    // Success message
    newsletterMsg.style.color = "lightgreen";
    newsletterMsg.textContent = "Thank you for subscribing!";
    emailInput.value = "";
});

// Smooth scroll for About Us link in navbar (if it's inside same page)
document.querySelectorAll('a[href^="#about-section"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
