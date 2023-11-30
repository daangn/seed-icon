import * as React from 'react';
import type { SVGProps } from 'react';
interface Props {
  size: number | string;
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.9999 3.0999C16.9741 3.0999 20.8999 6.72895 20.8999 11.0805C20.8999 13.5754 19.6207 15.8197 17.5855 17.2932C17.4297 17.4061 17.3374 17.5868 17.3374 17.7792V20.4272C17.1365 20.3045 16.9157 20.1702 16.6892 20.0333C15.8911 19.5509 14.961 18.9985 14.6235 18.8448C14.5031 18.79 14.3679 18.7765 14.239 18.8064C13.5244 18.9726 12.7741 19.0612 11.9999 19.0612C7.02566 19.0612 3.0999 15.4321 3.0999 11.0805C3.0999 6.72895 7.02566 3.0999 11.9999 3.0999ZM17.6215 22.01C17.8065 22.1246 18.0392 22.13 18.2293 22.0241C18.4195 21.9182 18.5374 21.7176 18.5374 21.4999V18.0796C20.7049 16.4054 22.0999 13.8991 22.0999 11.0805C22.0999 5.95422 17.5191 1.8999 11.9999 1.8999C6.48074 1.8999 1.8999 5.95422 1.8999 11.0805C1.8999 16.2069 6.48074 20.2612 11.9999 20.2612C12.789 20.2612 13.5578 20.1789 14.2961 20.0229C14.6592 20.2171 15.3696 20.6378 16.0684 21.0602C16.4751 21.306 16.8634 21.5435 17.1503 21.7197C17.2937 21.8077 17.4116 21.8804 17.4936 21.931L17.6215 22.01Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.52489 9.4999C7.52489 9.16853 7.79352 8.8999 8.12489 8.8999H15.9999C16.3313 8.8999 16.5999 9.16853 16.5999 9.4999C16.5999 9.83127 16.3313 10.0999 15.9999 10.0999H8.12489C7.79352 10.0999 7.52489 9.83127 7.52489 9.4999Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.52489 12.9999C7.52489 12.6685 7.79352 12.3999 8.12489 12.3999H15.9999C16.3313 12.3999 16.5999 12.6685 16.5999 12.9999C16.5999 13.3313 16.3313 13.5999 15.9999 13.5999H8.12489C7.79352 13.5999 7.52489 13.3313 7.52489 12.9999Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconReplyMissionThin = (
  { size, className }: Props,
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
export default React.forwardRef(IconReplyMissionThin);
