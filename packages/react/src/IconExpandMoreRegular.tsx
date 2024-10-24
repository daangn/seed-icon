/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconExpandMoreRegular = (
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
        d="M2.93427 7.43427C3.24669 7.12185 3.75322 7.12185 4.06564 7.43427L12 15.3686L19.9343 7.43427C20.2467 7.12185 20.7532 7.12185 21.0656 7.43427C21.3781 7.74669 21.3781 8.25322 21.0656 8.56564L12.5656 17.0656C12.2532 17.3781 11.7467 17.3781 11.4343 17.0656L2.93427 8.56564C2.62185 8.25322 2.62185 7.74669 2.93427 7.43427Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconExpandMoreRegular);
export default ForwardRef;
