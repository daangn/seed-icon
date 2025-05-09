/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCarNavigationFill = (
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
          d="M12.0001 1.31006C6.10006 1.31006 1.31006 6.10006 1.31006 12.0001C1.31006 17.9001 6.10006 22.6901 12.0001 22.6901C17.9001 22.6901 22.6901 17.9001 22.6901 12.0001C22.6901 6.10006 17.9101 1.31006 12.0001 1.31006ZM17.1901 7.92006L14.9401 14.4001C14.8501 14.6501 14.6501 14.8501 14.4001 14.9401L7.92006 17.1901C7.60006 17.3001 7.25006 17.2201 7.02006 16.9801C6.78006 16.7401 6.70006 16.3901 6.81006 16.0801L9.06006 9.60006C9.15006 9.35006 9.35006 9.15006 9.60006 9.06006L16.0801 6.81006C16.4001 6.70006 16.7501 6.78006 16.9801 7.02006C17.2201 7.26006 17.3001 7.61006 17.1901 7.92006Z"
          fill="currentColor"
        />
        <path
          d="M10.7901 10.7003C10.1201 11.3703 10.1201 12.4503 10.7901 13.1203C11.4601 13.7903 12.5401 13.7903 13.2101 13.1203C13.8801 12.4503 13.8801 11.3703 13.2101 10.7003C12.5401 10.0303 11.4601 10.0303 10.7901 10.7003Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCarNavigationFill);
export default ForwardRef;
