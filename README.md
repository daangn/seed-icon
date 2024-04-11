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
