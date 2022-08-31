import { LocalGithubUser } from '../../../types';
import s from './index.module.scss';
import React from 'react';

type Props = {
  data: LocalGithubUser;
};
export const GitHubLink = ({ data }: Props) => (
  <div className={s.row}>
    {!data.login ? (
      <span className={s.placeholder}>Not Available</span>
    ) : (
      <a
        href={`https://github.com/${data.login}`}
        target="_blank"
        className={s.link}
        rel="noreferrer"
      >
        @{data.login}
      </a>
    )}
  </div>
);
