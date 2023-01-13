import type { FC } from 'react';
import { STORIES_FILTERS_TEST_IDS } from '~/constants/testIds/stories';
import type { FilterTabProps } from './props';

const FilterTab: FC<FilterTabProps> = ({ text, active, onClick }: FilterTabProps) => {
  return (
    <button
      data-testid={STORIES_FILTERS_TEST_IDS.TAB_TEXT}
      type="button"
      onClick={onClick}
      className={`bg-primary-background min-w-max border-primary-color border py-2 px-8 md:text-sm ${
        active ? 'bg-primary-color' : ''
      }`}>
      {text}
    </button>
  );
};
export default FilterTab;
