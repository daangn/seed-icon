import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconHelpFill = (
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
    data-seed-icon-version="0.5.8"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM14.3486 8.06229C15.0167 8.67707 15.4099 9.58903 15.2728 10.6772C15.1282 11.826 14.2706 12.4118 13.7351 12.7776C13.6926 12.8067 13.652 12.8344 13.614 12.8609C13.0263 13.2706 12.7895 13.5032 12.7895 13.9999C12.7895 14.4418 12.4314 14.7999 11.9895 14.7999C11.5477 14.7999 11.1895 14.4418 11.1895 13.9999C11.1895 12.6254 12.0938 11.9703 12.699 11.5484C13.3763 11.0762 13.6341 10.8841 13.6854 10.4773C13.7558 9.91807 13.5639 9.51452 13.2652 9.23964C12.9473 8.94713 12.4838 8.78196 12.0234 8.80149C11.0475 8.8429 10.3 9.58247 10.3 10.4013C10.3 10.8431 9.94178 11.2013 9.49995 11.2013C9.05812 11.2013 8.69995 10.8431 8.69995 10.4013C8.69995 8.56515 10.2926 7.27348 11.9556 7.20293C12.8147 7.16648 13.6997 7.46513 14.3486 8.06229ZM12.0005 17.3599C12.5307 17.3599 12.9605 16.9301 12.9605 16.3999C12.9605 15.8697 12.5307 15.4399 12.0005 15.4399C11.4703 15.4399 11.0405 15.8697 11.0405 16.3999C11.0405 16.9301 11.4703 17.3599 12.0005 17.3599Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconHelpFill);
export default ForwardRef;
