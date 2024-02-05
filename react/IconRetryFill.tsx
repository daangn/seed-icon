import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconRetryFill = (
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
    data-seed-icon-version="0.5.6"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        d="M14.2042 18.2255C13.2452 18.7202 12.1567 19 11 19C7.13401 19 4 15.866 4 12C4 8.13401 7.13401 5 11 5C14.866 5 18 8.13401 18 12C18 12.1455 17.9956 12.2898 17.9869 12.433L16.5692 11.1569C16.1587 10.7875 15.5264 10.8207 15.1569 11.2312C14.7874 11.6417 14.8207 12.274 15.2312 12.6435L18.2311 15.3436C18.6212 15.6947 19.2164 15.6845 19.5942 15.3201L22.3941 12.6201C22.7917 12.2367 22.8031 11.6036 22.4198 11.2061C22.0364 10.8085 21.4033 10.7971 21.0058 11.1804L19.9987 12.1516C19.9996 12.1011 20 12.0506 20 12C20 7.02944 15.9706 3 11 3C6.02944 3 2 7.02944 2 12C2 16.9706 6.02944 21 11 21C12.4832 21 13.8853 20.6404 15.1212 20.0029C15.612 19.7497 15.8046 19.1465 15.5514 18.6557C15.2982 18.1649 14.695 17.9723 14.2042 18.2255Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconRetryFill);
export default ForwardRef;
