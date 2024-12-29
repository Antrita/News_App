const app = require('./app');
const config = require('./config/config');

const server = app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});