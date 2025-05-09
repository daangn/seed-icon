/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconMarketFill = (
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
          d="M5.1417 2.90918H18.8583C19.2493 2.90918 19.6045 3.13707 19.7674 3.49252L22 8.36373C22 10.372 20.3719 12.0001 18.3636 12.0001C16.9945 12.0001 15.8021 11.2435 15.1818 10.1255C14.5615 11.2435 13.3691 12.0001 12 12.0001C10.6309 12.0001 9.43851 11.2435 8.81818 10.1255C8.19785 11.2435 7.00547 12.0001 5.63636 12.0001C3.62806 12.0001 2 10.372 2 8.36373L4.23313 3.49143C4.39605 3.13598 4.75069 2.90918 5.1417 2.90918Z"
          fill="currentColor"
        />
        <path
          d="M3.81818 13.0383C4.37808 13.278 4.99251 13.4103 5.63707 13.4103C6.86326 13.4103 7.97964 12.9311 8.81889 12.1469C9.65814 12.9311 10.7745 13.4103 12.0007 13.4103C13.2269 13.4103 14.3433 12.9311 15.1825 12.1469C16.0218 12.9311 17.1382 13.4103 18.3643 13.4103C19.0084 13.4103 19.6223 13.2782 20.1818 13.0389V20.091C20.1818 20.6433 19.7341 21.091 19.1818 21.091H14.0455V18.591C14.0455 17.4613 13.1297 16.5455 12 16.5455C10.8703 16.5455 9.95455 17.4613 9.95455 18.591V21.091H4.81818C4.2659 21.091 3.81818 20.6433 3.81818 20.091V13.0383Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconMarketFill);
export default ForwardRef;
