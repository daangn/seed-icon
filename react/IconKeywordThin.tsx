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
          d="M17.5521 9.34158C17.5521 10.9362 16.261 12.2289 14.6685 12.2289C13.0759 12.2289 11.7849 10.9362 11.7849 9.34158C11.7849 7.74692 13.0759 6.4542 14.6685 6.4542C16.261 6.4542 17.5521 7.74692 17.5521 9.34158ZM16.3485 9.34158C16.3485 10.2706 15.5963 11.0238 14.6685 11.0238C13.7407 11.0238 12.9885 10.2706 12.9885 9.34158C12.9885 8.41252 13.7407 7.65937 14.6685 7.65937C15.5963 7.65937 16.3485 8.41252 16.3485 9.34158Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.3613 2.76485C17.7136 2.11629 16.7736 1.85556 15.8849 2.07802L11.5458 3.16423C11.0916 3.27792 10.6764 3.51193 10.3437 3.8417L2.92189 11.1981C1.6971 12.4121 1.69207 14.392 2.91067 15.6122L8.37937 21.0881C9.59506 22.3054 11.5666 22.3037 12.7802 21.0844L20.1554 13.6744C20.488 13.3402 20.7239 12.9221 20.8382 12.4644L21.9221 8.12315C22.1442 7.23332 21.8839 6.29202 21.2362 5.64345L18.3613 2.76485ZM16.1768 3.2472C16.6553 3.12742 17.1615 3.26781 17.5103 3.61703L20.3851 6.49563C20.7339 6.84486 20.8741 7.35171 20.7544 7.83085L19.6706 12.1722C19.609 12.4186 19.482 12.6437 19.3029 12.8237L11.9277 20.2337C11.1839 20.981 9.97553 20.982 9.23043 20.2359L3.76173 14.76C3.01485 14.0122 3.01793 12.7987 3.7686 12.0546L11.1904 4.6982C11.3696 4.52064 11.5932 4.39463 11.8377 4.33341L16.1768 3.2472Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconKeywordThin = (
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
export default React.forwardRef(IconKeywordThin);
