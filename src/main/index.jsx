import React from 'react';
import { Search } from './search';
import s from './index.module.scss';
import { Profile } from './profile';
import { useModel } from './model';

export const App = () => {
  const m = useModel();

  return (
    <div className={s.app}>
      <Search
        searchValue={m.searchValue}
        handleInput={m.handleInput}
        handleSearch={m.handleSearch}
        lockUI={m.lockUI}
      />
      <Profile data={m.profileData} />
    </div>
  );
};
