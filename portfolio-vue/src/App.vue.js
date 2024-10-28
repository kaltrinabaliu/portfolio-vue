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
const About_vue_1 = __importDefault(require("./components/About.vue"));
const Contact_vue_1 = __importDefault(require("./components/Contact.vue"));
const Experience_vue_1 = __importDefault(require("./components/Experience.vue"));
const Footer_vue_1 = __importDefault(require("./components/Footer.vue"));
const HeroSection_vue_1 = __importDefault(require("./components/HeroSection.vue"));
const Work_vue_1 = __importDefault(require("./components/Work.vue"));
const NavBar_vue_1 = __importDefault(require("./components/NavBar.vue"));
const MyEducation_vue_1 = __importDefault(require("./components/MyEducation.vue"));
exports.default = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({
    name: "App",
    components: {
        NavBar: NavBar_vue_1.default,
        HeroSection: HeroSection_vue_1.default,
        About: About_vue_1.default,
        Work: Work_vue_1.default,
        Experience: Experience_vue_1.default,
        MyEducation: MyEducation_vue_1.default,
        ContactForm: Contact_vue_1.default,
        Footer: Footer_vue_1.default
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = Object.assign(Object.assign(Object.assign({
        NavBar: NavBar_vue_1.default,
        HeroSection: HeroSection_vue_1.default,
        About: About_vue_1.default,
        Work: Work_vue_1.default,
        Experience: Experience_vue_1.default,
        MyEducation: MyEducation_vue_1.default,
        ContactForm: Contact_vue_1.default,
        Footer: Footer_vue_1.default
    }, {}), {}), __VLS_ctx);
    let __VLS_components;
    const __VLS_localDirectives = Object.assign(Object.assign({}, {}), __VLS_ctx);
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.NavBar;
    /** @type { [typeof __VLS_components.NavBar, typeof __VLS_components.NavBar, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.HeroSection;
    /** @type { [typeof __VLS_components.HeroSection, typeof __VLS_components.HeroSection, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.About;
    /** @type { [typeof __VLS_components.About, typeof __VLS_components.About, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
    const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.Work;
    /** @type { [typeof __VLS_components.Work, typeof __VLS_components.Work, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
    const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.Experience;
    /** @type { [typeof __VLS_components.Experience, typeof __VLS_components.Experience, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
    const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.MyEducation;
    /** @type { [typeof __VLS_components.MyEducation, typeof __VLS_components.MyEducation, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({}));
    const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
    const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.ContactForm;
    /** @type { [typeof __VLS_components.ContactForm, typeof __VLS_components.ContactForm, ] } */
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({}));
    const __VLS_38 = __VLS_37({}, ...__VLS_functionalComponentArgsRest(__VLS_37));
    const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.Footer;
    /** @type { [typeof __VLS_components.Footer, typeof __VLS_components.Footer, ] } */
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({}));
    const __VLS_44 = __VLS_43({}, ...__VLS_functionalComponentArgsRest(__VLS_43));
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
