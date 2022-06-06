import type { User } from "@ngneat/falso";

export interface ItemType {
  date: string;
  tags?: string[];
  title: string;
  text: string;
  icon?: string;
  image: string;
}

export interface KoppelingType {
  title: string;
  description: string;
  url: string;
}

export interface QuestionType {
  question: string;
  answer: string;
}

export interface Bericht {
  id: string;
  title: string;
  date: Date;
  image: string;
  text: string;
}

export interface Verjaardag {
  id: string;
  date: Date;
  user: User;
}
