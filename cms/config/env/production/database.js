// LOCAL POSTGRES
// module.exports = ({ env }) => ({
//   connection: {
//     client: "postgres",
//     connection: {
//       host: env("DATABASE_HOST", "127.0.0.1"),
//       port: env.int("DATABASE_PORT", 5432),
//       database: env("DATABASE_NAME", "mbelec-db"),
//       user: env("DATABASE_USERNAME", "mbelec"),
//       password: env("DATABASE_PASSWORD", "$Rmada)34"),
//       ssl: env.bool("DATABASE_SSL", false) && {
//         rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
//       },
//     },
//     debug: false,
//   },
// });

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "mbelec-db"),
      user: env("DATABASE_USERNAME", ""),
      password: env("DATABASE_PASSWORD", ""),
      ssl: env.bool("DATABASE_SSL", false) && {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
      },
    },
    debug: false,
  },
});
