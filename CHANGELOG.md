### Changelog

All notable changes to this project will be documented in this file. Dates are displayed in UTC.

#### [0.5.0](https://github.com/appurist/reactivator/compare/0.4.4...0.5.0)

- Added support for `isDirty` method to both `Ref` and `Reactive`.
- Can call `isDirty()` with no parameters to fetch the current number of revisions ("dirt").
- Updates to the README.md file to clarify some differences from Vue 3.
- Updates to the README.md file to include description of LiveKit inspiration.

#### [0.4.3](https://github.com/appurist/reactivator/compare/0.4.2...0.4.3)

- Fixed the order of the parameters on computed to match changes. [`d81cd0a`](https://github.com/appurist/reactivator/commit/d81cd0a2c0e987e50bcdeb1cac4d765918f07daf)

#### [0.4.2](https://github.com/appurist/reactivator/compare/0.4.1...0.4.2)

> 26 September 2020

- Added tests for isRef, isReactive and isComputed. [`8776aae`](https://github.com/appurist/reactivator/commit/8776aaec18eff7c9d0e69410460c793d91db50ce)
- Release v0.4.2 [`7ef352a`](https://github.com/appurist/reactivator/commit/7ef352ae9f8b4664bb3c2597b4a0f09a58b5f461)
- Updated the main readme and GitHub page for fewer future changes. [`ef885e4`](https://github.com/appurist/reactivator/commit/ef885e4ddad7d05507b9a163f6f4455b8320ec26)
- Fixed package.json 'test' script two be quieter if Cypress key defined. [`c163466`](https://github.com/appurist/reactivator/commit/c1634663920cb95e1b60eeb5c36fdae944af066a)
- Minor tweak to remove a header. [`4b19e3a`](https://github.com/appurist/reactivator/commit/4b19e3a2f76278dbdd032ee4e85640f4a5bdbc23)

#### [0.4.1](https://github.com/appurist/reactivator/compare/0.4.0...0.4.1)

> 26 September 2020

- Release v0.4.1 [`5a7e2f6`](https://github.com/appurist/reactivator/commit/5a7e2f63557ccbf1f079439fece0cc0bcea6d4d7)
- Updated all dependencies. [`9bb72ff`](https://github.com/appurist/reactivator/commit/9bb72ffd25ed1a5093b8214d3e5fde6af77fb0ce)
- Fixed changelog generation and updated it. [`4b7f4fa`](https://github.com/appurist/reactivator/commit/4b7f4fab64afa39e2920d3f2b218618ea8f1b00b)

#### [0.4.0](https://github.com/appurist/reactivator/compare/0.3.4...0.4.0)

> 26 September 2020

- Updated examples to use computed() and isComputed() [`2824312`](https://github.com/appurist/reactivator/commit/28243129b49b19893339957f6c3cbbdcf8dddc70)
- Added some tests for computed() [`5acc491`](https://github.com/appurist/reactivator/commit/5acc491e060fbf58c9e95ed05f05be9a398d594d)
- Added support for computed() and isComputed() [`b27a105`](https://github.com/appurist/reactivator/commit/b27a105e1a813cbc664ad61a1e2389de1daaa523)
- Release v0.4.0 [`25918f7`](https://github.com/appurist/reactivator/commit/25918f760ab26325ee984ca8bbd804340f115995)
- Fixed cjs test to use the released cjs build [`396ec29`](https://github.com/appurist/reactivator/commit/396ec2966db9097a3239a9e874c33b58daf5c3b7)

#### [0.3.4](https://github.com/appurist/reactivator/compare/0.3.3...0.3.4)

> 18 September 2020

- More tweaks to the release process, now that the functionality is good. [`a3382f1`](https://github.com/appurist/reactivator/commit/a3382f165becb075fdf7f964d9f4fa4e3cc2c06a)
- Release v0.3.3 [`f5d6348`](https://github.com/appurist/reactivator/commit/f5d63481837f0f1ed83a8fb3154138501b61569c)
- Release v0.3.4 [`e50cc9f`](https://github.com/appurist/reactivator/commit/e50cc9f295ee0b5f2c4672851343ed35850f8d63)
- Manual changelog update from yarn, plus release-it update. [`3bf041b`](https://github.com/appurist/reactivator/commit/3bf041b77635b796e61e37189222d6ebbd13e70b)

#### [0.3.3](https://github.com/appurist/reactivator/compare/0.3.2...0.3.3)

> 18 September 2020

- chore: release v0.3.3 [`ffa5084`](https://github.com/appurist/reactivator/commit/ffa50849d2bbc26020a6fb3beef93e430b568478)
- Fixed the release-it config file name. [`e614014`](https://github.com/appurist/reactivator/commit/e614014c6927b7bba6f4bfb2a7f2b2312692ace7)

#### [0.3.2](https://github.com/appurist/reactivator/compare/0.3.1...0.3.2)

> 18 September 2020

- Added support for release-it, auto-changelog, release scripts. [`213399a`](https://github.com/appurist/reactivator/commit/213399a1bc5101cf5ff6aa9168570dc2fad0d833)
- Release 0.3.2 [`d941da6`](https://github.com/appurist/reactivator/commit/d941da6670a87501ce292f0a6ffd5df07008f8f3)

#### [0.3.1](https://github.com/appurist/reactivator/compare/0.3.0...0.3.1)

> 18 September 2020

- Added some more unit tests. [`e743105`](https://github.com/appurist/reactivator/commit/e7431057207c3829217b7f1ecd58f5ff8910b757)
- Release 0.3.1 [`2688bda`](https://github.com/appurist/reactivator/commit/2688bda44323847969f15a05542932ddfb3a50e9)
- Let's point to the GitHub pages location for project website. [`50ea622`](https://github.com/appurist/reactivator/commit/50ea622f93376784bb95ca31d6b1472bbcfd42e5)
- Updated the Pages links after examples page rename. [`1a1d4a7`](https://github.com/appurist/reactivator/commit/1a1d4a7ab8b5bcfe69a5a940cd1f6626ab678648)
- Setup for running cypress tests with recording (private key). [`6e677fd`](https://github.com/appurist/reactivator/commit/6e677fdefe34f75f8e6a997d54f3433bc4eb627d)
- Fixed examples link after page rename. [`e5ef904`](https://github.com/appurist/reactivator/commit/e5ef904488990f846c4cbf46a97028aad9bbc7ab)
- Ignore the private release script with the token too. [`8bf14ec`](https://github.com/appurist/reactivator/commit/8bf14ec9b603c181e2a1d8b52ae7eda958ff6e96)

#### [0.3.0](https://github.com/appurist/reactivator/compare/0.2.1...0.3.0)

> 17 September 2020

- Added a few cypress-based unit tests to get started, both cjs and esm [`d4491f7`](https://github.com/appurist/reactivator/commit/d4491f76c4e751c28521b56d96d00587001b44b2)
- Rewrote to refer to the wiki pages [`84a8759`](https://github.com/appurist/reactivator/commit/84a8759d36fd32034e2d173ff9fc668bbff9da36)
- Additional examples [`447514f`](https://github.com/appurist/reactivator/commit/447514fc9b2af83c2fa4785ccaf47f40be56487a)
- Separate examples/tests, so that each is as simple as possible [`ed0d9be`](https://github.com/appurist/reactivator/commit/ed0d9bec1c4e0586120885f286928bc819dd6805)
- Initial code of conduct [`34a94ea`](https://github.com/appurist/reactivator/commit/34a94ea93425cdc8e2f3ae851b23788c87fba838)
- An initial CONTRIBUTING.md guide [`077d299`](https://github.com/appurist/reactivator/commit/077d299ecc48e8157a59878d0efde85a9a018953)
- Update issue templates [`1ad16d6`](https://github.com/appurist/reactivator/commit/1ad16d6526a4706751675fe07f6ab57c040fd779)
- Added unwatch test [`3e7a030`](https://github.com/appurist/reactivator/commit/3e7a0302b57a9699531822bc643a8806ab74defd)
- Let's use 'name' instead of 'label'. [`1ea2818`](https://github.com/appurist/reactivator/commit/1ea281889d446d32320da231c858478a1f258941)
- gh-pages here now [`dba3e79`](https://github.com/appurist/reactivator/commit/dba3e79cb14bd18d273fafe5b33bbffd81823ffc)
- Updated dependencies prior to release [`5cb6c0d`](https://github.com/appurist/reactivator/commit/5cb6c0d655aeddb88da3d0a9e183f4d0da9a940e)
- Updated to match the github pages home page (mostly). [`3265bb6`](https://github.com/appurist/reactivator/commit/3265bb699c5a2484c55225eabc2e1b0809135e18)
- dumpValue now supports optional boolean to stringify objects to JSON [`7c1c388`](https://github.com/appurist/reactivator/commit/7c1c388a935651d5188d832cded333b5eadecca1)
- Ignore saved output texts from examples [`9c5f6bc`](https://github.com/appurist/reactivator/commit/9c5f6bc12d860a7a5e733aeafdb76dccb876e58c)
- Provide consistent parameters to watch callbacks for both ref & reactive [`8201cf3`](https://github.com/appurist/reactivator/commit/8201cf35756a1f77ae9104949165183e11475fef)
- Even a Ref can have a name, just the original value [`f7aaf8e`](https://github.com/appurist/reactivator/commit/f7aaf8ec5300a4abc351949cffcfed60f6f0ff76)
- Release 0.3.0 [`7ccbc9f`](https://github.com/appurist/reactivator/commit/7ccbc9f658ded828ae74be2357a964922baef378)
- Test/examples now in their own folder, lets debug one from there now. [`df3e9d4`](https://github.com/appurist/reactivator/commit/df3e9d422228743533a33c81aa107d5fe5bd811a)
- Testing the new /docs location [`8e67b87`](https://github.com/appurist/reactivator/commit/8e67b87c46d4612364f6ce9f9161af8f5dd43a4d)
- Added a cypress badge. [`2b7ca6c`](https://github.com/appurist/reactivator/commit/2b7ca6c62c02bf457594559b71f09dace4ed6be9)

#### [0.2.1](https://github.com/appurist/reactivator/compare/0.2.0...0.2.1)

> 16 September 2020

- Just a little cleanup before release. [`fd9b2db`](https://github.com/appurist/reactivator/commit/fd9b2db13ccc6e565a31103e7354ca954c28cfe9)
- No longer a private module, exports defined in package.json correctly? [`9e3d2e5`](https://github.com/appurist/reactivator/commit/9e3d2e5310739a60cebe726686c2b0c5d6814eec)
- Release 0.2.1 [`fdc4c6e`](https://github.com/appurist/reactivator/commit/fdc4c6e8f4a35ebf262eab3db4d5361d0dc43d25)

#### [0.2.0](https://github.com/appurist/reactivator/compare/0.1.1...0.2.0)

> 15 September 2020

- Hopefully a simpler test example, updated readme, cleanup. [`0d329ec`](https://github.com/appurist/reactivator/commit/0d329ecaf2a31f78a15d3ed50bd3fee44fae3474)
- Split Ref and Reactive into separate files. Nested objects reactive now. [`be8b943`](https://github.com/appurist/reactivator/commit/be8b94390ef6847dc591bf56ea50bdde49d1ec83)
- Added reactive() and some test/example uses of it. [`a9d54b4`](https://github.com/appurist/reactivator/commit/a9d54b4ffa160bca0d0d4e15c6c1949dc108d891)
- Much more thorough and accurate dumping of values [`655ab78`](https://github.com/appurist/reactivator/commit/655ab78f34ed8a6dcc0b8e6fcf3f7ab8aab24834)
- Removed unused temp file. [`d425071`](https://github.com/appurist/reactivator/commit/d4250712932a3664ad4071744fcddada52cad296)
- Added support for tracking nested object names with a '.subfield' label. [`76c6169`](https://github.com/appurist/reactivator/commit/76c616931c858558ceb61f655babed1d488501fe)
- Replace the Reactive class with a function wrapper instead. [`681bdf4`](https://github.com/appurist/reactivator/commit/681bdf42e5f78d166e954eacb61a869c8fa1795d)
- Cleaned up the console logging a bit. [`1535cec`](https://github.com/appurist/reactivator/commit/1535ceca5e016c291f48688b8c0eebbd6d7757d3)
- Support reactivity in nested objects and arrays. [`2066902`](https://github.com/appurist/reactivator/commit/2066902653aeb0ace058e726620c71dfe51b5434)
- Added additional tests that will fail because reactive() is not yet deep [`9c087d6`](https://github.com/appurist/reactivator/commit/9c087d619c1d72a12d3ef7c264e5fb746e9938c0)
- Implement deleteProperty in reactive objects. [`961812d`](https://github.com/appurist/reactivator/commit/961812d1504bca4b3dd92f5911b165fbd8c9a47d)
- clean before dev too [`d2486ed`](https://github.com/appurist/reactivator/commit/d2486edb6f7d6231be8f931e1081cb4dd5d8a287)
- Release 0.2.0 [`10c3713`](https://github.com/appurist/reactivator/commit/10c37132d588c023e5018d0ec3d7716742a1d3f5)
- When changing an array, dump the resulting array too. [`b961a13`](https://github.com/appurist/reactivator/commit/b961a13149d6dc7671ceabde482bb728bd18d997)

#### 0.1.1

> 14 September 2020

- Initial ref, watch and unwatch, plus rollup for module formats in dist. [`aface0c`](https://github.com/appurist/reactivator/commit/aface0cb612e9c8957dd8275b7c5faadf0c01736)
- Initial test structure [`25d7069`](https://github.com/appurist/reactivator/commit/25d7069517a38ffa32ddb9cd13755e7553b13a06)
- Initial commit [`226c59e`](https://github.com/appurist/reactivator/commit/226c59e756b1ceff778f821bc6ea66c188dbb3d2)
- some experiments [`a353bb0`](https://github.com/appurist/reactivator/commit/a353bb01165ec72e936b1cd289d0474d633c5bf9)
- Updated the readme and test example for recent lib changes. [`1de541d`](https://github.com/appurist/reactivator/commit/1de541dff30e28cd02bd45a62ddcd9dbf97f9aed)
- A quick rough scalar value implementation, no observable notifications. [`4f9a3b6`](https://github.com/appurist/reactivator/commit/4f9a3b65a8caba3708ed3aa5779a80ad8f963a77)
- Publish to a private, scoped NPM package for now. [`5ef1722`](https://github.com/appurist/reactivator/commit/5ef1722e451a6ea8eb7ebb4507c64c1c8d7b4a7a)
- Let's go with index.js for now. [`dd9991d`](https://github.com/appurist/reactivator/commit/dd9991df2bacdfb6681a8777dddd3609530e64c4)
