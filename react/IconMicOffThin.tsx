import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconMicOffThin = (
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
    data-seed-icon-version="0.5.7"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          d="M8.61176 13.2224C8.3484 12.7054 8.1999 12.12 8.1999 11.5V5.5C8.1999 3.40132 9.90122 1.7 11.9999 1.7C14.0986 1.7 15.7999 3.40132 15.7999 5.5C15.7999 5.95016 16.3472 6.17217 16.6608 5.84921L16.7028 5.80598C16.8933 5.60976 17.005 5.34622 16.982 5.07368C16.7657 2.51181 14.6177 0.5 11.9999 0.5C9.23848 0.5 6.9999 2.73858 6.9999 5.5V11.5C6.9999 12.3831 7.22886 13.2128 7.63067 13.9329C7.81181 14.2575 8.24928 14.2865 8.51214 14.0236C8.72176 13.814 8.74631 13.4866 8.61176 13.2224Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.9999 8.44853L20.9242 4.52426C21.1585 4.28995 21.1585 3.91005 20.9242 3.67574C20.6899 3.44142 20.31 3.44142 20.0756 3.67574L3.57564 20.1757C3.34132 20.4101 3.34132 20.7899 3.57564 21.0243C3.80995 21.2586 4.18985 21.2586 4.42417 21.0243L6.97115 18.4773C8.25893 19.4071 9.8144 19.9891 11.4999 20.0857V22.3H8.5999C8.26853 22.3 7.9999 22.5686 7.9999 22.9C7.9999 23.2314 8.26853 23.5 8.5999 23.5L15.3999 23.5C15.7313 23.5 15.9999 23.2314 15.9999 22.9C15.9999 22.5686 15.7313 22.3 15.3999 22.3H12.6999V20.0719C17.1222 19.7157 20.5999 16.014 20.5999 11.5C20.5999 11.1686 20.3313 10.9 19.9999 10.9C19.6685 10.9 19.3999 11.1686 19.3999 11.5C19.3999 15.5869 16.0868 18.9 11.9999 18.9C10.4543 18.9 9.01945 18.4262 7.83256 17.6159L9.57485 15.8736C10.2931 16.2727 11.12 16.5 11.9999 16.5C14.7613 16.5 16.9999 14.2614 16.9999 11.5V8.44853ZM15.7999 9.64853L10.4693 14.9791C10.9376 15.1855 11.4553 15.3 11.9999 15.3C14.0986 15.3 15.7999 13.5987 15.7999 11.5V9.64853Z"
          fill="currentColor"
        />
        <path
          d="M5.97114 15.7922C6.15236 16.0462 6.13849 16.3972 5.91782 16.6179C5.66872 16.867 5.25846 16.8519 5.05067 16.5674C4.0126 15.1462 3.3999 13.3947 3.3999 11.5C3.3999 11.1686 3.66853 10.9 3.9999 10.9C4.33127 10.9 4.5999 11.1686 4.5999 11.5C4.5999 13.1001 5.10778 14.5817 5.97114 15.7922Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconMicOffThin);
export default ForwardRef;
