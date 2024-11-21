// Automatically apply the theme based on user selection
const themeSelect = document.getElementById('theme-select')

// Function to set theme
function setTheme(theme) {
  document.body.classList.remove('light', 'dark')
  if (theme === 'auto') {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    document.body.classList.add(isDarkMode ? 'dark' : 'light')
  } else {
    document.body.classList.add(theme)
  }
  localStorage.setItem('theme', theme)
}

// Load theme from localStorage or default to 'auto'
const savedTheme = localStorage.getItem('theme') || 'auto'
themeSelect.value = savedTheme
setTheme(savedTheme)

// Update theme on change
themeSelect.addEventListener('change', (e) => setTheme(e.target.value))
