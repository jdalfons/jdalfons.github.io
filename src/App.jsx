import './App.css'
import Header from './components/Header';
import Projects from './components/Projects';
import Posts from './components/Posts';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <div style={{ minHeight: '100vh' }}>
        <Header />
        <Projects />
        <Posts />

        {/* Footer */}
        <footer style={{
          padding: '2rem',
          borderTop: '1px solid rgba(217, 235, 241, 0.1)',
          textAlign: 'center',
          color: 'var(--color-secondary-blue)',
          fontSize: '0.875rem'
        }}>
          <p>© {new Date().getFullYear()} Juan. All rights reserved.</p>
        </footer>
      </div>

      {/* Floating Contact Button */}
      <Contact />
    </>
  );
}

export default App
