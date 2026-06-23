import * as i0 from '@angular/core';
import { input, output, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

const _c0 = a0 => [a0];
const _c1 = () => ({ exact: true });
function ApxSideMenu_Conditional_47_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li")(1, "button", 25);
    i0.ɵɵlistener("click", function ApxSideMenu_Conditional_47_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSignOut.emit()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 14);
    i0.ɵɵelement(3, "path", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "p", 17);
    i0.ɵɵtext(5, " logout ");
    i0.ɵɵelementEnd()()();
} }
function ApxSideMenu_Conditional_48_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li")(1, "button", 25);
    i0.ɵɵlistener("click", function ApxSideMenu_Conditional_48_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSignIn.emit()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 14);
    i0.ɵɵelement(3, "path", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "p", 17);
    i0.ɵɵtext(5, " Login ");
    i0.ɵɵelementEnd()()();
} }
// Esto es una interfaz 
var TitleColor;
(function (TitleColor) {
    TitleColor["red"] = "text-red-500";
    TitleColor["green"] = "text-green-500";
    TitleColor["blue"] = "text-blue-500";
    TitleColor["purple"] = "text-blue-500";
})(TitleColor || (TitleColor = {}));
class ApxSideMenu {
    isAuthenticated = input(false, ...(ngDevMode ? [{ debugName: "isAuthenticated" }] : /* istanbul ignore next */ []));
    titleColor = input(TitleColor.purple, ...(ngDevMode ? [{ debugName: "titleColor" }] : /* istanbul ignore next */ []));
    onSignOut = output();
    onSignIn = output();
    static ɵfac = function ApxSideMenu_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApxSideMenu)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApxSideMenu, selectors: [["lib-apx-side-menu"]], inputs: { isAuthenticated: [1, "isAuthenticated"], titleColor: [1, "titleColor"] }, outputs: { onSignOut: "onSignOut", onSignIn: "onSignIn" }, decls: 49, vars: 8, consts: [[1, "bg-gradient-to-br", "from-gray-800", "to-gray-900", "-translate-x-80", "fixed", "inset-0", "z-50", "my-4", "ml-4", "h-[calc(100vh-32px)]", "w-72", "rounded-xl", "transition-transform", "duration-300", "xl:translate-x-0"], [1, "relative", "border-b", "border-white/20"], ["href", "#/", 1, "flex", "items-center", "gap-4", "py-6", "px-8"], [1, "text-2xl", "font-bold", "block", "antialiased", "tracking-normal", "font-sans", "font-semibold", "leading-relaxed", "text-white"], [3, "classList"], [1, "font-thin"], ["type", "button", 1, "middle", "none", "font-sans", "font-medium", "text-center", "uppercase", "transition-all", "disabled:opacity-50", "disabled:shadow-none", "disabled:pointer-events-none", "w-8", "max-w-[32px]", "h-8", "max-h-[32px]", "rounded-lg", "text-xs", "text-white", "hover:bg-white/10", "active:bg-white/30", "absolute", "right-0", "top-0", "grid", "rounded-br-none", "rounded-tl-none", "xl:hidden"], [1, "absolute", "top-1/2", "left-1/2", "transform", "-translate-y-1/2", "-translate-x-1/2"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "2.5", "stroke", "currentColor", "aria-hidden", "true", 1, "h-5", "w-5", "text-white"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18L18 6M6 6l12 12"], [1, "m-4"], [1, "mb-4", "flex", "flex-col", "gap-1"], ["aria-current", "page", "routerLink", "/", "routerLinkActive", "rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20  active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize", "href", "#", 3, "routerLinkActiveOptions"], ["type", "button", 1, "middle", "none", "font-sans", "font-bold", "center", "transition-all", "disabled:opacity-50", "disabled:shadow-none", "disabled:pointer-events-none", "text-xs", "py-3", "rounded-lg", "text-white", "hover:bg-white/10", "active:bg-white/30", "w-full", "flex", "items-center", "gap-4", "px-4", "capitalize"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", "aria-hidden", "true", 1, "w-5", "h-5", "text-inherit"], ["d", "M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"], ["d", "M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"], [1, "block", "antialiased", "font-sans", "text-base", "leading-relaxed", "text-inherit", "font-medium", "capitalize"], ["href", "#", 1, ""], ["fill-rule", "evenodd", "d", "M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z", "clip-rule", "evenodd"], ["routerLink", "/projects", "routerLinkActive", "rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20  active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize", "href", "#", 1, "", 3, "routerLinkActiveOptions"], ["fill-rule", "evenodd", "d", "M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zM10.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5zM3.375 15h7.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h7.5a.375.375 0 00.375-.375v-1.5A.375.375 0 0010.875 9h-7.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z", "clip-rule", "evenodd"], [1, "mx-3.5", "mt-4", "mb-2"], [1, "block", "antialiased", "font-sans", "text-sm", "leading-normal", "text-white", "font-black", "uppercase", "opacity-75"], ["type", "button", 1, "middle", "none", "font-sans", "font-bold", "center", "transition-all", "disabled:opacity-50", "disabled:shadow-none", "disabled:pointer-events-none", "text-xs", "py-3", "rounded-lg", "text-white", "hover:bg-white/10", "active:bg-white/30", "w-full", "flex", "items-center", "gap-4", "px-4", "capitalize", 3, "click"], ["fill-rule", "evenodd", "d", "M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z", "clip-rule", "evenodd"], ["d", "M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"]], template: function ApxSideMenu_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "aside", 0)(1, "div", 1)(2, "a", 2)(3, "h6", 3)(4, "span", 4);
            i0.ɵɵtext(5, "APX");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "span", 5);
            i0.ɵɵtext(7, " Corp");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(8, "button", 6)(9, "span", 7);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(10, "svg", 8);
            i0.ɵɵelement(11, "path", 9);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(12, "div", 10)(13, "ul", 11)(14, "li")(15, "a", 12)(16, "button", 13);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(17, "svg", 14);
            i0.ɵɵelement(18, "path", 15)(19, "path", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(20, "p", 17);
            i0.ɵɵtext(21, " dashboard ");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(22, "li")(23, "a", 18)(24, "button", 13);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(25, "svg", 14);
            i0.ɵɵelement(26, "path", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(27, "p", 17);
            i0.ɵɵtext(28, " profile ");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(29, "li")(30, "a", 20)(31, "button", 13);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(32, "svg", 14);
            i0.ɵɵelement(33, "path", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(34, "p", 17);
            i0.ɵɵtext(35, " Projects ");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(36, "li")(37, "a", 18)(38, "button", 13);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(39, "svg", 14);
            i0.ɵɵelement(40, "path", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(41, "p", 17);
            i0.ɵɵtext(42, " notifactions ");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(43, "ul", 11)(44, "li", 23)(45, "p", 24);
            i0.ɵɵtext(46, " auth pages ");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(47, ApxSideMenu_Conditional_47_Template, 6, 0, "li")(48, ApxSideMenu_Conditional_48_Template, 6, 0, "li");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("classList", i0.ɵɵpureFunction1(4, _c0, ctx.titleColor()));
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("routerLinkActiveOptions", i0.ɵɵpureFunction0(6, _c1));
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("routerLinkActiveOptions", i0.ɵɵpureFunction0(7, _c1));
            i0.ɵɵadvance(17);
            i0.ɵɵconditional(ctx.isAuthenticated() ? 47 : 48);
        } }, dependencies: [RouterLink, RouterLinkActive], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApxSideMenu, [{
        type: Component,
        args: [{ selector: 'lib-apx-side-menu', imports: [RouterLink, RouterLinkActive], template: "<aside\r\n  class=\"bg-gradient-to-br from-gray-800 to-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0\"\r\n>\r\n  <div class=\"relative border-b border-white/20\">\r\n    <a class=\"flex items-center gap-4 py-6 px-8\" href=\"#/\">\r\n      <h6\r\n        class=\"text-2xl font-bold block antialiased tracking-normal font-sans font-semibold leading-relaxed text-white\"\r\n      >\r\n        <!-- Todo: personalizar colores -->\r\n        <span [classList]=\"[titleColor()]\">APX</span>\r\n        <span class=\"font-thin\"> Corp</span>\r\n      </h6>\r\n    </a>\r\n    <button\r\n      class=\"middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden\"\r\n      type=\"button\"\r\n    >\r\n      <span\r\n        class=\"absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2\"\r\n      >\r\n        <svg\r\n          xmlns=\"http://www.w3.org/2000/svg\"\r\n          fill=\"none\"\r\n          viewBox=\"0 0 24 24\"\r\n          stroke-width=\"2.5\"\r\n          stroke=\"currentColor\"\r\n          aria-hidden=\"true\"\r\n          class=\"h-5 w-5 text-white\"\r\n        >\r\n          <path\r\n            stroke-linecap=\"round\"\r\n            stroke-linejoin=\"round\"\r\n            d=\"M6 18L18 6M6 6l12 12\"\r\n          ></path>\r\n        </svg>\r\n      </span>\r\n    </button>\r\n  </div>\r\n  <div class=\"m-4\">\r\n    <ul class=\"mb-4 flex flex-col gap-1\">\r\n      <li>\r\n        <!-- middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize -->\r\n\r\n        <a\r\n          aria-current=\"page\"\r\n          routerLink=\"/\"\r\n          routerLinkActive=\"rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20  active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize\"\r\n          [routerLinkActiveOptions]=\"{ exact: true }\"\r\n          href=\"#\"\r\n        >\r\n          <button\r\n            class=\"middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize\"\r\n            type=\"button\"\r\n          >\r\n            <svg\r\n              xmlns=\"http://www.w3.org/2000/svg\"\r\n              viewBox=\"0 0 24 24\"\r\n              fill=\"currentColor\"\r\n              aria-hidden=\"true\"\r\n              class=\"w-5 h-5 text-inherit\"\r\n            >\r\n              <path\r\n                d=\"M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z\"\r\n              ></path>\r\n              <path\r\n                d=\"M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z\"\r\n              ></path>\r\n            </svg>\r\n            <p\r\n              class=\"block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize\"\r\n            >\r\n              dashboard\r\n            </p>\r\n          </button>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a class=\"\" href=\"#\">\r\n          <button\r\n            class=\"middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize\"\r\n            type=\"button\"\r\n          >\r\n            <svg\r\n              xmlns=\"http://www.w3.org/2000/svg\"\r\n              viewBox=\"0 0 24 24\"\r\n              fill=\"currentColor\"\r\n              aria-hidden=\"true\"\r\n              class=\"w-5 h-5 text-inherit\"\r\n            >\r\n              <path\r\n                fill-rule=\"evenodd\"\r\n                d=\"M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z\"\r\n                clip-rule=\"evenodd\"\r\n              ></path>\r\n            </svg>\r\n            <p\r\n              class=\"block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize\"\r\n            >\r\n              profile\r\n            </p>\r\n          </button>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a\r\n          routerLink=\"/projects\"\r\n          routerLinkActive=\"rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20  active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize\"\r\n          [routerLinkActiveOptions]=\"{ exact: true }\"\r\n          class=\"\"\r\n          href=\"#\"\r\n        >\r\n          <button\r\n            class=\"middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize\"\r\n            type=\"button\"\r\n          >\r\n            <svg\r\n              xmlns=\"http://www.w3.org/2000/svg\"\r\n              viewBox=\"0 0 24 24\"\r\n              fill=\"currentColor\"\r\n              aria-hidden=\"true\"\r\n              class=\"w-5 h-5 text-inherit\"\r\n            >\r\n              <path\r\n                fill-rule=\"evenodd\"\r\n                d=\"M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zM10.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5zM3.375 15h7.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h7.5a.375.375 0 00.375-.375v-1.5A.375.375 0 0010.875 9h-7.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375z\"\r\n                clip-rule=\"evenodd\"\r\n              ></path>\r\n            </svg>\r\n            <p\r\n              class=\"block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize\"\r\n            >\r\n              Projects\r\n            </p>\r\n          </button>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a class=\"\" href=\"#\">\r\n          <button\r\n            class=\"middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize\"\r\n            type=\"button\"\r\n          >\r\n            <svg\r\n              xmlns=\"http://www.w3.org/2000/svg\"\r\n              viewBox=\"0 0 24 24\"\r\n              fill=\"currentColor\"\r\n              aria-hidden=\"true\"\r\n              class=\"w-5 h-5 text-inherit\"\r\n            >\r\n              <path\r\n                fill-rule=\"evenodd\"\r\n                d=\"M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z\"\r\n                clip-rule=\"evenodd\"\r\n              ></path>\r\n            </svg>\r\n            <p\r\n              class=\"block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize\"\r\n            >\r\n              notifactions\r\n            </p>\r\n          </button>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"mb-4 flex flex-col gap-1\">\r\n      <li class=\"mx-3.5 mt-4 mb-2\">\r\n        <p\r\n          class=\"block antialiased font-sans text-sm leading-normal text-white font-black uppercase opacity-75\"\r\n        >\r\n          auth pages\r\n        </p>\r\n      </li>\r\n\r\n      @if( isAuthenticated() ) {\r\n      <li>\r\n        <button\r\n          class=\"middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize\"\r\n          type=\"button\"\r\n          (click)=\"onSignOut.emit()\"\r\n        >\r\n          <svg\r\n            xmlns=\"http://www.w3.org/2000/svg\"\r\n            viewBox=\"0 0 24 24\"\r\n            fill=\"currentColor\"\r\n            aria-hidden=\"true\"\r\n            class=\"w-5 h-5 text-inherit\"\r\n          >\r\n            <path\r\n              fill-rule=\"evenodd\"\r\n              d=\"M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z\"\r\n              clip-rule=\"evenodd\"\r\n            ></path>\r\n          </svg>\r\n          <p\r\n            class=\"block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize\"\r\n          >\r\n            logout\r\n          </p>\r\n        </button>\r\n      </li>\r\n\r\n      } @else {\r\n\r\n      <li>\r\n        <button\r\n          class=\"middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize\"\r\n          type=\"button\"\r\n          (click)=\"onSignIn.emit()\"\r\n        >\r\n          <svg\r\n            xmlns=\"http://www.w3.org/2000/svg\"\r\n            viewBox=\"0 0 24 24\"\r\n            fill=\"currentColor\"\r\n            aria-hidden=\"true\"\r\n            class=\"w-5 h-5 text-inherit\"\r\n          >\r\n            <path\r\n              d=\"M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z\"\r\n            ></path>\r\n          </svg>\r\n          <p\r\n            class=\"block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize\"\r\n          >\r\n            Login\r\n          </p>\r\n        </button>\r\n      </li>\r\n\r\n      }\r\n    </ul>\r\n  </div>\r\n</aside>" }]
    }], null, { isAuthenticated: [{ type: i0.Input, args: [{ isSignal: true, alias: "isAuthenticated", required: false }] }], titleColor: [{ type: i0.Input, args: [{ isSignal: true, alias: "titleColor", required: false }] }], onSignOut: [{ type: i0.Output, args: ["onSignOut"] }], onSignIn: [{ type: i0.Output, args: ["onSignIn"] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApxSideMenu, { className: "ApxSideMenu", filePath: "lib/apx-side-menu.ts", lineNumber: 18 }); })();

/*
 * Public API Surface of apx-side-menu
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ApxSideMenu, TitleColor };
//# sourceMappingURL=apx-side-menu.mjs.map
