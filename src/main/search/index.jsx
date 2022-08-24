import React, { useCallback, useState } from 'react';

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState();
  const onChange = useCallback((evt) => setSearchQuery(evt.target.value), [searchQuery]);
  const onSearchClicked = useCallback(() => console.log(searchQuery), []);

  return (
    <div>
      <input type="search" onChange={onChange} />
      <button onClick={onSearchClicked}>Search</button>
      {searchQuery}
    </div>
  );
};
