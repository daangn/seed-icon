import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconInterestFill = (
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
    data-seed-icon-version="0.5.6"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          d="M3.33049 4.07007C2.87209 4.07007 2.50049 4.44167 2.50049 4.90007C2.50049 5.35846 2.87209 5.73007 3.33049 5.73007H20.1305C20.5889 5.73007 20.9605 5.35846 20.9605 4.90007C20.9605 4.44167 20.5889 4.07007 20.1305 4.07007H3.33049Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.1353 10.0877C16.8132 9.33618 15.7477 9.33619 15.4257 10.0877L14.3566 12.5822L11.8836 12.874C11.1194 12.9642 10.7891 13.8905 11.3239 14.4439L13.1422 16.3254L12.7174 18.8378C12.5826 19.6356 13.4603 20.2131 14.1396 19.7737L16.2805 18.3887L18.4213 19.7737C19.1007 20.2131 19.9783 19.6356 19.8435 18.8378L19.4188 16.3254L21.237 14.4439C21.7718 13.8905 21.4415 12.9642 20.6773 12.874L18.2043 12.5822L17.1353 10.0877Z"
          fill="currentColor"
        />
        <path
          d="M3.33049 11.0701C2.87209 11.0701 2.50049 11.4417 2.50049 11.9001C2.50049 12.3585 2.87209 12.7301 3.33049 12.7301H9.13049C9.58888 12.7301 9.96049 12.3585 9.96049 11.9001C9.96049 11.4417 9.58888 11.0701 9.13049 11.0701H3.33049Z"
          fill="currentColor"
        />
        <path
          d="M3.33049 18.0701C2.87209 18.0701 2.50049 18.4417 2.50049 18.9001C2.50049 19.3585 2.87209 19.7301 3.33049 19.7301H9.13049C9.58888 19.7301 9.96049 19.3585 9.96049 18.9001C9.96049 18.4417 9.58888 18.0701 9.13049 18.0701H3.33049Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconInterestFill);
export default ForwardRef;
