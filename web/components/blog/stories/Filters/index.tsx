import SearchInput from '~/components/searchInput';
import { STORIES_FILTERS_TEXT } from '~/constants/text/stories';
import FilterTab from '../FilterTab';

const Filters = () => {
  return (
    <div className="flex flex-col w-full gap-y-2">
      <SearchInput additionalClassNames="md:hidden flex w-11/12 sm:w-4/5 max-w-7xl m-auto" />
      <div className="flex gap-3 w-11/12 sm:w-4/5 max-w-7xl overflow-y-auto m-auto pb-2">
        <FilterTab active text={STORIES_FILTERS_TEXT.TAB_TEXT_1} />
        <FilterTab text={STORIES_FILTERS_TEXT.TAB_TEXT_2} />
        <FilterTab text={STORIES_FILTERS_TEXT.TAB_TEXT_3} />
        <FilterTab text={STORIES_FILTERS_TEXT.TAB_TEXT_4} />
        <FilterTab text={STORIES_FILTERS_TEXT.TAB_TEXT_5} />
        <FilterTab text={STORIES_FILTERS_TEXT.TAB_TEXT_6} />

        <SearchInput additionalClassNames="hidden md:flex last:ml-auto" />
      </div>
    </div>
  );
};

export default Filters;
