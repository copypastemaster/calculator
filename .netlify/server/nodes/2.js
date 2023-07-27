

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.e4ad7005.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.8d9fd66a.js"];
export const stylesheets = ["_app/immutable/assets/2.6777ed02.css"];
export const fonts = [];
