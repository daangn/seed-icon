import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCarLdwsRegular = (
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
    data-seed-icon-version="0.5.6"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          d="M7.92993 3.54182C8.38383 3.70396 8.62035 4.20336 8.45821 4.65727L3.00367 19.927C2.84153 20.3809 2.34213 20.6174 1.88822 20.4553C1.43432 20.2931 1.1978 19.7937 1.35994 19.3398L6.81448 4.07011C6.97662 3.6162 7.47603 3.37968 7.92993 3.54182Z"
          fill="currentColor"
        />
        <path
          d="M16.0701 3.5418C16.524 3.37969 17.0234 3.61624 17.1855 4.07016L22.64 19.3429C22.8022 19.7968 22.5656 20.2962 22.1117 20.4583C21.6578 20.6204 21.1584 20.3839 20.9963 19.9299L15.5417 4.65722C15.3796 4.2033 15.6162 3.70392 16.0701 3.5418Z"
          fill="currentColor"
        />
        <path
          d="M12.8727 5.45489C12.8727 4.9729 12.482 4.58216 12 4.58216C11.518 4.58216 11.1273 4.9729 11.1273 5.45489V6.5458C11.1273 7.02779 11.518 7.41853 12 7.41853C12.482 7.41853 12.8727 7.02779 12.8727 6.5458V5.45489Z"
          fill="currentColor"
        />
        <path
          d="M12 8.9458C12.482 8.9458 12.8727 9.33653 12.8727 9.81853V12.0003C12.8727 12.4823 12.482 12.8731 12 12.8731C11.518 12.8731 11.1273 12.4823 11.1273 12.0003V9.81853C11.1273 9.33653 11.518 8.9458 12 8.9458Z"
          fill="currentColor"
        />
        <path
          d="M12.8727 15.2731C12.8727 14.7911 12.482 14.4003 12 14.4003C11.518 14.4003 11.1273 14.7911 11.1273 15.2731V19.6367C11.1273 20.1187 11.518 20.5094 12 20.5094C12.482 20.5094 12.8727 20.1187 12.8727 19.6367V15.2731Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCarLdwsRegular);
export default ForwardRef;
