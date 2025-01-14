/**
 * Vendors
 */
import $ from "jquery";
window.$ = $;

// Пример подключения плагина
// import pluginName from 'plugin-name';

/**
 * Modules
 */
// Пример подключения модуля
// import myModule from './modules/my-module-function';
import tabs from "./modules/tabs";
import menu from "./modules/menu";
import swiper from "./modules/swiper";
import select from "./modules/select";
import tippy from "./modules/tippy";
import showMore from "./modules/showMore";
import accordeon from "./modules/accordeon";
import validation from "./modules/validation";
import mask from "./modules/mask";
import modal from "./modules/modal";
import modalSelect from "./modules/modalSelect";

const app = {
  ready() {
    // Пример вызова импортированнывх функций
    // pluginName();

    // myModule();
    tabs();
    menu();
    swiper();
    select();
    tippy();
    showMore();
    accordeon();
    validation();
    mask();
    modal();
    modalSelect();
    changeBorderSelect();
  },

  load() {},

  resize() {},

  scroll() {},
};

$(() => {
  app.ready();

  $(window)
    .on("load", app.load)
    .on("resize", app.resize)
    .on("scroll", app.scroll);
});
