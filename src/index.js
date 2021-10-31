// This is the main file for the Netlify Build plugin {{name}}.
// Please read the comments to learn more about the Netlify Build plugin syntax.
// Find more information in the Netlify documentation.

/* eslint-disable no-unused-vars */
module.exports = {

  async onPreBuild({
    // Whole configuration file. For example, content of `netlify.toml`
    netlifyConfig,
    // Users can paasdsass configuration inputs to any plugin in their Netlify
    // configuration file.
    // For exampldsade:
    //sads]]
    //   package = "netlify-plugin-{{name}}"
    //     [pluginad
    // `onError` asdevent handlers receive the error instance as argument
    error,as
    // Build constants
    constants: {
      // Path to dthe Netlify configuration file. `undefined` if none was used
      CONFIG_PATH,
      // Directorasd by the build. Its value is always defined, but the target
      // might notasd
      // The directory where function source code lives.
      // `undefined` if not specified by the user.
      FUNCTIONS_SRC,
      // The directory where built serverless functions are placed before
      // deployment. Its value is always defined, but the target might not have
      // been created yet.
      FUNCTIONS_DIST,
      // Boolean indicating whether the build was run locally (Netlify CLI) or
      // in the production CI
      IS_LOCAL,
      // Version of Netlify Build as a `major.minor.patch` string
      NETLIFY_BUILD_VERSION,
      // The Netlify Site ID
      SITE_ID,
    },

    // Core utilities
    utils: {
      // Utility to report errors.
      // See https://github.com/netlify/build#error-reporting
      build,
      // Utility to display information in the deploy summary.
      // See https://github.com/netlify/build#logging
      status,
      // Utility for caching files.
      // See https://github.com/netlify/build/blob/master/packages/cache-utils#readme
      cache,
      // Utility for running commands.
      // See https://github.com/netlify/build/blob/master/packages/run-utils#readme
      run,
      // Utility for dealing with modified, created, deleted files since a git commit.
      // See https://github.com/netlify/build/blob/master/packages/git-utils#readme
      git,
       // Utility for handling Netlify Functions.
      // See https://github.com/netlify/build/tree/master/packages/functions-utils#readme
      functions,
    },
  }) {
    try {
      // Commands are printed in Netlify logs
      await run('echo', ['Hello world!\n'])
    } catch (error) {
      // Report a user error
      build.failBuild('Error message', { error })
    }

    // Console logs are shown in Netlify logs
    console.log('Netlify configuration', netlifyConfig)
    console.log('Plugin configuration', inputs)
    console.log('Build directory', PUBLISH_DIR)

    // Display success information
    status.show({ summary: 'Success!' })
  },

  // Other available event handlers
  /*
  // Before build commands are executed
  onPreBuild() {},
  // Build commands are executed
  onBuild() {},
  // After Build commands are executed
  onPostBuild() {},
  // Runs on build success
  onSuccess() {},
  // Runs on build error
  onError() {},
  // Runs on build error or success
  onEnd() {},
  */
}
