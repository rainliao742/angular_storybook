# CLAUDE.md — Angular Design System 專案指南

## 專案概述

Figma 設計稿自動同步至 Angular + Storybook + Chromatic 的完整 Design-to-Code 流程。

**GitHub Repo：** `https://github.com/rainliao742/angular_storybook`

---

## 技術架構

```
Figma (Tokens Studio)
    ↓ Push to GitHub
tokens/tokens.json
    ↓ npm run tokens:build (Style Dictionary)
src/styles/tokens/_tokens.generated.css   ← CSS 變數
src/styles/tokens/_tokens.generated.scss  ← SCSS 變數
    ↓
Angular 元件（使用 CSS 變數）
    ↓
Storybook Stories
    ↓
Chromatic 視覺測試
    ↓
GitHub Actions CI/CD
```

---

## 環境設定

```bash
# 環境變數（~/.zshrc）
export FIGMA_ACCESS_TOKEN=figd_xxxx       # Figma Personal Access Token
export CHROMATIC_PROJECT_TOKEN=chpt_xxxx  # Chromatic Project Token
```

---

## 常用指令

```bash
# 啟動開發
npm start                    # Angular dev server
npm run storybook            # Storybook dev server

# Design Tokens
npm run tokens:build         # 重新產生 CSS 變數
npm run tokens:watch         # 監聽 tokens 變更自動重建

# 視覺測試
npm run chromatic:ci         # 上傳 Storybook 到 Chromatic

# 建置
npm run build                # 建置 Angular
npm run build-storybook      # 建置 Storybook 靜態版本
```

---

## 專案結構

```
angular/
├── .github/workflows/
│   └── chromatic.yml        ← GitHub Actions（PR 自動跑 Chromatic）
├── .storybook/
│   ├── main.ts              ← Storybook 設定（含全域 styles）
│   └── preview.ts           ← Storybook preview 設定
├── tokens/
│   └── tokens.json          ← Figma Tokens Studio 同步的 token 定義
├── src/
│   ├── styles/tokens/       ← 自動產生，勿手動編輯
│   │   ├── _tokens.generated.css
│   │   ├── _tokens.generated.scss
│   │   └── tokens.generated.ts
│   ├── styles.scss          ← 全域樣式（引入 tokens）
│   └── app/components/
│       ├── button/
│       │   ├── button.ts           ← Angular 元件
│       │   ├── button.html
│       │   ├── button.scss         ← 使用 CSS 變數
│       │   ├── button.stories.ts   ← Storybook stories
│       │   └── button.figma.ts     ← Figma Code Connect mapping
│       ├── card/
│       ├── stat-item/
│       └── nav-link/
├── style-dictionary.config.mjs  ← token 轉換設定
└── figma.config.json            ← Figma Code Connect 設定
```

---

## Design Tokens

### Token 命名規則

CSS 變數格式：`--ds-{category}-{name}-{scale}`

```css
/* 顏色 */
var(--ds-color-primary-500)
var(--ds-color-neutral-100)

/* 字型 */
var(--ds-typography-font-size-base)
var(--ds-typography-font-weight-bold)

/* 間距 */
var(--ds-spacing-4)   /* = 16px */
var(--ds-spacing-8)   /* = 32px */

/* 圓角 */
var(--ds-border-radius-md)
var(--ds-border-radius-full)
```

### 修改 Token 流程

**從 Figma 改（推薦）：**
1. Figma → Tokens Studio 插件 → 修改 token 值
2. 點 **Push to GitHub**，填入 commit message
3. GitHub Actions 自動觸發 → tokens:build → Chromatic 測試

**直接改 JSON（快速測試）：**
```bash
# 編輯 tokens/tokens.json
npm run tokens:build   # 重新產生 CSS 變數
```

---

## 元件開發

### 新增元件

```bash
ng generate component components/元件名稱 --standalone --style=scss --skip-tests
```

### 元件 SCSS 規範

```scss
/* 使用 design token CSS 變數，不要寫死數值 */
.component {
  color: var(--ds-color-primary-500);        /* ✅ */
  background: #3b74f5;                        /* ❌ */

  padding: var(--ds-spacing-4);              /* ✅ */
  padding: 16px;                             /* ❌ */

  border-radius: var(--ds-border-radius-md); /* ✅ */
  font-size: var(--ds-typography-font-size-base); /* ✅ */
}
```

### 新增 Storybook Story

在元件目錄建立 `元件名稱.stories.ts`：

```typescript
import type { Meta, StoryObj } from '@storybook/angular';
import { MyComponent } from './my-component';

const meta: Meta<MyComponent> = {
  title: 'Design System/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'alt'] },
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<MyComponent>;

export const Default: Story = {
  args: { label: 'Hello' },
};
```

---

## Figma 同步

### Tokens Studio 設定

```
Sync Provider: GitHub
Repository:    rainliao742/angular_storybook
Branch:        main
File path:     tokens/tokens.json
Token:         GitHub PAT（repo 權限）
```

### Figma Code Connect（需要 Dev Mode）

```bash
# 發布 Code Connect mapping
npm run figma:publish

# 需要環境變數 FIGMA_ACCESS_TOKEN
# 需要 Figma Organization/Enterprise 方案
```

---

## CI/CD

### GitHub Actions

每次 push 到 `main` 或開 PR 時自動：
1. 安裝依賴 (`npm ci`)
2. 建置 tokens (`npm run tokens:build`)
3. 上傳 Storybook 到 Chromatic

### GitHub Secrets

```
CHROMATIC_PROJECT_TOKEN = chpt_64bd8a4466fe4ff
```

### Chromatic

- **Dashboard：** `https://www.chromatic.com`
- **App ID：** `6a013cb6a02516f84350c384`
- **Storybook URL：** `https://6a013cb6a02516f84350c384-zubibrqwia.chromatic.com/`

---

## 注意事項

- `src/styles/tokens/` 目錄下的檔案**自動產生，勿手動編輯**
- Figma Code Connect 需要 **Figma Dev Mode（Organization 以上方案）**
- Chromatic 視覺測試需要**至少 2 個 git commit**
- GitHub PAT 需要 `repo` + `workflow` 權限才能推送 `.github/workflows/`
- SSH push 需先設定 SSH key，或改用 HTTPS + PAT
