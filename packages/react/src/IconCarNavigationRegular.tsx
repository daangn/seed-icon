/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCarNavigationRegular = (
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
      <g>
        <path
          d="M11.2287 12.6776C11.6547 13.1036 12.3454 13.1036 12.7714 12.6776C13.1975 12.2516 13.1975 11.5608 12.7714 11.1348C12.3454 10.7088 11.6547 10.7088 11.2287 11.1348C10.8026 11.5608 10.8026 12.2516 11.2287 12.6776Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.9808 7.01927C17.2172 7.25565 17.2978 7.60628 17.1883 7.92215L14.9423 14.4034C14.8547 14.6561 14.6561 14.8547 14.4034 14.9422L7.9222 17.1883C7.60634 17.2977 7.25571 17.2171 7.01933 16.9808C6.78295 16.7444 6.70236 16.3937 6.81182 16.0779L9.05787 9.59666C9.14544 9.34397 9.34403 9.14538 9.59671 9.05781L16.0779 6.81176C16.3938 6.7023 16.7444 6.78289 16.9808 7.01927ZM14.9502 9.04986L10.5684 10.5684L9.04992 14.9502L13.4317 13.4317L14.9502 9.04986Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.30908 12C1.30908 6.09557 6.09556 1.30908 12 1.30908C17.9044 1.30908 22.6909 6.09557 22.6909 12C22.6909 17.9044 17.9044 22.6909 12 22.6909C6.09556 22.6909 1.30908 17.9044 1.30908 12ZM12 3.05454C7.05955 3.05454 3.05454 7.05955 3.05454 12C3.05454 16.9404 7.05955 20.9454 12 20.9454C16.9404 20.9454 20.9454 16.9404 20.9454 12C20.9454 7.05955 16.9404 3.05454 12 3.05454Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCarNavigationRegular);
export default ForwardRef;
