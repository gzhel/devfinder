import React, { useCallback, useEffect, useState } from 'react';
import s from './index.module.scss';
import * as Icons from '@iconscout/react-unicons';

export const Search = () => {
  const url = new URL(location.origin);
  const [searchQuery, setSearchQuery] = useState();
  const onChange = useCallback(
    (evt) => {
      const value = evt.target.value;
      setSearchQuery(value);
      if (!!value) url.searchParams.append('user', value);
      history.replaceState({}, '', `${url.origin}/${url.search}`);
    },
    [searchQuery]
  );
  const onSearchClicked = useCallback(() => console.log(searchQuery), []);
  useEffect(() => {
    return () => url.searchParams.delete('user');
  }, []);

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
