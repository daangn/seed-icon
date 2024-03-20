import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconGpsEnableRegular = (
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
    data-seed-icon-version="0.6.0"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          d="M12.7627 1.51271C12.7627 1.09148 12.4212 0.75 12 0.75C11.5788 0.75 11.2373 1.09148 11.2373 1.51271V2.68746C6.68546 3.05521 3.05521 6.68546 2.68746 11.2373H1.51271C1.09148 11.2373 0.75 11.5788 0.75 12C0.75 12.4212 1.09148 12.7627 1.51271 12.7627H2.68746C3.05521 17.3145 6.68546 20.9448 11.2373 21.3125V22.4873C11.2373 22.9085 11.5788 23.25 12 23.25C12.4212 23.25 12.7627 22.9085 12.7627 22.4873L12.7627 21.3125C13.2711 21.2715 13.7679 21.1897 14.25 21.0705V19.4892C13.5375 19.7029 12.7821 19.8178 12 19.8178C7.68235 19.8178 4.1822 16.3176 4.1822 12C4.1822 7.68235 7.68235 4.1822 12 4.1822C15.5355 4.1822 18.5229 6.52911 19.4892 9.75H21.0705C20.1224 5.9153 16.8062 3.01414 12.7627 2.68746V1.51271Z"
          fill="currentColor"
        />
        <path
          d="M20.6984 13.0649C21.4089 13.7205 21.8285 14.6916 21.6802 15.8549C21.5259 17.0653 20.625 17.6823 20.0278 18.0914C19.9812 18.1233 19.9356 18.1545 19.8931 18.1841C19.2391 18.6403 18.9203 18.9344 18.9203 19.5589C18.9203 19.9755 18.5826 20.3133 18.1659 20.3133C17.7492 20.3133 17.4115 19.9755 17.4115 19.5589C17.4115 18.1068 18.3593 17.4143 19.03 16.9465C19.769 16.4311 20.1171 16.1848 20.1835 15.6641C20.268 15.001 20.0388 14.5093 19.6752 14.1739C19.2938 13.8219 18.7426 13.6259 18.1971 13.6484C17.0551 13.6957 16.1544 14.5663 16.1544 15.5603C16.1544 15.977 15.8166 16.3148 15.3999 16.3148C14.9833 16.3148 14.6455 15.977 14.6455 15.5603C14.6455 13.6099 16.34 12.2151 18.1347 12.1408C19.0575 12.1027 20.0057 12.4258 20.6984 13.0649Z"
          fill="currentColor"
        />
        <path
          d="M18.1774 23C18.6972 23 19.1185 22.5787 19.1185 22.0589C19.1185 21.5391 18.6972 21.1178 18.1774 21.1178C17.6577 21.1178 17.2363 21.5391 17.2363 22.0589C17.2363 22.5787 17.6577 23 18.1774 23Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconGpsEnableRegular);
export default ForwardRef;
