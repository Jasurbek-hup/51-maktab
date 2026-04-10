let ism = localStorage.getItem("username");

// agar yo'q bo'lsa registerga qaytaradi
if (!ism) {
    window.location.href = "register.html";
} else {
    document.getElementById("user").innerText = ism;
}