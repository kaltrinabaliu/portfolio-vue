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
const profileImage_png_1 = __importDefault(require("../assets/profileImage.png"));
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await Promise.resolve().then(() => __importStar(require('vue')));
const text = ["Software Engineer"];
; /* PartiallyEnd: #3632/scriptSetup.vue */
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("flex flex-col-reverse md:flex-row justify-center items-center lg:justify-between") }, { id: ("home") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("flex-col my-auto mx-auto md:mx-0") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(Object.assign({ class: ("md:text-3xl xl:text-5xl text-xl font-bold text-gray-200") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(Object.assign({ class: ("md:text-3xl xl:text-5xl text-xl font-bold text-gray-200") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)(Object.assign({ class: ("md:text-3xl xl:text-5xl text-xl font-bold md:py-6") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.text[0]);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("relative inline-flex group my-3") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF675E] to-[#FF676E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(Object.assign({ href: ("/CV.pdf"), download: ("/CV.pdf"), title: ("Download CV"), role: ("button") }, { class: ("w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("flex justify-center items-center my-auto") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(Object.assign({ class: ("w-[500px] md:w-[500px] xl:w-[800px]") }, { src: ((__VLS_ctx.profilepic)), alt: ("profile pic") }));
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col-reverse'];
    __VLS_styleScopedClasses['md:flex-row'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['lg:justify-between'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['my-auto'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['md:mx-0'];
    __VLS_styleScopedClasses['md:text-3xl'];
    __VLS_styleScopedClasses['xl:text-5xl'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-gray-200'];
    __VLS_styleScopedClasses['md:text-3xl'];
    __VLS_styleScopedClasses['xl:text-5xl'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-gray-200'];
    __VLS_styleScopedClasses['md:text-3xl'];
    __VLS_styleScopedClasses['xl:text-5xl'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['md:py-6'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['inline-flex'];
    __VLS_styleScopedClasses['group'];
    __VLS_styleScopedClasses['my-3'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-1000'];
    __VLS_styleScopedClasses['opacity-70'];
    __VLS_styleScopedClasses['-inset-px'];
    __VLS_styleScopedClasses['bg-gradient-to-r'];
    __VLS_styleScopedClasses['from-[#44BCFF]'];
    __VLS_styleScopedClasses['via-[#FF675E]'];
    __VLS_styleScopedClasses['to-[#FF676E]'];
    __VLS_styleScopedClasses['rounded-xl'];
    __VLS_styleScopedClasses['blur-lg'];
    __VLS_styleScopedClasses['group-hover:opacity-100'];
    __VLS_styleScopedClasses['group-hover:-inset-1'];
    __VLS_styleScopedClasses['group-hover:duration-200'];
    __VLS_styleScopedClasses['w-[190px]'];
    __VLS_styleScopedClasses['h-[60px]'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['inline-flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['px-8'];
    __VLS_styleScopedClasses['py-4'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-200'];
    __VLS_styleScopedClasses['bg-primary-color'];
    __VLS_styleScopedClasses['rounded-xl'];
    __VLS_styleScopedClasses['focus:outline-none'];
    __VLS_styleScopedClasses['focus:ring-2'];
    __VLS_styleScopedClasses['focus:ring-purple-300'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['my-auto'];
    __VLS_styleScopedClasses['w-[500px]'];
    __VLS_styleScopedClasses['md:w-[500px]'];
    __VLS_styleScopedClasses['xl:w-[800px]'];
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
            profilepic: profileImage_png_1.default,
            text: text,
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
