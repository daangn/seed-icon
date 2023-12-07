import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconJobsRegular = (
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
    data-seed-icon-version="0.5.3"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g clipPath="url(#clip0_24339_1249)">
      <g>
        <path
          d="M21.9401 17.5999L19.91 15.8899C22.01 12.0499 21.4501 7.14994 18.2001 3.89994C16.2301 1.92994 13.64 0.939941 11.0601 0.939941C8.48005 0.939941 5.89005 1.92994 3.92005 3.89994C-0.0299499 7.83994 -0.0299499 14.2399 3.91005 18.1799C5.88005 20.1499 8.47005 21.1399 11.05 21.1399C12.71 21.1399 14.37 20.7299 15.87 19.9099L17.58 21.9499C18.14 22.6099 18.95 23.0099 19.81 23.0499C19.85 23.0499 19.9 23.0499 19.9401 23.0499C20.76 23.0499 21.55 22.7199 22.13 22.1499C22.74 21.5399 23.0701 20.6899 23.0301 19.8299C22.99 18.9699 22.59 18.1499 21.93 17.5999H21.9401ZM11.05 19.5399C8.78005 19.5399 6.65005 18.6599 5.04005 17.0499C1.73005 13.7399 1.73005 8.33994 5.04005 5.02994C6.65005 3.41994 8.78005 2.53994 11.05 2.53994C13.32 2.53994 15.45 3.41994 17.06 5.02994C20.37 8.33994 20.37 13.7399 17.06 17.0499C15.45 18.6599 13.32 19.5399 11.05 19.5399ZM21.01 21.0199C20.7101 21.3199 20.31 21.4799 19.89 21.4599C19.47 21.4399 19.09 21.2499 18.81 20.9299L17.22 19.0299C17.56 18.7699 17.8901 18.4899 18.1901 18.1799C18.49 17.8699 18.76 17.5599 19.01 17.2299L20.9 18.8199C21.22 19.0899 21.41 19.4699 21.43 19.8999C21.4501 20.3199 21.2901 20.7199 21 21.0199H21.01Z"
          fill="currentColor"
        />
        <path
          d="M14.13 10.7599C14.53 10.1599 14.76 9.44994 14.76 8.69994C14.76 7.59994 14.2701 6.55994 13.43 5.84994C12.76 5.28994 11.92 5.00994 11.0601 4.99994C10.2001 4.99994 9.36005 5.28994 8.69005 5.84994C7.84005 6.55994 7.36005 7.58994 7.36005 8.69994C7.36005 9.44994 7.58005 10.1599 7.99005 10.7599C6.31005 11.5199 5.25005 12.6599 5.08005 13.9399C4.96005 14.8099 5.33005 15.5399 6.03005 16.3399C7.21005 17.6799 9.04005 18.4499 11.07 18.4499C13.1 18.4499 14.93 17.6799 16.1101 16.3399C16.8101 15.5499 17.17 14.8099 17.06 13.9399C16.89 12.6699 15.83 11.5199 14.15 10.7599H14.13ZM14.89 15.2799C14.4801 15.7499 13.2701 16.8499 11.05 16.8499C8.83005 16.8499 7.63005 15.7499 7.21005 15.2799C6.76005 14.7599 6.62005 14.4999 6.65005 14.1399C6.74005 13.0999 8.25005 12.2799 9.47005 11.8999C9.47005 11.8999 9.79005 11.7899 9.91005 11.6299C10.05 11.4399 10.08 11.2199 10.08 11.2199C10.14 10.8899 10.0201 10.5599 9.75005 10.3499C9.24005 9.94994 8.95005 9.34994 8.95005 8.69994C8.95005 8.04994 9.23005 7.47994 9.71005 7.07994C10.09 6.75994 10.5601 6.58994 11.05 6.58994C11.54 6.58994 12.01 6.75994 12.39 7.07994C12.87 7.47994 13.15 8.06994 13.15 8.69994C13.15 9.32994 12.8601 9.93994 12.35 10.3499C12.09 10.5599 11.96 10.8899 12.0201 11.2199C12.0201 11.2199 12.04 11.4499 12.19 11.6299C12.32 11.7899 12.63 11.8999 12.63 11.8999C13.84 12.2899 15.35 13.0999 15.45 14.1399C15.48 14.4999 15.34 14.7599 14.89 15.2799Z"
          fill="currentColor"
        />
      </g>
    </g>
    <defs>
      <clipPath>
        <rect width={24} height={24} fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(IconJobsRegular);
export default ForwardRef;
