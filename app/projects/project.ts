/* Defines the project entity */

export interface Iproject {
  id: number;
  title: string;
  description: string;
  startAt: string;
  endAt: string;
  importance: number;
  img: string;
  region: Object;
  imageUrl: string;
  isFeatured: boolean;
  language: Object;
  capacity: number;
}
