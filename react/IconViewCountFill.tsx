import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconViewCountFill = (
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
    data-seed-icon-version="0.5.0"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 19C9.71177 19 7.62728 18.366 5.74654 17.0979C4.35892 16.1627 3.25284 14.9925 2.42831 13.5872C1.85723 12.6139 1.85724 11.3861 2.42828 10.4127C3.25282 9.00733 4.35891 7.83681 5.74654 6.9012C7.62728 5.63373 9.71177 5 12 5C14.2882 5 16.3727 5.63373 18.2535 6.9012C19.6411 7.83681 20.7472 9.00733 21.5717 10.4127C22.1428 11.3861 22.1428 12.6139 21.5717 13.5872C20.7472 14.9925 19.6411 16.1627 18.2535 17.0979C16.3727 18.366 14.2882 19 12 19ZM15.3593 10.3694C15.1586 11.0003 14.5565 11.4319 13.854 11.4319C12.9843 11.4319 12.2483 10.6682 12.2818 9.77175C12.3152 9.20729 12.6498 8.70924 13.1181 8.44362C13.2519 8.37721 13.2184 8.17799 13.0846 8.14479C12.6498 8.01198 12.1814 7.97877 11.6797 8.01198C9.60567 8.2112 8 9.93777 8 11.9964C8 14.4202 10.1743 16.346 12.6832 15.9476C14.3223 15.6819 15.6269 14.4202 15.928 12.7932C16.0953 11.8968 15.9614 11.0667 15.6269 10.3362C15.5935 10.2034 15.3928 10.2034 15.3593 10.3694Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconViewCountFill);
export default ForwardRef;
