// @ts-ignore
import * as Icons from '@iconscout/react-unicons';
import React, { ChangeEventHandler } from 'react';
import s from './index.module.scss';

type Props = {
  searchValue: string;
  handleInput: ChangeEventHandler<HTMLInputElement>;
  lockUI: boolean;
  handleSearch: () => void;
};

export const Search = (p: Props) => (
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
