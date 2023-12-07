import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconKeywordFill = (
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
    data-seed-icon-version="0.5.3"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.8323 2.08219C16.7697 1.84783 17.7614 2.12251 18.4447 2.80579L21.1942 5.55532C21.8775 6.2386 22.1522 7.23028 21.9178 8.16773L20.8787 12.3243C20.7577 12.808 20.5076 13.2497 20.1551 13.6023L12.5631 21.1943C11.4888 22.2686 9.74697 22.2686 8.67267 21.1943L2.80573 15.3273C1.73142 14.253 1.73142 12.5112 2.80573 11.4369L10.3977 3.84492C10.7503 3.49237 11.192 3.24225 11.6757 3.12133L15.8323 2.08219ZM12.944 7.19348C14.0468 6.09071 15.8347 6.09071 16.9375 7.19348C18.0403 8.29625 18.0403 10.0842 16.9375 11.187C15.8347 12.2897 14.0468 12.2897 12.944 11.187C11.8412 10.0842 11.8412 8.29625 12.944 7.19348Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconKeywordFill);
export default ForwardRef;
