import React, { ReactNode, useEffect, useState, Suspense } from 'react';

interface Props {
  fallback?: ReactNode;
  children: ReactNode;
}

const ClientSideSuspense: React.FC<Props> = ({ fallback, children }) => {
  const [isMounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    if (!isMounted) {
      setMounted(true);
    }
  });

  return <Suspense fallback={fallback}>{!isMounted ? fallback : children}</Suspense>;
};

export default ClientSideSuspense;
