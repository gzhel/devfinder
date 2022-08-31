import React from 'react';
import { Search } from './components/search';
import { Profile } from './components/profile';
import { useModel } from './model';
import './styles/theme.scss';
import './styles/reset.scss';
import s from './index.module.scss';
import { Header } from './components/header';

export const App = () => {
  const m = useModel();

  return (
    <div className={s.app}>
      <Header />
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
