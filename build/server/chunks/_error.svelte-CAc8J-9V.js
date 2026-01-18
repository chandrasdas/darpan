import { a5 as store_get, a6 as escape_html, a7 as unsubscribe_stores, a1 as noop, a8 as getContext } from './index-CIMY7M77.js';
import './exports-BXvEiaiv.js';

const is_legacy = noop.toString().includes("$$") || /function \w+\(\) \{\}/.test(noop.toString());
if (is_legacy) {
  ({
    url: new URL("https://example.com")
  });
}
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function _error($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    $$renderer2.push(`<div class="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center p-4"><div class="max-w-2xl w-full">`);
    if (store_get($$store_subs ??= {}, "$page", page).status === 404) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="bg-white rounded-lg shadow-xl p-8"><div class="text-center mb-6"><h1 class="text-6xl font-bold text-red-600 mb-2">404</h1> <h2 class="text-2xl font-semibold text-gray-800">Page Not Found</h2></div> <p class="text-gray-600 text-center mb-6">The page you're looking for doesn't exist.</p> <div class="flex justify-center gap-4"><a href="/" class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Go Home</a></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="bg-white rounded-lg shadow-xl p-8 border-l-4 border-red-600"><div class="mb-6"><h1 class="text-3xl font-bold text-red-600 mb-2">Error</h1> <p class="text-gray-600">Status: ${escape_html(store_get($$store_subs ??= {}, "$page", page).status || 500)}</p></div> `);
      if (store_get($$store_subs ??= {}, "$page", page).error?.message) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="mb-6"><h2 class="text-xl font-semibold text-gray-800 mb-2">Message:</h2> <p class="text-lg text-red-700 font-mono bg-red-50 p-4 rounded border border-red-200">${escape_html(store_get($$store_subs ??= {}, "$page", page).error.message)}</p></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (store_get($$store_subs ??= {}, "$page", page).error && "details" in store_get($$store_subs ??= {}, "$page", page).error) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="mb-6"><h2 class="text-xl font-semibold text-gray-800 mb-2">Details:</h2> <pre class="bg-gray-900 text-gray-100 p-4 rounded overflow-auto text-sm max-h-96">${escape_html(store_get($$store_subs ??= {}, "$page", page).error.details)}</pre></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (store_get($$store_subs ??= {}, "$page", page).error && "errorId" in store_get($$store_subs ??= {}, "$page", page).error) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="mb-6 p-4 bg-gray-50 rounded border border-gray-200"><p class="text-sm text-gray-600"><span class="font-semibold">Error ID:</span> ${escape_html(store_get($$store_subs ??= {}, "$page", page).error.errorId)}</p> `);
        if ("timestamp" in store_get($$store_subs ??= {}, "$page", page).error) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p class="text-sm text-gray-600"><span class="font-semibold">Time:</span> ${escape_html(store_get($$store_subs ??= {}, "$page", page).error.timestamp)}</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if ("url" in store_get($$store_subs ??= {}, "$page", page).error) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p class="text-sm text-gray-600 break-all"><span class="font-semibold">URL:</span> ${escape_html(store_get($$store_subs ??= {}, "$page", page).error.url)}</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <div class="flex justify-center gap-4"><button class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Go Home</button> <button class="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition">Retry</button></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { _error as default };
//# sourceMappingURL=_error.svelte-CAc8J-9V.js.map
