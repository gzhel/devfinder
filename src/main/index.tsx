import React from 'react';
import { Search } from './components/search';
import { Profile } from './components/profile';
import { useModel } from './model';
import './styles/theme.scss';
import './styles/reset.scss';
import s from './index.module.scss';
import { Header } from './components/header';
import { Footer } from './components/footer';

export const App = () => {
  const m = useModel();

  return (
    <div className={s.app}>
      <Header />
      <div className={s.content}>
        <Search
          searchValue={m.searchValue}
          handleInput={m.handleInput}
          handleSearch={m.handleSearch}
          lockUI={m.lockUI}
          existError={m.existError}
        />
        <Profile data={m.profileData} />
      </div>
      <Footer />
    </div>
  );
};
