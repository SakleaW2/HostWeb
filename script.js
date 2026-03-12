

document.getElementById("year").textContent = new Date().getFullYear();

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () =>  {
  if (window.scrollY > 400) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function handleSubmit(event) {
  event.preventDefault();

  document.getElementById("status").textContent = "Заявка отправлена!";
}

