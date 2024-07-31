/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconReplyReRegular = (
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
    data-seed-icon-version="0.7.2"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.99995 5.2002C6.44178 5.2002 6.79995 5.55837 6.79995 6.0002V17.2002H18C18.4418 17.2002 18.8 17.5584 18.8 18.0002C18.8 18.442 18.4418 18.8002 18 18.8002H5.99995C5.55812 18.8002 5.19995 18.442 5.19995 18.0002V6.0002C5.19995 5.55837 5.55812 5.2002 5.99995 5.2002Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconReplyReRegular);
export default ForwardRef;
