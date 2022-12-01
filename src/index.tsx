import * as React from 'react';
import { createRoot } from 'react-dom/client';
import WinterCanvas from './components/canvas';
import Cards from './components/cards';
import { BackgroundImage } from './components/backgroundImage';
import Navigation from './components/navigation';
import './styles.scss';
import { useCardStore } from './store/cardStore';

export default function App() {
  const { loading } = useCardStore();

  return (
    <>
      <BackgroundImage />
      <WinterCanvas />
      {!loading && <Cards />}
      <Navigation />
    </>
  );
}

createRoot(document.getElementById('threejs-container')).render(<App />);
