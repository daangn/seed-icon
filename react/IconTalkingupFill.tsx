import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconTalkingupFill = (
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
          d="M10.2573 6.02052C10.8142 5.91768 11.0583 6.21431 10.6378 6.62152C9.61668 7.58552 7.81988 8.64797 7.48556 10.4394C10.222 10.5443 11.7831 12.936 11.1426 15.4923C10.545 17.8773 8.0429 19.3228 5.55384 18.7206C3.23201 18.1588 1.74197 16.0141 2.03717 13.7927C2.6142 9.4531 6.87276 6.98069 10.2573 6.02052Z"
          fill="currentColor"
        />
        <path
          d="M20.9716 6.02052C21.5284 5.91768 21.7726 6.21431 21.3521 6.62152C20.3309 7.58552 18.5341 8.64797 18.1998 10.4394C20.9363 10.5443 22.4974 12.936 21.8569 15.4923C21.2593 17.8773 18.7572 19.3228 16.2681 18.7206C13.9463 18.1588 12.4562 16.0141 12.7514 13.7927C13.3285 9.4531 17.587 6.98069 20.9716 6.02052Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconTalkingupFill);
export default ForwardRef;
