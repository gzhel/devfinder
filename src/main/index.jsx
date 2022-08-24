import React from 'react';
import { Search } from './search';
import s from './index.module.scss';

export const App = () => {
  return (
    <div className={s.app}>
      <Search />
    </div>
  );
};
