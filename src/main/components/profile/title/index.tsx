import moment from 'moment/moment';
import React from 'react';
import s from './index.module.scss';
import type { LocalGithubUser } from '../../../types';

type Props = {
  data: LocalGithubUser;
};
export const Title = ({ data }: Props) => (
  <div className={s.row}>
    <span className={s.name}>{data.name}</span>
    {!data.created ? null : (
      <span className={s.created}>Joined {moment(data.created).format('MMM Do YYYY')}</span>
    )}
  </div>
);
