document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");

    // Show the popup when the page loads
    popup.classList.add("show");

    // Close the popup when the close icon is clicked
    closePopup.addEventListener("click", () => {
        popup.classList.remove("show");
    });
});

