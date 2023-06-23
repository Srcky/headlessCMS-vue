module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST"),
        port: env("SMTP_PORT"),
        auth: {
          user: env("MAIL_USER"),
          pass: env("MAIL_PASS"),
        },
      },
      settings: {
        defaultFrom: "site@mbelectronic.rs",
        defaultReplyTo: "site@mbelectronic.rs",
      },
    },
  },
});
