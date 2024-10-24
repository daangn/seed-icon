/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconReplyRegular = (
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
    data-seed-icon-version="0.7.3"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3.29995C16.8835 3.29995 20.7 6.85812 20.7 11.0806C20.7 13.5038 19.458 15.6907 17.4684 17.1313C17.2606 17.2817 17.1375 17.5227 17.1375 17.7793V20.0712C17.0255 20.003 16.9099 19.9329 16.7928 19.8622C16.0008 19.3835 15.0576 18.8227 14.7065 18.6628C14.546 18.5897 14.3657 18.5717 14.1939 18.6117C13.494 18.7744 12.759 18.8612 12 18.8612C7.11662 18.8612 3.30005 15.3031 3.30005 11.0806C3.30005 6.85812 7.11662 3.29995 12 3.29995ZM17.5163 22.1801C17.7631 22.3329 18.0732 22.3401 18.3268 22.1989C18.5804 22.0577 18.7375 21.7902 18.7375 21.5V18.1773C20.904 16.4699 22.3 13.9342 22.3 11.0806C22.3 5.82515 17.61 1.69995 12 1.69995C6.39007 1.69995 1.70005 5.82515 1.70005 11.0806C1.70005 16.336 6.39007 20.4612 12 20.4612C12.7775 20.4612 13.5358 20.3827 14.2655 20.2336C14.6333 20.4345 15.2983 20.8284 15.9651 21.2315C16.3712 21.4769 16.7592 21.7142 17.0458 21.8902C17.189 21.9781 17.3068 22.0507 17.3887 22.1012L17.5163 22.1801Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconReplyRegular);
export default ForwardRef;
