/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconMoneyWonThin = (
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
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.45322 7.83927C6.76288 7.72131 7.10954 7.87671 7.22751 8.18637L8.40074 11.2661H10.5572L11.4232 8.23513C11.4968 7.97755 11.7323 7.79997 12.0001 7.79997C12.268 7.79997 12.5035 7.97755 12.5771 8.23513L13.4431 11.2661H15.5996L16.7728 8.18637C16.8908 7.87671 17.2374 7.72131 17.5471 7.83927C17.8567 7.95724 18.0121 8.3039 17.8942 8.61356L16.8837 11.2661H18.6665C18.9979 11.2661 19.2665 11.5347 19.2665 11.8661C19.2665 12.1975 18.9979 12.4661 18.6665 12.4661H16.4265L14.8466 16.6136C14.7546 16.855 14.5183 17.0105 14.2602 16.9994C14.002 16.9884 13.7799 16.8133 13.7089 16.5648L12.5379 12.4661H11.4624L10.2913 16.5648C10.2204 16.8133 9.99828 16.9884 9.74013 16.9994C9.48197 17.0105 9.24573 16.855 9.15374 16.6136L7.57376 12.4661H5.33315C5.00178 12.4661 4.73315 12.1975 4.73315 11.8661C4.73315 11.5347 5.00178 11.2661 5.33315 11.2661H7.11661L6.10612 8.61356C5.98815 8.3039 6.14355 7.95724 6.45322 7.83927ZM9.63302 14.5009L8.85788 12.4661H10.2144L9.63302 14.5009ZM12.0001 10.584L12.195 11.2661L11.8053 11.2661L12.0001 10.584ZM14.3673 14.5009L13.7859 12.4661H15.1424L14.3673 14.5009Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.9999 1.3999C6.14568 1.3999 1.3999 6.14568 1.3999 11.9999C1.3999 17.8541 6.14568 22.5999 11.9999 22.5999C17.8541 22.5999 22.5999 17.8541 22.5999 11.9999C22.5999 6.14568 17.8541 1.3999 11.9999 1.3999ZM2.5999 11.9999C2.5999 6.80843 6.80843 2.5999 11.9999 2.5999C17.1914 2.5999 21.3999 6.80843 21.3999 11.9999C21.3999 17.1914 17.1914 21.3999 11.9999 21.3999C6.80843 21.3999 2.5999 17.1914 2.5999 11.9999Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconMoneyWonThin);
export default ForwardRef;
