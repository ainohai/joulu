import * as React from 'react';
import joululanssi from '../../assets/joululanssi4.jpg';
import { useCardStore } from '../store/cardStore';

export function BackgroundImage() {
  const { loading, setLoading } = useCardStore();
  return (
    <div className="joululanssi">
      {
        <img
          style={{ display: loading ? 'none' : 'inherit' }}
          src={joululanssi}
          onLoad={() => setTimeout(() => setLoading(false), 50)}
        />
      }
    </div>
  );
}
