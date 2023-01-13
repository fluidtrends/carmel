import type { Story } from '~/interfaces/blog';

export interface LatestStoriesProps {
  stories: Story[];
  showSeeMoreButton?: boolean;
}
