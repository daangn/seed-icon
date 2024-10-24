/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconExpandLessThin = (
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.9241 16.8243C20.6898 17.0586 20.3099 17.0586 20.0756 16.8243L11.9999 8.74853L3.92412 16.8243C3.6898 17.0586 3.3099 17.0586 3.07559 16.8243C2.84127 16.5899 2.84127 16.2101 3.07559 15.9757L11.5756 7.47574C11.8099 7.24142 12.1898 7.24142 12.4241 7.47574L20.9241 15.9757C21.1584 16.2101 21.1584 16.5899 20.9241 16.8243Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconExpandLessThin);
export default ForwardRef;
