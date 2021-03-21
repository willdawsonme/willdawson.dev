import React from 'react';

interface Props {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const TextLink = ({ href, className, children }: Props) => {
  return (
    <a href={href} className={`underline text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors ${className}`}>{children}</a>
  );
};

export default TextLink;
