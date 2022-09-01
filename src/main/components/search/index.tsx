// @ts-ignore
import * as Icons from '@iconscout/react-unicons';
import cls from 'classnames';
import React, { ChangeEventHandler } from 'react';
import s from './index.module.scss';
import { useModel } from './model';

export type Props = {
  searchValue: string;
  handleInput: ChangeEventHandler<HTMLInputElement>;
  lockUI: boolean;
  handleSearch: () => void;
  existError: string;
};
export const Search = (p: Props) => {
  const m = useModel(p);

  return (
    <div className={s.searchLayout}>
      <div className={s.icon}>
        <Icons.UilSearch width="1.4em" height="1.4em" color="#093ede" />
      </div>

      <input
        type="search"
        value={p.searchValue}
        onChange={p.handleInput}
        placeholder={m.placeholder}
        className={cls(s.search, { [s.error]: !!p.existError })}
        disabled={p.lockUI}
        onKeyDown={m.handleEnter}
      />

      <button
        id="search"
        onClick={p.handleSearch}
        className={s.button}
        disabled={p.lockUI || !p.searchValue}
      >
        Search
      </button>
    </div>
  );
};
