import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconHelpcenterRegular = (
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
          d="M19.2 9.8H20.8V16.4143C20.8 16.4096 20.8 16.4048 20.8 16.4L20.8 9.8C20.8 4.93989 16.8601 1 12 1C7.13989 1 3.2 4.93989 3.2 9.8H4.8C4.8 5.82355 8.02355 2.6 12 2.6C15.9765 2.6 19.2 5.82355 19.2 9.8Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.9 10.3H4C3.2268 10.3 2.6 10.9268 2.6 11.7V14.5C2.6 15.2732 3.2268 15.9 4 15.9H4.9V10.3ZM4 8.7C2.34315 8.7 1 10.0431 1 11.7V14.5C1 16.1569 2.34315 17.5 4 17.5H6.5V8.7H4Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.1 15.9H20C20.7732 15.9 21.4 15.2732 21.4 14.5V11.7C21.4 10.9268 20.7732 10.3 20 10.3H19.1V15.9ZM20 17.5C21.6569 17.5 23 16.1569 23 14.5V11.7C23 10.0431 21.6569 8.7 20 8.7H17.5V17.5H20Z"
          fill="currentColor"
        />
        <path
          d="M16.4 21.9C18.8301 21.9 20.8 19.9301 20.8 17.5L20.8 16.4L19.2 16.4V17.5C19.2 19.0464 17.9464 20.3 16.4 20.3V21.9Z"
          fill="currentColor"
        />
        <path
          d="M13.1 21.35C13.1 20.4387 13.8387 19.7 14.75 19.7H15.85C16.7613 19.7 17.5 20.4387 17.5 21.35C17.5 22.2613 16.7613 23 15.85 23H14.75C13.8387 23 13.1 22.2613 13.1 21.35Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconHelpcenterRegular);
export default ForwardRef;
