var script = {
  name: 'Error',
  props: {
    errors: Object,
    name: String,
    classes: String || null,
    limit: Number || null
  },

  data() {
    return {
      visible: false,
      messages: []
    };
  },

  watch: {
    /**
     * Update the error list.
     *
     * @param {Object} first
     * @return {void}
     */
    errors(first) {
      this.setErrors(first);
    }

  },

  mounted() {
    /** set error list. */
    this.setErrors(this.errors);
  },

  methods: {
    /**
     * Set error list.
     *
     * @param {Object} list
     * @returns {void}
     */
    setErrors(list) {
      this.messages = list[this.name];
      this.visible = this.messages && this.messages.length > 0;
    }

  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.visible ? _c('div', {
    class: _vm.classes
  }, _vm._l(_vm.messages.slice(0, _vm.limit), function (message, key) {
    return _c('p', {
      key: key
    }, [_vm._v(_vm._s(message))]);
  }), 0) : _vm._e();
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = undefined;
/* scoped */

const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

/* eslint-disable import/prefer-default-export */

/**
 * Get error messages from response.
 *
 * @param {Object} response
 * @return {Object}
 */
const getErrors = response => {
  var _response$response, _response$response$da;

  /** get errors from response. */
  if ((response === null || response === void 0 ? void 0 : (_response$response = response.response) === null || _response$response === void 0 ? void 0 : (_response$response$da = _response$response.data) === null || _response$response$da === void 0 ? void 0 : _response$response$da.errors) !== undefined) {
    return response.response.data.errors;
  }
  /** get errors from custom object / array. */


  if ((response === null || response === void 0 ? void 0 : response.errors) !== undefined) {
    return response.errors;
  }

  return {};
};

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getErrors: getErrors,
  Error: __vue_component__
});

// Import vue components

const install = function installTestComponent(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()


const plugin = {
  install
}; // To auto-install on non-es builds, when vue is found

export default plugin;
export { __vue_component__ as Error, getErrors };
