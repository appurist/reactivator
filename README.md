# reactivator [![reactivator](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/d4b7my/master&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/d4b7my/runs)
#### A framework-independent package to transform data elements into reactive ones.

This project is a _very small_ library package that provides simple reactivity to arbitrary data elements. It is platform agnostic, however it is not intended for use in combination with other frameworks which may implement the same functionality, or have naming clashes.

### Reactivator Wiki and API Documentation

For more information, see [the Reactivator Wiki](https://github.com/appurist/reactivator/wiki/) for more.

In particular, several functions are available in the Reactivator API for JavaScript. See [the API page](https://github.com/appurist/reactivator/wiki/Reactivator-API) for more.

### Example use of Refs, Reactive Objects, and Watches

See also [the example page](https://github.com/appurist/reactivator/wiki/Example-use-of-ref(),-reactive()-and-watch()) for a source code example, as well as the resulting [output](https://github.com/appurist/reactivator/wiki/Example-use-of-ref(),-reactive()-and-watch()#output).

### WORK IN PROGRESS
This is an early work-in-progress, not intended for any serious purpose at this time. Furthermore, it is a 0.x release, meaning it is likely to have breaking changes as the interface is worked out in practice, and becomes more complete.

### INSPIRATION
This project has been an attempt at learning how reactivity in Vue works behind the scenes, by implementing major features of it from scratch, and therefore is both inspired by [Vue.js](https://vuejs.org/), and in many ways, is modeled after Vue. It incorporates a _small_ portion of the Composition API features in Vue 3, although is a much simpler implementation with fewer features and less maturity. However, in spite of this, the lighter design and implementation may be appropriate for some hobby projects.
