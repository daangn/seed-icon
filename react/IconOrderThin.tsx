import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconOrderThin = (
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
          d="M16.4608 11.384C16.673 11.1295 16.6386 10.7511 16.384 10.539C16.1295 10.3268 15.7511 10.3612 15.539 10.6158L10.9231 16.1549L8.38403 14.039C8.12946 13.8268 7.75112 13.8612 7.53898 14.1158C7.32685 14.3704 7.36124 14.7487 7.61581 14.9608L10.6158 17.4608C10.7381 17.5627 10.8958 17.6119 11.0542 17.5975C11.2127 17.583 11.359 17.5063 11.4608 17.384L16.4608 11.384Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.99988 3C6.99988 2.44772 7.44759 2 7.99988 2H15.9999C16.5522 2 16.9999 2.44772 16.9999 3V3.3999H18.9999C20.4358 3.3999 21.5999 4.56396 21.5999 5.9999V19.9999C21.5999 21.4358 20.4358 22.5999 18.9999 22.5999H4.9999C3.56396 22.5999 2.3999 21.4358 2.3999 19.9999V5.9999C2.3999 4.56396 3.56396 3.3999 4.9999 3.3999H6.99988V3ZM6.99988 4.5999H4.9999C4.2267 4.5999 3.5999 5.2267 3.5999 5.9999V19.9999C3.5999 20.7731 4.2267 21.3999 4.9999 21.3999H18.9999C19.7731 21.3999 20.3999 20.7731 20.3999 19.9999V5.9999C20.3999 5.2267 19.7731 4.5999 18.9999 4.5999H16.9999V6C16.9999 6.55228 16.5522 7 15.9999 7H7.99988C7.44759 7 6.99988 6.55228 6.99988 6V4.5999ZM8.19995 5.8002V3.2002H15.8V5.8002H8.19995Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconOrderThin);
export default ForwardRef;
