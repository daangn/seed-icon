import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconNearMeThin = (
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.3999 9.89981C8.3999 7.91158 10.0117 6.2998 11.9999 6.2998C13.9881 6.2998 15.5999 7.91158 15.5999 9.89981C15.5999 11.888 13.9881 13.4998 11.9999 13.4998C10.0117 13.4998 8.3999 11.888 8.3999 9.89981ZM11.9999 7.4998C10.6744 7.4998 9.5999 8.57432 9.5999 9.89981C9.5999 11.2253 10.6744 12.2998 11.9999 12.2998C13.3254 12.2998 14.3999 11.2253 14.3999 9.89981C14.3999 8.57432 13.3254 7.4998 11.9999 7.4998Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.4653 20.7998H5.6C5.26863 20.7998 5 21.0684 5 21.3998C5 21.7312 5.26863 21.9998 5.6 21.9998H18.4C18.7314 21.9998 19 21.7312 19 21.3998C19 21.0684 18.7314 20.7998 18.4 20.7998H12.5345C12.5699 20.7811 12.6085 20.7605 12.6501 20.738C12.891 20.608 13.2327 20.4161 13.6416 20.1654C14.4582 19.6648 15.5495 18.9261 16.6437 17.9745C18.8097 16.0905 21.0999 13.2719 21.0999 9.73303C21.0999 4.78819 17.0144 0.799805 11.9999 0.799805C6.98537 0.799805 2.8999 4.78819 2.8999 9.73303C2.8999 13.2719 5.19007 16.0905 7.35614 17.9745C8.45029 18.9261 9.54159 19.6648 10.3582 20.1654C10.7671 20.4161 11.1088 20.608 11.3497 20.738C11.3913 20.7605 11.4299 20.7811 11.4653 20.7998ZM11.9999 1.9998C7.62559 1.9998 4.0999 5.47324 4.0999 9.73303C4.0999 12.7417 6.05974 15.2565 8.14366 17.069C9.17452 17.9656 10.2082 18.6659 10.9854 19.1423C11.3733 19.3801 11.6957 19.5611 11.9196 19.682L11.9999 19.725L12.0802 19.682C12.3041 19.5611 12.6265 19.3801 13.0145 19.1423C13.7916 18.6659 14.8253 17.9656 15.8561 17.069C17.9401 15.2565 19.8999 12.7417 19.8999 9.73303C19.8999 5.47324 16.3742 1.9998 11.9999 1.9998Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(IconNearMeThin);
export default ForwardRef;
