import type { FC, ReactElement } from 'react';
import type { InfoTextIconProps } from './props';

const InfoTextIcon: FC<InfoTextIconProps> = ({
  imgSrc,
  imgAlt,
  imgTestId,
  textTestId,
  text,
}: InfoTextIconProps): ReactElement => {
  return (
    <div className="flex items-center justify-center relative gap-2">
      <div className="flex items-center justify-center h-8 p-2 gap-2">
        <img className="h-6 -my-1" src={imgSrc} alt={imgAlt} data-testid={imgTestId} />
        <p
          className="leading-5 -mt-1 -mb-px tracking-normal whitespace-no-wrap epilogue-normal-white-14px-22"
          data-testid={textTestId}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default InfoTextIcon;
