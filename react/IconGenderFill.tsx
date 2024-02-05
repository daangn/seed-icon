import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconGenderFill = (
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 2C14 1.44772 14.4477 1 15 1H19C19.1356 1 19.2649 1.02699 19.3828 1.07588C19.5007 1.12468 19.6112 1.19702 19.7071 1.29289C19.803 1.38877 19.8753 1.49927 19.9241 1.61722C19.9727 1.73425 19.9996 1.8625 20 1.997L20 2V6C20 6.55228 19.5523 7 19 7C18.4477 7 18 6.55228 18 6V4.41421L16.6064 5.80783C17.4816 6.97641 18 8.42766 18 10C18 13.5265 15.3923 16.4439 12 16.9291V18H15C15.5523 18 16 18.4477 16 19C16 19.5523 15.5523 20 15 20H12V22C12 22.5523 11.5523 23 11 23C10.4477 23 10 22.5523 10 22V20H7C6.44772 20 6 19.5523 6 19C6 18.4477 6.44772 18 7 18H10V16.9291C6.60771 16.4439 4 13.5265 4 10C4 6.13401 7.13401 3 11 3C12.5723 3 14.0236 3.5184 15.1922 4.39362L16.5858 3H15C14.4477 3 14 2.55228 14 2ZM11 15C13.7614 15 16 12.7614 16 10C16 7.23858 13.7614 5 11 5C8.23858 5 6 7.23858 6 10C6 12.7614 8.23858 15 11 15Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconGenderFill);
export default ForwardRef;
