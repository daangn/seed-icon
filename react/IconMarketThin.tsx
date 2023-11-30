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
    data-seed-icon-version="0.3.15"
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.80887 2.40002C4.14901 2.40002 3.55683 2.80512 3.31766 3.42011L1.06367 9.21609C0.938431 9.53813 0.906975 9.92926 1.06635 10.3026C1.27152 10.7832 1.82256 11.8465 2.8999 12.3395V20C2.8999 20.8837 3.61625 21.6 4.4999 21.6H19.4999C20.3836 21.6 21.0999 20.8837 21.0999 20V12.3395C22.1771 11.8464 22.7281 10.7832 22.9333 10.3026C23.0926 9.92926 23.0612 9.53813 22.9359 9.21609L20.6819 3.42011C20.4428 2.80512 19.8506 2.40002 19.1907 2.40002H4.80887ZM19.8999 12.5999C19.8916 12.6 19.8832 12.6 19.8748 12.6C18.8359 12.6 18.0911 12.096 17.5997 11.5503C17.4669 11.4028 17.3507 11.2505 17.2498 11.1011C17.1489 11.2505 17.0327 11.4028 16.8999 11.5503C16.4085 12.096 15.6637 12.6 14.6248 12.6C13.5859 12.6 12.8411 12.096 12.3497 11.5503C12.2169 11.4028 12.1007 11.2505 11.9998 11.1011C11.8989 11.2505 11.7827 11.4028 11.6499 11.5503C11.1585 12.096 10.4137 12.6 9.3748 12.6C8.33588 12.6 7.59112 12.096 7.09975 11.5503C6.96692 11.4028 6.85074 11.2505 6.7498 11.1011C6.64887 11.2505 6.53268 11.4028 6.39986 11.5503C5.90848 12.096 5.16373 12.6 4.1248 12.6C4.11648 12.6 4.10818 12.6 4.0999 12.5999V20C4.0999 20.2209 4.27899 20.4 4.4999 20.4H8.8999V17.5C8.8999 15.7879 10.2878 14.4 11.9999 14.4C13.712 14.4 15.0999 15.7879 15.0999 17.5V20.4H19.4999C19.7208 20.4 19.8999 20.2209 19.8999 20V12.5999ZM4.43607 3.85505C4.49586 3.7013 4.6439 3.60002 4.80887 3.60002H19.1907C19.3557 3.60002 19.5037 3.7013 19.5635 3.85505L21.8175 9.65102C21.8519 9.73943 21.8431 9.79978 21.8296 9.83147C21.5722 10.4344 20.9756 11.4 19.8748 11.4C19.2673 11.4 18.8246 11.1172 18.4915 10.7473C18.1499 10.368 17.9514 9.92343 17.8668 9.69939C17.7468 9.38141 17.4507 9.27612 17.2498 9.27612C17.049 9.27612 16.7528 9.38141 16.6328 9.69939C16.5483 9.92343 16.3497 10.368 16.0081 10.7473C15.675 11.1172 15.2323 11.4 14.6248 11.4C14.0173 11.4 13.5746 11.1172 13.2415 10.7473C12.8999 10.368 12.7014 9.92343 12.6168 9.69939C12.4968 9.38141 12.2007 9.27612 11.9998 9.27612C11.799 9.27612 11.5028 9.38141 11.3828 9.69939C11.2983 9.92343 11.0997 10.368 10.7581 10.7473C10.425 11.1172 9.98231 11.4 9.3748 11.4C8.7673 11.4 8.32458 11.1172 7.99149 10.7473C7.64988 10.368 7.45135 9.92343 7.36682 9.69939C7.24684 9.38141 6.95065 9.27612 6.7498 9.27612C6.54895 9.27612 6.25276 9.38141 6.13278 9.69939C6.04825 9.92343 5.84972 10.368 5.50811 10.7473C5.17502 11.1172 4.73231 11.4 4.1248 11.4C3.02397 11.4 2.42737 10.4344 2.17 9.83147C2.15647 9.79978 2.1477 9.73943 2.18208 9.65102L4.43607 3.85505ZM13.8999 17.5V20.4H10.0999V17.5C10.0999 16.4507 10.9506 15.6 11.9999 15.6C13.0492 15.6 13.8999 16.4507 13.8999 17.5Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const IconMarketThin = (
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
export default React.forwardRef(IconMarketThin);
