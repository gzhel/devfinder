import { ChangeEventHandler, useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { defaultUser } from './mocks';
import { extractLocalUser } from './utils';
import { LocalGithubUser } from './types';

export const useModel = () => {
  // config
  const url = new URL(location.origin);
  const [lockUI, setLockUI] = useState(false);
  const [existError, setExistError] = useState('');

  // profile
  const [profileData, setProfileData] = useState<LocalGithubUser>(defaultUser);

  // search
  const [searchValue, setSearchValue] = useState('');
  const handleInput: ChangeEventHandler<HTMLInputElement> = useCallback(
    (evt) => {
      const target = evt.target as HTMLInputElement;
      const val = target.value;
      setSearchValue(val);
      if (!!val) url.searchParams.append('user', val.toLowerCase());
      if (!val) setProfileData(defaultUser);
      history.replaceState({}, '', `${url.origin}/${url.search}`);
    },
    [searchValue]
  );

  // api
  const getProfileData = useCallback(
    async (user: any) => {
      setLockUI(true);
      try {
        const resp = await axios({
          method: 'get',
          url: `https://api.github.com/users/${user}`
        });
        const profile = await extractLocalUser(resp.data);
        await setProfileData(profile);
      } catch (error) {
        setProfileData(defaultUser);
        setSearchValue('');
        setExistError("The user doesn't exist");
        history.replaceState({}, '', url.origin);
      }
      setLockUI(false);
    },
    [searchValue]
  );

  useEffect(() => {
    let queryParams = {
      user: undefined
    };
    location.search
      .substring(1)
      .split('&')
      .forEach((i) => {
        let param = i.split('=');
        // @ts-ignore
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
    lockUI,
    existError
  };
};
