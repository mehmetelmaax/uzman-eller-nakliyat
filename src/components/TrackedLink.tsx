'use client';

import React from 'react';
import { trackEvent } from '@/lib/analytics';

interface TrackedLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  eventName: string;
  eventParams?: Record<string, any>;
  children: React.ReactNode;
}

export default function TrackedLink({ eventName, eventParams, children, ...props }: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(e) => {
        trackEvent(eventName, eventParams || {});
        if (props.onClick) props.onClick(e);
      }}
    >
      {children}
    </a>
  );
}
