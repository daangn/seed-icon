# Seed Design Icons

SEED Design icons V2

> 해당 패키지는 V2 버전이고, 현재 당근은 V3 아이콘 리뉴얼이 되었습니다.
> V3 아이콘은 코드단으로 공개되지 않습니다.

### Packages

- [`@seed-design/react-icon`](./packages/react/README.md)
- [`@seed-design/vue2-icon`](./packages/vue2/README.md)
- [`@seed-design/vue3-icon`](./packages/vue3/README.md)
- [`@seed-design/assets` (snapshot)](./packages/assets/README.md)

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
