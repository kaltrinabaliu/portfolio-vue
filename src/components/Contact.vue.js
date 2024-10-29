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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({
    name: "TheContact",
    data() {
        return {
            formData: {
                name: '',
                email: '',
                message: ''
            }
        };
    },
    methods: {
        handleSubmit() {
            return __awaiter(this, void 0, void 0, function* () {
                // No need for additional fetch logic; the form will automatically submit to Formspree.
                console.log("Form submitted!");
            });
        }
    }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("flex justify-center my-5 h-full sm:h-[70vh] items-center bg-[#232325]") }, { id: ('contact') }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("max-w-[1200px] mx-auto my-10") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("grid grid-cols-1 md:grid-cols-2") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("p-6 mr-2 bg-gray-800 rounded-xl flex flex-col justify-around") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)(Object.assign({ class: ("text-4xl sm:text-5xl text-white") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(Object.assign({ class: ("text-lg text-gray-400 mt-2") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("flex items-center mt-2 text-gray-400") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ('text-2xl') }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ stroke: ("currentColor"), fill: ("currentColor"), "stroke-width": ("0"), viewBox: ("0 0 32 32"), height: ("1em"), width: ("1em"), xmlns: ("http://www.w3.org/2000/svg"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({ d: ("M 3 8 L 3 26 L 29 26 L 29 8 Z M 7.3125 10 L 24.6875 10 L 16 15.78125 Z M 5 10.875 L 15.4375 17.84375 L 16 18.1875 L 16.5625 17.84375 L 27 10.875 L 27 24 L 5 24 Z"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("ml-4 text-md tracking-wide font-semibold w-40") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)(Object.assign({ class: ("p-6 flex flex-col justify-center max-w-[700px]") }, { action: ("https://formspree.io/f/mjkvggdj"), method: ("POST") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("flex flex-col") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)(Object.assign(Object.assign({ type: ("text"), name: ("name"), placeholder: ('Full Name') }, { class: ("w-100 mt-2 p-3 rounded-lg bg-gray-800 border-gray-700 text-white focus:border-blue-800 focus:ring-blue-900") }), { required: (true) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("flex flex-col") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)(Object.assign(Object.assign({ type: ("email"), name: ("email"), placeholder: ('Email') }, { class: ("w-100 mt-2 p-3 rounded-lg bg-gray-800 border-gray-700 text-white focus:border-blue-800 focus:ring-blue-900") }), { required: (true) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("flex flex-col") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)(Object.assign(Object.assign({ name: ("message"), placeholder: ('Your Message') }, { class: ("w-100 mt-2 p-3 rounded-lg bg-gray-800 border-gray-700 text-white focus:border-blue-800 focus:ring-blue-900") }), { required: (true) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(Object.assign({ type: ('submit') }, { class: ("bg-purple-700 hover:bg-purple-800 active:bg-purple-900 text-white py-3 rounded-lg mt-3 focus:outline-none focus:ring-2 focus:ring-purple-300") }));
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['my-5'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['sm:h-[70vh]'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['bg-[#232325]'];
    __VLS_styleScopedClasses['max-w-[1200px]'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['my-10'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-1'];
    __VLS_styleScopedClasses['md:grid-cols-2'];
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['mr-2'];
    __VLS_styleScopedClasses['bg-gray-800'];
    __VLS_styleScopedClasses['rounded-xl'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['justify-around'];
    __VLS_styleScopedClasses['text-4xl'];
    __VLS_styleScopedClasses['sm:text-5xl'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['text-gray-400'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['text-gray-400'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['text-md'];
    __VLS_styleScopedClasses['tracking-wide'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['w-40'];
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['max-w-[700px]'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['w-100'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['p-3'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['bg-gray-800'];
    __VLS_styleScopedClasses['border-gray-700'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['focus:border-blue-800'];
    __VLS_styleScopedClasses['focus:ring-blue-900'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['w-100'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['p-3'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['bg-gray-800'];
    __VLS_styleScopedClasses['border-gray-700'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['focus:border-blue-800'];
    __VLS_styleScopedClasses['focus:ring-blue-900'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['w-100'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['p-3'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['bg-gray-800'];
    __VLS_styleScopedClasses['border-gray-700'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['focus:border-blue-800'];
    __VLS_styleScopedClasses['focus:ring-blue-900'];
    __VLS_styleScopedClasses['bg-purple-700'];
    __VLS_styleScopedClasses['hover:bg-purple-800'];
    __VLS_styleScopedClasses['active:bg-purple-900'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['py-3'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['mt-3'];
    __VLS_styleScopedClasses['focus:outline-none'];
    __VLS_styleScopedClasses['focus:ring-2'];
    __VLS_styleScopedClasses['focus:ring-purple-300'];
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
