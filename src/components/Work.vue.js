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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const proj1_jpg_1 = __importDefault(require("../assets/proj1.jpg"));
const proj2_jpg_1 = __importDefault(require("../assets/proj2.jpg"));
const drini_jpg_1 = __importDefault(require("../assets/drini.jpg"));
const proj3_jpg_1 = __importDefault(require("../assets/proj3.jpg"));
exports.default = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({
    name: "TheWork",
    components: {},
    data() {
        return {
            proj1: proj1_jpg_1.default,
            proj2: proj2_jpg_1.default,
            proj3: drini_jpg_1.default,
            proj4: proj3_jpg_1.default,
        };
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = Object.assign(Object.assign(Object.assign({}, {}), {}), __VLS_ctx);
    let __VLS_components;
    const __VLS_localDirectives = Object.assign(Object.assign({}, {}), __VLS_ctx);
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("py-6 max-w-[1200px] mx-auto") }, { id: ("work") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("mx-auto px-4 md:px-8") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("mb-4 flex items-center justify-between") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("flex flex-col gap-4") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(Object.assign({ class: ("text-2xl lg:text-3xl text-white") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(Object.assign({ class: ("text-gray-500") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("grid gap-3 md:grid-cols-3 sm:grid-cols-1 md:gap-6 xl:gap-8") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(Object.assign({ href: ("/") }, { class: ("group h-48 overflow-hidden rounded-lg shadow-lg md:h-80") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(Object.assign({ src: ((__VLS_ctx.proj2)), alt: ("") }, { class: ("h-full w-full object-cover object-center transition duration-200 group-hover:scale-110") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(Object.assign({ href: ("/") }, { class: ("group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(Object.assign({ src: ((__VLS_ctx.proj3)), alt: ("") }, { class: ("h-full w-full object-cover object-center transition duration-200 group-hover:scale-110") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(Object.assign({ href: ("/") }, { class: ("group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(Object.assign({ src: ((__VLS_ctx.proj1)), alt: ("") }, { class: ("h-full w-full object-cover object-center transition duration-200 group-hover:scale-110") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(Object.assign({ href: ("/") }, { class: ("group h-48 overflow-hidden rounded-lg shadow-lg md:h-80") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(Object.assign({ src: ((__VLS_ctx.proj4)), alt: ("") }, { class: ("h-full w-full object-cover object-center transition duration-200 group-hover:scale-110") }));
    __VLS_styleScopedClasses['py-6'];
    __VLS_styleScopedClasses['max-w-[1200px]'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['md:px-8'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['gap-4'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['lg:text-3xl'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['gap-3'];
    __VLS_styleScopedClasses['md:grid-cols-3'];
    __VLS_styleScopedClasses['sm:grid-cols-1'];
    __VLS_styleScopedClasses['md:gap-6'];
    __VLS_styleScopedClasses['xl:gap-8'];
    __VLS_styleScopedClasses['group'];
    __VLS_styleScopedClasses['h-48'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['shadow-lg'];
    __VLS_styleScopedClasses['md:h-80'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['object-cover'];
    __VLS_styleScopedClasses['object-center'];
    __VLS_styleScopedClasses['transition'];
    __VLS_styleScopedClasses['duration-200'];
    __VLS_styleScopedClasses['group-hover:scale-110'];
    __VLS_styleScopedClasses['group'];
    __VLS_styleScopedClasses['h-48'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['shadow-lg'];
    __VLS_styleScopedClasses['md:col-span-2'];
    __VLS_styleScopedClasses['md:h-80'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['object-cover'];
    __VLS_styleScopedClasses['object-center'];
    __VLS_styleScopedClasses['transition'];
    __VLS_styleScopedClasses['duration-200'];
    __VLS_styleScopedClasses['group-hover:scale-110'];
    __VLS_styleScopedClasses['group'];
    __VLS_styleScopedClasses['h-48'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['shadow-lg'];
    __VLS_styleScopedClasses['md:col-span-2'];
    __VLS_styleScopedClasses['md:h-80'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['object-cover'];
    __VLS_styleScopedClasses['object-center'];
    __VLS_styleScopedClasses['transition'];
    __VLS_styleScopedClasses['duration-200'];
    __VLS_styleScopedClasses['group-hover:scale-110'];
    __VLS_styleScopedClasses['group'];
    __VLS_styleScopedClasses['h-48'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['shadow-lg'];
    __VLS_styleScopedClasses['md:h-80'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['object-cover'];
    __VLS_styleScopedClasses['object-center'];
    __VLS_styleScopedClasses['transition'];
    __VLS_styleScopedClasses['duration-200'];
    __VLS_styleScopedClasses['group-hover:scale-110'];
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
let __VLS_self;
