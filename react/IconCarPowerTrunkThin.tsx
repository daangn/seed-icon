import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCarPowerTrunkThin = (
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
    data-seed-icon-version="0.4.1"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.41563 2.63407C3.06284 2.55521 2.71292 2.77728 2.63407 3.13007C2.55521 3.48286 2.77728 3.83278 3.13007 3.91163L8.27942 5.06259C9.17229 5.26423 9.96581 5.76028 10.5493 6.4861L12.0329 8.95833C12.4291 9.62059 13.1055 10.0626 13.8703 10.1472L18.2206 10.6381L18.2227 10.6384C18.8265 10.7045 19.3243 11.1809 19.4241 11.8226L20.064 15.9737C20.1326 16.4175 19.7934 16.8001 19.3782 16.8001H13.7989C13.7627 16.8001 13.7272 16.8031 13.6926 16.8087C13.3846 14.947 11.7672 13.5273 9.81816 13.5273C7.8722 13.5273 6.25681 14.9426 5.94519 16.8H3.27271C2.91121 16.8 2.61816 17.093 2.61816 17.4545C2.61816 17.816 2.91121 18.1091 3.27271 18.1091H5.94519C6.25681 19.9665 7.8722 21.3818 9.81816 21.3818C11.7671 21.3818 13.3844 19.9622 13.6925 18.1006C13.7272 18.1063 13.7627 18.1092 13.7989 18.1092H19.3782C20.6194 18.1092 21.5451 16.9876 21.3578 15.7739L20.7177 11.6216C20.5313 10.4219 19.5842 9.47113 18.3664 9.33721L18.3652 9.33707L14.0154 8.84617L14.0137 8.84598C13.9355 8.83737 13.8589 8.82049 13.7849 8.7959C13.8195 8.73096 13.8646 8.65102 13.9209 8.55985C14.0878 8.28963 14.3504 7.9259 14.7277 7.56211C15.4734 6.84318 16.6799 6.10907 18.5456 6.10907C18.9071 6.10907 19.2002 5.81602 19.2002 5.45453C19.2002 5.09303 18.9071 4.79998 18.5456 4.79998C16.2916 4.79998 14.7708 5.70224 13.8191 6.61967C13.3843 7.03885 13.071 7.45808 12.8585 7.79013L11.6496 5.77549C11.6353 5.75169 11.6195 5.72883 11.6023 5.70704C10.8329 4.73111 9.76932 4.05682 8.56704 3.78548L3.41563 2.63407ZM7.19998 17.4545C7.19998 18.9005 8.37218 20.0727 9.81816 20.0727C11.2641 20.0727 12.4363 18.9005 12.4363 17.4545C12.4363 16.0085 11.2641 14.8363 9.81816 14.8363C8.37218 14.8363 7.19998 16.0085 7.19998 17.4545Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCarPowerTrunkThin);
export default ForwardRef;
