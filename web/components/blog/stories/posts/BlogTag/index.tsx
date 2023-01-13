import { BLOG_TAG_TEST_IDS } from '~/constants/testIds/blog/blogDetails/blogTags';
import { BLOG_TAG_TEXT } from '~/constants/text/blog/blogTags';
import type { BlogTagProps } from './props';

const BlogTag = ({ name }: BlogTagProps) => (
  <div className="h-6 w-fit px-2 py-4 flex items-center text-sm bg-primary-background border-primary-color border m-1">
    <span data-testid={BLOG_TAG_TEST_IDS.HASTAG}>{BLOG_TAG_TEXT.HASTAG}</span>
    <span data-testid={BLOG_TAG_TEST_IDS.TAG_NAME_BLOG_TAG_TEST_ID}>{name}</span>
  </div>
);
export default BlogTag;
