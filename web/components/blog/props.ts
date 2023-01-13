export interface PostProps {
  title: string;
  subtitle: string;
  author: string;
  date: string;
  images: ImageProps;
  tags: string[];
  content_url: string;
  slug: string;
  cities: string[];
}

export interface ImageProps {
  cover_url: string;
  thumbnail_url: string;
}

export interface PostsProps {
  posts: PostProps[];
}

export interface Card extends PostProps {
  additionalClassNames?: string;
}

export interface LatestProps {
  posts: PostProps[];
  more?: boolean;
}

