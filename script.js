const modalAbout = document.getElementById("modal-about");
const modalOrder = document.getElementById("modal-order");

document.getElementById("btn-about").onclick = () => {
  modalAbout.style.display = "flex";
};

document.getElementById("close-about").onclick = () => {
  modalAbout.style.display = "none";
};

document.querySelectorAll(".buy-btn").forEach(btn => {
  btn.onclick = () => {
    modalOrder.style.display = "flex";
    modalOrder.dataset.product = btn.dataset.product;
    modalOrder.dataset.price = btn.dataset.price;
  };
});

document.getElementById("close-order").onclick = () => {
  modalOrder.style.display = "none";
};

document.getElementById("pay-btn").onclick = () => {
  alert("Оплата будет подключена после подтверждения Robokassa");
};