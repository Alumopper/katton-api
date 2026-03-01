import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Events","description":"","frontmatter":{},"headers":[],"relativePath":"quickstart/event.md","filePath":"quickstart/event.md"}');
const _sfc_main = { name: "quickstart/event.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h1><p>In Katton, events are a powerful way to react to various actions and changes in the game. They allow you to execute custom code when specific events occur, such as player interactions, world changes, or entity updates.</p><p>To listen to an event, you can use the <code>KattonEvents</code> API. You can find all available events in the <a href="./../kdoc/kts4mc-template-1.21.11/top.katton.api.event/-katton-events/index.html">API documentation</a>. Each event has its own set of arguments that provide information about the event and allow you to interact with it.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("quickstart/event.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const event = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  event as default
};
