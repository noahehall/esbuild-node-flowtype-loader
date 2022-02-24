# TLDR

- repo setup based on https://how-to.dev/how-to-start-building-a-project-with-esbuild
- [this bug/needed feature blocks this project](https://github.com/noahehall/nodeproto/blob/develop/packages/apps/authnz/build.esbuild.config.mjs#L26)

## whats the bug?

- unable to remove type definitions from source files when using esbuild node api to bundle application
