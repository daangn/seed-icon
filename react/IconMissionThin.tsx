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
          d="M2.9999 6.32744C2.77899 6.32744 2.5999 6.50653 2.5999 6.72744V18.0002C2.5999 18.2211 2.77899 18.4002 2.9999 18.4002H21.3635C21.5845 18.4002 21.7635 18.2211 21.7635 18.0002V6.72744C21.7635 6.50653 21.5844 6.32744 21.3635 6.32744H19.8181V5.12744H21.3635C22.2472 5.12744 22.9635 5.84379 22.9635 6.72744V18.0002C22.9635 18.8838 22.2472 19.6002 21.3635 19.6002H2.9999C2.11625 19.6002 1.3999 18.8838 1.3999 18.0002V6.72744C1.3999 5.84378 2.11625 5.12744 2.9999 5.12744H4.54536V6.32744H2.9999Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.53949 4.60334C5.32578 4.60129 5.14531 4.7764 5.14531 5.00003V15.184C5.14531 15.4028 5.32325 15.585 5.55004 15.5868C6.78151 15.5966 8.20175 15.6409 9.46401 15.85C10.2063 15.973 10.9519 16.1612 11.5817 16.4694V5.95519C11.1329 5.4594 10.3292 5.1128 9.24895 4.89804C8.09452 4.66853 6.76162 4.61506 5.53949 4.60334ZM3.94531 5.00003C3.94531 4.11909 4.66019 3.39485 5.551 3.4034C6.78348 3.41522 8.21146 3.4683 9.48293 3.72107C10.7285 3.96869 11.9693 4.43467 12.6662 5.38906C12.7412 5.49179 12.7817 5.6157 12.7817 5.7429V17.6364C12.7817 17.8863 12.6268 18.11 12.3929 18.198C12.159 18.286 11.8951 18.2198 11.7304 18.0318C11.3223 17.5661 10.4673 17.2326 9.26788 17.0339C8.10424 16.8411 6.7636 16.7965 5.54045 16.7868C4.66271 16.7797 3.94531 16.0698 3.94531 15.184V5.00003Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.8238 4.60334C19.0375 4.60129 19.218 4.7764 19.218 5.00003V15.184C19.218 15.4028 19.04 15.585 18.8132 15.5868C17.5818 15.5966 16.1615 15.6409 14.8993 15.85C14.157 15.973 13.4113 16.1612 12.7816 16.4694V5.95519C13.2303 5.4594 14.034 5.1128 15.1143 4.89804C16.2688 4.66853 17.6017 4.61506 18.8238 4.60334ZM20.418 5.00003C20.418 4.11909 19.7031 3.39485 18.8123 3.4034C17.5798 3.41522 16.1518 3.4683 14.8803 3.72107C13.6348 3.96869 12.394 4.43467 11.6971 5.38906C11.622 5.49179 11.5816 5.6157 11.5816 5.7429V17.6364C11.5816 17.8863 11.7365 18.11 11.9704 18.198C12.2042 18.286 12.4682 18.2198 12.6329 18.0318C13.0409 17.5661 13.896 17.2326 15.0954 17.0339C16.259 16.8411 17.5997 16.7965 18.8228 16.7868C19.7006 16.7797 20.418 16.0698 20.418 15.184V5.00003Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconMissionThin = (
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
export default React.forwardRef(IconMissionThin);
