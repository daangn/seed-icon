import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconVideoThin = (
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
    data-seed-icon-version="0.6.0"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.1 7.3999C6.9402 7.3999 6 8.3401 6 9.4999C6 10.6597 6.9402 11.5999 8.1 11.5999C9.2598 11.5999 10.2 10.6597 10.2 9.4999C10.2 8.3401 9.2598 7.3999 8.1 7.3999ZM7.2 9.4999C7.2 9.00285 7.60294 8.5999 8.1 8.5999C8.59706 8.5999 9 9.00285 9 9.4999C9 9.99696 8.59706 10.3999 8.1 10.3999C7.60294 10.3999 7.2 9.99696 7.2 9.4999Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.6 3.3999C3.16406 3.3999 2 4.56396 2 5.9999V17.9999C2 19.4358 3.16406 20.5999 4.6 20.5999H15.6C17.0359 20.5999 18.2 19.4358 18.2 17.9999V16.1419L19.4145 17.4819C20.3974 18.5664 22.2 17.8711 22.2 16.4074V7.5924C22.2 6.12875 20.3974 5.43342 19.4145 6.51794L18.2 7.85795V5.9999C18.2 4.56396 17.0359 3.3999 15.6 3.3999H4.6ZM3.2 5.9999C3.2 5.2267 3.8268 4.5999 4.6 4.5999H15.6C16.3732 4.5999 17 5.2267 17 5.9999V17.9999C17 18.7731 16.3732 19.3999 15.6 19.3999H4.6C3.8268 19.3999 3.2 18.7731 3.2 17.9999V5.9999ZM18.2 14.3549L20.3036 16.676C20.5493 16.9471 21 16.7733 21 16.4074V7.5924C21 7.22649 20.5493 7.05266 20.3036 7.32379L18.2 9.64488V14.3549Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconVideoThin);
export default ForwardRef;
