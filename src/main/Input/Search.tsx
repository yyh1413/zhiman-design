import React, { forwardRef } from "react";
import { BaseInput } from "./index";
import { Search as SearchIcon } from "lucide-react";

export interface SearchInputProps extends React.ComponentProps<typeof BaseInput> {
  onSearch?: (value: string) => void;
}

export const Search = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ onSearch, ...props }, ref) => {
    const [value, setValue] = React.useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      props.onChange?.(e);
    };

    const handleSearch = () => {
      onSearch?.(value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleSearch();
      }
      props.onKeyDown?.(e);
    };

    return (
      <BaseInput
        {...props}
        ref={ref}
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        prefix={<SearchIcon size={16} />}
      />
    );
  }
);

Search.displayName = "InputSearch";