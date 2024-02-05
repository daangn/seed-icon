import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconLoudspeakerThin = (
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.283 2.9709C21.4781 3.07531 21.5999 3.27863 21.5999 3.4999V19.4999C21.5999 19.7212 21.4781 19.9245 21.283 20.0289C21.0879 20.1333 20.8512 20.1219 20.6671 19.9991L14.8182 16.0999H6.9999C4.45939 16.0999 2.3999 14.0404 2.3999 11.4999C2.3999 8.95939 4.45939 6.8999 6.9999 6.8999H14.8182L20.6671 3.00067C20.8512 2.87793 21.0879 2.86649 21.283 2.9709ZM20.3999 4.62101L15.3327 7.99913C15.2342 8.06484 15.1184 8.0999 14.9999 8.0999H6.9999C5.12213 8.0999 3.5999 9.62214 3.5999 11.4999C3.5999 13.3777 5.12213 14.8999 6.9999 14.8999H14.9999C15.1184 14.8999 15.2342 14.935 15.3327 15.0007L20.3999 18.3788V4.62101Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.3999 15.4999C6.3999 15.1685 6.66853 14.8999 6.9999 14.8999H12.9999C13.3313 14.8999 13.5999 15.1685 13.5999 15.4999V17.4999C13.5999 19.4881 11.9881 21.0999 9.9999 21.0999C8.01168 21.0999 6.3999 19.4881 6.3999 17.4999V15.4999ZM7.5999 16.0999V17.4999C7.5999 18.8254 8.67442 19.8999 9.9999 19.8999C11.3254 19.8999 12.3999 18.8254 12.3999 17.4999V16.0999H7.5999Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconLoudspeakerThin);
export default ForwardRef;
