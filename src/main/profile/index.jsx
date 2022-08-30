import React from 'react';
import s from './index.module.scss';
import * as Icons from '@iconscout/react-unicons';
import cls from 'classnames';
import moment from 'moment';

const ContactCell = (p) => {
  const { field } = p;
  return (
    <span className={cls(s.text, s.contactText, { [s.disabled]: !field })}>
      {!field ? 'Not available' : field}
    </span>
  );
};

export const Profile = (p) => {
  const { data } = p;

  return (
    <div className={s.profileLayout}>
      <div className={s.iconLayout}>
        <div
          className={s.icon}
          style={{
            backgroundImage: `url(${data.avatar_url})`
          }}
        />
      </div>
      <div className={s.infoLayout}>
        <div className={s.row}>
          <span className={s.fullName}>{data.name}</span>
          <span className={s.text}>Joined {moment(data.created_at).format('MMM Do YY')}</span>
        </div>

        <div className={s.row}>
          {!data.login ? (
            'Not Available'
          ) : (
            <a
              href={`https://github.com/${data.login}`}
              target="_blank"
              className={s.githubLink}
              rel="noreferrer"
            >
              @{data.login}
            </a>
          )}
        </div>

        <div className={s.row}>
          <span className={cls(s.text, { [s.disabled]: !data.bio })}>
            {!data.bio ? 'This profile has no bio' : data.bio}
          </span>
        </div>

        <div className={s.stats}>
          <div className={s.stat}>
            <span>Repos</span>
            <span>{data.public_repos}</span>
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
              color={`rgba(255, 255, 255, ${!data.location ? 0.5 : 1})`}
            />
            <ContactCell field={data.location} />
          </div>

          <div className={s.contact}>
            <Icons.UilTwitter
              size="1.8em"
              color={`rgba(255, 255, 255, ${!data?.twitter_username ? 0.5 : 1})`}
            />
            <ContactCell field={data.twitter_username} />
          </div>

          <div className={s.contact}>
            <Icons.UilLink size="1.8em" color={`rgba(255, 255, 255, ${!data?.blog ? 0.5 : 1})`} />
            <ContactCell field={data.blog} />
          </div>

          <div className={s.contact}>
            <Icons.UilBuilding
              size="1.8em"
              color={`rgba(255, 255, 255, ${!data?.company ? 0.5 : 1})`}
            />
            <ContactCell field={data.company} />
          </div>
        </div>
      </div>
    </div>
  );
};
