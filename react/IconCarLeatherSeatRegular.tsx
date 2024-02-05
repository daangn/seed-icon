import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCarLeatherSeatRegular = (
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.1709 3.73093C18.1816 3.46583 17.1647 4.05295 16.8996 5.04229L14.3144 14.6902C14.0844 15.5487 13.3065 16.1456 12.4177 16.1456H5.9999C4.97567 16.1456 4.14536 16.9759 4.14536 18.0001C4.14536 19.0244 4.97567 19.8547 5.9999 19.8547L16.6166 19.8547C16.7154 19.8547 16.8019 19.7883 16.8274 19.6928L20.4821 6.00305C20.7472 5.01371 20.1603 3.99602 19.1709 3.73093ZM15.2136 4.59053C15.7282 2.67005 17.7022 1.53036 19.6227 2.04495C21.5432 2.55954 22.6829 4.53355 22.1683 6.45403L18.5138 20.1431C18.2844 21.0024 17.506 21.6002 16.6166 21.6002L5.9999 21.6001C4.01168 21.6001 2.3999 19.9884 2.3999 18.0001C2.3999 16.0119 4.01168 14.4001 5.9999 14.4001H12.4177C12.5165 14.4001 12.6029 14.3338 12.6285 14.2384L15.2136 4.59053Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCarLeatherSeatRegular);
export default ForwardRef;
