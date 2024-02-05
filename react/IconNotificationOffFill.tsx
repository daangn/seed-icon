import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconNotificationOffFill = (
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
          d="M12.0002 2.19995C8.24837 2.19995 5.2002 5.24812 5.2002 8.99995V14C5.2002 14.3217 5.393 14.6122 5.68954 14.7372C5.98608 14.8621 6.32862 14.7972 6.55893 14.5725L16.402 4.96707C16.5639 4.80904 16.6513 4.58981 16.6426 4.36371C16.6339 4.1376 16.5298 3.92576 16.3562 3.78066C15.1765 2.7948 13.6562 2.19995 12.0002 2.19995Z"
          fill="currentColor"
        />
        <path
          d="M6.43408 18.7972L4.36569 20.8656C4.05327 21.178 3.54673 21.178 3.23431 20.8656C2.9219 20.5532 2.9219 20.0467 3.23431 19.7343L19.7343 3.23425C20.0467 2.92183 20.5533 2.92183 20.8657 3.23425C21.1781 3.54667 21.1781 4.05321 20.8657 4.36562L18.4343 6.79699C18.6716 7.48884 18.8002 8.23024 18.8002 8.99995V13.7577L20.6658 16.5562C20.7534 16.6876 20.8002 16.842 20.8002 17V18C20.8002 18.4418 20.442 18.8 20.0002 18.8H6.5002C6.47799 18.8 6.45594 18.799 6.43408 18.7972Z"
          fill="currentColor"
        />
        <path
          d="M9.58691 20.4C10.0726 21.2335 10.9682 21.8 11.9999 21.8C13.0315 21.8 13.9271 21.2335 14.4128 20.4H9.58691Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconNotificationOffFill);
export default ForwardRef;
