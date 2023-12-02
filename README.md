# @seed-design/icon

SEED Design icon

### React Component Library

#### Install

- `v0.1.x`, `v0.2.x`는 CLI 도구로 더 이상 지원하지 않습니다.
- **`v0.3.x` 부터 리액트 컴포넌트 라이브러리로 사용 가능합니다.**

```bash
npm install @seed-design/icon --save
yarn add @seed-design/icon
```

#### Usage

- `v0.3.x`

```jsx
import { IconName1, IconName2 } from "@seed-design/icon";

<IconName1 width={20} height={20} />;
```

- `v0.4.x` ~

```jsx
import { IconName1, IconName2 } from "@seed-design/icon";

// SVG props 사용 가능
<IconName1 size={20} />;
```

### Deploy

- 피그마에서 Icona 이용해서 Deploy
- PR 메인으로 머지하고 `npm publish`로 배포

**주의사항**

- major, minor 버전 업데이트 시, 범프 후 `yarn build` 후 `npm publish`로 배포
- (CI 코드가 patch 버전을 올리도록 되어있음)

### Source of truth

- [figma](https://www.figma.com/file/58VvezaS8z1FsIOr9KFHKW/Icon-%26-Graphic?type=design&node-id=17-54&mode=design&t=B1ayBi2xXki0VZft-4)
