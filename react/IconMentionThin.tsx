import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconMentionThin = (
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
    data-seed-icon-version="0.5.2"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5999 11.9999C2.5999 6.80843 6.80843 2.5999 11.9999 2.5999C17.1914 2.5999 21.3999 6.80843 21.3999 11.9999C21.3999 12.7674 21.2267 13.9132 20.733 14.8437C20.2524 15.7496 19.5064 16.3999 18.3157 16.3999C17.8045 16.3999 17.318 16.1546 16.9401 15.6351C16.556 15.107 16.2841 14.2875 16.2841 13.1904V12.0174C16.2841 12.0116 16.2841 12.0057 16.2841 11.9999C16.2841 11.9941 16.2841 11.9882 16.2841 11.9824V6.9999C16.2841 6.66853 16.0155 6.3999 15.6841 6.3999C15.3527 6.3999 15.0841 6.66853 15.0841 6.9999V8.47263C14.213 7.37125 12.9343 6.66307 11.4736 6.66307C8.75235 6.66307 6.66309 9.12084 6.66309 11.9999C6.66309 14.879 8.75235 17.3368 11.4736 17.3368C13.1022 17.3368 14.5044 16.4565 15.3679 15.1325C15.5153 15.5888 15.7178 15.9947 15.9697 16.3409C16.5442 17.1309 17.3735 17.5999 18.3157 17.5999C20.0723 17.5999 21.1684 16.5835 21.7931 15.4061C22.4047 14.2533 22.5999 12.8991 22.5999 11.9999C22.5999 6.14568 17.8541 1.3999 11.9999 1.3999C6.14568 1.3999 1.3999 6.14568 1.3999 11.9999C1.3999 17.8541 6.14568 22.5999 11.9999 22.5999C14.1391 22.5999 15.6862 22.3967 16.9195 22.0023C17.2351 21.9014 17.4092 21.5637 17.3082 21.2481C17.2073 20.9324 16.8696 20.7584 16.554 20.8593C15.4826 21.2019 14.0713 21.3999 11.9999 21.3999C6.80843 21.3999 2.5999 17.1914 2.5999 11.9999ZM15.0841 11.9843V12.0156C15.0767 14.3609 13.3989 16.1368 11.4736 16.1368C9.54406 16.1368 7.86309 14.353 7.86309 11.9999C7.86309 9.64681 9.54406 7.86307 11.4736 7.86307C13.3989 7.86307 15.0767 9.63891 15.0841 11.9843Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconMentionThin);
export default ForwardRef;
