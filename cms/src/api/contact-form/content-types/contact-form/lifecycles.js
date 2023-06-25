module.exports = {
  async afterCreate(evt) {
    const { result } = evt;
    try {
      await strapi
        .plugin("email")
        .service("email")
        .send({
          to: "site@mbelectronic.rs",
          subject: `Poruka sa sajta - ${result.subject}`,
          from: result.email,
          text: result.message,
        });
    } catch (error) {
      throw error;
    }
  },
};
