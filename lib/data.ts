import raw from "@/data/data.json";

export interface Module {
  id: string;
  title: string;
  duration: string;
  isCompleted: boolean;
  videoUrl: string;
  description: string;
  notes: string[];
  resources: { id: string; title: string; type: string; size: string; url: string }[];
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  category: string;
  thumbnail: string;
  duration: string;
  lessons: number;
  rating: number;
  reviews: number;
  price: number;
  isFree: boolean;
  isPurchased: boolean;
  progress: number;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  modules: Module[];
  tags: string[];
}

export interface Product {
  id: string;
  title: string;
  category: "physical" | "digital";
  subcategory: string;
  price: number;
  originalPrice: number;
  thumbnail: string;
  description: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  badge?: string;
  features: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  thumbnail: string;
  tags: string[];
}

export interface Quiz {
  id: string;
  courseId: string;
  title: string;
  questions: {
    id: string;
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
  timeLimit: number;
}

const data = raw as {
  COURSES: Course[];
  PRODUCTS: Product[];
  NEWS_ITEMS: NewsItem[];
  QUIZZES: Quiz[];
  CATEGORIES: string[];
  STORE_CATEGORIES: string[];
};

export const COURSES = data.COURSES;
export const PRODUCTS = data.PRODUCTS;
export const NEWS_ITEMS = data.NEWS_ITEMS;
export const QUIZZES = data.QUIZZES;
export const CATEGORIES = data.CATEGORIES;
export const STORE_CATEGORIES = data.STORE_CATEGORIES;

export const getCourse = (id: string) => COURSES.find((c) => c.id === id);
export const getProduct = (id: string) => PRODUCTS.find((p) => p.id === id);
export const getNews = (id: string) => NEWS_ITEMS.find((n) => n.id === id);
