import { c as create_ssr_component, d as add_attribute } from "../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1pxi79c.svelte-1pxi79c{width:100%;max-width:400px;display:flex;flex-direction:column;margin:0 auto;padding:1rem;border:1px solid;border-radius:10px;box-shadow:0 0 10px;gap:10px}input.svelte-1pxi79c.svelte-1pxi79c{font-size:2rem}.operators.svelte-1pxi79c.svelte-1pxi79c{display:flex}.operators.svelte-1pxi79c button.svelte-1pxi79c{flex-grow:1}.operators.svelte-1pxi79c button.svelte-1pxi79c,.numbers.svelte-1pxi79c button.svelte-1pxi79c{font-size:2rem}.numbers.svelte-1pxi79c.svelte-1pxi79c{display:flex;flex-wrap:wrap;gap:20px}.numbers.svelte-1pxi79c button.svelte-1pxi79c{width:120px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let val = 0;
  let check = [];
  console.log(`${check.length} -- check length`);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-e3awfh_START -->${$$result.title = `<title>Calculator</title>`, ""}<!-- HEAD_svelte-e3awfh_END -->`, ""} <main class="svelte-1pxi79c"><input type="text" class="svelte-1pxi79c"${add_attribute("value", val, 0)}> <div class="operators svelte-1pxi79c"><button class="svelte-1pxi79c" data-svelte-h="svelte-1pftwj9">+</button> <button class="svelte-1pxi79c" data-svelte-h="svelte-1tnz59r">-</button> <button class="svelte-1pxi79c" data-svelte-h="svelte-1so09gc">*</button> <button class="svelte-1pxi79c" data-svelte-h="svelte-13uf6ax">/</button></div> <div class="numbers svelte-1pxi79c"><button class="svelte-1pxi79c" data-svelte-h="svelte-1g7ou95">7</button> <button class="svelte-1pxi79c" data-svelte-h="svelte-1ugn2y8">8</button> <button class="svelte-1pxi79c" data-svelte-h="svelte-15srdjv">9</button> <button class="svelte-1pxi79c" data-svelte-h="svelte-clj7u4">4</button> <button class="svelte-1pxi79c" data-svelte-h="svelte-hl6gxj">5</button> <button class="svelte-1pxi79c" data-svelte-h="svelte-4zeu2e">6</button> <button class="svelte-1pxi79c" data-svelte-h="svelte-335fsj">1</button> <button class="svelte-1pxi79c" data-svelte-h="svelte-19l5b9e">2</button> <button class="svelte-1pxi79c" data-svelte-h="svelte-o6yt05">3</button> <button class="svelte-1pxi79c" data-svelte-h="svelte-1grxvbc">0</button> <button class="svelte-1pxi79c" data-svelte-h="svelte-14xtjbo">C</button> <button class="svelte-1pxi79c" data-svelte-h="svelte-111dtuj">=</button></div> </main>`;
});
export {
  Page as default
};
