// ✅ トップへ戻るボタンの表示・非表示制御
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = () => {
  if (document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

// ✅ ボタンクリックでスクロール上部へ
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ✅ ナビゲーションリンクにスクロールアニメーションを追加
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});
