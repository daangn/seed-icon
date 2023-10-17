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
          d="M6.71698 12C6.71698 11.6874 6.9704 11.434 7.28302 11.434H11.434V7.28302C11.434 6.9704 11.6874 6.71698 12 6.71698C12.3126 6.71698 12.566 6.9704 12.566 7.28302V11.434H16.717C17.0296 11.434 17.283 11.6874 17.283 12C17.283 12.3126 17.0296 12.566 16.717 12.566H12.566V16.717C12.566 17.0296 12.3126 17.283 12 17.283C11.6874 17.283 11.434 17.0296 11.434 16.717V12.566H7.28302C6.9704 12.566 6.71698 12.3126 6.71698 12Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 3.13208C7.10238 3.13208 3.13208 7.10238 3.13208 12C3.13208 16.8976 7.10238 20.8679 12 20.8679C16.8976 20.8679 20.8679 16.8976 20.8679 12C20.8679 7.10238 16.8976 3.13208 12 3.13208Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconAddCircleThin = (
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
export default React.forwardRef(IconAddCircleThin);
