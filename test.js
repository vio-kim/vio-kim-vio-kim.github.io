document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Получаем значения полей формы
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Здесь можно добавить логику для отправки формы (например, AJAX запрос)
    alert(`Спасибо за заявку, ${name}! Мы свяжемся с вами по телефону: ${phone}.`);
    
    // Очистка формы
    document.getElementById('contactForm').reset();
});

// Функция для добавления класса 'visible' при прокрутке страницы
function onScroll() {
    const elements = document.querySelectorAll('.container');
    elements.forEach((element) => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom > 0) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
}

document.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);

let images = ["cablin.jpg", "услуги.jpg", "пожарная_датчик.jpeg"];
let index = 0;

setInterval(function() {
    index = (index + 1) % images.length; // Обновляет индекс
    document.getElementById('background').style.backgroundImage = `url(${images[index]})`;
}, 3000); // Меняет изображение каждые 3 секунды


function submitForm(event) {
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    var subject = "Сообщение от " + name;
    var body = "Имя: " + name + "%0AТелефон: " + phone + "%0AСообщение: " + message;

    window.location.href = "mailto:odaulet99@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
}
