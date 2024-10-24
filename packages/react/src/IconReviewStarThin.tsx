/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconReviewStarThin = (
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
        d="M12 4.1256L9.77459 8.63079C9.53198 9.12194 9.0633 9.46187 8.52173 9.5405L3.54774 10.2626L7.14623 13.7672C7.53857 14.1493 7.71786 14.7001 7.62515 15.2402L6.77543 20.1901L11.2261 17.8523C11.7106 17.5978 12.2894 17.5978 12.7739 17.8523L17.2246 20.1901L16.3749 15.2402C16.2821 14.7001 16.4614 14.1493 16.8538 13.7672L20.4523 10.2626L15.4783 9.5405C14.9367 9.46187 14.468 9.12194 14.2254 8.63079L12 4.1256ZM12.4161 2.25843C12.2459 1.91386 11.7541 1.91386 11.5839 2.25843L8.69869 8.09934C8.6311 8.23617 8.50045 8.33101 8.34932 8.35295L1.8978 9.28958C1.5172 9.34484 1.36523 9.81214 1.64063 10.0804L6.309 14.6269C6.41836 14.7334 6.46826 14.8868 6.44245 15.0372L5.3404 21.457C5.27538 21.8357 5.67324 22.1245 6.01366 21.9457L11.7841 18.9147C11.9193 18.8437 12.0807 18.8437 12.2159 18.9147L17.9863 21.9457C18.3268 22.1245 18.7246 21.8357 18.6596 21.457L17.5576 15.0372C17.5317 14.8868 17.5816 14.7334 17.691 14.6269L22.3594 10.0804C22.6348 9.81214 22.4828 9.34484 22.1022 9.28958L15.6507 8.35295C15.4995 8.33101 15.3689 8.23617 15.3013 8.09934L12.4161 2.25843Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconReviewStarThin);
export default ForwardRef;
