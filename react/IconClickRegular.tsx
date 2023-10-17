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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.44956 1C8.15701 1 7.10919 2.04782 7.10919 3.34037V11.0401L6.16458 10.0955C5.21188 9.14281 3.66725 9.14281 2.71455 10.0955C1.84736 10.9627 1.75876 12.3389 2.50759 13.3101L5.49136 17.18L5.49197 17.1808L6.98575 19.1726L7.52554 19.9283C8.9025 21.856 11.1145 23.0136 13.4833 23.046C17.6355 23.1028 21.032 19.7525 21.032 15.5999L21.032 12.0799C21.0321 12.0763 21.0321 12.0727 21.0321 12.0691V11.0422C21.0321 9.74966 19.9843 8.70184 18.6917 8.70184C18.3695 8.70184 18.0624 8.76698 17.783 8.88481C17.4369 8.02494 16.5949 7.41797 15.6111 7.41797C15.2887 7.41797 14.9814 7.48318 14.7019 7.60114C14.3557 6.74142 13.5138 6.13458 12.5301 6.13458C12.2714 6.13458 12.0226 6.17655 11.7899 6.25405V3.34037C11.7899 2.04782 10.7421 1 9.44956 1ZM16.357 10.8793C16.3533 10.8484 16.3515 10.8171 16.3515 10.7852V9.75834C16.3515 9.34944 16.02 9.01797 15.6111 9.01797C15.2022 9.01797 14.8708 9.34944 14.8708 9.75834V10.7852C14.8708 11.0088 14.779 11.211 14.6312 11.3561C14.4868 11.498 14.2889 11.5855 14.0705 11.5855C13.6287 11.5855 13.2705 11.2273 13.2705 10.7855V8.47495C13.2705 8.06606 12.939 7.73458 12.5301 7.73458C12.1266 7.73458 11.7985 8.05741 11.7899 8.45889V10.7855C11.7899 11.1842 11.4983 11.5147 11.1167 11.5755C11.0953 11.5789 11.0735 11.5815 11.0515 11.5832C11.0311 11.5847 11.0105 11.5855 10.9898 11.5855C10.5479 11.5855 10.1898 11.2273 10.1898 10.7855V8.47495L10.1899 8.44631V3.34037C10.1899 2.93147 9.85845 2.6 9.44956 2.6C9.04066 2.6 8.70919 2.93147 8.70919 3.34037V12.7109C8.70919 13.0096 8.54554 13.27 8.30301 13.4075C7.98927 13.699 7.49846 13.6921 7.1931 13.3868L5.0332 11.2269C4.70534 10.899 4.17378 10.899 3.84592 11.2269C3.54749 11.5253 3.51699 11.9989 3.7747 12.3331L6.76496 16.2115L6.77746 16.2282L8.27692 18.2275L8.8275 18.9983C9.90862 20.5118 11.6454 21.4207 13.5052 21.4461C16.7653 21.4908 19.432 18.8603 19.432 15.5999V12.0692C19.432 12.0656 19.4321 12.062 19.4321 12.0584V11.0422C19.4321 10.6333 19.1006 10.3018 18.6917 10.3018C18.2829 10.3018 17.9514 10.6333 17.9514 11.0422V11.4273C17.9514 11.8691 17.5932 12.2273 17.1514 12.2273C16.7095 12.2273 16.3514 11.8691 16.3514 11.4273V11.0422C16.3514 10.9874 16.3533 10.9331 16.357 10.8793Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const IconClickRegular = (
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
export default React.forwardRef(IconClickRegular);
