import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconDeleteKeyboardFill = (
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
        d="M8.7641 4C7.97172 4 7.21644 4.33573 6.68553 4.92396L1.72143 10.424C0.759523 11.4897 0.759524 13.1103 1.72143 14.176L6.68553 19.676C7.21644 20.2643 7.97172 20.6 8.7641 20.6H21.1058C22.6522 20.6 23.9058 19.3464 23.9058 17.8V6.8C23.9058 5.2536 22.6522 4 21.1058 4H8.7641ZM10.5402 8.23431C10.8526 7.9219 11.3592 7.9219 11.6716 8.23431L14.6059 11.1686L17.5402 8.23431C17.8526 7.9219 18.3592 7.9219 18.6716 8.23431C18.984 8.54673 18.984 9.05327 18.6716 9.36569L15.7373 12.3L18.6716 15.2343C18.984 15.5467 18.984 16.0533 18.6716 16.3657C18.3592 16.6781 17.8526 16.6781 17.5402 16.3657L14.6059 13.4314L11.6716 16.3657C11.3592 16.6781 10.8526 16.6781 10.5402 16.3657C10.2278 16.0533 10.2278 15.5467 10.5402 15.2343L13.4745 12.3L10.5402 9.36569C10.2278 9.05327 10.2278 8.54673 10.5402 8.23431Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconDeleteKeyboardFill);
export default ForwardRef;
