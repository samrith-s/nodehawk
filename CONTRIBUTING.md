# Contributing

We ❤️ contributions of all kinds. There are numerous aspects to this project you
can contribute to. So do not hesitate to go through [the issues][issues] and
pick up something which interests you.

When contributing to this repository, please first discuss the change you wish
to make via issue, email, or any other method with the owners of this repository
before making a change.

Please note we have a [code of conduct](/CODE_OF_CONDUCT.md), please follow it in all your interactions
with the project.

## Table of contents

-   [Setting up the repository](#setting-up-the-repository)
-   [Development guidelines](#development-guidelines)
-   [Pull request process](#pull-request-process)

## Setting up the repository

To set up this repository simple follow the steps:

-   Fork this repository.
-   Clone the fork.
-   Change into `nodehawk` diretory.
-   Run `yarn install`.

## Development guidelines

To start the development server, you can simply run `yarn start`. To build the
package, you can run `yarn build`. For linting the package, you can run
`yarn lint`.

The project has [Prettier][prettier] and [ESLint][eslint] setup, so integrate
the two with your IDE. This is an easy way to ensure there are lesser linting
errors and higher chance of your tests passing.

There are commands for documentation as well. For generating the documentation,
this project uses [Typedoc][typedoc].

You can run `docs:generate` to generate the documentation against your code. If
you want to view the documentation website, you can run `docs:serve` which
should display the generated website. The documentation is manually generated
and published to the website, whenever a pull request is successfully merged to
master.

Pull requests submitted without properly documented code will not be taken into
consideration. Please go through existing files and document any updates or
additions you make.

## Pull request process

1. Ensure any install or build dependencies are removed before the end of the
   layer when doing a build.
2. Update the `README.md` with details of changes to the interface, this
   includes new environment variables, exposed ports, useful file locations,
   configuration changes and container parameters.
3. Fill out as many of the applicable fields as possible in the pull request
   template.
4. You may merge the pull request in once you have the sign-off of one other
   developer and all your tests pass, or if you do not have permission to do
   that, you may request the reviewer to merge it for you.

[issues]: https://github.com/samrith-s/nodehawk/issues
[website]: https://nodehawk.js.org
[prettier]: https://prettier.io/docs/en/editors.html
[eslint]: https://eslint.org/docs/user-guide/integrations
[typedoc]: https://typedoc.org/
