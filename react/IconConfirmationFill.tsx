import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconConfirmationFill = (
  {
    size = 24,
    ...props
  }: SVGProps<SVGSVGElement> & {
    size?: number | string,
  },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-seed-icon="true"
    data-seed-icon-version="0.5.7"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.8039 1.18616C12.2977 0.937945 11.7022 0.937946 11.196 1.18616L3.19604 5.10929C2.58564 5.40863 2.19995 6.02126 2.19995 6.69149V8.90722C2.19995 12.5248 2.98407 15.3802 4.54963 17.6641C6.11316 19.9451 8.40389 21.5796 11.2781 22.8481C11.736 23.0502 12.2639 23.0514 12.7242 22.8461C15.6216 21.554 17.9035 19.7649 19.4567 17.4244C21.0106 15.083 21.8 12.2431 21.8 8.90722V6.69149C21.8 6.02126 21.4143 5.40863 20.8039 5.10929L12.8039 1.18616ZM16.5919 9.56759C16.8891 9.24642 16.865 8.74935 16.5381 8.45737C16.2112 8.16539 15.7052 8.18906 15.408 8.51024L10.9724 13.3037L8.56564 10.9392C8.25322 10.6323 7.74669 10.6323 7.43427 10.9392C7.12185 11.2462 7.12185 11.7438 7.43427 12.0507L10.4343 14.998C10.589 15.15 10.8003 15.2331 11.019 15.2279C11.2377 15.2228 11.4447 15.1299 11.5919 14.9709L16.5919 9.56759Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconConfirmationFill);
export default ForwardRef;
