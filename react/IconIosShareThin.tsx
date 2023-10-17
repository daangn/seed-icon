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
          d="M12.4242 2.57564C12.1899 2.34132 11.81 2.34132 11.5756 2.57564L7.57564 6.57564C7.34132 6.80995 7.34132 7.18985 7.57564 7.42417C7.80995 7.65848 8.18985 7.65848 8.42417 7.42417L11.3999 4.44843V13.9999C11.3999 14.3313 11.6685 14.5999 11.9999 14.5999C12.3313 14.5999 12.5999 14.3313 12.5999 13.9999V4.44843L15.5756 7.42417C15.81 7.65848 16.1899 7.65848 16.4242 7.42417C16.6585 7.18985 16.6585 6.80995 16.4242 6.57564L12.4242 2.57564Z"
          fill="currentColor"
        />
        <path
          d="M4.9999 9.3999C4.11625 9.3999 3.3999 10.1162 3.3999 10.9999V19.9999C3.3999 20.8836 4.11625 21.5999 4.9999 21.5999H18.9999C19.8836 21.5999 20.5999 20.8836 20.5999 19.9999V10.9999C20.5999 10.1162 19.8836 9.3999 18.9999 9.3999H15.9999C15.6685 9.3999 15.3999 9.66853 15.3999 9.9999C15.3999 10.3313 15.6685 10.5999 15.9999 10.5999H18.9999C19.2208 10.5999 19.3999 10.779 19.3999 10.9999V19.9999C19.3999 20.2208 19.2208 20.3999 18.9999 20.3999H4.9999C4.77899 20.3999 4.5999 20.2208 4.5999 19.9999V10.9999C4.5999 10.779 4.77899 10.5999 4.9999 10.5999H7.9999C8.33127 10.5999 8.5999 10.3313 8.5999 9.9999C8.5999 9.66853 8.33127 9.3999 7.9999 9.3999H4.9999Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconIosShareThin = (
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
export default React.forwardRef(IconIosShareThin);
