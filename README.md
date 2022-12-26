<p align="center">
  <a href="https://turbo.build">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/4060187/196936123-f6e1db90-784d-4174-b774-92502b718836.png">
      <img src="https://user-images.githubusercontent.com/4060187/196936104-5797972c-ab10-4834-bd61-0d1e5f442c9c.png" height="128">
    </picture>
    <h1 align="center">Turbo + NextJS</h1>
  </a>
</p>

<p align="center">
  <a aria-label="Vercel logo" href="https://vercel.com/">
    <img src="https://img.shields.io/badge/MADE%20BY%20Vercel-000000.svg?style=for-the-badge&logo=Vercel&labelColor=000">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/turbo">
    <img alt="" src="https://img.shields.io/npm/v/turbo.svg?style=for-the-badge&labelColor=000000">
  </a>
  <a aria-label="License" href="https://github.com/vercel/turbo/blob/main/LICENSE">
    <img alt="" src="https://img.shields.io/npm/l/turbo.svg?style=for-the-badge&labelColor=000000&color=">
  </a>
  <a aria-label="Join the community on GitHub" href="https://github.com/vercel/turbo/discussions">
    <img alt="" src="https://img.shields.io/badge/Join%20the%20community-blueviolet.svg?style=for-the-badge&logo=turborepo&labelColor=000000&logoWidth=20&logoColor=white">
  </a>
</p>

> This is not a `README.md` from any template. I set this NextJS + Turbo template up from [Add Turborepo to your existing project
> ](https://turbo.build/repo/docs/getting-started/add-to-project) section of the docs.

Turbo is a next-generation toolchain for frontend development, written in Rust. It consists of 3 major parts:

- [**Turbopack:**](https://turbo.build/pack) an incremental bundler (the successor to Webpack)
- [**Turborepo:**](https://turbo.build/repo) an incremental build system
- The Turbo engine: a low-level incremental computation and memoization engine

## Getting Started

First, run the development server:

```bash
npm run turbo dev
# or
yarn turbo dev
# or
pnpm turbo dev
```
