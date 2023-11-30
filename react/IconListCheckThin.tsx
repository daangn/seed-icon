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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.3644 16.0233C21.6276 16.2246 21.6778 16.6011 21.4765 16.8644L17.2706 22.3644C17.1575 22.5123 16.9821 22.5993 16.7959 22.5999C16.6097 22.6005 16.4337 22.5146 16.3197 22.3673L14.0256 19.4058C13.8226 19.1438 13.8705 18.767 14.1325 18.564C14.3944 18.3611 14.7713 18.409 14.9742 18.6709L16.791 21.0162L20.5233 16.1354C20.7246 15.8722 21.1011 15.822 21.3644 16.0233Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.3999 3.9999C2.3999 2.56396 3.56396 1.3999 4.9999 1.3999H18.9999C20.4358 1.3999 21.5999 2.56396 21.5999 3.9999V12.9999C21.5999 13.3313 21.3313 13.5999 20.9999 13.5999C20.6685 13.5999 20.3999 13.3313 20.3999 12.9999V3.9999C20.3999 3.2267 19.7731 2.5999 18.9999 2.5999H4.9999C4.2267 2.5999 3.5999 3.2267 3.5999 3.9999V19.9999C3.5999 20.7731 4.2267 21.3999 4.9999 21.3999H12.8999C13.2313 21.3999 13.4999 21.6685 13.4999 21.9999C13.4999 22.3313 13.2313 22.5999 12.8999 22.5999H4.9999C3.56396 22.5999 2.3999 21.4358 2.3999 19.9999V3.9999Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.3999 6.9999C7.3999 6.66853 7.66853 6.3999 7.9999 6.3999H15.9999C16.3313 6.3999 16.5999 6.66853 16.5999 6.9999C16.5999 7.33127 16.3313 7.5999 15.9999 7.5999H7.9999C7.66853 7.5999 7.3999 7.33127 7.3999 6.9999Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.3999 10.9999C7.3999 10.6685 7.66853 10.3999 7.9999 10.3999H15.9999C16.3313 10.3999 16.5999 10.6685 16.5999 10.9999C16.5999 11.3313 16.3313 11.5999 15.9999 11.5999H7.9999C7.66853 11.5999 7.3999 11.3313 7.3999 10.9999Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.3999 14.9999C7.3999 14.6685 7.66853 14.3999 7.9999 14.3999H12.9999C13.3313 14.3999 13.5999 14.6685 13.5999 14.9999C13.5999 15.3313 13.3313 15.5999 12.9999 15.5999H7.9999C7.66853 15.5999 7.3999 15.3313 7.3999 14.9999Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconListCheckThin = (
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
export default React.forwardRef(IconListCheckThin);
