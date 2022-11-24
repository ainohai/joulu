import * as React from 'react';
import { useCardStore } from '../store/cardStore';

type NavProps = {
  day: string;
};

const NavLink = (props: NavProps) => {
  const anotherJoke = useCardStore((state) => state.anotherJoke);

  return (
    <li className="navItem" onClick={() => anotherJoke(props.day)}>
      {props.day}
    </li>
  );
};

export default function TestNavigation() {
  const days = useCardStore((state) => state.days);

  return (
    <div id="testNavigation">
      <ul>
        {!!days && days.map((day, index) => <NavLink day={day} key={index} />)}
      </ul>
    </div>
  );
}
