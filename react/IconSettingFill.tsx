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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.151 2.3999C9.61013 2.3999 9.19904 2.79002 9.10051 3.26901C9.09803 3.28106 9.09592 3.29319 9.09419 3.30537L8.88164 4.79888C8.83536 5.12409 8.60263 5.43676 8.24051 5.63647C7.87128 5.84012 7.48822 5.88217 7.18079 5.76181L5.71059 5.1862C5.70334 5.18336 5.69603 5.18066 5.68867 5.1781C5.22061 5.01557 4.69273 5.17871 4.41404 5.61902L4.40568 5.63263L2.55766 8.73206C2.2505 9.22658 2.44192 9.78035 2.78033 10.0795C2.79161 10.0894 2.80327 10.099 2.81527 10.1081L4.06589 11.0559C4.31082 11.2416 4.45987 11.58 4.45987 11.9999C4.45987 12.4108 4.30712 12.7493 4.0518 12.9428L2.79984 13.8917C2.78784 13.9008 2.77618 13.9104 2.7649 13.9203C2.3969 14.2456 2.26915 14.8032 2.55767 15.2678L4.40568 18.3672L4.41404 18.3808C4.69273 18.8211 5.22061 18.9842 5.68867 18.8217C5.69603 18.8191 5.70334 18.8164 5.71059 18.8136L7.18971 18.2345C7.49484 18.115 7.86813 18.156 8.21913 18.3585C8.59542 18.5756 8.83662 18.8995 8.88402 19.2326L9.09419 20.7094C9.09632 20.7244 9.09901 20.7393 9.10226 20.754C9.20518 21.221 9.61991 21.5999 10.151 21.5999H13.8537C14.3946 21.5999 14.8057 21.2098 14.9042 20.7308C14.9067 20.7187 14.9088 20.7066 14.9105 20.6944L15.1214 19.2125C15.1691 18.8775 15.4048 18.5579 15.7736 18.3472C16.1305 18.1432 16.5123 18.101 16.8194 18.2212L18.2941 18.7986C18.3014 18.8014 18.3087 18.8041 18.3161 18.8067C18.7841 18.9692 19.312 18.8061 19.5907 18.3658L19.5991 18.3522L21.4471 15.2528C21.7542 14.7582 21.5628 14.2045 21.2244 13.9053C21.2131 13.8954 21.2015 13.8858 21.1895 13.8767L19.926 12.9191C19.682 12.7342 19.5294 12.3973 19.5294 11.9999C19.5294 11.589 19.6822 11.2505 19.9375 11.057L21.1896 10.1082L21.2006 10.0995C21.5805 9.79726 21.7456 9.21314 21.4471 8.73215L19.5991 5.63263L19.5907 5.61902C19.312 5.17871 18.7841 5.01557 18.3161 5.1781C18.3087 5.18066 18.3014 5.18336 18.2941 5.1862L16.815 5.7653C16.5099 5.88476 16.1366 5.84379 15.7856 5.64128C15.4093 5.42417 15.1681 5.10027 15.1207 4.76719L14.9105 3.29037C14.9084 3.2754 14.9057 3.26052 14.9025 3.24576C14.7996 2.77882 14.3848 2.3999 13.8537 2.3999H10.151ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const IconSettingFill = (
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
export default React.forwardRef(IconSettingFill);
