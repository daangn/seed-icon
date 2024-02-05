import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconTrashFill = (
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
        d="M8.80001 2.19995C8.45566 2.19995 8.14995 2.4203 8.04106 2.74697L7.2234 5.19995H2.8C2.35817 5.19995 2 5.55812 2 5.99995C2 6.44178 2.35817 6.79995 2.8 6.79995H4V18C4 20.0986 5.70132 21.8 7.8 21.8H15.8C17.8987 21.8 19.6 20.0986 19.6 18V6.79995H20.8C21.2418 6.79995 21.6 6.44178 21.6 5.99995C21.6 5.55812 21.2418 5.19995 20.8 5.19995H16.3766L15.559 2.74697C15.4501 2.4203 15.1444 2.19995 14.8 2.19995H8.80001ZM8.3 10.2C8.74183 10.2 9.1 10.5581 9.1 11V16C9.1 16.4418 8.74183 16.8 8.3 16.8C7.85817 16.8 7.5 16.4418 7.5 16V11C7.5 10.5581 7.85817 10.2 8.3 10.2ZM11.8 10.2C12.2418 10.2 12.6 10.5581 12.6 11V16C12.6 16.4418 12.2418 16.8 11.8 16.8C11.3582 16.8 11 16.4418 11 16V11C11 10.5581 11.3582 10.2 11.8 10.2ZM16.1 11C16.1 10.5581 15.7418 10.2 15.3 10.2C14.8582 10.2 14.5 10.5581 14.5 11V16C14.5 16.4418 14.8582 16.8 15.3 16.8C15.7418 16.8 16.1 16.4418 16.1 16V11Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconTrashFill);
export default ForwardRef;
