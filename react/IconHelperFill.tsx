import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconHelperFill = (
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
    data-seed-icon-version="0.5.1"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          d="M11.9995 1C5.92438 1 0.999512 5.92487 0.999512 12V16C0.999512 17.1046 1.89494 18 2.99951 18H3.99951C4.5518 18 4.99951 17.5523 4.99951 17V12C4.99951 11.4477 4.5518 11 3.99951 11H3.05441C3.55165 6.50024 7.367 3 11.9995 3C16.632 3 20.4474 6.50024 20.9446 11H19.9995C19.4472 11 18.9995 11.4477 18.9995 12V17C18.9995 17.3623 19.1921 17.6793 19.4803 17.8547C19.0023 18.5401 18.286 19.1752 17.3563 19.6982C15.9314 20.4997 14.0658 21 11.9995 21C11.4472 21 10.9995 21.4477 10.9995 22C10.9995 22.5523 11.4472 23 11.9995 23C14.3762 23 16.5851 22.4267 18.3368 21.4414C19.8878 20.5689 21.1326 19.3405 21.7553 17.8522C22.4848 17.5542 22.9995 16.8377 22.9995 16V12C22.9995 5.92487 18.0746 1 11.9995 1Z"
          fill="currentColor"
        />
        <path
          d="M8.99951 10C8.44723 10 7.99951 10.4477 7.99951 11V12C7.99951 12.5523 8.44723 13 8.99951 13C9.5518 13 9.99951 12.5523 9.99951 12V11C9.99951 10.4477 9.5518 10 8.99951 10Z"
          fill="currentColor"
        />
        <path
          d="M14.9995 10C14.4472 10 13.9995 10.4477 13.9995 11V12C13.9995 12.5523 14.4472 13 14.9995 13C15.5518 13 15.9995 12.5523 15.9995 12V11C15.9995 10.4477 15.5518 10 14.9995 10Z"
          fill="currentColor"
        />
        <path
          d="M8.99951 13.2999C8.44723 13.2999 7.99951 13.7476 7.99951 14.2999C7.99951 16.5091 9.79037 18.2999 11.9995 18.2999C14.2087 18.2999 15.9995 16.5091 15.9995 14.2999C15.9995 13.7476 15.5518 13.2999 14.9995 13.2999C14.4472 13.2999 13.9995 13.7476 13.9995 14.2999C13.9995 15.4045 13.1041 16.2999 11.9995 16.2999C10.8949 16.2999 9.99951 15.4045 9.99951 14.2999C9.99951 13.7476 9.5518 13.2999 8.99951 13.2999Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconHelperFill);
export default ForwardRef;
