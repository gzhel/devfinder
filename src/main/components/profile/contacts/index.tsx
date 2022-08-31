// @ts-ignore
import * as Icons from '@iconscout/react-unicons';
import React from 'react';
import { ContactCell } from './cell';
import { LocalGithubUser } from '../../../types';

type Props = {
  data: LocalGithubUser;
};
export const Contacts = ({ data }: Props) => {
  return (
    <div style={{ width: '100%' }}>
      <ContactCell field={data.location} icon="location" />

      <ContactCell
        field={data.twitter ? `@${data.twitter}` : null}
        link={data.twitter ? `https://twitter.com/${data.twitter}` : null}
        icon="twitter"
      />

      <ContactCell
        field={data.blog && data.blog?.length > 25 ? data.blog.slice(0, 25) + '...' : data.blog}
        link={data.blog}
        icon="blog"
      />

      <ContactCell field={data.company} icon="company" />
    </div>
  );
};
