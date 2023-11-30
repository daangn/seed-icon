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
      <g>
        <path
          d="M12.569 1.56897C12.569 1.25473 12.3142 1 12 1C11.6858 1 11.431 1.25473 11.431 1.56897V2.91404C6.85654 3.19614 3.19614 6.85654 2.91404 11.431H1.56897C1.25473 11.431 1 11.6858 1 12C1 12.3142 1.25473 12.569 1.56897 12.569H2.91404C3.19614 17.1435 6.85654 20.8039 11.431 21.086V22.431C11.431 22.7453 11.6858 23 12 23C12.3142 23 12.569 22.7453 12.569 22.431V21.086C13.1455 21.0504 13.7075 20.9612 14.25 20.8233V19.6433C13.5365 19.853 12.7814 19.9655 12 19.9655C7.60077 19.9655 4.03448 16.3992 4.03448 12C4.03448 7.60077 7.60077 4.03448 12 4.03448C15.6179 4.03448 18.6724 6.4464 19.6433 9.75H20.8233C19.8667 5.98758 16.567 3.16059 12.569 2.91404V1.56897Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 16.75C14.6234 16.75 16.75 14.6234 16.75 12C16.75 9.37665 14.6234 7.25 12 7.25C9.37665 7.25 7.25 9.37665 7.25 12C7.25 14.6234 9.37665 16.75 12 16.75ZM12 15.55C13.9606 15.55 15.55 13.9606 15.55 12C15.55 10.0394 13.9606 8.45 12 8.45C10.0394 8.45 8.45 10.0394 8.45 12C8.45 13.9606 10.0394 15.55 12 15.55Z"
          fill="currentColor"
        />
        <path
          d="M22.9734 16.3323C23.1056 15.3238 22.7326 14.4881 22.1034 13.9236C21.4872 13.3708 20.6407 13.0895 19.8161 13.1226C18.204 13.1875 16.7 14.4042 16.7 16.0833C16.7 16.3797 16.947 16.6199 17.2518 16.6199C17.5566 16.6199 17.8037 16.3797 17.8037 16.0833C17.8037 15.0844 18.727 14.2406 19.8617 14.1949C20.4104 14.1729 20.9664 14.3638 21.3549 14.7124C21.7304 15.0492 21.9642 15.5439 21.8786 16.1966C21.8074 16.7397 21.4225 17.0006 20.7653 17.4462L20.7351 17.4668C20.1095 17.8911 19.287 18.4814 19.287 19.7201C19.287 20.0164 19.5341 20.2567 19.8389 20.2567C20.1437 20.2567 20.3907 20.0164 20.3907 19.7201C20.3907 19.07 20.753 18.7631 21.3665 18.347C21.4061 18.3202 21.4477 18.2924 21.4903 18.264C22.0528 17.8882 22.8382 17.3637 22.9734 16.3323Z"
          fill="currentColor"
        />
        <path
          d="M19.8475 22.57C20.1962 22.57 20.4789 22.2951 20.4789 21.9561C20.4789 21.617 20.1962 21.3421 19.8475 21.3421C19.4989 21.3421 19.2162 21.617 19.2162 21.9561C19.2162 22.2951 19.4989 22.57 19.8475 22.57Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconGpsEnable2Thin = (
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
export default React.forwardRef(IconGpsEnable2Thin);
