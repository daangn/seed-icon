/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconPriceYenVariant3 = (
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
        d="M6.75259 2.34151C6.38891 1.92587 5.75715 1.88375 5.34151 2.24744C4.92587 2.61112 4.88375 3.24288 5.24744 3.65852L9.35873 9.5H6C5.44772 9.5 5 9.94772 5 10.5C5 11.0523 5.44772 11.5 6 11.5H10.5V13.5H6C5.44772 13.5 5 13.9477 5 14.5C5 15.0523 5.44772 15.5 6 15.5H10.5V21C10.5 21.5523 10.9477 22 11.5 22C12.0523 22 12.5 21.5523 12.5 21V15.5H17C17.5523 15.5 18 15.0523 18 14.5C18 13.9477 17.5523 13.5 17 13.5H12.5V11.5H17C17.5523 11.5 18 11.0523 18 10.5C18 9.94772 17.5523 9.5 17 9.5H13.6413L17.7526 3.65852C18.1163 3.24288 18.0742 2.61112 17.6585 2.24744C17.2429 1.88375 16.6111 1.92587 16.2474 2.34151L11.5 8.91L6.75259 2.34151Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconPriceYenVariant3);
export default ForwardRef;
