import { c as create_ssr_component, d as each, e as escape } from './ssr-COp305H0.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<ul>${each(data.countries, (country) => {
    return `<li>${escape(country.name)}</li>`;
  })}</ul>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Cxvkg6IT.js.map
