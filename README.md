<p align="center"><img src="https://raw.githubusercontent.com/samrith-s/nodehawk/master/assets/nodehawk.png" width="200"></p>

# Nodehawk

> ⚠️ This is still under active development and by no means complete. Please do
> not use this package as of now.

Nodehawk is a watcher for your Node server, without a lot of overheads. It
observes your directories and files for changes, and triggers rebuilds to make
Node application developments hassle-free. Supports every NodeJS framework.

Nodehawk is a self-contained package, and does not require any additional
dependencies to run. Just run `nodehawk` in your project folder.

This project is inspired by the fantastic
[Nodemon](https://nodemon.io?utm_source=nodehawk&utm_medium=github&utm_campaign=nodehawk-freepik-referral)
and uses
[Chokidar](https://github.com/paulmillr/chokidar?utm_source=nodehawk&utm_medium=github&utm_campaign=nodehawk-freepik-referral)
under the hood. Thanks to
[Freepik](https://www.freepik.com?utm_source=nodehawk&utm_medium=github&utm_campaign=nodehawk-freepik-referral)
for the icon.

![npm](https://img.shields.io/npm/v/nodehawk?label=Nodehawk)
[![Build Status](https://travis-ci.com/samrith-s/nodehawk.svg?branch=master)](https://travis-ci.com/samrith-s/nodehawk)<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

## Table of contents

-   [Why Nodehawk?](#why-nodehawk)
-   [Installation and usage](#installation-and-usage)
-   [Configurations](#configurations)
    -   [Basic](#basic)
    -   [Performance](#performance)
    -   [Display](#display)
    -   [Process](#process)
-   [Examples](#examples)
-   [Contributors](#contributors)

## Why Nodehawk?

During the development of a Node server, there is a need for a very versatile
watcher than can keep track of your changes and rebuild your application to
reflect the same. Of course, there is [Nodemon](https://nodemon.io) which is the
inspiration of this tool, but there are some shortcomings to it.

One of the major differentiator of Nodehawk, is that it is built specifically to
make development of Node servers less cumbersome. It primarily focuses on
providing a watcher that addresses
[issues around watching and restarting](https://stackoverflow.com/questions/4075287/node-express-eaddrinuse-address-already-in-use-kill-server).

## Installation and usage

There are two ways to use this. Either install it globally or add it as a
development dependency.

Installing globally using NPML

```bash
npm i -g nodehawk
```

or with Yarn:

```bash
yarn global add global nodehawk
```

Adding the package as a dev dependency to your project with NPM:

```bash
npm i -D nodehawk
```

or with Yarn:

```bash
yarn add -D nodehawk
```

For using the watcher, simple add a script to your `package.json`:

```json
{
    "scripts": {
        "start": "nodehawk"
    }
}
```

> **IMPORTANT:** Nodehawk will by default pass a `process.env.PORT` to your
> process. Use it to run your app on that port. All you need to do is:

```diff
- server.listen(<your-existing-port>);
+ server.listen(process.env.PORT);
```

> This will help Nodehawk kill the process running on the port to prevent any
> `EADDRINUSE` errors. You can customize the port in the configurations below.

The watcher will run with the default configurations, and automatically start
watching your `src` directory. If you want to customize it further, you can read
the whole list of configurations, which can be specified in a `.nodehawkrc` file
in the root of your project alongside `package.json`.

## Configurations

Nodehawk allows a rich variety of configuration options, to suit your needs. All
of these configurations are provided through a `.nodehawkrc` file.

### Basic

| Key      | Type             | Default   | Description                                                                                |
| -------- | ---------------- | --------- | ------------------------------------------------------------------------------------------ |
| paths    | string\|string[] | `"./src"` | The path or array of paths or globs to watch for changes.                                  |
| root     | string           | `"."`     | The root folder from where all paths are resolved.                                         |
| exec     | string           | `""`      | The command to execute when a restart is triggered.                                        |
| port     | number           | `4000`    | The port number where your process will run.                                               |
| logLevel | number           | `3`       | The verbosity of logs to be displayed. `1:fatal`, `2:error`, `3:warn`, `4:info`, `5:debug` |

### Performance

| Key     | Type           | Default | Description                                                                                       |
| ------- | -------------- | ------- | ------------------------------------------------------------------------------------------------- |
| buffer  | number         | `300`   | Buffer delay in milliseconds to wait for events after which the `exec` command should be trigger. |
| ignored | string\|regexp | `""`    | A path or glob of files or folders to be ignored.                                                 |

### Display

| Key                     | Type    | Default           | Description                                                 |
| ----------------------- | ------- | ----------------- | ----------------------------------------------------------- |
| display.onBeforeStart   | string  | `"Starting..."`   | Message to display while starting the process.              |
| display.onStart         | string  | `"Started"`       | Message to display after the process has started.           |
| display.onBeforeRestart | string  | `"Restarting..."` | Message to display while restarting the process.            |
| display.onRestart       | string  | `"Restarting.."`. | Message to display after the process has restarted.         |
| display.onBeforeStop    | string  | `"Stopping..."`   | Message to display while stopping the process.              |
| clearScreen             | boolean | `true`            | Whether to clear the console on start/restart event or not. |

### Process

| Key | Type   | Default | Description                                      |
| --- | ------ | ------- | ------------------------------------------------ |
| env | object | `{}`    | Key value pairs to be assigned to `process.env`. |

The complete API documentation is
[available on the website](https://samrith-s.github.io/nodehawk/).

## Examples

There are quite a few real-world examples of Nodehawk. You can the in the
[examples](https://github.com/samrith-s/nodehawk/tree/master/examples)
directory.

-   [Express Javascript Server](https://github.com/samrith-s/nodehawk/tree/master/examples/express-javascript)
-   [Express Typescript Server](https://github.com/samrith-s/nodehawk/tree/master/examples/express-typescript)

## Contributors

Thanks goes to these wonderful people
([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/samrith-s"><img src="https://avatars3.githubusercontent.com/u/9032162?v=4" width="50px;" alt=""/><br /><sub><b>Samrith Shankar</b></sub></a><br /><a href="https://github.com/samrith-s/nodehawk/commits?author=samrith-s" title="Code">💻</a> <a href="https://github.com/samrith-s/nodehawk/commits?author=samrith-s" title="Documentation">📖</a> <a href="#maintenance-samrith-s" title="Maintenance">🚧</a> <a href="https://github.com/samrith-s/nodehawk/pulls?q=is%3Apr+reviewed-by%3Asamrith-s" title="Reviewed Pull Requests">👀</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the
[all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!
