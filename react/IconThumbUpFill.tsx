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
          d="M15.7739 6.79979C16.0142 6.13161 15.9511 5.41013 15.7716 4.7878C15.5899 4.15742 15.2676 3.55172 14.8872 3.06641C14.5221 2.60065 14.0285 2.15127 13.4602 1.97612C13.1593 1.88338 12.804 1.85897 12.4492 1.99612C12.0918 2.13422 11.8287 2.39987 11.6488 2.71475C11.6388 2.73228 11.6295 2.75019 11.6208 2.76844C10.0756 6.02233 8.54364 8.21654 7.666 9.28855C7.59133 9.37976 7.55005 9.49287 7.55005 9.61074V21.475C7.55005 21.7511 7.77391 21.975 8.05005 21.975H15.5079C16.952 21.975 17.8674 21.6506 18.5086 21.0076C19.8545 19.658 20.7277 17.462 21.3053 15.5569C21.6248 14.5028 21.9748 13.1271 21.9504 11.8936C21.9381 11.2719 21.8304 10.6267 21.527 10.063C21.2116 9.47692 20.7053 9.0201 19.9913 8.77892C19.8234 8.7222 19.6578 8.68394 19.5022 8.66443C19.4692 8.66029 19.4359 8.65822 19.4027 8.65822H14.8534L15.737 6.88601C15.751 6.85802 15.7633 6.82923 15.7739 6.79979Z"
          fill="currentColor"
        />
        <path
          d="M5.25 21.975C5.66421 21.975 6 21.6392 6 21.225V10.3846C6 9.97035 5.66421 9.63456 5.25 9.63456H2.85005C2.40822 9.63456 2.05005 9.99274 2.05005 10.4346V21.175C2.05005 21.6168 2.40822 21.975 2.85005 21.975H5.25Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconThumbUpFill = (
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
export default React.forwardRef(IconThumbUpFill);
