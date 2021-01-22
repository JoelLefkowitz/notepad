# notepad

Notepad angular component

## Status

| Source     | Shields                                                        |
| ---------- | -------------------------------------------------------------- |
| Project    | ![license][license] ![release][release]                        |
| Publishers | [![npm][npm]][npm_link]                                        |
| Downloads  | ![npm_downloads][npm_downloads]                                |
| Raised     | [![issues][issues]][issues_link] [![pulls][pulls]][pulls_link] |

![Preview][preview]

## Installing

```bash
npm i ng-notepad
```

## Usage

```html
<ng-notepad></ng-notepad>
```

Inputs:

* width: number
* height: number
* submitButton: boolean

Outputs:

* (update) => string
* (submit) => string

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the tags on this repository.

Bumpversion is used to version and tag changes.
For example:

```bash
bump2version patch
```

Releases are made on every major change.

## Author

- **Joel Lefkowitz** - _Initial work_ - [Joel Lefkowitz](JoelLefkowitz)

See also the list of contributors who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

None

[preview]: https://github.com/JoelLefkowitz/notepad/raw/master/preview.png "Preview"
[license]: https://img.shields.io/github/license/joellefkowitz/notepad
[release]: https://img.shields.io/github/v/tag/joellefkowitz/notepad
[issues]: https://img.shields.io/github/issues/joellefkowitz/notepad "Issues"
[issues_link]: https://github.com/JoelLefkowitz/notepad/issues
[pulls]: https://img.shields.io/github/issues-pr/joellefkowitz/notepad "Pull requests"
[pulls_link]: https://github.com/JoelLefkowitz/notepad/pulls
[npm_downloads]: https://img.shields.io/npm/dw/ng-notepad
[npm]: https://img.shields.io/npm/v/ng-notepad "npm"
[npm_link]: https://npm.org/project/ng-notepad