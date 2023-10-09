import React, { ReactNode, useEffect, useState } from 'react';

interface Props {
  children: ReactNode;
}

const ClientSideComponent: React.FC<Props> = ({ children }) => {
  const [isMounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    if (!isMounted) {
      setMounted(true);
    }
  });

  if (!isMounted) {
    return <div />;
  }

  return <div>{children}</div>;
};

export default ClientSideComponent;
