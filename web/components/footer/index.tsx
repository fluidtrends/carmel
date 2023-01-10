import { FOOTER_TEXTS } from '~/text/footer';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomLink = (props: any) => {
  return props.to.indexOf('https') !== -1 ? (
    <a href={props.to} target="_blank" rel="noreferrer">
      <div className="leading-6 md:text-base text-sm font-semibold cursor-pointer pb-2">{props.text}</div>
    </a>
  ) : (
    <a href={props.to}>
      <div className="leading-6 md:text-base text-sm font-semibold cursor-pointer pb-2">{props.text}</div>
    </a>
  );
};

const LinksPrimary = () => (
  <div className="flex flex-col items-start">
      <div className="leading-6 md:text-xl text-lg font-epilogue-bold pb-4">{FOOTER_TEXTS.MENU.TITLE}</div>
      <CustomLink to={FOOTER_TEXTS.MENU.LINK_1} text={FOOTER_TEXTS.MENU.TEXT_1} />
      <CustomLink to={FOOTER_TEXTS.MENU.LINK_2} text={FOOTER_TEXTS.MENU.TEXT_2} />
      <CustomLink to={FOOTER_TEXTS.MENU.LINK_3} text={FOOTER_TEXTS.MENU.TEXT_3} />
  </div>
)

const LinksSecondary = () => (
  <div className="flex flex-col items-start">
    <div className="leading-6 md:text-xl text-lg font-epilogue-bold pb-4">{FOOTER_TEXTS.MENU.TITLE2}</div>
    <CustomLink to={FOOTER_TEXTS.MENU.LINK_4} text={FOOTER_TEXTS.MENU.TEXT_4} />
    <CustomLink to={FOOTER_TEXTS.MENU.LINK_5} text={FOOTER_TEXTS.MENU.TEXT_5} />
    <CustomLink to={FOOTER_TEXTS.MENU.LINK_6} text={FOOTER_TEXTS.MENU.TEXT_6} />
  </div>
)

export default () => (
  <div className="relative lg:pt-10 pt-20 w-full">
    <img
      className="xl:w-2000 sm:h-700 sm:w-1400 h-450 w-900 bottom-0 object-cover overflow-hidden"
      src="/images/footer.webp"
      alt="footer"
    />
    <footer className="footer p-10 bg-dark-green border border-t border-primary-color">
      <div>
        <img
          className="w-48"
           src="/images/logo/logo-white-with-white-text.svg"
          />
        <h3 className="text-xs">The Innovation Nation</h3>
      </div> 
      <LinksPrimary/>
      <LinksSecondary/>
    </footer>
  </div>
);