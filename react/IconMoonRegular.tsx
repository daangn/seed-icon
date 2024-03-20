import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconMoonRegular = (
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
    data-seed-icon-version="0.6.1"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4521 5.84171C12.9909 6.7702 13.2999 7.84934 13.2999 8.99995C13.2999 12.4793 10.4793 15.3 6.99987 15.3C6.93583 15.3 6.872 15.299 6.80839 15.2971C7.90262 17.0413 9.84283 18.2001 12.0523 18.2001C15.4685 18.2001 18.2379 15.4308 18.2379 12.0146C18.2379 8.73267 15.682 6.04773 12.4521 5.84171ZM10.7706 4.33413C11.1881 4.26493 11.6163 4.229 12.0523 4.229C16.3522 4.229 19.8379 7.71472 19.8379 12.0146C19.8379 16.3144 16.3522 19.8001 12.0523 19.8001C8.63327 19.8001 5.73094 17.5967 4.68392 14.5347C4.58714 14.2517 4.65633 13.9383 4.86328 13.7224C5.07024 13.5064 5.38038 13.4239 5.66726 13.5086C6.08879 13.6329 6.5358 13.7 6.99987 13.7C9.5956 13.7 11.6999 11.5957 11.6999 8.99995C11.6999 7.70727 11.1791 6.53778 10.3339 5.68724C10.1229 5.4749 10.0481 5.16255 10.1401 4.87767C10.232 4.5928 10.4753 4.38309 10.7706 4.33413Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconMoonRegular);
export default ForwardRef;
