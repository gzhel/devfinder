// @ts-ignore
import * as Icons from '@iconscout/react-unicons';
import React from 'react';
import s from './index.module.scss';
import { LocalGithubUser } from '../../types';
import { Contacts } from './contacts';
import { Stats } from './stats';
import { Title } from './title';
import { GitHubLink } from './github-link';
import { Bio } from './bio';

type Props = {
  data: LocalGithubUser;
};
export const Profile = ({ data }: Props) => {
  return (
    <div className={s.profileLayout}>
      <div className={s.iconLayout}>
        <div
          className={s.icon}
          style={{
            backgroundImage: `url(${data.avatar})`
          }}
        />
      </div>

      <div className={s.infoLayout}>
        <Title data={data} />

        <GitHubLink data={data} />

        <Bio data={data} />

        <Stats data={data} />

        <Contacts data={data} />
      </div>
    </div>
  );
};
