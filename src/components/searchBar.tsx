import React from 'react';
import { Button } from '@/components/ui/button';
import SearchIcon from '@/svg/searchIcon';

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <form className="w-[500px] relative">
      <div className="relative">
        <input
          type="search"
          placeholder="Type here..."
          className="w-full h-10 p-4 text-sm rounded-full bg-[#383838] text-white focus:outline-none"
        />
        <Button variant="seachIcon">
          <SearchIcon />
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
