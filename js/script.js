// Automatically apply the theme based on user selection

const switchSelect = document.querySelector('.switch-select')

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
switchSelect.checked = savedTheme === 'dark'
switchSelect.addEventListener('change', () => {
  switchSelect.value = switchSelect.checked ? 'dark' : 'light'
  console.log()
})
setTheme(savedTheme)

// Update theme on change
switchSelect.addEventListener('change', (e) => setTheme(e.target.value))


// Ensure header-title is visible on small screens
const headerTitle = document.querySelector('.header-title')

function handleResize() {

  if (window.innerWidth < 600) {
    headerTitle.style.display = 'none'
  } else {
    headerTitle.style.display = 'block'
  }
}

window.addEventListener('resize', handleResize)
handleResize()