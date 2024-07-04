/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconTalkingdownThin = (
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
    data-seed-icon-version="0.6.2"
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
          d="M18.4414 15.8501C19.944 14.6166 21.6256 12.7118 21.902 10.6587C21.928 10.4759 21.9414 10.2894 21.9414 10.1001L21.9414 10.0901L21.9414 10.0798C21.9296 7.74194 19.8746 5.8501 17.3414 5.8501C14.8009 5.8501 12.7414 7.75289 12.7414 10.1001C12.7414 12.4473 14.8009 14.3501 17.3414 14.3501C17.7305 14.3501 18.1084 14.3055 18.4692 14.2214C16.86 15.9539 14.7928 17.0842 13.3849 17.6224C13.1678 17.7054 13.0698 17.9616 13.1845 18.1637C13.2498 18.2789 13.372 18.352 13.5037 18.3385C14.7146 18.2147 16.8986 17.1167 18.4414 15.8501ZM17.3414 7.0501C15.3725 7.0501 13.9414 8.50328 13.9414 10.1001C13.9414 11.6969 15.3725 13.1501 17.3414 13.1501C19.3104 13.1501 20.7414 11.6969 20.7414 10.1001C20.7414 8.50328 19.3104 7.0501 17.3414 7.0501Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.76002 15.8501C9.26257 14.6166 10.9442 12.7118 11.2206 10.6587C11.2466 10.4759 11.26 10.2894 11.26 10.1001L11.26 10.0901L11.26 10.0798C11.2482 7.74194 9.19321 5.8501 6.66002 5.8501C4.11951 5.8501 2.06002 7.75289 2.06002 10.1001C2.06002 12.4473 4.11951 14.3501 6.66002 14.3501C7.04914 14.3501 7.42698 14.3055 7.78786 14.2214C6.1786 15.9539 4.11146 17.0842 2.70348 17.6224C2.48644 17.7054 2.38841 17.9616 2.50309 18.1637C2.56846 18.2789 2.6906 18.352 2.82236 18.3385C4.03318 18.2147 6.21717 17.1167 7.76002 15.8501ZM6.66002 7.0501C4.69107 7.0501 3.26002 8.50328 3.26002 10.1001C3.26002 11.6969 4.69107 13.1501 6.66002 13.1501C8.62898 13.1501 10.06 11.6969 10.06 10.1001C10.06 8.50328 8.62898 7.0501 6.66002 7.0501Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconTalkingdownThin);
export default ForwardRef;