import * as server from '../entries/pages/_page.server.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export const file = '_app/immutable/components/pages/_page.svelte-790a32ae.js';
export { server };
export const imports = ["_app/immutable/components/pages/_page.svelte-790a32ae.js","_app/immutable/chunks/index-62719346.js"];
export const stylesheets = ["_app/immutable/assets/_page-b82772ef.css"];
export const fonts = [];
