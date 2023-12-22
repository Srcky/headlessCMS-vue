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
        defaultFrom: "office@mbelectronic.rs",
        defaultReplyTo: "office@mbelectronic.rs",
      },
    },
  },
  upload: {
    config: {
      provider: "strapi-provider-upload-do",
      providerOptions: {
        key: env("DO_SPACE_ACCESS_KEY"),
        secret: env("DO_SPACE_SECRET_KEY"),
        endpoint: env("DO_SPACE_ENDPOINT"),
        space: env("DO_SPACE_BUCKET"),
      },
    },
  },
});
