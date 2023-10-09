import React from 'react';
import { StyledMain } from './style';

interface Props {
  children: React.ReactNode;
  backgroundColor?: string;
}

const RootLayout: React.FC<Props> = ({ children, backgroundColor }) => {
  return (
    <>
      <header />
      <StyledMain style={{ backgroundColor }}>{children}</StyledMain>
      <footer />
    </>
  );
};

export default RootLayout;
