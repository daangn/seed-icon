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
          d="M14.86 4.67165C15.38 2.75165 17.35 1.61165 19.27 2.12165C21.19 2.64165 22.33 4.61165 21.82 6.53165L18.17 20.2217C17.9401 21.0817 17.16 21.6817 16.27 21.6817H5.65005C3.66005 21.6817 2.05005 20.0717 2.05005 18.0817C2.05005 16.0917 3.66005 14.4817 5.65005 14.4817H12.06C12.16 14.4817 12.24 14.4217 12.27 14.3217L14.86 4.67165Z"
          fill="currentColor"
        />
        <path
          d="M5.38013 5.96172C5.38013 5.29172 5.62013 4.71172 6.10013 4.23172C6.57013 3.75172 7.15013 3.51172 7.83013 3.51172V8.41172C7.16013 8.41172 6.58013 8.17172 6.10013 7.69172C5.62013 7.22172 5.38013 6.63172 5.38013 5.96172Z"
          fill="currentColor"
        />
        <path
          d="M12.0201 6.69168C11.5401 6.21168 10.9601 5.97168 10.2901 5.97168C9.62009 5.97168 9.03009 6.21168 8.56009 6.69168C8.08009 7.17168 7.84009 7.75168 7.84009 8.42168H12.7501C12.7501 7.74168 12.5101 7.16168 12.0301 6.69168H12.0201Z"
          fill="currentColor"
        />
        <path
          d="M9.57009 12.6116C10.0501 12.1316 10.2901 11.5516 10.2901 10.8816C10.2901 10.2116 10.0501 9.62164 9.57009 9.15164C9.09009 8.67164 8.51009 8.43164 7.84009 8.43164V13.3416C8.52009 13.3416 9.10009 13.1016 9.57009 12.6216V12.6116Z"
          fill="currentColor"
        />
        <path
          d="M3.64017 10.1616C4.12017 10.6416 4.70017 10.8816 5.37017 10.8816C6.04017 10.8816 6.63017 10.6416 7.10017 10.1616C7.57017 9.68164 7.82017 9.10164 7.82017 8.43164H2.92017C2.92017 9.11164 3.16017 9.69164 3.64017 10.1616Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconCarVentilationSeatFill = (
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
export default React.forwardRef(IconCarVentilationSeatFill);
