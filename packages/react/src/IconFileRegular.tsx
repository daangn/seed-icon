/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconFileRegular = (
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
    data-seed-icon-version="0.7.1"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        d="M12.5657 4.08053C12.8781 3.76811 12.8781 3.26158 12.5657 2.94916C12.2533 2.63674 11.7467 2.63674 11.4343 2.94916L4.36326 10.0202C1.70769 12.6758 1.70769 16.9813 4.36326 19.6369C7.01882 22.2924 11.3243 22.2924 13.9799 19.6369L19.153 14.4638C19.156 14.4608 19.159 14.4577 19.162 14.4546L21.0508 12.5658C22.9253 10.6913 22.9253 7.65211 21.0508 5.77759C19.1763 3.90307 16.1371 3.90307 14.2626 5.77759L8.85229 11.1879L8.8479 11.1923L7.19157 12.8487C6.0981 13.9421 6.0981 15.715 7.19157 16.8084C8.28504 17.9019 10.0579 17.9019 11.1514 16.8084L16.1011 11.8587C16.4135 11.5463 16.4135 11.0398 16.1011 10.7273C15.7887 10.4149 15.2822 10.4149 14.9697 10.7273L10.02 15.6771C9.55137 16.1457 8.79157 16.1457 8.32294 15.6771C7.85431 15.2084 7.85431 14.4487 8.32294 13.98L13.6262 8.67672L13.6307 8.67225L15.394 6.90896C16.6436 5.65928 18.6698 5.65928 19.9194 6.90896C21.1691 8.15864 21.1691 10.1848 19.9194 11.4344L12.8484 18.5055C12.8455 18.5084 12.8426 18.5113 12.8398 18.5142C10.8084 20.5362 7.52244 20.5333 5.49463 18.5055C3.4639 16.4748 3.4639 13.1823 5.49463 11.1516L12.5657 4.08053Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconFileRegular);
export default ForwardRef;
