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
          d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 3.63265C7.37884 3.63265 3.63265 7.37884 3.63265 12C3.63265 16.6212 7.37884 20.3673 12 20.3673C16.6212 20.3673 20.3673 16.6212 20.3673 12C20.3673 7.37884 16.6212 3.63265 12 3.63265Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.3487 8.06235C15.0168 8.67713 15.4099 9.58909 15.2729 10.6773C15.1282 11.826 14.2712 12.4115 13.7357 12.7773C13.693 12.8065 13.6522 12.8343 13.6141 12.8609C13.0264 13.2707 12.7896 13.5033 12.7896 14C12.7896 14.4418 12.4314 14.8 11.9896 14.8C11.5477 14.8 11.1896 14.4418 11.1896 14C11.1896 12.6254 12.0939 11.9703 12.699 11.5484C13.3763 11.0762 13.6342 10.8842 13.6854 10.4773C13.7558 9.91812 13.5639 9.51458 13.2652 9.2397C12.9474 8.94719 12.4838 8.78202 12.0235 8.80155C11.0475 8.84295 10.3 9.58252 10.3 10.4014C10.3 10.8432 9.94183 11.2014 9.5 11.2014C9.05817 11.2014 8.7 10.8432 8.7 10.4014C8.7 8.5652 10.2927 7.27354 11.9557 7.20299C12.8148 7.16654 13.6998 7.46519 14.3487 8.06235Z"
          fill="currentColor"
        />
        <path
          d="M12.9604 16.3999C12.9604 16.9301 12.5306 17.3599 12.0004 17.3599C11.4702 17.3599 11.0404 16.9301 11.0404 16.3999C11.0404 15.8697 11.4702 15.4399 12.0004 15.4399C12.5306 15.4399 12.9604 15.8697 12.9604 16.3999Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconHelpRegular = (
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
export default React.forwardRef(IconHelpRegular);
