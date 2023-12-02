import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconMoneySendFill = (
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
    data-seed-icon-version="0.5.0"
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
          d="M15 18.4016C15 17.8493 15.4477 17.4016 16 17.4016H22C22.5523 17.4016 23 17.8493 23 18.4016C23 18.9539 22.5523 19.4016 22 19.4016H16C15.4477 19.4016 15 18.9539 15 18.4016Z"
          fill="currentColor"
        />
        <path
          d="M12 3.61963C7.37165 3.61963 3.61963 7.37165 3.61963 12C3.61963 16.6284 7.37165 20.3804 12 20.3804C12.5838 20.3804 13.1527 20.3208 13.7013 20.2078C14.2422 20.0963 14.771 20.4445 14.8825 20.9854C14.994 21.5263 14.6458 22.0552 14.1049 22.1666C13.4243 22.3069 12.7202 22.3804 12 22.3804C6.26708 22.3804 1.61963 17.7329 1.61963 12C1.61963 6.26708 6.26708 1.61963 12 1.61963C17.7329 1.61963 22.3804 6.26708 22.3804 12C22.3804 12.4055 22.3571 12.8061 22.3116 13.2002C22.2484 13.7488 21.7524 14.1424 21.2037 14.0791C20.6551 14.0159 20.2616 13.5199 20.3248 12.9712C20.3615 12.6529 20.3804 12.3289 20.3804 12C20.3804 7.37165 16.6284 3.61963 12 3.61963Z"
          fill="currentColor"
        />
        <path
          d="M18.2929 22.1087C18.6834 22.4992 19.3166 22.4992 19.7071 22.1087L22.7071 19.1087C23.0976 18.7182 23.0976 18.085 22.7071 17.6945L19.7071 14.6945C19.3166 14.304 18.6834 14.304 18.2929 14.6945C17.9024 15.085 17.9024 15.7182 18.2929 16.1087L20.5858 18.4016L18.2929 20.6945C17.9024 21.085 17.9024 21.7182 18.2929 22.1087Z"
          fill="currentColor"
        />
        <path
          d="M8.75096 8.83131C9.28584 8.69377 9.83095 9.01588 9.96849 9.55076L10.3925 11.1997H10.4629L11.0541 9.47548C11.1926 9.07129 11.5727 8.7998 12 8.7998C12.4273 8.7998 12.8074 9.07129 12.9459 9.47548L13.5371 11.1997H13.6075L14.0315 9.55076C14.169 9.01588 14.7142 8.69377 15.249 8.83131C15.7839 8.96885 16.106 9.51396 15.9685 10.0488L15.6726 11.1997H16C16.5523 11.1997 17 11.6474 17 12.1997C17 12.752 16.5523 13.1997 16 13.1997H15.1583L14.6828 15.0488C14.5728 15.4767 14.195 15.7817 13.7536 15.799C13.3121 15.8164 12.9116 15.542 12.7683 15.1241L12.1085 13.1997H11.8915L11.2317 15.1241C11.0884 15.542 10.6879 15.8164 10.2464 15.799C9.80498 15.7817 9.42724 15.4767 9.31722 15.0488L8.84173 13.1997H8C7.44772 13.1997 7 12.752 7 12.1997C7 11.6474 7.44772 11.1997 8 11.1997H8.32744L8.0315 10.0488C7.89396 9.51396 8.21607 8.96885 8.75096 8.83131Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconMoneySendFill);
export default ForwardRef;
