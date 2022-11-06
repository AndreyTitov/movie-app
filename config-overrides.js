const { useBabelRc, override } = require('customize-cra');

const envs = {
  development: override(
    useBabelRc(),
  ),
  production: override(
    useBabelRc(),
  ),
};

module.exports = envs;
