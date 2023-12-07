import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconJobsThin = (
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
    <g>
      <g>
        <path
          d="M21.8101 17.7502L19.8001 16.0602C22.0201 12.2002 21.4901 7.19018 18.1901 3.89018C16.2201 1.92018 13.6301 0.930176 11.0501 0.930176C8.47008 0.930176 5.88008 1.92018 3.91008 3.89018C-0.029922 7.84018 -0.029922 14.2402 3.91008 18.1802C5.88008 20.1502 8.47008 21.1402 11.0501 21.1402C12.7801 21.1402 14.5001 20.6902 16.0401 19.8102L17.7301 21.8302C18.2501 22.4502 19.0101 22.8202 19.8201 22.8602C19.8601 22.8602 19.9001 22.8602 19.9401 22.8602C20.7001 22.8602 21.4401 22.5602 21.9901 22.0102C22.5601 21.4402 22.8701 20.6502 22.8301 19.8402C22.7901 19.0302 22.4201 18.2702 21.8001 17.7502H21.8101ZM4.76008 17.3302C1.29008 13.8602 1.29008 8.21018 4.76008 4.74018C6.44008 3.06018 8.68008 2.13018 11.0501 2.13018C13.4201 2.13018 15.6601 3.06018 17.3401 4.74018C20.8101 8.21018 20.8101 13.8602 17.3401 17.3302C15.6601 19.0102 13.4201 19.9402 11.0501 19.9402C8.68008 19.9402 6.44008 19.0102 4.76008 17.3302ZM21.1501 21.1602C20.8101 21.5002 20.3501 21.6802 19.8801 21.6502C19.4001 21.6302 18.9701 21.4202 18.6601 21.0502L17.0601 19.1402C17.4501 18.8502 17.8401 18.5302 18.2001 18.1802C18.5601 17.8302 18.8601 17.4602 19.1401 17.0702L21.0401 18.6702C21.4101 18.9802 21.6201 19.4102 21.6401 19.8902C21.6601 20.3702 21.4901 20.8202 21.1501 21.1602Z"
          fill="currentColor"
        />
        <path
          d="M13.8901 10.8202C14.5501 9.99018 14.8101 8.90018 14.5901 7.82018C14.3001 6.41018 13.1501 5.29018 11.7301 5.03018C10.6601 4.84018 9.57008 5.12018 8.74008 5.81018C7.91008 6.50018 7.44008 7.51018 7.44008 8.59018C7.44008 9.42018 7.72008 10.2002 8.22008 10.8302C7.06008 11.3102 5.29008 12.3302 5.07008 14.0602C4.98008 14.7502 5.32008 15.5902 6.00008 16.3702C6.56008 17.0102 8.17008 18.4802 11.0601 18.4802C13.9501 18.4802 15.5601 17.0002 16.1201 16.3702C16.8001 15.6002 17.1401 14.7602 17.0501 14.0602C16.8301 12.3302 15.0501 11.3102 13.9001 10.8302L13.8901 10.8202ZM15.2201 15.5702C14.7701 16.0802 13.4601 17.2802 11.0601 17.2802C8.66008 17.2802 7.35008 16.0902 6.90008 15.5702C6.41008 15.0102 6.23008 14.4802 6.26008 14.2102C6.41008 13.0202 8.02008 12.1102 9.35008 11.6902L9.76008 11.5102L9.82008 11.1602C9.87008 10.9102 9.77008 10.6502 9.56008 10.4802C8.98008 10.0202 8.64008 9.33018 8.64008 8.59018C8.64008 7.85018 8.96008 7.19018 9.51008 6.73018C9.95008 6.36018 10.4901 6.17018 11.0501 6.17018C11.2001 6.17018 11.3601 6.18018 11.5101 6.21018C12.4401 6.38018 13.2201 7.14018 13.4101 8.06018C13.6001 8.98018 13.2701 9.90018 12.5501 10.4702C12.3401 10.6302 12.2501 10.8902 12.2901 11.1402L12.4201 11.5702L12.7601 11.6802C14.0901 12.1002 15.6901 13.0102 15.8401 14.2002C15.8801 14.4802 15.6901 15.0002 15.2001 15.5602L15.2201 15.5702Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconJobsThin);
export default ForwardRef;
