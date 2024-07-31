/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconChatBubbleCheckRegular = (
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
    data-seed-icon-version="0.7.2"
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
          d="M11.9999 3.29995C16.8834 3.29995 20.6999 6.85812 20.6999 11.0806C20.6999 13.5038 19.4579 15.6907 17.4683 17.1313C17.2605 17.2817 17.1374 17.5227 17.1374 17.7793V20.0712C17.0254 20.003 16.9098 19.9329 16.7927 19.8622C16.0007 19.3835 15.0575 18.8227 14.7064 18.6628C14.5459 18.5897 14.3656 18.5717 14.1938 18.6117C13.4939 18.7744 12.7589 18.8612 11.9999 18.8612C7.11652 18.8612 3.29995 15.3031 3.29995 11.0806C3.29995 6.85812 7.11652 3.29995 11.9999 3.29995ZM17.5162 22.1801C17.763 22.3329 18.0731 22.3401 18.3267 22.1989C18.5803 22.0577 18.7374 21.7902 18.7374 21.5V18.1773C20.9039 16.4699 22.2999 13.9342 22.2999 11.0806C22.2999 5.82515 17.6099 1.69995 11.9999 1.69995C6.38997 1.69995 1.69995 5.82515 1.69995 11.0806C1.69995 16.336 6.38997 20.4612 11.9999 20.4612C12.7774 20.4612 13.5357 20.3827 14.2654 20.2336C14.6332 20.4345 15.2982 20.8284 15.965 21.2315C16.3711 21.4769 16.7591 21.7142 17.0457 21.8902C17.1889 21.9781 17.3067 22.0507 17.3886 22.1012L17.5162 22.1801Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.9713 7.8536C16.3283 8.11391 16.4067 8.61434 16.1464 8.97134L11.7714 14.9713C11.6353 15.1579 11.4252 15.2766 11.1952 15.2969C10.9651 15.3172 10.7375 15.2371 10.5709 15.0771L7.44595 12.0771C7.12722 11.7711 7.11689 11.2647 7.42287 10.946C7.72885 10.6273 8.23527 10.6169 8.554 10.9229L11.0182 13.2886L14.8536 8.02867C15.1139 7.67167 15.6143 7.59329 15.9713 7.8536Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconChatBubbleCheckRegular);
export default ForwardRef;
