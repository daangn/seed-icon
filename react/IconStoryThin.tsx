import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconStoryThin = (
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
    data-seed-icon-version="0.5.2"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          d="M15.2499 9.97018L10.7799 7.39018C10.4399 7.19018 10.0299 7.19018 9.6799 7.39018C9.3399 7.59018 9.1299 7.95018 9.1299 8.34018V13.5102C9.1299 13.9102 9.3399 14.2602 9.6799 14.4602C9.8499 14.5602 10.0399 14.6102 10.2299 14.6102C10.4199 14.6102 10.6099 14.5602 10.7799 14.4602L15.2499 11.8802C15.5899 11.6802 15.7999 11.3202 15.7999 10.9302C15.7999 10.5402 15.5899 10.1802 15.2499 9.98018V9.97018ZM10.3299 13.3302L10.2799 8.48018L14.4999 10.9202L10.3299 13.3302Z"
          fill="currentColor"
        />
        <path
          d="M21.5699 6.30018C21.1799 5.11018 20.2899 4.13018 18.9999 3.46018C17.0399 2.44018 14.6899 1.93018 11.9999 1.93018C9.3099 1.93018 6.9599 2.45018 4.9999 3.46018C3.7099 4.13018 2.8199 5.11018 2.4299 6.30018C2.0799 7.35018 1.8999 9.43018 1.8999 10.9302C1.8999 12.4302 2.0799 14.5102 2.4299 15.5602C2.7399 16.5102 3.3699 17.3102 4.2999 17.9502V20.8002C4.2999 21.2002 4.5099 21.5502 4.8499 21.7502C5.0199 21.8502 5.2099 21.9002 5.3999 21.9002C5.5899 21.9002 5.7799 21.8502 5.9499 21.7502L9.4199 19.7502C10.2499 19.8602 11.1099 19.9202 11.9999 19.9202C14.6899 19.9202 17.0399 19.4002 18.9999 18.3902C20.2899 17.7202 21.1799 16.7402 21.5699 15.5502C21.9199 14.5002 22.0999 12.4202 22.0999 10.9202C22.0999 9.42018 21.9199 7.34018 21.5699 6.29018V6.30018ZM20.4299 15.1902C20.1299 16.0902 19.4699 16.8102 18.4499 17.3402C16.6699 18.2702 14.4999 18.7402 11.9999 18.7402C11.0999 18.7402 10.2199 18.6802 9.3899 18.5502L9.1799 18.5202L5.4899 20.6502V17.3102L5.2099 17.1302C4.3699 16.6102 3.8199 15.9602 3.5699 15.1902C3.2999 14.3802 3.0999 12.5502 3.0999 10.9302C3.0999 9.31018 3.2999 7.48018 3.5699 6.67018C3.8699 5.77018 4.5299 5.05018 5.5499 4.52018C7.3299 3.59018 9.4999 3.12018 11.9999 3.12018C14.4999 3.12018 16.6599 3.59018 18.4499 4.52018C19.4699 5.05018 20.1399 5.77018 20.4299 6.67018C20.6999 7.48018 20.8999 9.31018 20.8999 10.9302C20.8999 12.5502 20.6999 14.3802 20.4299 15.1902Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconStoryThin);
export default ForwardRef;
