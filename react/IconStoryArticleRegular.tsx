import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconStoryArticleRegular = (
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 3.60005C1 2.05365 2.2536 0.800049 3.8 0.800049H17.8C19.3464 0.800049 20.6 2.05365 20.6 3.60005V9.60005C20.6 10.0419 20.2418 10.4 19.8 10.4C19.3582 10.4 19 10.0419 19 9.60005V3.60005C19 2.93731 18.4627 2.40005 17.8 2.40005H3.8C3.13726 2.40005 2.6 2.93731 2.6 3.60005V19.6C2.6 20.2628 3.13726 20.8 3.8 20.8H9.8C10.2418 20.8 10.6 21.1582 10.6 21.6C10.6 22.0419 10.2418 22.4 9.8 22.4H3.8C2.2536 22.4 1 21.1464 1 19.6V3.60005Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 6.60005C6 6.15822 6.35817 5.80005 6.8 5.80005H14.8C15.2418 5.80005 15.6 6.15822 15.6 6.60005C15.6 7.04188 15.2418 7.40005 14.8 7.40005H6.8C6.35817 7.40005 6 7.04188 6 6.60005Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 10.6C6 10.1582 6.35817 9.80005 6.8 9.80005H14.8C15.2418 9.80005 15.6 10.1582 15.6 10.6C15.6 11.0419 15.2418 11.4 14.8 11.4H6.8C6.35817 11.4 6 11.0419 6 10.6Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 14.6C6 14.1582 6.35817 13.8 6.8 13.8H11.8C12.2418 13.8 12.6 14.1582 12.6 14.6C12.6 15.0419 12.2418 15.4 11.8 15.4H6.8C6.35817 15.4 6 15.0419 6 14.6Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.0121 13.0344C19.3245 12.7219 19.831 12.7219 20.1435 13.0344L22.3657 15.2566C22.6781 15.569 22.6781 16.0755 22.3657 16.388L16.5879 22.1657C16.4379 22.3158 16.2344 22.4 16.0222 22.4H13.8C13.3582 22.4 13 22.0419 13 21.6V19.3778C13 19.1657 13.0843 18.9622 13.2343 18.8121L19.0121 13.0344ZM14.6 19.7092V20.8H15.6909L20.6686 15.8223L19.5778 14.7314L14.6 19.7092Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconStoryArticleRegular);
export default ForwardRef;
