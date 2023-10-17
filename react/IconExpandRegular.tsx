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
    data-seed-icon-version="0.3.11"
    width="100%"
    height="100%"
    {...props}
  >
    <g>
      <g>
        <path
          d="M21.7392 2.69397C21.7005 2.60031 21.6432 2.51252 21.5673 2.43621L21.5639 2.43282C21.4193 2.28904 21.22 2.2002 21 2.2002H15C14.5581 2.2002 14.2 2.55837 14.2 3.0002C14.2 3.44202 14.5581 3.8002 15 3.8002H19.0686L13.9343 8.93451C13.6218 9.24693 13.6218 9.75346 13.9343 10.0659C14.2467 10.3783 14.7532 10.3783 15.0656 10.0659L20.2 4.93157V9.0002C20.2 9.44202 20.5581 9.8002 21 9.8002C21.4418 9.8002 21.8 9.44202 21.8 9.0002V3.0002C21.8 2.89172 21.7784 2.78829 21.7392 2.69397Z"
          fill="currentColor"
        />
        <path
          d="M10.0656 15.0659C10.3781 14.7535 10.3781 14.2469 10.0656 13.9345C9.75322 13.6221 9.24669 13.6221 8.93427 13.9345L3.79995 19.0688V15.0002C3.79995 14.5584 3.44178 14.2002 2.99995 14.2002C2.55812 14.2002 2.19995 14.5584 2.19995 15.0002V21.0002C2.19995 21.1087 2.22154 21.2121 2.26065 21.3064C2.29941 21.4001 2.35671 21.4879 2.43257 21.5642L2.43596 21.5676C2.51227 21.6434 2.60006 21.7007 2.69372 21.7395C2.78805 21.7786 2.89148 21.8002 2.99995 21.8002H8.99995C9.44178 21.8002 9.79995 21.442 9.79995 21.0002C9.79995 20.5584 9.44178 20.2002 8.99995 20.2002H4.93132L10.0656 15.0659Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconExpandRegular = (
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
export default React.forwardRef(IconExpandRegular);
