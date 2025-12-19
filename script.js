const phone = "213XXXXXXXXX";
let currentLang = "ar";

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-ar]").forEach(el => {
    el.textContent = el.getAttribute("data-" + lang);
  });
}

function order(product) {
  const msg = "Hello, I want to order: " + product;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`);
}

function contact() {
  window.open(`https://wa.me/${phone}`);
}

setLang("ar");
