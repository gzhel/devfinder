import React from 'react';
import { Search } from './search';
import s from './index.module.scss';
import { Profile } from './profile';

export const App = () => {
  return (
    <div className={s.app}>
      <Search />
      <Profile />
    </div>
  );
};
