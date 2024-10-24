/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconReviewStarFill = (
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
        d="M11.5839 2.25843C11.7541 1.91386 12.2459 1.91386 12.4161 2.25843L15.3013 8.09934C15.3689 8.23617 15.4995 8.33101 15.6507 8.35295L22.1022 9.28958C22.4828 9.34484 22.6348 9.81214 22.3594 10.0804L17.691 14.6269C17.5816 14.7334 17.5317 14.8868 17.5576 15.0372L18.6596 21.457C18.7246 21.8357 18.3268 22.1245 17.9863 21.9457L12.2159 18.9147C12.0807 18.8437 11.9193 18.8437 11.7841 18.9147L6.01366 21.9457C5.67324 22.1245 5.27538 21.8357 5.3404 21.457L6.44245 15.0372C6.46826 14.8868 6.41836 14.7334 6.309 14.6269L1.64063 10.0804C1.36523 9.81214 1.5172 9.34484 1.8978 9.28958L8.34932 8.35295C8.50045 8.33101 8.6311 8.23617 8.69869 8.09934L11.5839 2.25843Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconReviewStarFill);
export default ForwardRef;
