import * as React from 'react';
import type { SVGProps } from 'react';
interface Props {
  size?: number | string;
  className?: string;
}
const SVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-seed-icon="true"
    data-seed-icon-version="0.3.11"
    width="100%"
    height="100%"
    {...props}
  >
    <g>
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.99995 3.40005C4.33721 3.40005 3.79995 3.93731 3.79995 4.60005V20.8969L5.37055 19.5939C5.86748 19.1816 6.59169 19.1965 7.0712 19.6289L9.02238 21.3884C9.09974 21.4582 9.21771 21.4569 9.29351 21.3854L11.1082 19.6746C11.609 19.2025 12.3909 19.2025 12.8917 19.6746L14.7064 21.3854C14.7822 21.4569 14.9002 21.4582 14.9775 21.3884L16.9287 19.6289C17.4082 19.1965 18.1324 19.1816 18.6293 19.5939L20.2 20.8969V4.60005C20.2 3.93731 19.6627 3.40005 19 3.40005H4.99995ZM2.19995 4.60005C2.19995 3.05365 3.45355 1.80005 4.99995 1.80005H19C20.5463 1.80005 21.7999 3.05365 21.7999 4.60005V21.5356C21.7999 22.6364 20.5171 23.239 19.6699 22.5361L17.8075 20.9909L16.049 22.5767C15.3527 23.2046 14.2911 23.1928 13.6088 22.5496L12 21.0329L10.3911 22.5496C9.70885 23.1928 8.64717 23.2046 7.95087 22.5767L6.19242 20.9909L4.33 22.5361C3.48276 23.239 2.19995 22.6364 2.19995 21.5356V4.60005Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.19995 7.60005C7.19995 7.15822 7.55812 6.80005 7.99995 6.80005H16C16.4418 6.80005 16.8 7.15822 16.8 7.60005C16.8 8.04188 16.4418 8.40005 16 8.40005H7.99995C7.55812 8.40005 7.19995 8.04188 7.19995 7.60005Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.19995 11.6C7.19995 11.1582 7.55812 10.8 7.99995 10.8H16C16.4418 10.8 16.8 11.1582 16.8 11.6C16.8 12.0419 16.4418 12.4 16 12.4H7.99995C7.55812 12.4 7.19995 12.0419 7.19995 11.6Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.19995 15.6C7.19995 15.1582 7.55812 14.8 7.99995 14.8H12C12.4418 14.8 12.8 15.1582 12.8 15.6C12.8 16.0419 12.4418 16.4 12 16.4H7.99995C7.55812 16.4 7.19995 16.0419 7.19995 15.6Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconBillRegular = (
  { size = 24, className }: Props,
  ref: React.ForwardedRef<HTMLSpanElement>
) => {
  return (
    <span
      ref={ref}
      className={className}
      style={{
        display: 'inline-flex',
        width: size,
        height: size,
      }}
    >
      <SVG />
    </span>
  );
};
export default React.forwardRef(IconBillRegular);
