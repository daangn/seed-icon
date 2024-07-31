/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconMarketWriteFill = (
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
          d="M5.1417 2H18.8583C19.2493 2 19.6045 2.22789 19.7674 2.58335L22 7.45455C22 9.46285 20.3719 11.0909 18.3636 11.0909C16.9945 11.0909 15.8021 10.3343 15.1818 9.21637C14.5615 10.3343 13.3691 11.0909 12 11.0909C10.6309 11.0909 9.43851 10.3343 8.81818 9.21637C8.19785 10.3343 7.00547 11.0909 5.63636 11.0909C3.62806 11.0909 2 9.46285 2 7.45455L4.23313 2.58225C4.39605 2.2268 4.75069 2 5.1417 2Z"
          fill="currentColor"
        />
        <path
          d="M3.81818 12.1291C4.37808 12.3688 4.99251 12.5012 5.63707 12.5012C6.86326 12.5012 7.97964 12.0219 8.81889 11.2377C9.65814 12.0219 10.7745 12.5012 12.0007 12.5012C13.2269 12.5012 14.3433 12.0219 15.1825 11.2377C16.0218 12.0219 17.1382 12.5012 18.3643 12.5012C18.4623 12.5012 18.5595 12.4981 18.656 12.4921L13.573 17.575C13.2024 17.9457 12.9941 18.4484 12.9941 18.9726V20.5293C12.9941 20.758 13.033 20.9775 13.1044 21.1818H4.81818C4.2659 21.1818 3.81818 20.7341 3.81818 20.1818V12.1291Z"
          fill="currentColor"
        />
        <path
          d="M14.537 20.7125C14.5132 20.6562 14.5 20.5943 14.5 20.5293V18.9726C14.5 18.8478 14.5496 18.7281 14.6378 18.6398L19.945 13.3327C20.1288 13.1489 20.4268 13.1489 20.6105 13.3327L22.1672 14.8894C22.351 15.0731 22.351 15.3711 22.1672 15.5549L16.8601 20.8621C16.7718 20.9503 16.6521 20.9999 16.5273 20.9999H14.9706C14.9182 20.9999 14.8679 20.9914 14.8208 20.9756C14.6927 20.9326 14.5892 20.836 14.537 20.7125Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconMarketWriteFill);
export default ForwardRef;
