/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconMoneyYenRegular = (
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
      <g>
        <path
          d="M9 11.65C8.53056 11.65 8.15 12.0306 8.15 12.5C8.15 12.9694 8.53056 13.35 9 13.35H11.15V14.15H9C8.53056 14.15 8.15 14.5306 8.15 15C8.15 15.4694 8.53056 15.85 9 15.85H11.15V18C11.15 18.4694 11.5306 18.85 12 18.85C12.4694 18.85 12.85 18.4694 12.85 18V15.85H15C15.4694 15.85 15.85 15.4694 15.85 15C15.85 14.5306 15.4694 14.15 15 14.15H12.85V13.35H15C15.4694 13.35 15.85 12.9694 15.85 12.5C15.85 12.0306 15.4694 11.65 15 11.65H13.5484L16.2171 7.45634C16.4691 7.06029 16.3524 6.53492 15.9563 6.28289C15.5603 6.03086 15.0349 6.14761 14.7829 6.54366L12 10.9168L9.21711 6.54366C8.96508 6.14761 8.43971 6.03086 8.04366 6.28289C7.64761 6.53492 7.53086 7.06029 7.78289 7.45634L10.4516 11.65H9Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.2002 12.0002C1.2002 6.03552 6.03552 1.2002 12.0002 1.2002C17.9649 1.2002 22.8002 6.03552 22.8002 12.0002C22.8002 17.9649 17.9649 22.8002 12.0002 22.8002C6.03552 22.8002 1.2002 17.9649 1.2002 12.0002ZM12.0002 2.8002C6.91918 2.8002 2.8002 6.91918 2.8002 12.0002C2.8002 17.0812 6.91918 21.2002 12.0002 21.2002C17.0812 21.2002 21.2002 17.0812 21.2002 12.0002C21.2002 6.91918 17.0812 2.8002 12.0002 2.8002Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconMoneyYenRegular);
export default ForwardRef;
