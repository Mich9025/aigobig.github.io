import { LucideIcon } from 'lucide-react';

export enum SlideType {
  HERO = 'HERO',
  PROBLEM = 'PROBLEM',
  SOLUTION = 'SOLUTION',
  METRICS = 'METRICS',
  CASES = 'CASES',
  CONTACT = 'CONTACT'
}

export type SlideTheme = 'dark' | 'light';

export interface MetricItem {
  value: string;
  label: string;
  subLabel: string;
}

export interface CaseStudy {
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  logoColor?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface SlideData {
  id: number;
  type: SlideType;
  theme: SlideTheme;
  title: string;
  subtitle?: string;
  content?: string[];
  metrics?: MetricItem[];
  cases?: CaseStudy[];
  process?: ProcessStep[];
}