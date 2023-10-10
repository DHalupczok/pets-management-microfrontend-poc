const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'pets-management-microfrontend-poc',

  exposes: {
    './Module': './src/app/pets/pets.module.ts',
    // './Module': './src/app/app.module.ts',
    // './Component': './src/app/app.component.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
