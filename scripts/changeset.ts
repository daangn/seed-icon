import * as fs from 'fs';
import * as path from 'path';
import findup from "findup-sync";

// .changeset 폴더 경로
const rootDir = findup("package.json");
if (!rootDir) {
    throw new Error(
      "No package.json file found in the project. Icona requires a package.json file in the root path.",
    );
  }
const changesetDir = path.join(rootDir, '..', '.changeset');

// change-set-version.md 파일 경로
const changeSetFile = path.resolve(changesetDir, 'change-set-version.md');

// .changeset 폴더가 존재하지 않으면 생성
if (!fs.existsSync(changesetDir)) {
    fs.mkdirSync(changesetDir);
    console.log(`Created directory: ${changesetDir}`);
}

const changeSetContent = `---
"@seed-design/react-icon": patch
"@seed-design/vue2-icon": patch
"@seed-design/vue3-icon": patch
"@seed-design/assets": patch
---

Update icon assets from Figma
`;

// change-set-version.md 파일이 존재하지 않으면 생성
if (!fs.existsSync(changeSetFile)) {
    fs.writeFileSync(changeSetFile, changeSetContent, "utf-8");  // 빈 파일로 생성
    console.log(`Created file: ${changeSetFile}`);
} else {
    console.log(`File already exists: ${changeSetFile}`);
}
