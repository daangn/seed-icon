/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconSearchThin = (
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
        d="M10.4999 2.3999C6.0264 2.3999 2.3999 6.0264 2.3999 10.4999C2.3999 14.9734 6.0264 18.5999 10.4999 18.5999C12.5207 18.5999 14.3687 17.8599 15.7876 16.6361L20.5756 21.4242C20.81 21.6585 21.1899 21.6585 21.4242 21.4242C21.6585 21.1899 21.6585 20.81 21.4242 20.5756L16.6361 15.7876C17.8599 14.3687 18.5999 12.5207 18.5999 10.4999C18.5999 6.0264 14.9734 2.3999 10.4999 2.3999ZM3.5999 10.4999C3.5999 6.68914 6.68914 3.5999 10.4999 3.5999C14.3107 3.5999 17.3999 6.68914 17.3999 10.4999C17.3999 14.3107 14.3107 17.3999 10.4999 17.3999C6.68914 17.3999 3.5999 14.3107 3.5999 10.4999Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconSearchThin);
export default ForwardRef;
