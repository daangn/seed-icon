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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.2281 3.51809C18.1213 3.22151 16.9836 3.87836 16.687 4.98519L14.1019 14.6331C13.8977 15.3953 13.207 15.9253 12.4179 15.9253H6.00011C4.85423 15.9253 3.92531 16.8542 3.92531 18.0001C3.92531 19.1459 4.85423 20.0749 6.00011 20.0749L16.6168 20.0749C16.8154 20.0749 16.9892 19.9414 17.0404 19.7496L20.6951 6.05976C20.9917 4.95293 20.335 3.81466 19.2281 3.51809ZM15.4266 4.64744C15.9097 2.84446 17.7629 1.7745 19.5659 2.2576C21.3689 2.74071 22.4388 4.59395 21.9557 6.39693L18.3012 20.0862C18.0975 20.8491 17.4064 21.3799 16.6168 21.3799L6.00011 21.3798C4.13353 21.3798 2.62036 19.8666 2.62036 18.0001C2.62036 16.1335 4.13353 14.6203 6.00011 14.6203H12.4179C12.6164 14.6203 12.7901 14.487 12.8414 14.2953L15.4266 4.64744Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const IconCarLeatherSeatThin = (
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
export default React.forwardRef(IconCarLeatherSeatThin);
