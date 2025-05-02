document.addEventListener("DOMContentLoaded", () => {
    const name = localStorage.getItem("userName");
    if (!name) {
        const userName = prompt("Welcome! Please enter your name:");
        if (userName) {
            localStorage.setItem("userName", userName);
            alert(`Hi ${userName}, welcome to THE TRUTH - DAPON!`);
        }
    } else {
        alert(`Welcome back, ${name}! Stay informed.`);
    }
});

function showNotification() {
    alert("Breaking News Alert: Truth just got uncovered! Stay tuned.");
}

function searchNews() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const articles = document.querySelectorAll(".news-grid article");

    articles.forEach(article => {
        const text = article.textContent.toLowerCase();
        article.style.display = text.includes(input) ? "block" : "none";
    });
}

function loginUser() {
    const name = document.getElementById("loginName").value;
    if (name) {
        localStorage.setItem("userLogin", name);
        document.getElementById("loginGreeting").textContent = `Hello, ${name}! You are now logged in.`;
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("commentBox").style.display = "block";
    }
}

window.onload = () => {
    const savedLogin = localStorage.getItem("userLogin");
    if (savedLogin) {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("commentBox").style.display = "block";
        document.getElementById("loginGreeting").textContent = `Hello, ${savedLogin}!`;
    }
};

function postComment() {
    const user = localStorage.getItem("userLogin");
    const text = document.getElementById("commentText").value;
    if (text.trim()) {
        const commentList = document.getElementById("commentList");
        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");
        commentDiv.innerHTML = `<strong>${user}:</strong> ${text}`;
        commentList.prepend(commentDiv);
        document.getElementById("commentText").value = "";
    }
}