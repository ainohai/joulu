import * as React from 'react';
import { createRoot } from 'react-dom/client';
import WinterCanvas from './components/canvas';
import Cards from './components/cards';
import { BackgroundImage } from './components/backgroundImage';
import TestNavigation from './components/testNavigation';
import './styles.scss';

export default function App() {
  return (
    <>
      <BackgroundImage />
      <WinterCanvas />
      <Cards />
      {/**<TestNavigation />**/}
    </>
  );
}

createRoot(document.getElementById('threejs-container')).render(<App />);
