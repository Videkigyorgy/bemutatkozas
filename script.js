const toggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// 1. Ellenőrizzük, hogy volt-e korábban elmentett tema
if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
  toggleBtn.textContent = '☀️ Világos mód';
}

// 2. Gombkattintás kezelése
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Megnézzük, hogy most sötét mód van-e érvényben
  const isDarkMode = document.body.classList.contains('dark-mode');

  // Gomb szövegének frissítése és az állapot mentése
  if (isDarkMode) {
    toggleBtn.textContent = '☀️ Világos mód';
    localStorage.setItem('theme', 'dark');
  } else {
    toggleBtn.textContent = '🌙 Sötét mód';
    localStorage.setItem('theme', 'light');
  }
});