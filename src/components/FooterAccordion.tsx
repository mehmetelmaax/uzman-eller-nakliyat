'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FooterAccordionProps {
  title: string;
  children: React.ReactNode;
}

export default function FooterAccordion({ title, children }: FooterAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full lg:w-auto flex justify-between items-center lg:pointer-events-none text-left focus:outline-none border-b border-white/5 pb-2 lg:border-none lg:pb-0 cursor-pointer"
      >
        <h4 className="font-display font-bold text-base tracking-wider uppercase border-l-2 border-brand-accent pl-3 text-white">
          {title}
        </h4>
        <span className="lg:hidden text-white/65">
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </span>
      </button>
      
      <div className={`${isOpen ? 'block' : 'hidden lg:block'}`}>
        {children}
      </div>
    </div>
  );
}
