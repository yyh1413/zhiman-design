import React, { type FC, type CSSProperties } from 'react';

interface FooProps {
  title: string;
  className?: string;
  style?: CSSProperties;
}

const Foo: FC<FooProps> = ({ title, className, style }) => (
  <h4 className={className} style={style}>
    {title}
  </h4>
);

export default Foo;
