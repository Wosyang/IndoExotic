const WA_DEFAULT = '628xxxxxxx'

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.wa-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const phone = btn.dataset.wa || WA_DEFAULT
      const msg = encodeURIComponent(
        btn.dataset.msg || 'Hello IndoExotic'
      )

      window.open(`https://wa.me/${phone}?text=${msg}`, '_blank')
    })
  })
  document.querySelectorAll(".card-main").forEach(card => {
  card.addEventListener("click", () => {
    const target = card.dataset.target;
    window.location.href = target;
  });
});

document.querySelectorAll(".card-wa").forEach(card => {
  card.addEventListener("click", () => {
    const phone = WA_DEFAULT;
    const message = encodeURIComponent(card.dataset.message);
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  });
});
})

