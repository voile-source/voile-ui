var VOILEUI = function(exports, vue) {
  "use strict";
  process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
  process.env.NODE_ENV !== "production" ? Object.freeze([]) : [];
  const NOOP = () => {
  };
  const isString = (val) => typeof val === "string";
  const withInstall = (main, extra) => {
    main.install = (app) => {
      for (const comp of [main, ...Object.values(extra ?? {})]) {
        app.component(comp.name, comp);
      }
    };
    if (extra) {
      for (const [key, comp] of Object.entries(extra)) {
        main[key] = comp;
      }
    }
    return main;
  };
  const withNoopInstall = (component) => {
    component.install = NOOP;
    return component;
  };
  var _a;
  const isClient = typeof window !== "undefined";
  const isNumber = (val) => typeof val === "number";
  isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
  const isUndefined = (val) => val === void 0;
  function addUnit(value, defaultUnit = "px") {
    if (!value)
      return "";
    if (isString(value)) {
      return value;
    } else if (isNumber(value)) {
      return `${value}${defaultUnit}`;
    }
  }
  const iconProps = {
    color: String,
    size: [Number, String]
  };
  const defaultNamespace = "vl";
  const statePrefix = "is-";
  const _bem = (namespace, block, blockSuffix, element, modifier) => {
    let cls = `${namespace}-${block}`;
    if (blockSuffix) {
      cls += `-${blockSuffix}`;
    }
    if (element) {
      cls += `__${element}`;
    }
    if (modifier) {
      cls += `--${modifier}`;
    }
    return cls;
  };
  const useNamespace = (block) => {
    const namespace = vue.computed(() => defaultNamespace);
    const b = (blockSuffix = "") => _bem(vue.unref(namespace), block, blockSuffix, "", "");
    const e = (element) => element ? _bem(vue.unref(namespace), block, "", element, "") : "";
    const m = (modifier) => modifier ? _bem(vue.unref(namespace), block, "", "", modifier) : "";
    const be = (blockSuffix, element) => blockSuffix && element ? _bem(vue.unref(namespace), block, blockSuffix, element, "") : "";
    const em = (element, modifier) => element && modifier ? _bem(vue.unref(namespace), block, "", element, modifier) : "";
    const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(vue.unref(namespace), block, blockSuffix, "", modifier) : "";
    const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(vue.unref(namespace), block, blockSuffix, element, modifier) : "";
    const is = (name, ...args) => {
      const state = args.length >= 1 ? args[0] : true;
      return name && state ? `${statePrefix}${name}` : "";
    };
    const cssVar = (object) => {
      const styles = {};
      for (const key in object) {
        if (object[key]) {
          styles[`--${namespace.value}-${key}`] = object[key];
        }
      }
      return styles;
    };
    const cssVarBlock = (object) => {
      const styles = {};
      for (const key in object) {
        if (object[key]) {
          styles[`--${namespace.value}-${block}-${key}`] = object[key];
        }
      }
      return styles;
    };
    const cssVarName = (name) => `--${namespace.value}-${name}`;
    const cssVarBlockName = (name) => `--${namespace.value}-${block}-${name}`;
    return {
      namespace,
      b,
      e,
      m,
      be,
      em,
      bm,
      bem,
      is,
      // css
      cssVar,
      cssVarName,
      cssVarBlock,
      cssVarBlockName
    };
  };
  const booleanType = {
    type: Boolean,
    values: [true, false],
    default: false
  };
  const stateType = {
    type: String,
    values: ["primary", "success", "warning", "danger", "info"],
    default: ""
  };
  const _hoisted_1$1 = { class: "content" };
  const __default__$a = vue.defineComponent({
    name: "VIcon"
  });
  const _sfc_main$a = /* @__PURE__ */ vue.defineComponent({
    ...__default__$a,
    props: iconProps,
    setup(__props) {
      const props = __props;
      const bem = useNamespace("icon");
      const style = vue.computed(() => {
        if (!props.size && !props.color)
          return {};
        return {
          fontSize: isUndefined(props.size) ? void 0 : addUnit(props.size),
          "--color": props.color
          // 通过 CSS 变量方式进行设置 color
        };
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
          vue.createElementVNode("i", {
            class: vue.normalizeClass(vue.unref(bem).b()),
            style: vue.normalizeStyle(vue.unref(style))
          }, [
            vue.renderSlot(_ctx.$slots, "default")
          ], 6)
        ]);
      };
    }
  });
  const VIcon = withInstall(_sfc_main$a);
  const dividerProps = {
    direction: {
      type: String,
      values: ["horizontal", "vertical"],
      default: "horizontal"
    },
    contentPosition: {
      type: String,
      values: ["center", "left", "right"],
      default: "center"
    },
    borderStyle: {
      type: String,
      values: ["solid", "dotted", "dashed", "double", "groove", "ridge", "inset", "outset"],
      default: "solid"
    }
  };
  const __default__$9 = vue.defineComponent({
    name: "VDivider"
  });
  const _sfc_main$9 = /* @__PURE__ */ vue.defineComponent({
    ...__default__$9,
    props: dividerProps,
    setup(__props) {
      const props = __props;
      const bem = useNamespace("divider");
      const style = vue.computed(() => {
        return {
          "--border-style": isUndefined(props.borderStyle) ? "solid" : props.borderStyle
        };
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass([vue.unref(bem).b(), vue.unref(bem).m(props.direction)]),
          style: vue.normalizeStyle(vue.unref(style))
        }, [
          _ctx.$slots.default && props.direction !== "vertical" ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 0,
            class: vue.normalizeClass([vue.unref(bem).e("text"), vue.unref(bem).is(props.contentPosition)])
          }, [
            vue.renderSlot(_ctx.$slots, "default")
          ], 2)) : vue.createCommentVNode("", true)
        ], 6);
      };
    }
  });
  const VDivider = withInstall(_sfc_main$9);
  const breadcrumbProps = {
    separator: {
      type: String,
      default: "/"
    }
  };
  const breadcrumbKey = Symbol("breadcrumbKey");
  const __default__$8 = vue.defineComponent({
    name: "VBreadcrumb"
  });
  const _sfc_main$8 = /* @__PURE__ */ vue.defineComponent({
    ...__default__$8,
    props: breadcrumbProps,
    setup(__props) {
      const props = __props;
      const bem = useNamespace("breadcrumb");
      vue.provide(breadcrumbKey, props);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          ref: "breadcrumb",
          class: vue.normalizeClass(vue.unref(bem).b())
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2);
      };
    }
  });
  const breadcrumbItemProps = {
    to: {
      type: String,
      default: ""
    },
    replace: {
      type: Boolean,
      values: [true, false],
      default: false
    }
  };
  const __default__$7 = vue.defineComponent({
    name: "VBreadcrumbItem"
  });
  const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
    ...__default__$7,
    props: breadcrumbItemProps,
    setup(__props) {
      const props = __props;
      const bem = useNamespace("breadcrumb");
      const breadcrumbContext = vue.inject(breadcrumbKey, void 0);
      const instance = vue.getCurrentInstance();
      const { separator } = vue.toRefs(breadcrumbContext);
      const router = instance.appContext.config.globalProperties.$router;
      const onClick = () => {
        if (props.to === void 0 || props.to === "")
          return;
        props.replace ? router.replace(props.to) : router.push(props.to);
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("span", {
          class: vue.normalizeClass(vue.unref(bem).e("item"))
        }, [
          vue.createElementVNode("span", {
            class: vue.normalizeClass([vue.unref(bem).e("inner"), vue.unref(bem).is("link", !!props.to)]),
            onClick
          }, [
            vue.renderSlot(_ctx.$slots, "default")
          ], 2),
          vue.createElementVNode("span", {
            class: vue.normalizeClass(vue.unref(bem).e("separator"))
          }, vue.toDisplayString(vue.unref(separator)), 3)
        ], 2);
      };
    }
  });
  const VBreadcrumb = withInstall(_sfc_main$8, {
    BreadcrumbItem: _sfc_main$7
  });
  withNoopInstall(_sfc_main$7);
  const buttonProps = {
    size: {
      type: String,
      values: ["small", "default", "large"],
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    type: stateType,
    bg: booleanType,
    link: booleanType,
    text: booleanType,
    plain: booleanType,
    loading: booleanType,
    round: booleanType,
    circle: booleanType,
    disabled: booleanType,
    autofocus: booleanType
  };
  const _hoisted_1 = { key: 0 };
  const _hoisted_2 = { key: 1 };
  const __default__$6 = vue.defineComponent({
    name: "VButton"
  });
  const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
    ...__default__$6,
    props: buttonProps,
    setup(__props) {
      const props = __props;
      const nc = useNamespace("button");
      const classList = [
        nc.b(),
        props.type === "" ? "" : nc.m(props.type),
        props.size === "" || props.size === "default" ? "" : nc.m(props.size),
        nc.is("bg", props.bg),
        nc.is("plain", props.plain),
        nc.is("text", props.text),
        nc.is("link", props.link),
        nc.is("round", props.round),
        nc.is("circle", props.circle || props.icon !== ""),
        nc.is("loading", props.loading),
        nc.is("disabled", props.disabled)
      ];
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("button", {
          class: vue.normalizeClass(classList)
        }, [
          props.icon !== "" ? (vue.openBlock(), vue.createElementBlock("i", _hoisted_1, [
            vue.createVNode(vue.unref(VIcon), null, {
              default: vue.withCtx(() => [
                vue.createTextVNode("!")
              ]),
              _: 1
            })
          ])) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_2, [
            vue.renderSlot(_ctx.$slots, "default")
          ]))
        ]);
      };
    }
  });
  const VButton = withInstall(_sfc_main$6);
  const linkProps = {
    type: stateType,
    underline: booleanType,
    disabled: booleanType
  };
  const __default__$5 = vue.defineComponent({
    name: "VLink"
  });
  const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
    ...__default__$5,
    props: linkProps,
    setup(__props) {
      const props = __props;
      const nc = useNamespace("link");
      const classList = [
        nc.b(),
        props.type === "" ? "" : nc.e(props.type),
        nc.is("underline", props.underline),
        nc.is("disabled", props.disabled)
      ];
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("a", {
          class: vue.normalizeClass(classList)
        }, [
          vue.createElementVNode("span", {
            class: vue.normalizeClass(vue.unref(nc).e("inner"))
          }, [
            vue.renderSlot(_ctx.$slots, "default")
          ], 2)
        ]);
      };
    }
  });
  const VLink = withInstall(_sfc_main$5);
  const __default__$4 = vue.defineComponent({
    name: "VAside"
  });
  const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
    ...__default__$4,
    props: {
      width: String
    },
    setup(__props) {
      const props = __props;
      const ns = useNamespace("aside");
      const style = vue.computed(() => {
        return props.width ? ns.cssVarBlock({
          width: props.width
        }) : {};
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass(vue.unref(ns).b()),
          style: vue.normalizeStyle(vue.unref(style))
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 6);
      };
    }
  });
  const __default__$3 = vue.defineComponent({
    name: "VContainer"
  });
  const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
    ...__default__$3,
    props: {
      direction: {
        type: String
      }
    },
    setup(__props) {
      const props = __props;
      const slots = vue.useSlots();
      const ns = useNamespace("container");
      const isVertical = vue.computed(() => {
        if (props.direction === "vertical") {
          return true;
        } else if (props.direction === "horizontal") {
          return false;
        }
        if (slots && slots.default) {
          const vNode = slots.default();
          return vNode.some((vNode2) => {
            const tag = vNode2.type.name;
            return tag === "VHeader" || tag === "VFooter";
          });
        }
        return false;
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass([vue.unref(ns).b(), vue.unref(ns).is("vertical", vue.unref(isVertical))])
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2);
      };
    }
  });
  const __default__$2 = vue.defineComponent({
    name: "VMain"
  });
  const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
    ...__default__$2,
    setup(__props) {
      const ns = useNamespace("main");
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass(vue.unref(ns).b())
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2);
      };
    }
  });
  const __default__$1 = vue.defineComponent({
    name: "VHeader"
  });
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    ...__default__$1,
    props: {
      height: String
    },
    setup(__props) {
      const props = __props;
      const ns = useNamespace("header");
      const style = vue.computed(() => {
        return props.height ? ns.cssVarBlock({
          height: props.height
        }) : {};
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass(vue.unref(ns).b()),
          style: vue.normalizeStyle(vue.unref(style))
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 6);
      };
    }
  });
  const __default__ = vue.defineComponent({
    name: "VFooter"
  });
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    ...__default__,
    props: {
      height: String
    },
    setup(__props) {
      const props = __props;
      const ns = useNamespace("footer");
      const style = vue.computed(() => {
        return props.height ? ns.cssVarBlock({
          height: props.height
        }) : {};
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass(vue.unref(ns).b()),
          style: vue.normalizeStyle(vue.unref(style))
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 6);
      };
    }
  });
  const VContainer = withInstall(_sfc_main$3, {
    Aside: _sfc_main$4,
    Main: _sfc_main$2,
    Header: _sfc_main$1,
    Footer: _sfc_main
  });
  withNoopInstall(_sfc_main$4);
  withNoopInstall(_sfc_main$2);
  withNoopInstall(_sfc_main$1);
  withNoopInstall(_sfc_main);
  const components = [VIcon, VButton, VDivider, VBreadcrumb, VLink, VContainer];
  const INSTALLED_KEY = Symbol("INSTALLED_KEY");
  const index = {
    install(app) {
      if (app[INSTALLED_KEY])
        return;
      app[INSTALLED_KEY] = true;
      components.forEach((c) => app.use(c));
    }
  };
  exports.Breadcrumb = VBreadcrumb;
  exports.Button = VButton;
  exports.Container = VContainer;
  exports.Divider = VDivider;
  exports.Icon = VIcon;
  exports.Link = VLink;
  exports.default = index;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
  return exports;
}({}, Vue);
