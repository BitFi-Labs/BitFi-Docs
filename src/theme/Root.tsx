import React from 'react';
import '../polyfills/requireResolveWeak';

export default function Root({children}: {children: React.ReactNode}) {
  return <>{children}</>;
}
