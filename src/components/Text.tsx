import React from 'react';

const colors = {
  'white': 'text-white',
};

interface Props {
  as?: keyof JSX.IntrinsicElements;
  color?: keyof typeof colors;
  className?: string;
  children: React.ReactNode;
}

const Text = ({ as: Component = 'span', color, className, children }: Props) => {
  return (
    <Component className={`${color ? colors[color] : ''} ${className}`}>{children}</Component>
  );
};

export default Text;
