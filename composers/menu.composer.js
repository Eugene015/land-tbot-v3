const { Composer, Markup } = require("telegraf");
const composer = new Composer();

const codesArr = ["123456", "123457", "123459", "1234510"];

// Кнопка "Перевірити стан робіт"
composer.hears("Перевірити стан робіт", async (ctx) => {
  try {
    await ctx.replyWithHTML("Введіть код, вказаний у вашому договорі");
  } catch (e) {
    console.error("error in About button", e);
  }
});

composer.hears(codesArr, async (ctx) => {
  try {
    await ctx.replyWithHTML("Код вірний!");
  } catch (e) {
    console.error("error in About button", e);
  }
});

// Кнопка "Зворотній зв'язок"
composer.hears("Зворотній зв'язок", async (ctx) => {
  try {
    await ctx.reply(ctx.i18n.t("anyQuestions"));
  } catch (e) {
    console.error("error in Feedback button", e);
  }
});

module.exports = composer;
