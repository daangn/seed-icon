import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconNewtopicThin = (
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
          d="M9.06564 7.93453C8.83684 7.70573 8.49274 7.63729 8.1938 7.76112C7.89487 7.88494 7.69995 8.17665 7.69995 8.50022V16.0002C7.69995 16.442 8.05812 16.8002 8.49995 16.8002C8.94178 16.8002 9.29995 16.442 9.29995 16.0002V10.4316L14.9343 16.5659C15.1631 16.7947 15.5072 16.8631 15.8061 16.7393C16.105 16.6155 16.3 16.3238 16.3 16.0002V8.50022C16.3 8.05839 15.9418 7.70022 15.5 7.70022C15.0581 7.70022 14.7 8.05839 14.7 8.50022V14.0688L9.06564 7.93453Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21.8 12C21.8 17.4124 17.4124 21.8 12 21.8C6.58761 21.8 2.2 17.4124 2.2 12C2.2 6.58761 6.58761 2.2 12 2.2C17.4124 2.2 21.8 6.58761 21.8 12Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconNewtopicThin);
export default ForwardRef;
