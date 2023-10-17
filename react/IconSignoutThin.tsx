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
          d="M16.7366 7.63804C16.5023 7.40373 16.1224 7.40373 15.888 7.63804C15.6537 7.87235 15.6537 8.25225 15.888 8.48657L18.8013 11.3998H8.7498C8.41843 11.3998 8.1498 11.6684 8.1498 11.9998C8.1498 12.3312 8.41843 12.5998 8.7498 12.5998H18.8013L15.888 15.513C15.6537 15.7474 15.6537 16.1273 15.888 16.3616C16.1224 16.5959 16.5023 16.5959 16.7366 16.3616L20.6733 12.4249C20.6758 12.4223 20.6784 12.4198 20.6809 12.4172C20.735 12.3613 20.7762 12.2974 20.8043 12.2295C20.8336 12.1587 20.8498 12.0812 20.8498 11.9998C20.8498 11.9185 20.8336 11.8409 20.8043 11.7701C20.7762 11.7022 20.735 11.6383 20.6809 11.5824C20.6784 11.5799 20.6758 11.5773 20.6733 11.5747M20.6733 11.5747L16.7366 7.63804L20.6733 11.5747Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.7499 4.5999C4.70426 4.5999 4.66407 4.61766 4.63726 4.64366C4.61107 4.66905 4.5999 4.69948 4.5999 4.72718V19.2726C4.5999 19.3003 4.61108 19.3308 4.63726 19.3562C4.66407 19.3821 4.70426 19.3999 4.7499 19.3999H9.9999C10.3313 19.3999 10.5999 19.6685 10.5999 19.9999C10.5999 20.3313 10.3313 20.5999 9.9999 20.5999H4.7499C4.39772 20.5999 4.05638 20.4644 3.80188 20.2176C3.54677 19.9702 3.3999 19.6307 3.3999 19.2726V4.72718C3.3999 4.3691 3.54677 4.02956 3.80188 3.78218C4.05638 3.5354 4.39772 3.3999 4.7499 3.3999H9.9999C10.3313 3.3999 10.5999 3.66853 10.5999 3.9999C10.5999 4.33127 10.3313 4.5999 9.9999 4.5999H4.7499Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconSignoutThin = (
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
export default React.forwardRef(IconSignoutThin);
