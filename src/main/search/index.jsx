import React, { useCallback, useState } from 'react';
import s from './index.module.scss';
import * as Icons from '@iconscout/react-unicons';

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState();
  const onChange = useCallback((evt) => setSearchQuery(evt.target.value), [searchQuery]);
  const onSearchClicked = useCallback(() => console.log(searchQuery), []);

  return (
    <div className={s.searchLayout}>
      <div className={s.icon}>
        <Icons.UilSearch width="1.4em" height="1.4em" color="#093ede" />
      </div>

      <input
        type="search"
        onChange={onChange}
        placeholder="Search GitHub username..."
        className={s.search}
      />

      <button onClick={onSearchClicked} className={s.button}>
        Search
      </button>
    </div>
  );
};
