import React from 'react';
import s from './index.module.scss';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <span>
        Developed by{' '}
        <a href="https://gzhel.vercel.app" target="_blank" rel="noreferrer" className={s.link}>
          Gregory Zhelyabin
        </a>{' '}
        in 2022
      </span>
    </footer>
  );
};
