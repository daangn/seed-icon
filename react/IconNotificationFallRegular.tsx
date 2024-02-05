import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconNotificationFallRegular = (
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.74434 7.58325C8.18616 7.58325 8.54434 7.94142 8.54434 8.38325V21.3833C8.54434 21.8251 8.18616 22.1833 7.74434 22.1833C7.30251 22.1833 6.94434 21.8251 6.94434 21.3833V8.38325C6.94434 7.94142 7.30251 7.58325 7.74434 7.58325Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.8557 0C18.2975 0 18.6557 0.358172 18.6557 0.8V13.8C18.6557 14.2418 18.2975 14.6 17.8557 14.6C17.4138 14.6 17.0557 14.2418 17.0557 13.8V0.8C17.0557 0.358172 17.4138 0 17.8557 0Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.2343 9.23431C12.5467 8.9219 13.0533 8.9219 13.3657 9.23431L17.8 13.6686L22.2343 9.23431C22.5467 8.9219 23.0533 8.9219 23.3657 9.23431C23.6781 9.54673 23.6781 10.0533 23.3657 10.3657L18.3657 15.3657C18.0533 15.6781 17.5467 15.6781 17.2343 15.3657L12.2343 10.3657C11.9219 10.0533 11.9219 9.54673 12.2343 9.23431Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.23431 17.2343C2.54673 16.9219 3.05327 16.9219 3.36569 17.2343L7.8 21.6686L12.2343 17.2343C12.5467 16.9219 13.0533 16.9219 13.3657 17.2343C13.6781 17.5467 13.6781 18.0533 13.3657 18.3657L8.36569 23.3657C8.05327 23.6781 7.54673 23.6781 7.23431 23.3657L2.23431 18.3657C1.9219 18.0533 1.9219 17.5467 2.23431 17.2343Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconNotificationFallRegular);
export default ForwardRef;
