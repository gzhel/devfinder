import React from 'react';
import s from './index.module.scss';
import * as Icons from '@iconscout/react-unicons';

export const Search = (p) => (
  <div className={s.searchLayout}>
    <div className={s.icon}>
      <Icons.UilSearch width="1.4em" height="1.4em" color="#093ede" />
    </div>

    <input
      type="search"
      value={p.searchValue}
      onChange={p.handleInput}
      placeholder="Search GitHub username..."
      className={s.search}
      disabled={p.lockUI}
    />

    <button onClick={p.handleSearch} className={s.button} disabled={p.lockUI}>
      Search
    </button>
  </div>
);
