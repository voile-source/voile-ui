import { computed, unref, defineComponent, openBlock, createElementBlock, createElementVNode, normalizeClass, normalizeStyle, renderSlot, createCommentVNode, provide, inject, getCurrentInstance, toRefs, toDisplayString, createVNode, withCtx, createTextVNode, useSlots } from "vue";
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
  const namespace = computed(() => defaultNamespace);
  const b = (blockSuffix = "") => _bem(unref(namespace), block, blockSuffix, "", "");
  const e = (element) => element ? _bem(unref(namespace), block, "", element, "") : "";
  const m = (modifier) => modifier ? _bem(unref(namespace), block, "", "", modifier) : "";
  const be = (blockSuffix, element) => blockSuffix && element ? _bem(unref(namespace), block, blockSuffix, element, "") : "";
  const em = (element, modifier) => element && modifier ? _bem(unref(namespace), block, "", element, modifier) : "";
  const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(unref(namespace), block, blockSuffix, "", modifier) : "";
  const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(unref(namespace), block, blockSuffix, element, modifier) : "";
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
const __default__$a = defineComponent({
  name: "VIcon"
});
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  ...__default__$a,
  props: iconProps,
  setup(__props) {
    const props = __props;
    const bem = useNamespace("icon");
    const style = computed(() => {
      if (!props.size && !props.color)
        return {};
      return {
        fontSize: isUndefined(props.size) ? void 0 : addUnit(props.size),
        "--color": props.color
        // 通过 CSS 变量方式进行设置 color
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createElementVNode("i", {
          class: normalizeClass(unref(bem).b()),
          style: normalizeStyle(unref(style))
        }, [
          renderSlot(_ctx.$slots, "default")
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
const __default__$9 = defineComponent({
  name: "VDivider"
});
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...__default__$9,
  props: dividerProps,
  setup(__props) {
    const props = __props;
    const bem = useNamespace("divider");
    const style = computed(() => {
      return {
        "--border-style": isUndefined(props.borderStyle) ? "solid" : props.borderStyle
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(bem).b(), unref(bem).m(props.direction)]),
        style: normalizeStyle(unref(style))
      }, [
        _ctx.$slots.default && props.direction !== "vertical" ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([unref(bem).e("text"), unref(bem).is(props.contentPosition)])
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)) : createCommentVNode("", true)
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
const __default__$8 = defineComponent({
  name: "VBreadcrumb"
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  ...__default__$8,
  props: breadcrumbProps,
  setup(__props) {
    const props = __props;
    const bem = useNamespace("breadcrumb");
    provide(breadcrumbKey, props);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref: "breadcrumb",
        class: normalizeClass(unref(bem).b())
      }, [
        renderSlot(_ctx.$slots, "default")
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
const __default__$7 = defineComponent({
  name: "VBreadcrumbItem"
});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...__default__$7,
  props: breadcrumbItemProps,
  setup(__props) {
    const props = __props;
    const bem = useNamespace("breadcrumb");
    const breadcrumbContext = inject(breadcrumbKey, void 0);
    const instance = getCurrentInstance();
    const { separator } = toRefs(breadcrumbContext);
    const router = instance.appContext.config.globalProperties.$router;
    const onClick = () => {
      if (props.to === void 0 || props.to === "")
        return;
      props.replace ? router.replace(props.to) : router.push(props.to);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(bem).e("item"))
      }, [
        createElementVNode("span", {
          class: normalizeClass([unref(bem).e("inner"), unref(bem).is("link", !!props.to)]),
          onClick
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2),
        createElementVNode("span", {
          class: normalizeClass(unref(bem).e("separator"))
        }, toDisplayString(unref(separator)), 3)
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
const __default__$6 = defineComponent({
  name: "VButton"
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(classList)
      }, [
        props.icon !== "" ? (openBlock(), createElementBlock("i", _hoisted_1, [
          createVNode(unref(VIcon), null, {
            default: withCtx(() => [
              createTextVNode("!")
            ]),
            _: 1
          })
        ])) : (openBlock(), createElementBlock("span", _hoisted_2, [
          renderSlot(_ctx.$slots, "default")
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
const __default__$5 = defineComponent({
  name: "VLink"
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createElementBlock("a", {
        class: normalizeClass(classList)
      }, [
        createElementVNode("span", {
          class: normalizeClass(unref(nc).e("inner"))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)
      ]);
    };
  }
});
const VLink = withInstall(_sfc_main$5);
const __default__$4 = defineComponent({
  name: "VAside"
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  props: {
    width: String
  },
  setup(__props) {
    const props = __props;
    const ns = useNamespace("aside");
    const style = computed(() => {
      return props.width ? ns.cssVarBlock({
        width: props.width
      }) : {};
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(ns).b()),
        style: normalizeStyle(unref(style))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
});
const __default__$3 = defineComponent({
  name: "VContainer"
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  props: {
    direction: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const ns = useNamespace("container");
    const isVertical = computed(() => {
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
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns).b(), unref(ns).is("vertical", unref(isVertical))])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const __default__$2 = defineComponent({
  name: "VMain"
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  setup(__props) {
    const ns = useNamespace("main");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(ns).b())
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const __default__$1 = defineComponent({
  name: "VHeader"
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: {
    height: String
  },
  setup(__props) {
    const props = __props;
    const ns = useNamespace("header");
    const style = computed(() => {
      return props.height ? ns.cssVarBlock({
        height: props.height
      }) : {};
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(ns).b()),
        style: normalizeStyle(unref(style))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
});
const __default__ = defineComponent({
  name: "VFooter"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    height: String
  },
  setup(__props) {
    const props = __props;
    const ns = useNamespace("footer");
    const style = computed(() => {
      return props.height ? ns.cssVarBlock({
        height: props.height
      }) : {};
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(ns).b()),
        style: normalizeStyle(unref(style))
      }, [
        renderSlot(_ctx.$slots, "default")
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
export {
  VBreadcrumb as Breadcrumb,
  VButton as Button,
  VContainer as Container,
  VDivider as Divider,
  VIcon as Icon,
  VLink as Link,
  index as default
};
