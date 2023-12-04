import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCarRearCameraRegular = (
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
    data-seed-icon-version="0.5.1"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.81824 15.0541C6.32378 15.0541 3.49097 12.2213 3.49097 8.72686V1.0905C3.49097 0.608507 3.8817 0.217773 4.36369 0.217773C4.84569 0.217773 5.23642 0.608507 5.23642 1.0905V6.03795C5.73228 5.5651 6.07411 5.00367 6.31048 4.46627C6.50653 4.02052 6.62253 3.60661 6.68901 3.30534C6.72207 3.1555 6.7424 3.03572 6.75415 2.95661C6.7586 2.92663 6.76181 2.9026 6.764 2.88512V1.09093C6.764 0.608933 7.15474 0.2182 7.63673 0.2182C8.11872 0.2182 8.50946 0.608933 8.50946 1.09093V2.93395C8.50946 2.96044 8.50825 2.98691 8.50584 3.01329L8.5057 3.01484L8.50553 3.01671L8.50507 3.02141L8.50374 3.03459L8.49914 3.07567C8.49515 3.1094 8.48918 3.1557 8.48065 3.21314C8.4636 3.32788 8.43618 3.48782 8.39346 3.68142C8.30837 4.06706 8.16069 4.59498 7.90822 5.169C7.61056 5.84576 7.15665 6.60827 6.4726 7.2712C8.23645 7.648 10.1121 7.85414 12.0562 7.85414C13.9843 7.85414 15.8049 7.64183 17.5275 7.27057C16.8438 6.60779 16.3901 5.84555 16.0926 5.169C15.8401 4.59498 15.6924 4.06706 15.6073 3.68142C15.5646 3.48782 15.5372 3.32788 15.5201 3.21314C15.5116 3.1557 15.5056 3.10941 15.5016 3.07567L15.497 3.03459L15.4957 3.02141L15.4952 3.01671L15.4951 3.01484L15.4949 3.01329C15.4925 2.98691 15.4913 2.96044 15.4913 2.93395V1.09093C15.4913 0.608933 15.882 0.2182 16.364 0.2182C16.846 0.2182 17.2368 0.608933 17.2368 1.09093V2.88512C17.239 2.9026 17.2422 2.92663 17.2466 2.95661C17.2584 3.03572 17.2787 3.1555 17.3118 3.30534C17.3782 3.60661 17.4942 4.02052 17.6903 4.46627C17.9266 5.00344 18.2682 5.5646 18.7637 6.03732V1.0905C18.7637 0.608507 19.1544 0.217773 19.6364 0.217773C20.1184 0.217773 20.5091 0.608507 20.5091 1.0905V7.60519C20.5099 7.62616 20.5099 7.64722 20.5091 7.66832V8.72686C20.5091 12.2213 17.6763 15.0541 14.1819 15.0541H9.81824ZM18.7634 8.77541C18.7374 11.2835 16.6961 13.3087 14.1819 13.3087H9.81824C7.30451 13.3087 5.26358 11.2844 5.23669 8.77701C7.37164 9.30712 9.66818 9.59959 12.0562 9.59959C14.4429 9.59959 16.6746 9.29459 18.7634 8.77541Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.5086 20.6659C20.52 20.9681 20.3741 21.2546 20.1231 21.4232C17.9193 22.9033 15.0798 23.7818 12.0002 23.7818C8.92055 23.7818 6.08105 22.9033 3.87721 21.4231C3.6262 21.2545 3.48033 20.968 3.49169 20.6659C3.50304 20.3637 3.66999 20.089 3.93295 19.9397L11.5693 15.6047C11.8365 15.453 12.1638 15.453 12.431 15.6047L20.0674 19.9397C20.3303 20.089 20.4973 20.3637 20.5086 20.6659ZM17.8838 20.7072L12.0001 17.3672L6.11651 20.7072C7.80445 21.5442 9.82178 22.0364 12.0002 22.0364C14.1786 22.0364 16.1959 21.5442 17.8838 20.7072Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCarRearCameraRegular);
export default ForwardRef;
