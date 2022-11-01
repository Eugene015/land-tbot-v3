const { Composer, Markup } = require("telegraf");
const composer = new Composer();

// Ланцюжок Проект відведення
composer.action("proektVidv", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      ctx.i18n.t("proektVidv"),
      Markup.inlineKeyboard([
        [Markup.button.callback("Київ", "kyiv")],
        [Markup.button.callback("Київська область", "kyivReg")],
        [Markup.button.callback("Інша область", "otherReg")],
      ])
    );
  } catch (e) {
    console.error(e);
  }
});

// Проект відведення Київ / Власником (користувачем) ділянки є?
composer.action(["kyiv", "kyivReg"], async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      "Власником (користувачем) ділянки є:",
      Markup.inlineKeyboard([
        [Markup.button.callback("Фізична особа", "privatePers")],
        [Markup.button.callback("Юридична особа", "legalEntity")],
      ])
    );
  } catch (e) {
    console.error(e);
  }
});

// Проект відведення Київ / Власником (користувачем) ділянки є фізособа / Чи є рішення?
composer.action(["privatePers", "legalEntity"], async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      ctx.i18n.t("proektVidvKiyvRish"),
      Markup.inlineKeyboard([
        [Markup.button.callback("Рішення Є", "rishTrue")],
        [Markup.button.callback("Рішення немає", "rishFalse")],
      ])
    );
  } catch (e) {
    console.error(e);
  }
});

// Проект відведення Київ / Власником (користувачем) ділянки є фіз чи юрособа / Рішення є!
composer.action("rishTrue", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      ctx.i18n.t("proektVidvKiyvRishTrue"),
      Markup.inlineKeyboard([
        [Markup.button.callback("Вартість (фізособи)", "proektKyivPrice")],
        [Markup.button.callback("Вартість (юрособи)", "proektKyivPriceLE")],
        [Markup.button.callback("Документи", "proektKyivDocs")],
        [Markup.button.callback("Консультація", "consult")],
      ])
    );
  } catch (e) {
    console.error(e);
  }
});

// Проект відведення Київ / Власником (користувачем) ділянки є фізособа / Вартість
composer.action("proektKyivPrice", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      ctx.i18n.t("proektVidvKiyvPrice"),
      Markup.inlineKeyboard([
        [Markup.button.callback("Консультація", "consult")],
      ])
    );
  } catch (e) {
    console.error(e);
  }
});

// Проект відведення Київ / Власником (користувачем) ділянки є юрособа / Вартість
composer.action("proektKyivPriceLE", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      ctx.i18n.t("proektVidvKiyvPriceLE"),
      Markup.inlineKeyboard([
        [Markup.button.callback("Консультація", "consult")],
      ])
    );
  } catch (e) {
    console.error(e);
  }
});

// Проект відведення Київ / Власником (користувачем) ділянки є фізособа / Документи
composer.action("proektKyivDocs", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      ctx.i18n.t("proektVidvKiyvDocs"),
      Markup.inlineKeyboard([
        [Markup.button.callback("Консультація", "consult")],
      ])
    );
  } catch (e) {
    console.error(e);
  }
});

// Проект відведення Київська область

// Консультація
composer.action("consult", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithPhoto({
      source: "img/2.jpg",
    });
    await ctx.replyWithHTML(
      ctx.i18n.t("anyQuestions"),
      Markup.inlineKeyboard([
        [Markup.button.callback("Поставити запитання", "askCompany")],
      ])
    );
  } catch (e) {
    console.error(e);
  }
});

module.exports = composer;
