import { LocalGithubUser } from '../../../types';
import s from './index.module.scss';
import React from 'react';

type Props = {
  data: LocalGithubUser;
};
export const Stats = ({ data }: Props) => {
  return (
    <div className={s.stats}>
      <div className={s.stat}>
        <span>Repos</span>
        <span>{data.repos}</span>
      </div>
      <div className={s.stat}>
        <span>Followers</span>
        <span>{data.followers}</span>
      </div>
      <div className={s.stat}>
        <span>Following</span>
        <span>{data.following}</span>
      </div>
    </div>
  );
};
