document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".wrapper");
    const gif = document.querySelector(".gif");
    const button = document.querySelector(".button");

    button.addEventListener("click", () => {
        const originalText = document.querySelector("h1");
        originalText.textContent = "Me gustas😘";
        gif.src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTl3NG42N3Rlamx3YnltZmtzcDh4OHdldTh2bTkyOXNudGZ1ZG13dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/CJ5bKVKLSQsrs3nJw2/giphy.gif";
        button.style.display = "none"; // Oculta el botón después de hacer clic en él
    });
});
