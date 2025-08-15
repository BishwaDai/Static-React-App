

import Ballpit from './backgrounds/Ballpit/Ballpit';
import './App.css';

const buttonStyle = {
  padding: '0.75em 2em',
  fontSize: '1rem',
  fontWeight: 600,
  borderRadius: '30px',
  border: 'none',
  background: 'linear-gradient(90deg, #4f8cff 60%, #38e7ff 100%)',
  color: '#fff',
  boxShadow: '0 2px 12px #2224',
  cursor: 'pointer',
  transition: 'transform 0.15s, box-shadow 0.15s',
  outline: 'none',
};

function App() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <Ballpit className="animated-bg" />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          zIndex: 1,
          color: '#fff',
          textShadow: '0 2px 16px #000',
          background: 'rgba(10,16,38,0.65)',
          boxShadow: '0 0 0 100vw rgba(10,16,38,0.25) inset'
        }}
      >
        <div style={{ fontSize: '2.5rem', fontWeight: 700, letterSpacing: '2px', marginBottom: '0.5em' }}>
          Welcome to My Animated Static Page!
        </div>
        <div style={{ fontSize: '1.25rem', fontWeight: 400, marginBottom: '2em', textAlign: 'center', maxWidth: 600 }}>
          Discover awesome features, smooth animations, and a modern look. Get started by exploring the options below!
        </div>
        <div style={{ display: 'flex', gap: '1em', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button style={buttonStyle}>Home</button>
          <button style={buttonStyle}>About</button>
          <button style={buttonStyle}>Features</button>
          <button style={buttonStyle}>Gallery</button>
          <button style={buttonStyle}>Contact</button>
        </div>
      </div>
    </div>
  );
}

export default App;
