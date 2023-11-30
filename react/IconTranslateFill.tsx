import * as React from 'react';
import type { SVGProps } from 'react';
interface Props {
  size?: number | string;
  className?: string;
}
const SVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-seed-icon="true"
    data-seed-icon-version="0.3.15"
    {...props}
  >
    <g>
      <g>
        <path
          d="M1 2.97677C1 1.88503 1.88503 1 2.97677 1H13.108C14.1998 1 15.0848 1.88503 15.0848 2.97677V7.61703H10.2252L8.90344 4.07273L8.8336 3.87484H7.25052L7.18067 4.07273L4.29387 11.8135L4.14255 12.2093H5.87696L5.9468 12.0114L6.50554 10.4749H7.61703V15.0848H2.97677C1.88503 15.0848 1 14.1998 1 13.108V2.97677Z"
          fill="currentColor"
        />
        <path
          d="M8.04206 6.29603L8.69343 8.07748C8.3759 8.30105 8.11206 8.59574 7.92507 8.93839H7.07591L8.04206 6.29603Z"
          fill="currentColor"
        />
        <path
          d="M17.222 14.3743C16.903 15.1359 16.4665 15.8429 15.9284 16.4696C15.3728 15.8445 14.9168 15.1378 14.5765 14.3743H17.222Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.9152 10.892C8.9152 9.80023 9.80023 8.9152 10.892 8.9152H21.0232C22.115 8.9152 23 9.80023 23 10.892V21.0232C23 22.115 22.115 23 21.0232 23H10.892C9.80023 23 8.9152 22.115 8.9152 21.0232V10.892ZM20.4736 19.0304C19.2668 18.7788 18.1269 18.275 17.1288 17.5521C17.9346 16.612 18.566 15.5359 18.9935 14.3743H20.4736V12.8145H16.6976V11.3245H15.1242V12.8145H11.4414V14.3743H12.8633C13.293 15.5547 13.9152 16.6559 14.7047 17.6336C13.7083 18.2964 12.5981 18.77 11.4298 19.0304L11.1501 19.1352L11.3482 19.3797C11.6112 19.7097 11.8414 20.0644 12.0358 20.4389L12.1057 20.5902H12.2805C13.5617 20.1791 14.758 19.5403 15.8118 18.7045C16.8885 19.5722 18.1411 20.1958 19.483 20.532H19.6461L19.7161 20.3924C19.9302 20.004 20.1926 19.6442 20.4969 19.3214L20.765 19.0537L20.4736 19.0304Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconTranslateFill = (
  { size = 24, className }: Props,
  ref: React.ForwardedRef<HTMLSpanElement>
) => {
  return (
    <span
      ref={ref}
      className={className}
      style={{
        display: 'inline-flex',
        width: size,
        height: size,
      }}
    >
      <SVG />
    </span>
  );
};
export default React.forwardRef(IconTranslateFill);
