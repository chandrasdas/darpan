import { y as ensure_array_like } from './index-B0k4-5Vp.js';
import { e as escape_html } from './context-R2425nfV.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    $$renderer2.push(`<div class="p-8"><h1 class="text-3xl font-bold mb-4">${escape_html(data.message)}</h1> <h2 class="text-2xl font-bold mb-6">Welcome to school Dashboard</h2> `);
    if (data.error) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6"><p class="font-bold">Error</p> <p>${escape_html(data.error)}</p></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="overflow-x-auto"><table class="min-w-full border-collapse border border-gray-300"><thead class="bg-gray-200"><tr><th class="border border-gray-300 px-4 py-2 text-left">ID</th><th class="border border-gray-300 px-4 py-2 text-left">Name</th><th class="border border-gray-300 px-4 py-2 text-left">Class</th><th class="border border-gray-300 px-4 py-2 text-left">Roll No</th></tr></thead><tbody><!--[-->`);
      const each_array = ensure_array_like(data.students);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let student = each_array[$$index];
        $$renderer2.push(`<tr class="hover:bg-gray-50"><td class="border border-gray-300 px-4 py-2">${escape_html(student.id)}</td><td class="border border-gray-300 px-4 py-2">${escape_html(student.name)}</td><td class="border border-gray-300 px-4 py-2">${escape_html(student.class)}</td><td class="border border-gray-300 px-4 py-2">${escape_html(student.rollNo)}</td></tr>`);
      }
      $$renderer2.push(`<!--]--></tbody></table></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BvystgPO.js.map
