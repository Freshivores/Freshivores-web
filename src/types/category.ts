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

export interface Category {
  title: string;
  slug: string;
  short_description: string;
  media: {
    file_path: string;
  };
  count: number;
}

export interface HeaderCategory {
  title: string;
  slug: string;
  priority: number;
  menu_priority: number;
  media2: {
    file_path: string;
    thumb_file_path: string;
  };
}

export type MainCategoryResponse = MainCategory[];
export type CategoryResponse = Category[];
export type HeaderCategoryResponse = HeaderCategory[];
