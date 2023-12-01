import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconSuggestRegular = (
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
    data-seed-icon-version="0.4.0"
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
          d="M16.5137 3.4741C17.0065 3.97349 17.3555 4.60276 17.3555 5.33353V10.8925C17.3555 11.6231 17.0063 12.2519 16.5134 12.7508C16.0239 13.2462 15.3553 13.6557 14.5923 13.9823C13.0635 14.6368 11.0071 15.0221 8.77773 15.0221C6.54831 15.0221 4.492 14.6368 2.96317 13.9823C2.54191 13.802 2.14941 13.5964 1.79995 13.365V16.4481C1.79995 16.637 1.88598 16.8841 2.18025 17.1819C2.4779 17.4832 2.94833 17.7912 3.59285 18.0671C4.87902 18.6177 6.7116 18.9778 8.77773 18.9778C9.13875 18.9778 9.49342 18.9668 9.83994 18.9455C10.2809 18.9185 10.6603 19.2541 10.6873 19.6951C10.7143 20.1361 10.3787 20.5155 9.93774 20.5425C9.55848 20.5658 9.1712 20.5778 8.77773 20.5778C6.54831 20.5778 4.492 20.1925 2.96317 19.538C2.20019 19.2113 1.53159 18.8019 1.04208 18.3064C0.549205 17.8076 0.199951 17.1787 0.199951 16.4481V5.33062C0.200879 4.60109 0.549566 3.97283 1.04177 3.4741C1.53123 2.97814 2.19984 2.56821 2.96287 2.24119C4.49179 1.58594 6.54821 1.2002 8.77773 1.2002C11.0072 1.2002 13.0637 1.58594 14.5926 2.24119C15.3556 2.56821 16.0242 2.97814 16.5137 3.4741ZM1.79995 5.33353C1.79995 5.14382 1.88627 4.89619 2.18057 4.59799C2.47825 4.29636 2.94868 3.98802 3.59314 3.71182C4.87923 3.16064 6.7117 2.8002 8.77773 2.8002C10.8438 2.8002 12.6762 3.16064 13.9623 3.71182C14.6068 3.98802 15.0772 4.29636 15.3749 4.59799C15.6692 4.89619 15.7555 5.14382 15.7555 5.33353C15.7555 5.52323 15.6692 5.77087 15.3749 6.06906C15.0772 6.3707 14.6068 6.67904 13.9623 6.95524C12.6762 7.50641 10.8438 7.86686 8.77773 7.86686C6.7117 7.86686 4.87923 7.50641 3.59314 6.95524C2.94868 6.67904 2.47825 6.3707 2.18057 6.06906C1.88627 5.77087 1.79995 5.52323 1.79995 5.33353ZM1.79995 10.8925C1.79995 11.0814 1.88598 11.3284 2.18025 11.6262C2.4779 11.9275 2.94833 12.2355 3.59285 12.5114C4.87902 13.062 6.7116 13.4221 8.77773 13.4221C10.8439 13.4221 12.6764 13.062 13.9626 12.5114C14.6071 12.2355 15.0776 11.9275 15.3752 11.6262C15.6695 11.3284 15.7555 11.0814 15.7555 10.8925V7.80807C15.4061 8.03961 15.0137 8.24537 14.5926 8.42587C13.0637 9.08112 11.0072 9.46686 8.77773 9.46686C6.54821 9.46686 4.49179 9.08112 2.96287 8.42587C2.54172 8.24537 2.14933 8.03961 1.79995 7.80807V10.8925Z"
          fill="currentColor"
        />
        <path
          d="M18.2121 14.7675C18.5245 14.4551 19.031 14.4551 19.3435 14.7675L22.6768 18.1009C22.9892 18.4133 22.9892 18.9198 22.6768 19.2322L19.3435 22.5656C19.031 22.878 18.5245 22.878 18.2121 22.5656C17.8997 22.2531 17.8997 21.7466 18.2121 21.4342L20.1791 19.4672H14.3334C13.8916 19.4672 13.5334 19.109 13.5334 18.6672C13.5334 18.2254 13.8916 17.8672 14.3334 17.8672H20.1804L18.2121 15.8989C17.8997 15.5865 17.8997 15.0799 18.2121 14.7675Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconSuggestRegular);
export default ForwardRef;
