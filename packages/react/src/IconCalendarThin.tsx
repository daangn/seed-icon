/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCalendarThin = (
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
      <g>
        <path
          d="M14.2666 17.8133C14.2666 17.4819 14.5352 17.2133 14.8666 17.2133H17.5333C17.8646 17.2133 18.1333 17.4819 18.1333 17.8133C18.1333 18.1446 17.8646 18.4133 17.5333 18.4133H14.8666C14.5352 18.4133 14.2666 18.1446 14.2666 17.8133Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.5999 2.47988C8.5999 2.14851 8.33127 1.87988 7.9999 1.87988C7.66853 1.87988 7.3999 2.14851 7.3999 2.47988V3.17981H2.99995C2.55812 3.17981 2.19995 3.53798 2.19995 3.97981V19.1298C2.19995 20.7867 3.5431 22.1298 5.19995 22.1298H18.8C20.4568 22.1298 21.8 20.7867 21.8 19.1298V3.97981C21.8 3.53798 21.4418 3.17981 21 3.17981H16.5999V2.47988C16.5999 2.14851 16.3313 1.87988 15.9999 1.87988C15.6685 1.87988 15.3999 2.14851 15.3999 2.47988V3.17981H8.5999V2.47988ZM15.3999 5.47988V4.37981H8.5999V5.47988C8.5999 5.81125 8.33127 6.07988 7.9999 6.07988C7.66853 6.07988 7.3999 5.81125 7.3999 5.47988V4.37981H3.39995V7.37988H20.6V4.37981H16.5999V5.47988C16.5999 5.81125 16.3313 6.07988 15.9999 6.07988C15.6685 6.07988 15.3999 5.81125 15.3999 5.47988ZM20.6 8.57988H3.39995V19.1298C3.39995 20.1239 4.20584 20.9298 5.19995 20.9298H18.8C19.7941 20.9298 20.6 20.1239 20.6 19.1298V8.57988Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCalendarThin);
export default ForwardRef;
