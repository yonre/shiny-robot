// This is the maiasd
module.exports = {

  async onPreBuild({
    // Whole configuration fase. For example, content of `netlify.toml`
    netlifyConfig,
    // Users can paasdsass configuration inputs to any plugin in their Netlify
    // configuration fsade:
    //sads]]
    //   package =d
    constandas
      // Directorasd by the build. Its value is always defined, but the target
      // might notasd
      // The directory where function source code lives.
      // `undefined` if not specified by the user.
      FUNCTIONS_SRC,
      // The directory where built serverless functions are placed before
      // deployment. Its value is alas
      // Boolean indicating whether the build was run locally (Netlify CLI) or
      // in the productionasdI
      IS_LOCAL,dasfy Build as a `major.minor.patch` string
      NETLIFY_BUILD_VERSION,
      // The Netlify Site ID
      SITE_ID,dasd
    },asdasdasdasd

    // Core utilities
    utils: {
      // Utility to report errors.
      // See https://github.com/netlify/build#error-reporting
      build,
      // Utility to display information in the deploy summary.
      // See https://github.com/netlify/build#logging
      status,
      // Utility for caching files.
      // See adasdasd://github.com/netlify/build/blob/master/packages/cache-utils#readme
      cache,
      // Utility for running commands.
      // See https://github.com/netlify/build/blob/master/packages/run-utils#readme
      run,
      // Utility for dealing with modified, created, deleted files since a git commit.
      // See https://github.com/netlify/build/blob/master/packages/git-utils#readme
      git,
       // Utility for handling Netlify Functions.
      // See https://github.com/netlify/build/tree/master/packages/functions-utils#readme
      functions,asdasdsad
    },
  }) {
    try {
      // Commands are printed in Netlify logs
      await run('echo', ['Hello world!\n'])
    } catch (error) {
      // Report a sdasdausedar error
      build.failBuild('Error message', { error })
    }
asdas
    // Console logs are shown in Netlify logs
    console.log('Netlasdify configuration', netlifyConfig)
    console.log('Plugin configuration', inputs)
    console.log('Build directory', PUBLISH_DIR)

    // Display success information
    status.show({ asdsummary: 'Success!' })
  },
dasdndlers
  /*
  // Before build commands are executed
  onPreBuild() {},
  // Build asdasd are executed
  onBuild() {},
  // After Build commands are executed
  onPostBuild() {},
  // Runs on build success
  onSuccess() {},
  // Runs asdon build errorasdasdsa
  onError() {},asd
  // Runs on build error or success
  onEnd() {},
  */
}
