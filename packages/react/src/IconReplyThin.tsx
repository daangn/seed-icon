/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconReplyThin = (
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
        d="M12.0001 3.0999C16.9743 3.0999 20.9001 6.72895 20.9001 11.0805C20.9001 13.5754 19.6209 15.8197 17.5857 17.2932C17.4299 17.4061 17.3376 17.5868 17.3376 17.7792V20.4272C17.1367 20.3045 16.9159 20.1702 16.6894 20.0333C15.8913 19.5509 14.9612 18.9985 14.6237 18.8448C14.5033 18.79 14.3681 18.7765 14.2392 18.8064C13.5246 18.9726 12.7743 19.0612 12.0001 19.0612C7.02585 19.0612 3.1001 15.4321 3.1001 11.0805C3.1001 6.72895 7.02585 3.0999 12.0001 3.0999ZM17.6217 22.01C17.8067 22.1246 18.0394 22.13 18.2295 22.0241C18.4197 21.9182 18.5376 21.7176 18.5376 21.4999V18.0796C20.705 16.4054 22.1001 13.8991 22.1001 11.0805C22.1001 5.95422 17.5193 1.8999 12.0001 1.8999C6.48093 1.8999 1.9001 5.95422 1.9001 11.0805C1.9001 16.2069 6.48093 20.2612 12.0001 20.2612C12.7892 20.2612 13.558 20.1789 14.2963 20.0229C14.6594 20.2171 15.3698 20.6378 16.0686 21.0602C16.4753 21.306 16.8636 21.5435 17.1505 21.7197C17.2939 21.8077 17.4118 21.8804 17.4938 21.931L17.6217 22.01Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconReplyThin);
export default ForwardRef;
