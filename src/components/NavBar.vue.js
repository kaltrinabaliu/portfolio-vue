"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await Promise.resolve().then(() => __importStar(require('vue')));
const nav = vue_1.ref < Boolean > (false);
const handleNav = () => {
    nav.value = !nav.value;
}; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = Object.assign(Object.assign(Object.assign({}, {}), {}), __VLS_ctx);
    let __VLS_components;
    const __VLS_localDirectives = Object.assign(Object.assign({}, {}), __VLS_ctx);
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("relative z-10 text-gray-500 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-lg") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)(Object.assign({ class: ("text-3xl font-bold primary-color ml-4") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)(Object.assign({ class: ("hidden md:flex") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)(Object.assign({ class: ("p-5") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#home"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)(Object.assign({ class: ("p-5") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#about"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)(Object.assign({ class: ("p-5") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#work"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)(Object.assign({ class: ("p-5") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#experience"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)(Object.assign({ class: ("p-5") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#contact"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ onClick: (__VLS_ctx.handleNav) }, { class: ("block md:hidden") }));
    if (!__VLS_ctx.nav) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ stroke: ("currentColor"), fill: ("currentColor"), "stroke-width": ("0"), viewBox: ("0 0 1024 1024"), height: ("20"), width: ("20"), xmlns: ("http://www.w3.org/2000/svg"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({ d: ("M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"), });
    }
    if (__VLS_ctx.nav) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ onClick: (__VLS_ctx.handleNav) }, { class: ("fixed top-0 left-0 bottom-0 w-full bg-black opacity-50 md:hidden ease-in-out duration-500") }));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ((__VLS_ctx.nav ? 'z-10 text-gray-300 fixed h-full right-0 top-0 w-[60%] border-r border-r-gray-900 bg-black/[.9] ease-in-out duration-500' : 'fixed right-[-100%]')) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ onClick: (__VLS_ctx.handleNav) }, { class: ("flex justify-start items-center mx-7 my-8") }));
    if (__VLS_ctx.nav) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ stroke: ("currentColor"), fill: ("currentColor"), "stroke-width": ("0"), viewBox: ("0 0 1024 1024"), "fill-rule": ("evenodd"), height: ("20"), width: ("20"), xmlns: ("http://www.w3.org/2000/svg"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({ d: ("M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"), });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)(Object.assign({ class: ("px-5 py-3 text-2xl") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)(Object.assign({ class: ("p-2") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#home"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)(Object.assign({ class: ("p-2") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#about"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)(Object.assign({ class: ("p-2") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#work"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)(Object.assign({ class: ("p-2") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#experience"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)(Object.assign({ class: ("p-2") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#contact"), });
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['z-10'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['max-w-[1240px]'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['h-24'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['text-3xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['primary-color'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['hidden'];
    __VLS_styleScopedClasses['md:flex'];
    __VLS_styleScopedClasses['p-5'];
    __VLS_styleScopedClasses['p-5'];
    __VLS_styleScopedClasses['p-5'];
    __VLS_styleScopedClasses['p-5'];
    __VLS_styleScopedClasses['p-5'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['md:hidden'];
    __VLS_styleScopedClasses['fixed'];
    __VLS_styleScopedClasses['top-0'];
    __VLS_styleScopedClasses['left-0'];
    __VLS_styleScopedClasses['bottom-0'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['bg-black'];
    __VLS_styleScopedClasses['opacity-50'];
    __VLS_styleScopedClasses['md:hidden'];
    __VLS_styleScopedClasses['ease-in-out'];
    __VLS_styleScopedClasses['duration-500'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-start'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['mx-7'];
    __VLS_styleScopedClasses['my-8'];
    __VLS_styleScopedClasses['px-5'];
    __VLS_styleScopedClasses['py-3'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['p-2'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({
    setup() {
        return {
            nav: nav,
            handleNav: handleNav,
        };
    },
});
exports.default = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
