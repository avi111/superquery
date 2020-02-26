module.exports = {
  module: {
    rules: [
      // Disable require.ensure as it's not a standard language feature.
      {parser: {requireEnsure: false}},
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
}
