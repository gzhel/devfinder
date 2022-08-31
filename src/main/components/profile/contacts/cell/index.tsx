// @ts-ignore
import * as Icons from '@iconscout/react-unicons';
import s from './index.module.scss';
import React from 'react';

type Props = {
  field: string | null;
  link?: string | null;
  icon: string;
};

export const ContactCell = ({ field, link, icon }: Props) => {
  let Icon;

  switch (icon) {
    case 'location': {
      Icon = <Icons.UilMapMarker size="1.8em" color="var(--profile-contact-icon)" />;
      break;
    }
    case 'twitter': {
      Icon = <Icons.UilTwitter size="1.8em" color="var(--profile-contact-icon)" />;
      break;
    }
    case 'blog': {
      Icon = <Icons.UilLink size="1.8em" color="var(--profile-contact-icon)" />;
      break;
    }
    case 'company': {
      Icon = <Icons.UilBuilding size="1.8em" color="var(--profile-contact-icon)" />;
      break;
    }
    default: {
      break;
    }
  }

  if (link) {
    return !field ? (
      <div className={s.layout}>
        {Icon}
        <a href={link} target="_blank" className={s.contact} rel="noreferrer">
          <span className={s.placeholder}>Not available</span>
        </a>
      </div>
    ) : (
      <div className={s.layout}>
        {Icon}
        <a href={link} target="_blank" className={s.contact} rel="noreferrer">
          {field.length > 20 ? field.slice(0, 20) + '...' : field}
        </a>
      </div>
    );
  }

  return !field ? (
    <div className={s.layout}>
      {Icon}
      <span className={s.contact}>
        <span className={s.placeholder}>Not available</span>
      </span>
    </div>
  ) : (
    <div className={s.layout}>
      {Icon}
      <span className={s.contact}>{field.length > 20 ? field.slice(0, 20) + '...' : field}</span>
    </div>
  );
};
