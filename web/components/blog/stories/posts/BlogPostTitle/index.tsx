import type { FC, ReactElement } from 'react';

import type { BlogPostTitleProps } from './props';

// import IconButton from '~/components/IconButton';
import InfoTextIcon from './InfoTextIcon';
import { BLOG_POST_TITLE_TEST_IDS } from '~/constants/testIds/blog/blogDetails/blogPostTitle';
import { BLOG_POST_TITLE_TEXT } from '~/constants/text/blog/blogPostTitle';

const BlogPostTitle: FC<BlogPostTitleProps> = ({
  // handleOnClickHeart,
  // handleOnClickShare,
  // handleOnClickMore,
  // heartText,
  // messageText,
  // showText,
  tags,
  cities,
  title,
  subtitle,
  date,
}: BlogPostTitleProps): ReactElement => {
  return (
    <div className="flex flex-row pointer-events-none w-full">
      <div className="flex flex-col items-start gap-4">
        <p className="flex flex-wrap gap-x-2">
          {tags.map(tag => (
            <span key={tag} className="font-epilogue-bold text-primary-color">
              {tag}
            </span>
          ))}
        </p>
        <h1 className="text-3xl" data-testid={BLOG_POST_TITLE_TEST_IDS.TITLE}>
          {title}
        </h1>
        <p className="text-2xl" data-testid={BLOG_POST_TITLE_TEST_IDS.SUBTITLE}>
          {subtitle}
        </p>

        <p className="pt-1 px-1 uppercase bg-primary-background border-primary-color border font-bold">
          {cities[0]} City
        </p>

        <div className="flex items-center self-stretch justify-between relative">
          <div className="flex items-start relative gap-4">
            {/* <InfoTextIcon
              imgSrc={BLOG_POST_TITLE_TEXT.SHOW_IMAGE}
              imgAlt={BLOG_POST_TITLE_TEXT.SHOW_IMAGE_ALT}
              imgTestId={BLOG_POST_TITLE_TEST_IDS.SHOW_IMAGE}
              textTestId={BLOG_POST_TITLE_TEST_IDS.SHOW_IMAGE_TEXT}
              text={showText}
            />
            <InfoTextIcon
              imgSrc={BLOG_POST_TITLE_TEXT.MESSAGE_IMAGE}
              imgAlt={BLOG_POST_TITLE_TEXT.MESSAGE_IMAGE_ALT}
              imgTestId={BLOG_POST_TITLE_TEST_IDS.MESSAGE_IMAGE}
              textTestId={BLOG_POST_TITLE_TEST_IDS.MESSAGE_IMAGE_TEXT}
              text={messageText}
            /> */}
            <InfoTextIcon
              imgSrc={BLOG_POST_TITLE_TEXT.UPDATE_IMAGE}
              imgAlt={BLOG_POST_TITLE_TEXT.UPDATE_IMAGE_ALT}
              imgTestId={BLOG_POST_TITLE_TEST_IDS.UPDATE_IMAGE}
              textTestId={BLOG_POST_TITLE_TEST_IDS.UPDATE_IMAGE_TEXT}
              text={date}
            />
          </div>
          {/* <div className="flex items-start relative gap-2 ">
            <div className="flex items-center justify-center h-8 p-2 gap-2 bg-primary-color">
              <IconButton
                type={'button'}
                value={'heart'}
                name={'_action'}
                onClick={handleOnClickHeart}
                additionalClassNames={'h-4  w-5'}
                imgSrc={BLOG_POST_TITLE_TEXT.HEART_IMAGE}
                imgAlt={BLOG_POST_TITLE_TEXT.HEART_IMAGE_ALT}
                imgTestId={BLOG_POST_TITLE_TEST_IDS.HEART_IMAGE}
                testId={BLOG_POST_TITLE_TEST_IDS.HEART_IMAGE_BUTTON}
              />
              <p
                className="leading-5 -mt-1 -mb-px tracking-normal whitespace-no-wrap epilogue-normal-white-14px-22"
                data-testid={BLOG_POST_TITLE_TEST_IDS.HEART_IMAGE_TEXT}>
                {heartText}
              </p>
            </div>

            <div className="flex items-center justify-center h-8 p-2 w-8 gap-2 bg-primary-color">
              <IconButton
                type={'button'}
                value={'share'}
                name={'_action'}
                onClick={handleOnClickShare}
                additionalClassNames={'h-4  w-5'}
                imgSrc={BLOG_POST_TITLE_TEXT.SHARE_IMAGE}
                imgAlt={BLOG_POST_TITLE_TEXT.SHARE_IMAGE_ALT}
                imgTestId={BLOG_POST_TITLE_TEST_IDS.SHARE_IMAGE}
                testId={BLOG_POST_TITLE_TEST_IDS.SHARE_IMAGE_BUTTON}
              />
            </div>
            <div className="flex items-center justify-center h-8 p-2 relative gap-2 bg-primary-color">
              <IconButton
                type={'button'}
                value={'more'}
                name={'_action'}
                onClick={handleOnClickMore}
                additionalClassNames={'h-4  w-5'}
                imgSrc={BLOG_POST_TITLE_TEXT.MORE_HORIZONTAL_IMAGE}
                imgAlt={BLOG_POST_TITLE_TEXT.MORE_HORIZONTAL_IMAGE_ALT}
                imgTestId={BLOG_POST_TITLE_TEST_IDS.MORE_HORIZONTAL_IMAGE}
                testId={BLOG_POST_TITLE_TEST_IDS.MORE_HORIZONTAL_IMAGE_BUTTON}
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BlogPostTitle;
