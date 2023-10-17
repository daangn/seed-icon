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
          d="M16.5381 8.45698C16.865 8.74897 16.8891 9.24603 16.5919 9.56721L11.5919 14.9706C11.4447 15.1296 11.2377 15.2225 11.019 15.2276C10.8003 15.2327 10.589 15.1496 10.4343 14.9976L7.43427 12.0503C7.12185 11.7434 7.12185 11.2458 7.43427 10.9389C7.74669 10.6319 8.25322 10.6319 8.56564 10.9389L10.9724 13.3033L15.408 8.50985C15.7052 8.18867 16.2112 8.165 16.5381 8.45698Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.0893 2.59257C12.033 2.56499 11.9669 2.56499 11.9106 2.59257L3.91063 6.51571C3.84281 6.54897 3.79995 6.61704 3.79995 6.69151V8.90726C3.79995 12.2982 4.53249 14.8251 5.87675 16.7862C7.22304 18.7502 9.23528 20.2234 11.9337 21.4144C11.9759 21.433 12.024 21.4322 12.0629 21.4149C14.7384 20.2217 16.7597 18.6103 18.1164 16.5659C19.4726 14.5225 20.2 11.9934 20.2 8.90726V6.69151C20.2 6.61704 20.1571 6.54897 20.0893 6.51571L12.0893 2.59257ZM11.196 1.18616C11.7022 0.937946 12.2977 0.937945 12.8039 1.18616L20.8039 5.10931C21.4143 5.40865 21.8 6.02128 21.8 6.69151V8.90726C21.8 12.2431 21.0106 15.0831 19.4567 17.4244C17.9035 19.765 15.6216 21.5541 12.7242 22.8462C12.2639 23.0515 11.736 23.0503 11.2781 22.8482C8.40389 21.5797 6.11316 19.9451 4.54963 17.6642C2.98407 15.3802 2.19995 12.5248 2.19995 8.90726V6.69151C2.19995 6.02128 2.58564 5.40865 3.19604 5.10931L11.196 1.18616Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconConfirmationRegular = (
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
export default React.forwardRef(IconConfirmationRegular);
