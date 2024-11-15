interface Media {
  file_path: string;
  thumb_file_path: string;
}

export interface MainCategory {
  title: string;
  sub_title: string;
  short_description: string;
  browser_title: string;
  media: Media;
  media2: Media;
  priority: number;
  menu_priority: number;
}

export type MainCategoryResponse = MainCategory[]; 

interface CategoryMedia {
  file_path: string;
}

export interface Category {
  title: string;
  slug: string;
  short_description: string;
  media: CategoryMedia;
  count: number;
}

export type CategoryResponse = Category[];
