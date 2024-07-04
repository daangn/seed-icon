/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconChattingThin = (
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
    data-seed-icon-version="0.7.0"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 9.40569C1 5.30839 5.15007 2.1416 9.9245 2.1416C12.6999 2.1416 15.2643 3.21171 16.9252 4.91266C20.3252 5.8396 23 8.47353 23 11.7925C23 14.3611 21.4196 16.7767 19.0488 18.0926C19.5017 19.0154 19.9052 19.67 20.2046 20.1037C20.3821 20.3607 20.5231 20.5403 20.6165 20.6523C20.6631 20.7083 20.6979 20.7474 20.7193 20.7709C20.73 20.7826 20.7374 20.7904 20.7412 20.7945L20.744 20.7973C20.923 20.9781 20.9744 21.25 20.8731 21.4836C20.7713 21.7181 20.5366 21.8666 20.2812 21.8581L20.2281 21.8554C20.1986 21.8536 20.1575 21.8506 20.1055 21.8459C20.0017 21.8364 19.8545 21.8198 19.6702 21.7909C19.3015 21.7329 18.7832 21.6254 18.1652 21.4263C16.9734 21.0422 15.4095 20.317 13.837 18.9504C12.0071 18.9132 10.3378 18.4489 8.91398 17.6233C7.77918 18.3838 6.70074 18.8317 5.82277 19.0951C5.20272 19.2812 4.68263 19.3752 4.31258 19.4228C4.12748 19.4466 3.97963 19.4588 3.87525 19.465L3.6981 19.4716C3.4396 19.4716 3.20798 19.3119 3.11611 19.0703C3.02485 18.8302 3.09035 18.559 3.28062 18.3871L3.28168 18.3861L3.39686 18.2647C3.48639 18.1641 3.62439 17.9975 3.79944 17.7501C4.09721 17.3291 4.50259 16.6735 4.95889 15.7101C2.58385 14.3952 1 11.9771 1 9.40569ZM8.592 16.3288C8.5446 16.3542 8.50015 16.386 8.46004 16.4238C7.35181 17.2093 6.29862 17.6522 5.46489 17.9023C5.34968 17.9369 5.23866 17.9678 5.13227 17.9954C5.48308 17.4404 5.89974 16.6836 6.34343 15.6752C6.48043 15.3638 6.34218 15.0002 6.03294 14.8584C3.73205 13.8039 2.24523 11.6197 2.24523 9.40564C2.24523 6.23885 5.56683 3.38682 9.92445 3.38682C12.4673 3.38682 14.6574 4.35801 16.0405 5.79619C16.0811 5.86008 16.1333 5.91668 16.195 5.9625C17.0874 6.95765 17.6037 8.15718 17.6037 9.40564C17.6037 12.5724 14.2821 15.4244 9.92445 15.4244C9.77063 15.4244 9.62226 15.4814 9.50792 15.5843C9.20123 15.8603 8.89482 16.1075 8.592 16.3288ZM10.0093 16.7986C11.1922 17.3844 12.5629 17.7075 14.0755 17.7075C14.2293 17.7075 14.3777 17.7644 14.492 17.8673C15.9732 19.2004 17.449 19.8872 18.5471 20.241C18.6584 20.2769 18.7658 20.3093 18.8689 20.3386C18.5204 19.7842 18.1044 19.0395 17.6604 18.0707C17.5171 17.7581 17.6544 17.3885 17.967 17.2452C20.2679 16.1907 21.7547 14.0065 21.7547 11.7925C21.7547 9.70156 20.369 7.81548 18.2239 6.73419C18.626 7.55612 18.849 8.4559 18.849 9.40569C18.849 13.4346 14.8364 16.5637 10.1632 16.6671C10.1119 16.7117 10.0606 16.7555 10.0093 16.7986Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconChattingThin);
export default ForwardRef;
