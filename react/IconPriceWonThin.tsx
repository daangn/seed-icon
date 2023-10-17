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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.06564 5.79976C4.95501 5.4874 4.61212 5.32386 4.29976 5.43449C3.9874 5.54512 3.82386 5.88801 3.93449 6.20037L5.42182 10.3999H3.4999C3.16853 10.3999 2.8999 10.6685 2.8999 10.9999C2.8999 11.3313 3.16853 11.5999 3.4999 11.5999H5.84682L8.18449 18.2004C8.27213 18.4478 8.51049 18.6096 8.77283 18.5996C9.03517 18.5897 9.26057 18.4103 9.3292 18.1569L11.1051 11.5999H12.8724L14.6203 18.1547C14.688 18.4083 14.9127 18.5886 15.175 18.5995C15.4374 18.6105 15.6763 18.4496 15.7649 18.2025L18.1308 11.5999H20.4999C20.8313 11.5999 21.0999 11.3313 21.0999 10.9999C21.0999 10.6685 20.8313 10.3999 20.4999 10.3999H18.5608L20.0649 6.20246C20.1767 5.89052 20.0144 5.54702 19.7025 5.43523C19.3905 5.32345 19.047 5.48572 18.9352 5.79767L17.2861 10.3999H13.7943L12.5798 5.84547C12.5099 5.58323 12.2726 5.40059 12.0012 5.40007C11.7298 5.39954 11.4919 5.58126 11.4209 5.84322L10.1868 10.3999H6.69486L5.06564 5.79976ZM7.11986 11.5999L8.67364 15.9871L9.86183 11.5999H7.11986ZM11.4301 10.3999H12.5524L11.9956 8.31185L11.4301 10.3999ZM14.1143 11.5999L15.2841 15.9867L16.8561 11.5999H14.1143Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const IconPriceWonThin = (
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
export default React.forwardRef(IconPriceWonThin);
