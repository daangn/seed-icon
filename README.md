# @seed-design/icon

SEED Design icon

### Packages

- [`@seed-design/react-icon`](./packages/react/README.md)
- [`@seed-design/vue2-icon`](./packages/vue2/README.md)
- [`@seed-design/vue3-icon`](./packages/vue3/README.md)

#### Install

```bash
# React
npm install @seed-design/react-icon
yarn add @seed-design/react-icon
```

```bash
# Vue2
npm install @seed-design/vue2-icon
yarn add @seed-design/vue2-icon
```

```bash
# Vue3
npm install @seed-design/vue3-icon
yarn add @seed-design/vue3-icon
```

#### Usage

```jsx
import { IconName1, IconName2 } from "@seed-design/react-icon";

// SVG props 사용 가능
<IconName1 size={20} />;
```

프로젝트에서 사용하고 있는 번들러가 tree-shaking을 지원한다면, 사용하지 않는 아이콘은 번들에 포함되지 않습니다.
그게 아니라면 `Deep Import`를 사용하여 필요한 아이콘만 가져오는 것을 권장합니다.

```jsx
import IconName1 from "@seed-design/icon/lib/IconName1";
```

### Deploy

- 피그마에서 Icona 이용해서 Deploy
- PR 메인으로 머지하고 `npm publish`로 배포

**주의사항**

- major, minor 버전 업데이트 시, 범프 후 `yarn build` 후 `npm publish`로 배포
- (CI 코드가 patch 버전을 올리도록 되어있음)

## Deploy Flow

- figma에서 Icona로 파일 추출
- 올라온 PR 확인 후 `yarn changeset` 실행
- PR merge
- 올라오는 `Version Package` PR 확인 후 merge
