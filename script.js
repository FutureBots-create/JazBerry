function openModal(id) {
    document.getElementById(id).style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
    document.body.style.overflow = "auto";
}

function openForm(product, price) {
    document.getElementById('formTitle').innerText = product + " (" + price + ")";
    openModal('orderFormModal');
}

// Генерация номера ГГГГММДД-001
function generateCertID(count) {
    const d = new Date();
    const date = d.getFullYear() + String(d.getMonth()+1).padStart(2,'0') + String(d.getDate()).padStart(2,'0');
    return date + "-" + String(count).padStart(3, '0');
}

async function submitOrder() {
    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        product: document.getElementById('formTitle').innerText,
        certID: generateCertID(1) // Тут 1 — это номер за день, должен расти
    };

    if(!data.name || !data.email || !data.phone) return alert("Заполни все поля!");

    console.log("ДАННЫЕ СОБРАНЫ:", data);

    // ======================================================
    // 1. МЕСТО ДЛЯ РОБОКАССЫ
    // window.location.href = "ССЫЛКА_НА_ОПЛАТУ_ТУТ";
    // ======================================================

    // ======================================================
    // 2. МЕСТО ДЛЯ GOOGLE ТАБЛИЦ
    // fetch('ВАШ_SCRIPT_URL', { method: 'POST', body: JSON.stringify(data) });
    // ======================================================

    // ======================================================
    // 3. МЕСТО ДЛЯ ОТПРАВКИ СЕРТИФИКАТА
    // Здесь через бэкенд или EmailJS отправляем файл
    // ======================================================

    alert("Заявка " + data.certID + " принята! Переходим к оплате...");
}