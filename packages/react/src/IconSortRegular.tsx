/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconSortRegular = (
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
          d="M11.4343 14.1011C11.7467 13.7887 12.2532 13.7887 12.5656 14.1011C12.8781 14.4135 12.8781 14.9201 12.5656 15.2325L8.56564 19.2325C8.25322 19.5449 7.74668 19.5449 7.43427 19.2325L3.43427 15.2325C3.12185 14.9201 3.12185 14.4135 3.43427 14.1011C3.74669 13.7887 4.25322 13.7887 4.56564 14.1011L7.19995 16.7354L7.19995 5.33369C7.19995 4.89186 7.55812 4.53369 7.99995 4.53369C8.44178 4.53369 8.79995 4.89186 8.79995 5.33369L8.79995 16.7354L11.4343 14.1011Z"
          fill="currentColor"
        />
        <path
          d="M12.566 9.89938C12.2536 10.2118 11.7471 10.2118 11.4347 9.89938C11.1222 9.58696 11.1222 9.08043 11.4347 8.76801L15.4234 4.77929C15.5689 4.62777 15.7736 4.53346 16.0003 4.53346C16.2271 4.53346 16.4317 4.62777 16.5773 4.77929L20.566 8.76801C20.8784 9.08043 20.8784 9.58696 20.566 9.89938C20.2536 10.2118 19.7471 10.2118 19.4347 9.89938L16.8003 7.26506V18.6668C16.8003 19.1086 16.4422 19.4668 16.0003 19.4668C15.5585 19.4668 15.2003 19.1086 15.2003 18.6668V7.26506L12.566 9.89938Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconSortRegular);
export default ForwardRef;
