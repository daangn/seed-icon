import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconPercentRegular = (
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
          d="M20.2656 3.68451C20.578 3.99693 20.578 4.50346 20.2656 4.81588L4.76559 20.3159C4.45317 20.6283 3.94664 20.6283 3.63422 20.3159C3.3218 20.0035 3.3218 19.4969 3.63422 19.1845L19.1342 3.68451C19.4466 3.37209 19.9532 3.37209 20.2656 3.68451Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.6667 7.33358C10.6667 9.17453 9.17428 10.6669 7.33333 10.6669C5.49238 10.6669 4 9.17453 4 7.33358C4 5.49263 5.49238 4.00024 7.33333 4.00024C9.17428 4.00024 10.6667 5.49263 10.6667 7.33358ZM7.33333 9.06691C8.29063 9.06691 9.06667 8.29087 9.06667 7.33358C9.06667 6.37628 8.29063 5.60024 7.33333 5.60024C6.37604 5.60024 5.6 6.37628 5.6 7.33358C5.6 8.29087 6.37604 9.06691 7.33333 9.06691Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.6666 20.0004C18.5075 20.0004 19.9999 18.508 19.9999 16.6671C19.9999 14.8261 18.5075 13.3337 16.6666 13.3337C14.8256 13.3337 13.3333 14.8261 13.3333 16.6671C13.3333 18.508 14.8256 20.0004 16.6666 20.0004ZM18.3999 16.6671C18.3999 17.6244 17.6239 18.4004 16.6666 18.4004C15.7093 18.4004 14.9333 17.6244 14.9333 16.6671C14.9333 15.7098 15.7093 14.9337 16.6666 14.9337C17.6239 14.9337 18.3999 15.7098 18.3999 16.6671Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconPercentRegular);
export default ForwardRef;
