/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCarRearCameraFill = (
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
    <g clipPath="url(#clip0_15665_3225)">
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.9907 0.65C18.9907 0.29 19.2807 0 19.6407 0C20.0007 0 20.2907 0.29 20.2907 0.65V8.29C20.2907 11.67 17.5507 14.4 14.1807 14.4H9.82069C6.44069 14.4 3.71069 11.66 3.71069 8.29V0.65C3.71069 0.29 4.00069 0 4.36069 0C4.72069 0 5.02069 0.29 5.02069 0.65V6.07C5.75069 5.52 6.22069 4.79 6.52069 4.11C6.72069 3.65 6.84069 3.22 6.91069 2.91C6.95069 2.76 6.97069 2.63 6.98069 2.55C6.99069 2.51 6.99069 2.46 6.99069 2.46V0.65C6.99069 0.29 7.28069 0 7.64069 0H16.3707C16.7307 0 17.0207 0.29 17.0207 0.65V2.47C17.0307 2.49 17.0307 2.52 17.0307 2.56C17.0365 2.60649 17.0491 2.66649 17.0645 2.74C17.0756 2.79298 17.0881 2.85298 17.1007 2.92C17.1707 3.23 17.2907 3.66 17.4907 4.12C17.7907 4.8 18.2607 5.53 18.9907 6.08V0.65ZM17.4107 8.35C17.7007 8.29 17.9907 8.19 18.2807 8.09H18.2907L19.1407 7.78L17.8607 7.15L17.0207 7.35C16.7107 7.42 16.3907 7.48 16.0707 7.54L15.9507 7.56C14.6907 7.77 13.3907 7.9 12.0107 7.9C10.6307 7.9 9.28069 7.78 8.00069 7.56L7.85069 7.53C7.54069 7.48 7.22069 7.42 6.91069 7.35L6.07069 7.14L4.88069 7.83L5.82069 8.15L6.33069 8.3C8.11069 8.73 10.0907 8.96 12.0107 8.96C13.9307 8.96 15.7207 8.74 17.4107 8.35Z"
          fill="currentColor"
        />
        <path
          d="M12.3206 15.29L19.9606 19.62C20.1606 19.73 20.2906 19.93 20.2906 20.16C20.3006 20.39 20.1906 20.6 20.0006 20.73C17.8306 22.18 15.0406 23.05 12.0006 23.05C8.96059 23.05 6.17059 22.18 4.00059 20.73C3.81059 20.6 3.70059 20.38 3.71059 20.16C3.72059 19.94 3.84059 19.73 4.04059 19.62L11.6806 15.29C11.8806 15.18 12.1206 15.18 12.3206 15.29Z"
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
const ForwardRef = forwardRef(IconCarRearCameraFill);
export default ForwardRef;
