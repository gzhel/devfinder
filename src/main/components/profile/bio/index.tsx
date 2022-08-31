import { LocalGithubUser } from '../../../types';
import s from './index.module.scss';
import React from 'react';

type Props = {
  data: LocalGithubUser;
};
export const Bio = ({ data }: Props) => (
  <div className={s.row}>
    {!data.bio ? (
      <span className={s.placeholder}>This profile has no bio</span>
    ) : (
      <span className={s.bio}>{data.bio}</span>
    )}
  </div>
);
