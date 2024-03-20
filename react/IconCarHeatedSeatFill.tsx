import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCarHeatedSeatFill = (
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
    data-seed-icon-version="0.6.0"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          d="M14.8701 4.83181C15.3901 2.91181 17.3601 1.77181 19.2801 2.28181C21.2001 2.80181 22.3401 4.77181 21.8301 6.69181L18.1801 20.3818C17.9501 21.2418 17.1701 21.8418 16.2801 21.8418H5.66006C3.67006 21.8418 2.06006 20.2318 2.06006 18.2418C2.06006 16.2518 3.67006 14.6418 5.66006 14.6418H12.0701C12.1701 14.6418 12.2501 14.5818 12.2801 14.4818L14.8701 4.83181Z"
          fill="currentColor"
        />
        <path
          d="M2.93018 6.78172L5.11018 3.51172L7.29348 6.77172H6.13018C5.99018 7.10172 5.97018 7.41172 6.01018 7.65172C6.05018 7.88172 6.20018 8.11172 6.51018 8.53172L6.56018 8.60172C6.56875 8.61326 6.57747 8.62498 6.58632 8.63687C6.84564 8.98548 7.21512 9.48217 7.36018 10.0817C7.54018 10.8217 7.50018 11.6617 6.90018 12.4617C6.61018 12.8417 6.07018 12.9217 5.68018 12.6317C5.30018 12.3417 5.22018 11.8017 5.51018 11.4117C5.73018 11.1217 5.76018 10.8517 5.67018 10.5017C5.60018 10.2517 5.43018 10.0117 5.11018 9.58172L5.09018 9.56172C4.82018 9.20172 4.41018 8.65172 4.29018 7.97172C4.22018 7.59172 4.23018 7.18172 4.31018 6.78172H2.93018Z"
          fill="currentColor"
        />
        <path
          d="M7.30684 6.77172L7.30018 6.78172L7.29348 6.77172H7.30684Z"
          fill="currentColor"
        />
        <path
          d="M7.30684 6.77172L9.48018 3.51172L11.6702 6.76172H10.5002C10.3602 7.09172 10.3402 7.40172 10.3802 7.64172C10.4202 7.87172 10.5702 8.10172 10.8802 8.52172L10.9302 8.59172C10.9388 8.60326 10.9475 8.61498 10.9563 8.62687C11.2156 8.97548 11.5851 9.47217 11.7302 10.0717C11.9102 10.8117 11.8702 11.6517 11.2702 12.4517C10.9802 12.8317 10.4402 12.9117 10.0502 12.6217C9.67018 12.3317 9.59018 11.7917 9.88018 11.4017C10.1002 11.1117 10.1302 10.8417 10.0402 10.4917C9.97018 10.2417 9.80018 10.0017 9.48018 9.57172L9.46018 9.55172C9.19018 9.19172 8.78018 8.64172 8.66018 7.96172C8.59018 7.58172 8.60018 7.17172 8.68018 6.77172H7.30684Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCarHeatedSeatFill);
export default ForwardRef;
