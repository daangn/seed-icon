import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconVideoRegular = (
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
          d="M8.3 7.2002C7.02975 7.2002 6 8.22994 6 9.5002C6 10.7705 7.02975 11.8002 8.3 11.8002C9.57026 11.8002 10.6 10.7705 10.6 9.5002C10.6 8.22994 9.57026 7.2002 8.3 7.2002ZM7.6 9.5002C7.6 9.1136 7.9134 8.8002 8.3 8.8002C8.6866 8.8002 9 9.1136 9 9.5002C9 9.8868 8.6866 10.2002 8.3 10.2002C7.9134 10.2002 7.6 9.8868 7.6 9.5002Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.8 3.2002C3.2536 3.2002 2 4.4538 2 6.0002V18.0002C2 19.5466 3.2536 20.8002 4.8 20.8002H15.8C17.3464 20.8002 18.6 19.5466 18.6 18.0002V16.6607L19.4663 17.6165C20.572 18.8366 22.6 18.0543 22.6 16.4077V7.5927C22.6 5.94609 20.572 5.16384 19.4663 6.38392L18.6 7.33974V6.0002C18.6 4.4538 17.3464 3.2002 15.8 3.2002H4.8ZM3.6 6.0002C3.6 5.33745 4.13726 4.8002 4.8 4.8002H15.8C16.4627 4.8002 17 5.33745 17 6.0002V18.0002C17 18.6629 16.4627 19.2002 15.8 19.2002H4.8C4.13726 19.2002 3.6 18.6629 3.6 18.0002V6.0002ZM18.6 14.2781L20.6518 16.542C20.7747 16.6776 21 16.5907 21 16.4077V7.5927C21 7.40974 20.7747 7.32282 20.6518 7.45839L18.6 9.72232V14.2781Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconVideoRegular);
export default ForwardRef;
