import { Props } from './index';

export const useModel = (p: Props) => {
  let placeholder = 'Search GitHub username...';
  if (!!p.existError) placeholder = p.existError;

  const handleEnter = (event: { code: string }) => {
    if (!!p.searchValue && event.code === 'Enter') {
      p.handleSearch();
    }
  };

  return { placeholder, handleEnter };
};
