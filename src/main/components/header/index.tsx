// @ts-ignore
import * as Icons from '@iconscout/react-unicons';
import React from 'react';
import { useModel } from './model';
import s from './index.module.scss';

export const Header = () => {
  const m = useModel();

  return (
    <header onClick={() => m.setDark(!m.isDark)} className={s.header}>
      <div className={s.logo}>devfinder</div>
      <div className={s.themeSwitcher}>
        <span className={s.themeText}>{m.themeText}</span>
        {m.isDark ? (
          <Icons.UilSun width="1.4em" height="1.4em" color="var(--palette-color-2)" />
        ) : (
          <Icons.UilMoon width="1.4em" height="1.4em" color="var(--palette-color-7)" />
        )}
      </div>
    </header>
  );
};
