import React from 'react';
import s from './index.module.scss';
import * as Icons from '@iconscout/react-unicons';
import cls from 'classnames';

export const Profile = () => {
  const data = {
    fullName: 'The Octocat',
    joinDate: '25 Jan 2011',
    bio: null, // optional
    repos: 8,
    followers: 3938,
    following: 9,
    address: null, // optional
    twitter: null, // optional
    site: null, // optional
    organization: null // optional,
  };

  const username = 'octocat';

  return (
    <div className={s.profileLayout}>
      <div className={s.iconLayout}>
        <div className={s.icon} />
      </div>
      <div className={s.infoLayout}>
        <div className={s.row}>
          <span className={s.fullName}>{data.fullName}</span>
          <span className={s.text}>Joined {data.joinDate}</span>
        </div>

        <div className={s.row}>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            className={s.githubLink}
            rel="noreferrer"
          >
            @{username}
          </a>
        </div>

        <div className={s.row}>
          <span className={cls(s.text, { [s.disabled]: !data.address })}>
            {!data.bio ? 'This profile has no bio' : data.bio}
          </span>
        </div>

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

        <div className={s.contacts}>
          <div className={s.contact}>
            <Icons.UilMapMarker
              size="1.8em"
              color={`rgba(255, 255, 255, ${!data.address ? 0.5 : 1})`}
            />
            <span className={cls(s.text, s.contactText, { [s.disabled]: !data.address })}>
              {!data.address ? 'Not available' : data.address}
            </span>
          </div>

          <div className={s.contact}>
            <Icons.UilTwitter
              size="1.8em"
              color={`rgba(255, 255, 255, ${!data.twitter ? 0.5 : 1})`}
            />
            <span className={cls(s.text, s.contactText, { [s.disabled]: !data.twitter })}>
              {!data.twitter ? 'Not available' : data.twitter}
            </span>
          </div>

          <div className={s.contact}>
            <Icons.UilLink size="1.8em" color={`rgba(255, 255, 255, ${!data.site ? 0.5 : 1})`} />
            <span className={cls(s.text, s.contactText, { [s.disabled]: !data.site })}>
              {!data.site ? 'Not available' : data.site}
            </span>
          </div>

          <div className={s.contact}>
            <Icons.UilBuilding
              size="1.8em"
              color={`rgba(255, 255, 255, ${!data.organization ? 0.5 : 1})`}
            />
            <span className={cls(s.text, s.contactText, { [s.disabled]: !data.organization })}>
              {!data.organization ? 'Not available' : data.organization}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
