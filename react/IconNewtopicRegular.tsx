import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconNewtopicRegular = (
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
      <g>
        <path
          d="M17 8.42857C17 7.63959 16.3604 7 15.5714 7C14.7824 7 14.1429 7.63959 14.1429 8.42857V12.2954L9.40064 7.89192C8.98428 7.5053 8.37837 7.40217 7.85755 7.62929C7.33672 7.85641 7 8.37058 7 8.93877V15.5714C7 16.3604 7.63959 17 8.42857 17C9.21755 17 9.85714 16.3604 9.85714 15.5714V12.2148L14.5994 16.6182C15.0157 17.0049 15.6216 17.108 16.1425 16.8809C16.6633 16.6538 17 16.1396 17 15.5714V8.42857Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21.4 12C21.4 17.1915 17.1915 21.4 12 21.4C6.80852 21.4 2.6 17.1915 2.6 12C2.6 6.80852 6.80852 2.6 12 2.6C17.1915 2.6 21.4 6.80852 21.4 12Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconNewtopicRegular);
export default ForwardRef;
