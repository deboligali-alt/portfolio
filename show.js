
const glow = document.createElement("div");
glow.classList.add("cursor-glow");
document.body.appendChild(glow);

document.addEventListener("mousemove", e => {
    glow.style.left = e.clientX - 150 + "px";
    glow.style.top = e.clientY - 150 + "px";
});





emailjs.init("BLjq-m2M0eOIHlaD9");

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    emailjs.send("service_11e3hvi", "template_qh9020s", {
        from_name: name,
        from_email: email,
        message: message,
        to_email: "deboligali@mail.com"
    })
        .then(function () {
            showPopup("Message sent successfully!");
            document.getElementById("contactForm").reset();
        })
        .catch(function (error) {
            console.log(error);
            alert(JSON.stringify(error));
        });
});

function showPopup(text) {
    const popup = document.createElement("div");

    popup.innerText = text;
    popup.style.position = "fixed";
    popup.style.bottom = "20px";
    popup.style.right = "20px";
    popup.style.background = "#00cfff";
    popup.style.color = "#000";
    popup.style.padding = "15px 20px";
    popup.style.borderRadius = "10px";
    popup.style.fontWeight = "bold";
    popup.style.boxShadow = "0 0 15px rgba(0,0,0,.3)";
    popup.style.zIndex = "9999";

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 3000);
}


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(
    '.about-section,.skills-section,.projects-section,.contact-section'
).forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
});