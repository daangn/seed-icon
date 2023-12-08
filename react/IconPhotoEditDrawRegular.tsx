import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconPhotoEditDrawRegular = (
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
    data-seed-icon-version="0.5.3"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.8725 4.04859C11.1799 4.47867 9.07854 5.78696 7.69895 7.48779C6.27419 9.24428 5.44322 10.9277 4.96973 12.164C4.73305 12.782 4.58615 13.2871 4.49934 13.6319C4.45594 13.8042 4.42762 13.9362 4.41062 14.022C4.40212 14.0648 4.39646 14.0961 4.39317 14.1151L4.38995 14.1342C4.31564 14.6254 3.85723 14.9641 3.36591 14.89C2.8744 14.816 2.53597 14.3575 2.61002 13.866L2.61023 13.8646L2.61048 13.8629L2.61115 13.8586L2.61312 13.8463L2.61973 13.807C2.62539 13.7745 2.63363 13.7292 2.64496 13.6721C2.6676 13.5578 2.70258 13.3958 2.75383 13.1923C2.85629 12.7854 3.02404 12.2115 3.28879 11.5202C3.81815 10.138 4.73718 8.28183 6.30101 6.35387C7.90999 4.37025 10.3388 2.83518 12.4293 2.30403C13.4615 2.04175 14.5614 1.98673 15.4541 2.41471C16.4437 2.88915 16.9604 3.84467 16.9604 5.0782C16.9604 5.74613 16.744 6.41698 16.4426 7.04614C16.1379 7.68223 15.7179 8.33365 15.2465 8.97709C14.4136 10.114 13.3595 11.3058 12.3709 12.4234C12.2457 12.5649 12.1215 12.7053 11.999 12.8442C10.8802 14.1127 9.91816 15.2385 9.38086 16.1498C9.10936 16.6103 9.00508 16.9214 8.98962 17.1058C8.98043 17.2154 8.9964 17.2273 9.03515 17.2562C9.0374 17.2578 9.03972 17.2596 9.04213 17.2614C9.12254 17.3221 9.21593 17.3565 9.40858 17.3192C9.63455 17.2755 9.94736 17.1369 10.3529 16.8627C11.166 16.313 12.0859 15.4071 13.065 14.4133C13.1543 14.3226 13.2443 14.231 13.3346 14.139C14.1954 13.2629 15.0957 12.3465 15.9074 11.729C16.3536 11.3895 16.8502 11.0786 17.3622 10.9379C17.9151 10.786 18.5541 10.822 19.0891 11.2853C19.5452 11.6803 19.7574 12.1964 19.7645 12.7424C19.771 13.245 19.605 13.7332 19.4006 14.1592C18.994 15.0068 18.2753 15.9239 17.6024 16.7504C17.4683 16.915 17.3355 17.0767 17.2053 17.2352C16.6483 17.9135 16.1378 18.5352 15.7685 19.0942C15.5421 19.437 15.4076 19.7005 15.3473 19.8906C15.3354 19.9282 15.3279 19.9582 15.323 19.9816C15.3884 19.9913 15.5037 19.9947 15.6835 19.9658C16.1494 19.8909 16.7708 19.6479 17.4406 19.3105C18.0942 18.9813 18.7286 18.596 19.2042 18.2893C19.4408 18.1367 19.6352 18.0054 19.7696 17.9129C19.8368 17.8666 19.8889 17.8302 19.9235 17.8057L19.9623 17.7782L19.9713 17.7717L19.9731 17.7704C20.3761 17.4796 20.9388 17.5703 21.2297 17.9733C21.5206 18.3763 21.4298 18.9388 21.0268 19.2298L21.0085 19.2429L20.9619 19.276C20.9217 19.3043 20.8638 19.3449 20.7903 19.3955C20.6434 19.4967 20.4338 19.6381 20.1798 19.8019C19.6745 20.1279 18.9816 20.5498 18.2504 20.9181C17.5354 21.2783 16.7143 21.6233 15.9689 21.743C15.2666 21.8558 14.2186 21.8129 13.7034 20.8329C13.4299 20.3128 13.4986 19.7663 13.6313 19.3472C13.7655 18.9236 14.0049 18.4983 14.2666 18.1022C14.6929 17.4567 15.2811 16.7411 15.8414 16.0595C15.9651 15.9089 16.0876 15.76 16.2066 15.6138C16.8987 14.7638 17.4779 14.0056 17.7777 13.3806C17.9266 13.0703 17.966 12.8729 17.9646 12.7657C17.9639 12.7086 17.9565 12.6883 17.9235 12.6574C17.9076 12.6585 17.8802 12.6623 17.8391 12.6736C17.6603 12.7227 17.383 12.8681 16.9972 13.1616C16.2957 13.6952 15.4902 14.5144 14.5999 15.4197C14.5164 15.5046 14.4322 15.5902 14.3473 15.6764C13.3951 16.6431 12.3494 17.6858 11.361 18.3539C10.8657 18.6887 10.3188 18.9764 9.75083 19.0864C9.14956 19.2028 8.51486 19.1185 7.95783 18.6982C7.36416 18.2501 7.14078 17.6129 7.19591 16.9554C7.2453 16.3664 7.51256 15.7745 7.83032 15.2356C8.47156 14.148 9.559 12.8895 10.649 11.6536C10.7731 11.513 10.8975 11.3723 11.0218 11.2316C12.0194 10.1035 13.0142 8.97838 13.7945 7.91331C14.2311 7.31737 14.581 6.76581 14.8193 6.26849C15.0608 5.76426 15.1604 5.3713 15.1604 5.0782C15.1604 4.38969 14.9181 4.15395 14.6759 4.03781C14.3367 3.8752 13.7318 3.83026 12.8725 4.04859ZM15.3153 20.0499C15.3153 20.0499 15.3151 20.0488 15.315 20.0462L15.3153 20.0499Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconPhotoEditDrawRegular);
export default ForwardRef;
