module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        logPageInfo(message) {
          console.log(message);
          return null;
        }
      });
    },
  },
};
