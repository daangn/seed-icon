import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCarEpbFill = (
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
          d="M12.55 10.1401H11.79V11.6701H12.55C12.97 11.6701 13.31 11.3301 13.31 10.9101C13.31 10.4901 12.97 10.1501 12.55 10.1501V10.1401Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.58008 12.0001C4.58008 7.90008 7.90008 4.58008 12.0001 4.58008C16.1001 4.58008 19.4201 7.90008 19.4201 12.0001C19.4201 16.1001 16.1001 19.4201 12.0001 19.4201C7.90008 19.4201 4.58008 16.1001 4.58008 12.0001ZM11.7901 13.4201H12.5601C13.9501 13.4201 15.0701 12.3001 15.0701 10.9101C15.0701 9.52008 13.9501 8.40008 12.5601 8.40008H10.9201C10.4401 8.40008 10.0501 8.79008 10.0501 9.27008V14.7301C10.0501 15.2101 10.4401 15.6001 10.9201 15.6001C11.4001 15.6001 11.7901 15.2101 11.7901 14.7301V13.4201Z"
          fill="currentColor"
        />
        <path
          d="M4.90006 4.76016C5.28006 5.05016 5.35006 5.60016 5.06006 5.98016C3.81006 7.61016 3.05006 9.73016 3.05006 12.0102C3.05006 14.2902 3.80006 16.3902 5.05006 18.0202C5.34006 18.4002 5.27006 18.9502 4.89006 19.2402C4.51006 19.5302 3.96006 19.4602 3.67006 19.0802C2.19006 17.1502 1.31006 14.6802 1.31006 12.0002C1.31006 9.32016 2.19006 6.85016 3.68006 4.92016C3.97006 4.54016 4.52006 4.47016 4.90006 4.76016Z"
          fill="currentColor"
        />
        <path
          d="M20.3301 4.92016C20.0401 4.54016 19.4901 4.47016 19.1101 4.76016H19.1001C18.7201 5.05016 18.6501 5.60016 18.9401 5.98016C20.1801 7.60016 20.9401 9.76016 20.9401 12.1402C20.9401 14.4002 20.2501 16.4502 19.1301 18.0402C18.8501 18.4402 18.9501 18.9802 19.3401 19.2602C19.7401 19.5402 20.2801 19.4402 20.5601 19.0502C21.9001 17.1602 22.6901 14.8902 22.6901 12.1402C22.6901 9.39016 21.8101 6.85016 20.3301 4.92016Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCarEpbFill);
export default ForwardRef;
