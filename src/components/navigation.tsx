import * as React from 'react';
import { useCardStore } from '../store/cardStore';
import { showDay } from '../store/utils';

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

export default function Navigation() {
  const days = useCardStore((state) => state.days);
  const today = showDay();

  return (
    <div id="testNavigation">
      <ul>
        {!!days &&
          days
            .filter((day) => Number.parseInt(day) <= today)
            .map((day, index) => <NavLink day={day} key={index} />)}
      </ul>
    </div>
  );
}
