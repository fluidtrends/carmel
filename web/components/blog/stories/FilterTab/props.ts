import type { MouseEvent } from 'react';

export interface FilterTabProps {
  text: string;
  active?: boolean;
  // eslint-disable-next-line no-unused-vars
  onClick?(e: MouseEvent<HTMLButtonElement>): void;
}
