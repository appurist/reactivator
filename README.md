# reactivator ![GitHub](https://img.shields.io/github/license/appurist/reactivator?style=plastic) ![GitHub issues](https://img.shields.io/github/issues/appurist/reactivator?style=plastic) [![reactivator](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/d4b7my/master&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/d4b7my/runs)
#### A framework-independent package to transform data elements into reactive ones.

This project is a _very small_ library package that provides simple yet rich reactivity to arbitrary data elements. It has **no** runtime dependencies. It is platform agnostic, however it is not intended for use in combination with other frameworks which may implement the same functionality, or have naming clashes.

### Reactivator Wiki and API Documentation

For more information, see [the Reactivator Wiki](https://github.com/appurist/reactivator/wiki/) for more.

In particular, several functions are available in the Reactivator API for JavaScript. See [the API page](https://github.com/appurist/reactivator/wiki/Reactivator-API) for more.

See also [the example page](https://github.com/appurist/reactivator/wiki/Summary:-Example-Usage) for a source code example, as well as the resulting [output](https://github.com/appurist/reactivator/wiki/Summary:-Example-Usage#output).

### WORK IN PROGRESS

This is an early work-in-progress, not intended for any serious purpose at this time. Furthermore, it is a 0.x release, meaning it is likely to have breaking changes as the interface is worked out in practice, and becomes more complete.

### ROADMAP - FUTURE UPDATES

With the inclusion of isDirty in 0.5.0, there are no known issues or missing roadmap features. Updates will continue as issues are found and resolved, or as new features become evident.

### INSPIRATION

This project has been an attempt at learning how reactivity other frameworks works behind the scenes, especially in Vue, by implementing major features of it from scratch. It is therefore both inspired by [Vue.js](https://vuejs.org/), and in many ways, is modeled after Vue. It incorporates a _small_ portion of the Composition API features in Vue 3, although is a much simpler implementation with fewer features and less maturity.

Note that in spite of the inspiration, there are some significant differences in this code. It is not intended to be compatible with the Vue API (why bother replicating Vue reactivity exactly?) and has some significant differences that may make it easier to use.  The use of JavaScript `Proxy` methods _on the reactive data elements themselves rather than their members_ allow for much simpler implementations than even Vue 3 (e.g. no tracking), but this is a learning process and there are probably many good reasons for that in Vue 3 (e.g. perhaps the Vue compiler's hints provided for runtime optimizations). However, in spite of this, the lighter design and implementation may be appropriate for some hobby projects.

### LIVEKIT

This project is really a subproject of the **LiveKit** project, which is a very light JavaScript framework. In fact it is so light that it requires *no bundling*, not even web *hosting* to serve the file: you can double-click a .html file to use it, even in production. The **Reactivator** project is just the reactive data provider for **LiveKit**. It may be useful on its own and is available now so it has been provided separately.

Both of these were just personal projects, originally started in order to gain a deeper understanding of how these kinds of packages and frameworks actually worked. But a secondary goal was to achieve something useful to my own hobby projects that were so light that major frameworks were overkill. And to kiss goodbye the complexities of webkit, etc.

Use of separate external component files in LiveKit, including single-file components (SFCs), require at least web hosting due to CORS concerns (and file access from browsers). However, something as simple as the [http-server](https://www.npmjs.com/package/http-server) package or equivalent (or a simple Express or Fastify server with static file support) can be used to serve LiveKit apps.

I have also experimented with very basic, generic use of [Rollup](https://rollupjs.org/) as an optional delivery mechanism in order to gain automatic tree-shaking, simplify CJS/ESM module and numerous other benefits and optimizations. Rollup is used to produce the `dist` folders for both Reactivator and LiveKit. 

Note that LiveKit is not yet available which is why *this* project describes it in this detail.
