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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.4242 2.42417C19.6585 2.18985 19.6585 1.80995 19.4242 1.57564C19.1899 1.34132 18.81 1.34132 18.5756 1.57564L15.2233 4.92794C14.0788 3.97388 12.6064 3.3999 10.9999 3.3999C7.35482 3.3999 4.3999 6.35482 4.3999 9.9999C4.3999 13.645 7.35482 16.5999 10.9999 16.5999C14.645 16.5999 17.5999 13.645 17.5999 9.9999C17.5999 8.3934 17.0259 6.92097 16.0719 5.77647L19.4242 2.42417ZM5.5999 9.9999C5.5999 7.01756 8.01756 4.5999 10.9999 4.5999C13.9822 4.5999 16.3999 7.01756 16.3999 9.9999C16.3999 12.9822 13.9822 15.3999 10.9999 15.3999C8.01756 15.3999 5.5999 12.9822 5.5999 9.9999Z"
          fill="currentColor"
        />
        <path
          d="M14.3999 1.9999C14.3999 1.66853 14.6685 1.3999 14.9999 1.3999H18.9999C19.3313 1.3999 19.5999 1.66853 19.5999 1.9999V5.9999C19.5999 6.33127 19.3313 6.5999 18.9999 6.5999C18.6685 6.5999 18.3999 6.33127 18.3999 5.9999V2.5999H14.9999C14.6685 2.5999 14.3999 2.33127 14.3999 1.9999Z"
          fill="currentColor"
        />
        <path
          d="M6.3999 18.9999C6.3999 18.6685 6.66853 18.3999 6.9999 18.3999H10.3999V15.9999C10.3999 15.6685 10.6685 15.3999 10.9999 15.3999C11.3313 15.3999 11.5999 15.6685 11.5999 15.9999V18.3999H14.9999C15.3313 18.3999 15.5999 18.6685 15.5999 18.9999C15.5999 19.3313 15.3313 19.5999 14.9999 19.5999H11.5999V21.9999C11.5999 22.3313 11.3313 22.5999 10.9999 22.5999C10.6685 22.5999 10.3999 22.3313 10.3999 21.9999V19.5999H6.9999C6.66853 19.5999 6.3999 19.3313 6.3999 18.9999Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconGenderThin = (
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
export default React.forwardRef(IconGenderThin);
