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
          d="M15.7739 17.3003C16.0142 17.9685 15.9511 18.69 15.7716 19.3123C15.5899 19.9427 15.2676 20.5484 14.8872 21.0337C14.5221 21.4994 14.0285 21.9488 13.4602 22.124C13.1593 22.2167 12.804 22.2411 12.4492 22.104C12.0918 21.9659 11.8287 21.7002 11.6488 21.3854C11.6388 21.3678 11.6295 21.3499 11.6208 21.3317C10.0756 18.0778 8.54364 15.8836 7.666 14.8115C7.59133 14.7203 7.55005 14.6072 7.55005 14.4894L7.55005 2.62514C7.55005 2.349 7.7739 2.12514 8.05005 2.12514L15.5079 2.12514C16.952 2.12514 17.8674 2.44953 18.5086 3.09254C19.8545 4.44213 20.7277 6.63814 21.3053 8.54321C21.6248 9.59733 21.9748 10.973 21.9504 12.2065C21.9381 12.8282 21.8304 13.4734 21.527 14.0371C21.2116 14.6232 20.7053 15.08 19.9913 15.3212C19.8234 15.3779 19.6578 15.4162 19.5022 15.4357C19.4692 15.4398 19.4359 15.4419 19.4027 15.4419L14.8534 15.4419L15.737 17.2141C15.751 17.2421 15.7633 17.2709 15.7739 17.3003Z"
          fill="currentColor"
        />
        <path
          d="M5.25 2.12514C5.66421 2.12514 6 2.46093 6 2.87514L6 13.7155C6 14.1297 5.66421 14.4655 5.25 14.4655L2.85005 14.4655C2.40822 14.4655 2.05005 14.1074 2.05005 13.6655L2.05005 2.92514C2.05005 2.48331 2.40822 2.12514 2.85005 2.12514L5.25 2.12514Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconThumbDownFill = (
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
export default React.forwardRef(IconThumbDownFill);
