// Получаем элементы
const openBtn = document.getElementById("open-modal");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");

// Открытие модального окна
openBtn.onclick = function() {
    modal.style.display = "block";
};

// Закрытие модального окна
closeBtn.onclick = function() {
    modal.style.display = "none";
};

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
