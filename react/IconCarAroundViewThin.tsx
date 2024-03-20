import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCarAroundViewThin = (
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
    data-seed-icon-version="0.6.0"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        d="M2.83277 10.3674C2.83277 9.39635 3.63915 8.33723 5.3466 7.48172C7.01451 6.64602 9.36453 6.1089 11.9964 6.1089C14.6287 6.1089 16.9787 6.64418 18.6465 7.47889C20.3532 8.3331 21.16 9.39213 21.16 10.3674C21.16 11.1092 20.7039 11.8927 19.7079 12.6168C18.7187 13.3359 17.2774 13.9301 15.5381 14.2842C15.1838 14.3563 14.9551 14.7019 15.0272 15.0561C15.0993 15.4103 15.4449 15.639 15.7992 15.5669C17.6629 15.1876 19.2946 14.5357 20.4776 13.6757C21.6539 12.8206 22.4691 11.6917 22.4691 10.3674C22.4691 8.62982 21.0788 7.23233 19.2324 6.30823C17.347 5.36463 14.788 4.7998 11.9964 4.7998C9.20447 4.7998 6.6454 5.36673 4.76018 6.31132C2.91449 7.2361 1.52368 8.63349 1.52368 10.3674C1.52368 11.9852 2.73828 13.3089 4.38428 14.2216C5.93216 15.0798 8.00107 15.6632 10.3033 15.8567L8.26442 17.8956C8.0088 18.1512 8.0088 18.5656 8.26442 18.8212C8.52003 19.0769 8.93447 19.0769 9.19008 18.8212L12.2756 15.7357C12.5313 15.4801 12.5313 15.0656 12.2756 14.81L9.19008 11.7245C8.93447 11.4688 8.52003 11.4688 8.26442 11.7245C8.0088 11.9801 8.0088 12.3945 8.26442 12.6501L10.1417 14.5274C8.09607 14.3246 6.31501 13.7953 5.01908 13.0767C3.52765 12.2498 2.83277 11.2711 2.83277 10.3674Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCarAroundViewThin);
export default ForwardRef;
