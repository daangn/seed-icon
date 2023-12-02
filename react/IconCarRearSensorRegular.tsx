import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCarRearSensorRegular = (
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
    data-seed-icon-version="0.5.0"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.81824 16.145C6.32378 16.145 3.49097 13.3121 3.49097 9.81768V2.18132C3.49097 1.69933 3.8817 1.30859 4.36369 1.30859C4.84569 1.30859 5.23642 1.69933 5.23642 2.18132V7.12869C5.73223 6.65585 6.07404 6.09446 6.31039 5.55709C6.50645 5.11134 6.62245 4.69743 6.68892 4.39616C6.72199 4.24632 6.74231 4.12654 6.75407 4.04743C6.75852 4.01745 6.76173 3.99342 6.76392 3.97594V2.18175C6.76392 1.69975 7.15465 1.30902 7.63665 1.30902C8.11864 1.30902 8.50938 1.69975 8.50938 2.18175V4.02477C8.50938 4.05126 8.50817 4.07773 8.50576 4.10411L8.50562 4.10566L8.50544 4.10753L8.50499 4.11223L8.50366 4.12541L8.49906 4.16649C8.49506 4.20022 8.4891 4.24652 8.48057 4.30396C8.46352 4.4187 8.4361 4.57864 8.39338 4.77224C8.30829 5.15788 8.16061 5.6858 7.90814 6.25982C7.61047 6.93661 7.15654 7.69915 6.47244 8.3621C8.23635 8.73892 10.1121 8.94508 12.0562 8.94508C13.9843 8.94508 15.8049 8.73277 17.5276 8.36151C16.8438 7.6987 16.3901 6.93641 16.0925 6.25982C15.84 5.6858 15.6923 5.15788 15.6072 4.77224C15.5645 4.57864 15.5371 4.4187 15.52 4.30396C15.5115 4.24652 15.5055 4.20023 15.5015 4.16649L15.497 4.12541L15.4956 4.11223L15.4952 4.10753L15.495 4.10566L15.4948 4.10411C15.4924 4.07773 15.4912 4.05126 15.4912 4.02477V2.18175C15.4912 1.69975 15.882 1.30902 16.364 1.30902C16.846 1.30902 17.2367 1.69975 17.2367 2.18175V3.97594C17.2389 3.99342 17.2421 4.01745 17.2465 4.04743C17.2583 4.12654 17.2786 4.24632 17.3117 4.39616C17.3782 4.69743 17.4942 5.11134 17.6902 5.55709C17.9265 6.09429 18.2681 6.65548 18.7637 7.12822V2.18132C18.7637 1.69933 19.1544 1.30859 19.6364 1.30859C20.1184 1.30859 20.5091 1.69933 20.5091 2.18132V8.69813C20.5094 8.70678 20.5096 8.7154 20.5096 8.72402L20.5096 8.73983L20.5091 8.75679V9.81768C20.5091 13.3121 17.6763 16.145 14.1819 16.145H9.81824ZM18.7634 9.86636C18.7373 12.3744 16.6961 14.3995 14.1819 14.3995H9.81824C7.30455 14.3995 5.26364 12.3753 5.23669 9.86794C7.37165 10.3981 9.6682 10.6905 12.0562 10.6905C14.4429 10.6905 16.6746 10.3855 18.7634 9.86636Z"
          fill="currentColor"
        />
        <path
          d="M5.82633 20.1307C6.09932 20.5279 6.64264 20.6287 7.03988 20.3557C8.45034 19.3864 10.1577 18.8192 12.0001 18.8192C13.8426 18.8192 15.5499 19.3864 16.9604 20.3557C17.3576 20.6287 17.901 20.5279 18.1739 20.1307C18.4469 19.7335 18.3462 19.1901 17.949 18.9172C16.2569 17.7544 14.2067 17.0737 12.0001 17.0737C9.79359 17.0737 7.74338 17.7544 6.05131 18.9172C5.65407 19.1901 5.55335 19.7335 5.82633 20.1307Z"
          fill="currentColor"
        />
        <path
          d="M9.25161 22.5155C8.86626 22.805 8.31916 22.7273 8.02964 22.342C7.74012 21.9566 7.8178 21.4095 8.20316 21.12C9.26068 20.3255 10.5766 19.8543 12.0001 19.8543C13.4236 19.8543 14.7395 20.3255 15.7971 21.12C16.1824 21.4095 16.2601 21.9566 15.9706 22.342C15.6811 22.7273 15.134 22.805 14.7486 22.5155C13.983 21.9403 13.0326 21.5997 12.0001 21.5997C10.9676 21.5997 10.0172 21.9403 9.25161 22.5155Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCarRearSensorRegular);
export default ForwardRef;
