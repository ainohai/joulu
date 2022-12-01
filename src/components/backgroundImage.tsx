import * as React from 'react';
import joululanssi from '../../assets/joululanssi4.jpg';
import { useCardStore } from '../store/cardStore';

export function BackgroundImage() {
  const { setLoading } = useCardStore();
  return (
    <div className="joululanssi">
      <img src={joululanssi} onLoad={() => setLoading(false)} />
    </div>
  );
}
