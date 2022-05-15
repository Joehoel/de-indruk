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
