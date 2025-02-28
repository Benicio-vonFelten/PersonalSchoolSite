document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".wiss-link").addEventListener("click", function() {
        window.open("https://www.wiss.ch", "_blank");
    });

    setTimeout(() => {
        document.querySelector("main").style.opacity = "1";
    }, 500);

    fetch(window.location.href).then(response => {
        if (response.status === 404) {
            window.location.href = "/html/404.html";
        }
    });
});
