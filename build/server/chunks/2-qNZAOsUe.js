import { r as redirect } from './index-BcOZ6EV9.js';
import './utils-FiC4zhrQ.js';

const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const username = data.get("username");
    const password = data.get("password");
    if (username && password) {
      throw redirect(303, "/dashboard");
    }
    return {
      error: "Invalid credentials"
    };
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C2XpXwNI.js')).default;
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/nodes/2.lSOphCWY.js","_app/immutable/chunks/DCFGUy-H.js","_app/immutable/chunks/FDJVdg6N.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-qNZAOsUe.js.map
