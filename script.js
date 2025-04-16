document.getElementById("myButton").addEventListener("click", function() {
    // Показываем модальное окно
    document.getElementById("myModal").style.display = "block";
});

// Закрываем модальное окно при нажатии на "x"
document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("myModal").style.display = "none";
});

// Закрываем модальное окно при клике вне его
window.addEventListener("click", function(event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});