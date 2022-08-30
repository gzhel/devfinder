import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

export const useModel = () => {
  // config
  const url = new URL(location.origin);
  const [lockUI, setLockUI] = useState(false);

  // profile
  const profileInitial = {
    avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
    name: 'User',
    created_at: new Date(),
    login: null,
    bio: null,
    public_repos: 0,
    followers: 0,
    following: 0,
    location: null,
    twitter_username: null,
    blog: null,
    company: null
  };
  const [profileData, setProfileData] = useState(profileInitial);

  // search
  const [searchValue, setSearchValue] = useState('');
  const handleInput = useCallback(
    (evt) => {
      const val = evt.target.value;
      setSearchValue(val);
      if (!!val) url.searchParams.append('user', val);
      history.replaceState({}, '', `${url.origin}/${url.search}`);
    },
    [searchValue]
  );

  // api
  const getProfileData = useCallback(
    async (user) => {
      setLockUI(true);
      try {
        const resp = await axios({
          method: 'get',
          url: `https://api.github.com/users/${user}`
        });
        await setProfileData(resp.data);
      } catch (error) {
        console.error(error);
      }
      setLockUI(false);
    },
    [searchValue]
  );

  useEffect(() => {
    let queryParams = {};
    location.search
      .substring(1)
      .split('&')
      .forEach((i) => {
        let param = i.split('=');
        queryParams[param[0]] = param[1];
      });
    if (!!queryParams.user) {
      setSearchValue(queryParams.user);
      (async () => await getProfileData(queryParams.user))();
    }
  }, []);

  const handleSearch = async () => {
    await getProfileData(searchValue);
  };

  return {
    searchValue,
    handleInput,
    handleSearch,
    profileData,
    lockUI
  };
};
