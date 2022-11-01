const { Composer, Markup } = require("telegraf");
const composer = new Composer();

// Команда /zemleustriy
composer.command("zemleustriy", async (ctx) => {
  try {
    await ctx.replyWithHTML(
      "<b>Оберіть вид послуги в розділі Землеустрій🗺</b>",
      Markup.inlineKeyboard([
        [Markup.button.callback("Проект відведення ділянки", "proektVidv")],
        [
          Markup.button.callback(
            "Зміна цільового призначення",
            "btn_category2"
          ),
        ],
        [
          Markup.button.callback(
            "Присвоєння кадастрового номеру",
            "btn_category3"
          ),
        ],
        [Markup.button.callback("Поділ земельної ділянки", "btn_category4")],
        [
          Markup.button.callback(
            "Технічна документація (межі, приватизація)",
            "btn_category5"
          ),
        ],
        [Markup.button.callback("Внесення ділянки до ДЗК", "btn_category6")],
        [Markup.button.callback("Обмінний файл XML", "btn_category7")],
        [Markup.button.callback("Витяг з кадастру", "btn_category8")],
        [
          Markup.button.callback(
            "Зняття родючого шару ґрунту",
            "btn_category9"
          ),
        ],
        [Markup.button.callback("Проект сівозміни", "btn_category10")],
        [Markup.button.callback("Нормативна грошова оцінка", "btn_category11")],
      ])
    );
  } catch (e) {
    console.error(e);
  }
});

// Команда /geodesy
composer.command("geodesy", async (ctx) => {
  try {
    await ctx.replyWithHTML(
      "<b>Оберіть вид послуги в розділі Геодезія🗺</b>",
      Markup.inlineKeyboard([
        [
          Markup.button.callback(
            "Відновлення (винос) меж ділянки",
            "vinosMezh"
          ),
        ],
        [Markup.button.callback("Топографічна зйомка", "topo_zyomka")],
        [Markup.button.callback("Кадастрова зйомка", "kad_zyomka")],
      ])
    );
  } catch (e) {
    console.error(e);
  }
});

// Команда /prbti
composer.command("prbti", async (ctx) => {
  try {
    await ctx.replyWithHTML(
      "<b>Оберіть вид робіт в переліку нижче</b>",
      Markup.inlineKeyboard([
        [Markup.button.callback("Узаконення самобуду", "uzakonennya")],
        [Markup.button.callback("Технічний паспорт", "techpass")],
        [Markup.button.callback("Будівельний паспорт", "budpass")],
      ])
    );
  } catch (e) {
    console.error(e);
  }
});

module.exports = composer;
