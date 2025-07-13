import React from 'react';

import { marketingMount } from 'marketing/MarketingApp';
import { useRef } from 'react';
import { useEffect } from 'react';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    marketingMount(ref.current);
  }, []);

  return <div ref={ref} />;
};
