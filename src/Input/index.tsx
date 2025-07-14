import React, { type FC, type InputHTMLAttributes } from 'react';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  size?: 'large' | 'middle' | 'small';
  disabled?: boolean;
  maxLength?: number;
  allowClear?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  placeholder,
  value,
  defaultValue,
  size = 'middle',
  disabled,
  maxLength,
  onChange,
  onPressEnter,
  onFocus,
  onBlur,
  className,
  style,
  ...rest
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onPressEnter) {
      onPressEnter(e);
    }
  };

  const getSizeStyle = () => {
    switch (size) {
      case 'large':
        return { height: '40px', padding: '6.5px 11px', fontSize: '16px' };
      case 'small':
        return { height: '24px', padding: '0px 7px', fontSize: '12px' };
      default:
        return { height: '32px', padding: '4px 11px', fontSize: '14px' };
    }
  };

  const inputStyle = {
    border: '1px solid #d9d9d9',
    borderRadius: '6px',
    outline: 'none',
    transition: 'all 0.3s',
    ...getSizeStyle(),
    ...style,
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      disabled={disabled}
      maxLength={maxLength}
      onChange={onChange}
      onKeyDown={handleKeyDown}
      onFocus={onFocus}
      onBlur={onBlur}
      className={className}
      style={inputStyle}
      {...rest}
    />
  );
};

export default Input;
