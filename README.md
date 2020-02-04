<p align="center"><img src="https://raw.githubusercontent.com/samrith-s/nodehawk/master/assets/nodehawk.png" width="200"></p>
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

![npm](https://img.shields.io/npm/v/nodehawk?label=Nodehawk)
[![Build Status](https://travis-ci.com/samrith-s/nodehawk.svg?branch=master)](https://travis-ci.com/samrith-s/nodehawk)

# Nodehawk

Nodehawk is a tool that run your Node server, without a lot of overheads. It
watches your directories and files for changes, and triggers rebuilds to make
Node application developments tirefree.

Nodehawk is a self-contained package, and does not require any additional
dependencies to run. Simply create a `.nodehawkrc` file with your values. Then
simple replace your `start` or `dev` script like so:

```jsonc
{
    // Your package.json
    "scripts": {
        // Can be any script of your choosing. Most common ones are `start` and `dev`.
        "start": "nodehawk"
    }
}
```

## Table of contents

-   Why Nodehawk?
-   What's under the hood?
-   Configurations
    -   Customization
    -   Performance
    -   Display
-   Contributors

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/samrith-s"><img src="https://avatars3.githubusercontent.com/u/9032162?v=4" width="50px;" alt=""/><br /><sub><b>Samrith Shankar</b></sub></a><br /><a href="#question-samrith-s" title="Answering Questions">💬</a> <a href="#blog-samrith-s" title="Blogposts">📝</a> <a href="https://github.com/samrith-s/nodehawk/commits?author=samrith-s" title="Code">💻</a> <a href="#content-samrith-s" title="Content">🖋</a> <a href="#data-samrith-s" title="Data">🔣</a> <a href="#design-samrith-s" title="Design">🎨</a> <a href="https://github.com/samrith-s/nodehawk/commits?author=samrith-s" title="Documentation">📖</a> <a href="#example-samrith-s" title="Examples">💡</a> <a href="#ideas-samrith-s" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-samrith-s" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-samrith-s" title="Maintenance">🚧</a> <a href="#platform-samrith-s" title="Packaging/porting to new platform">📦</a> <a href="#plugin-samrith-s" title="Plugin/utility libraries">🔌</a> <a href="#projectManagement-samrith-s" title="Project Management">📆</a> <a href="https://github.com/samrith-s/nodehawk/pulls?q=is%3Apr+reviewed-by%3Asamrith-s" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/samrith-s/nodehawk/commits?author=samrith-s" title="Tests">⚠️</a> <a href="#tool-samrith-s" title="Tools">🔧</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!