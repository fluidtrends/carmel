import IconButton from '../../../common/IconButton';
import type { BlogFooterProps } from './props';
import { BLOG_FOOTER_TEXT } from '~/constants/text/blog/blogFooter';
import { BLOG_FOOTER_TEST_IDS } from '~/constants/testIds/blog/blogDetails/blogFooter';
import BlogTags from '../BlogTag';

const BlogFooter = ({ comments, likes }: BlogFooterProps) => (
  <>
    <div className="w-full gap-8">
      <div className="w-full flex items-center justify-start my-8">
        <p className="text-md pr-2" data-testid={BLOG_FOOTER_TEST_IDS.TAG_TEXT_BLOG_TAG}>
          {BLOG_FOOTER_TEXT.BLOG_TAG}
        </p>
        <BlogTags name={'Netfly'} />
        <BlogTags name={'Rare'} />
        <BlogTags name={'Crypto'} />
      </div>
      <div className="flex justify-between items-center gap-4 my-8">
        <button
          className="bg-primary-color px-8 h-11 flex justify-center items-center cursor-pointer"
          data-testid={BLOG_FOOTER_TEST_IDS.BUTTON_COMMENTS}>
          <span data-testid={BLOG_FOOTER_TEST_IDS.NUMBER_COMMENTS}>{comments} </span>
          <span data-testid={BLOG_FOOTER_TEST_IDS.COMMENTS_BLOG_FOOTER_TEST_ID}>{BLOG_FOOTER_TEXT.COMMENT_TEXT}</span>
        </button>
        <div className="flex gap-4">
          <button
            className="bg-primary-color px-3 h-11 flex justify-center items-center cursor-pointer"
            data-testid={BLOG_FOOTER_TEST_IDS.BUTTON_LIKES}>
            <span>
              <img src={BLOG_FOOTER_TEXT.LOVE_IMAGE} alt={BLOG_FOOTER_TEXT.IMAGE_LOVE_ALT} />
            </span>
            <span data-testid={BLOG_FOOTER_TEST_IDS.LIKES_NUMBER}>{likes}</span>
          </button>
          <IconButton
            type={'button'}
            value={'share'}
            name={'_action'}
            testId={BLOG_FOOTER_TEST_IDS.BUTTON_SHARE}
            imgSrc={BLOG_FOOTER_TEXT.SHARE_IMAGE}
            imgAlt={BLOG_FOOTER_TEXT.IMAGE_SHARE_ALT}
            imgTestId={BLOG_FOOTER_TEST_IDS.BUTTON_SHARE_IMAGE}
          />
          <IconButton
            type={'button'}
            value={'option'}
            name={'_action'}
            testId={BLOG_FOOTER_TEST_IDS.BUTTON_OPTION}
            imgSrc={BLOG_FOOTER_TEXT.OPTION_IMAGE}
            imgAlt={BLOG_FOOTER_TEXT.IMAGE_OPTION_ALT}
            imgTestId={BLOG_FOOTER_TEST_IDS.BUTTON_OPTION_IMAGE}
          />
        </div>
      </div>
    </div>
  </>
);
export default BlogFooter;
