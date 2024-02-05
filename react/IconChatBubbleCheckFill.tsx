import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconChatBubbleCheckFill = (
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.3267 22.1989C18.0731 22.3401 17.763 22.3329 17.5162 22.1801L17.3886 22.1012C17.3067 22.0507 17.1889 21.9781 17.0457 21.8902C16.7591 21.7142 16.3711 21.4769 15.965 21.2315C15.2982 20.8284 14.6332 20.4345 14.2654 20.2336C13.5357 20.3827 12.7774 20.4612 11.9999 20.4612C6.38997 20.4612 1.69995 16.336 1.69995 11.0806C1.69995 5.82515 6.38997 1.69995 11.9999 1.69995C17.6099 1.69995 22.2999 5.82515 22.2999 11.0806C22.2999 13.9342 20.9039 16.4699 18.7374 18.1773V21.5C18.7374 21.7902 18.5803 22.0577 18.3267 22.1989ZM16.1464 8.97134C16.4067 8.61434 16.3283 8.11391 15.9713 7.8536C15.6143 7.59329 15.1139 7.67167 14.8535 8.02867L11.0182 13.2886L8.55398 10.9229C8.23525 10.6169 7.72882 10.6273 7.42284 10.946C7.11686 11.2647 7.1272 11.7711 7.44593 12.0771L10.5709 15.0771C10.7375 15.2371 10.9651 15.3172 11.1952 15.2969C11.4252 15.2766 11.6353 15.1579 11.7714 14.9713L16.1464 8.97134Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconChatBubbleCheckFill);
export default ForwardRef;
