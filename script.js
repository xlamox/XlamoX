const phone = "213XXXXXXXXX";

function order(product) {
  const message = `مرحبا، أرغب في طلب ${product}`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function contact() {
  const message = "مرحبا، أريد الاستفسار عن المنتجات الطبيعية";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
