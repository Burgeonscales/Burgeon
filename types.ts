import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface CaseStudy {
  id: string;
  creatorName: string;
  niche: string;
  revenueIncrease: string;
  image: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}