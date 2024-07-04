# @seed-design/react-icon

### Install

```bash
# React
npm install @seed-design/react-icon
yarn add @seed-design/react-icon
```

### Usage

```jsx
import { IconName1, IconName2 } from "@seed-design/react-icon";

// SVG props 사용 가능
<IconName1 size={20} />;
```

프로젝트에서 사용하고 있는 번들러가 tree-shaking을 지원한다면, 사용하지 않는 아이콘은 번들에 포함되지 않습니다.
그게 아니라면 `Deep Import`를 사용하여 필요한 아이콘만 가져오는 것을 권장합니다.

```jsx
import IconName1 from "@seed-design/react-icon/IconName1";
```
