import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconMoonFill = (
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
        d="M12.0523 4.229C11.6163 4.229 11.1881 4.26493 10.7706 4.33413C10.4753 4.38309 10.232 4.5928 10.1401 4.87767C10.0481 5.16255 10.1229 5.4749 10.3339 5.68724C11.1791 6.53778 11.6999 7.70727 11.6999 8.99995C11.6999 11.5957 9.5956 13.7 6.99987 13.7C6.5358 13.7 6.08879 13.6329 5.66726 13.5086C5.38038 13.4239 5.07024 13.5064 4.86328 13.7224C4.65633 13.9383 4.58714 14.2517 4.68392 14.5347C5.73094 17.5967 8.63327 19.8001 12.0523 19.8001C16.3522 19.8001 19.8379 16.3144 19.8379 12.0146C19.8379 7.71472 16.3522 4.229 12.0523 4.229Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconMoonFill);
export default ForwardRef;
