/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconArrowRegular = (
  {
    size = 24,
    ...props
  }: SVGProps<SVGSVGElement> & {
    size?: number | string,
  },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-seed-icon="true"
    data-seed-icon-version="0.7.3"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        d="M19.0189 5.25376C18.9947 5.21362 18.9667 5.17515 18.9348 5.13887C18.9228 5.12522 18.9103 5.11198 18.8974 5.09918C18.7369 4.9395 18.5255 4.862 18.3155 4.86665L7.0002 4.86662C6.55837 4.86662 6.20019 5.22479 6.20019 5.66661C6.20019 6.10844 6.55836 6.46662 7.00019 6.46662L16.4018 6.46665L5.10101 17.7674C4.78859 18.0799 4.78859 18.5864 5.10101 18.8988C5.41343 19.2112 5.91996 19.2112 6.23238 18.8988L17.5336 7.59763V17C17.5336 17.4418 17.8917 17.8 18.3336 17.8C18.7754 17.8 19.1336 17.4418 19.1336 17V5.66665C19.1336 5.51558 19.0917 5.37429 19.0189 5.25376Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconArrowRegular);
export default ForwardRef;
