import * as React from 'react';
import type { SVGProps } from 'react';
interface Props {
  size: number | string;
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
          d="M5.3999 8.9999C5.3999 8.66853 5.66853 8.3999 5.9999 8.3999H12.9999C13.3313 8.3999 13.5999 8.66853 13.5999 8.9999C13.5999 9.33127 13.3313 9.5999 12.9999 9.5999H5.9999C5.66853 9.5999 5.3999 9.33127 5.3999 8.9999Z"
          fill="currentColor"
        />
        <path
          d="M5.3999 12.9999C5.3999 12.6685 5.66853 12.3999 5.9999 12.3999H9.9999C10.3313 12.3999 10.5999 12.6685 10.5999 12.9999C10.5999 13.3313 10.3313 13.5999 9.9999 13.5999H5.9999C5.66853 13.5999 5.3999 13.3313 5.3999 12.9999Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.6001 3.4999C18.6001 3.16853 18.3315 2.8999 18.0001 2.8999H2.00015C1.66878 2.8999 1.40015 3.16853 1.40015 3.4999V18.4999C1.40015 19.9358 2.56421 21.0999 4.00015 21.0999H20.0001C21.4361 21.0999 22.6001 19.9358 22.6001 18.4999V8.4999C22.6001 8.16853 22.3315 7.8999 22.0001 7.8999H18.6001V3.4999ZM17.4001 18.4999C17.4001 19.0154 17.5501 19.4958 17.8089 19.8999H4.00015C3.22695 19.8999 2.60015 19.2731 2.60015 18.4999V4.0999H17.4001V18.4999ZM21.4001 18.4999C21.4001 19.2731 20.7733 19.8999 20.0001 19.8999C19.2269 19.8999 18.6001 19.2731 18.6001 18.4999V9.0999H21.4001V18.4999Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconCommunityThin = (
  { size, className }: Props,
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
export default React.forwardRef(IconCommunityThin);
