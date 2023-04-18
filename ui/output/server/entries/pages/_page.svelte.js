import { c as create_ssr_component, d as createEventDispatcher, f as add_attribute, e as escape, h as each, v as validate_component } from "../../chunks/index.js";
const link_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#container.svelte-6mfvaq{display:flex;flex-direction:row;align-items:center;border:1px solid black;border-radius:10px;padding:10px;margin-top:10px;position:relative}h2.svelte-6mfvaq{margin:0;cursor:pointer}#image--container.svelte-6mfvaq{position:relative;cursor:pointer}#icon.svelte-6mfvaq{height:100px;width:100px;object-fit:cover}#copy.svelte-6mfvaq{width:25px;position:absolute;bottom:10px;right:10px}#text--container.svelte-6mfvaq{margin-left:10px}span.svelte-6mfvaq{background-color:gray;border-radius:10px;padding:5px}button.svelte-6mfvaq{position:absolute;right:10px;top:10px;cursor:pointer}#snackbar.svelte-6mfvaq{visibility:hidden;color:#fff;background-color:#333;min-width:250px;margin-left:-125px;border-radius:2px;padding:16px;text-align:center;left:50%;bottom:30px;z-index:1;position:absolute}@-webkit-keyframes svelte-6mfvaq-fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@keyframes svelte-6mfvaq-fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@-webkit-keyframes svelte-6mfvaq-fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}@keyframes svelte-6mfvaq-fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}",
  map: null
};
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { link } = $$props;
  if (link.image === null) {
    link.image = "./bookmark.png";
  }
  createEventDispatcher();
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  $$result.css.add(css$1);
  return `<div id="${"container"}" class="${"svelte-6mfvaq"}"><div id="${"image--container"}" class="${"svelte-6mfvaq"}"><img${add_attribute("src", link.image, 0)} alt="${"link"}" id="${"icon"}" class="${"svelte-6mfvaq"}">
        <img src="${"./copy.png"}" alt="${"copy"}" id="${"copy"}" class="${"svelte-6mfvaq"}">
        <p id="${"snackbar"}" class="${"svelte-6mfvaq"}">Successfully Copied</p></div>


    <div id="${"text--container"}" class="${"svelte-6mfvaq"}"><a${add_attribute("href", link.link, 0)} target="${"blanc"}"><h2 class="${"svelte-6mfvaq"}">${escape(link.link)}</h2></a>
        <p>${escape(link.description)}</p>
        ${each(link.tags, (tag) => {
    return `<span class="${"svelte-6mfvaq"}">${escape(tag)}</span>`;
  })}</div>

    <button class="${"svelte-6mfvaq"}">X</button>

</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-xyduov.svelte-xyduov{font-family:sans-serif}#top--container.svelte-xyduov.svelte-xyduov{display:flex;justify-content:center;align-items:center;height:100px;background-color:#fff;border-bottom:1px solid #ccc}#bottom--container.svelte-xyduov.svelte-xyduov{display:flex;width:100%;height:100%}#form--container.svelte-xyduov.svelte-xyduov{width:30%;align-self:flex-start}#link--container.svelte-xyduov.svelte-xyduov{width:calc(70% - 14px)}#links--container.svelte-xyduov.svelte-xyduov{width:calc(70% - 14px);flex:1 1 auto;overflow-y:auto;height:75vh;width:100%}#search--container.svelte-xyduov.svelte-xyduov{width:50%;margin-left:25%}h1.svelte-xyduov.svelte-xyduov{text-align:center}label.svelte-xyduov.svelte-xyduov{margin-left:3px}.form--container.svelte-xyduov.svelte-xyduov{display:flex;flex-direction:column;width:80%;margin-left:5%;height:100%;background-color:#fff;border-radius:10px}input.svelte-xyduov.svelte-xyduov{width:100%;height:20px;border:1px solid #ccc;border-radius:5px;padding:10px;margin:10px 0}.form--container.svelte-xyduov button.svelte-xyduov{width:100%;height:40px;border:1px solid #ccc;border-radius:5px;padding:10px;margin:10px 0;background-color:#fff}.form--container.svelte-xyduov button.svelte-xyduov:hover{background-color:#ccc}.field--container.svelte-xyduov.svelte-xyduov{width:100%;margin-top:30px}#file--container.svelte-xyduov.svelte-xyduov{margin-top:45px}#tags--container.svelte-xyduov.svelte-xyduov{position:relative}#tags--list.svelte-xyduov.svelte-xyduov{display:flex;position:absolute;list-style:none;width:100%;position:absolute;top:65px;left:-43.5px}#tag.svelte-xyduov.svelte-xyduov{background-color:rgb(148, 144, 144);border-radius:5px;padding:3px;margin-left:5px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let link, description;
  let links = data.links;
  let tags = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div id="${"top--container"}" class="${"svelte-xyduov"}"><h1 class="${"svelte-xyduov"}">Kinda of a bookmark application</h1></div>


    <div id="${"bottom--container"}" class="${"svelte-xyduov"}"><div id="${"form--container"}" class="${"svelte-xyduov"}"><form class="${"form--container svelte-xyduov"}"><div class="${"field--container svelte-xyduov"}"><label for="${"link"}" class="${"svelte-xyduov"}">Link</label>
                    <input type="${"text"}" name="${"link"}" id="${"link"}" placeholder="${"Link"}" required class="${"svelte-xyduov"}"${add_attribute("value", link, 0)}></div>
            
                <div class="${"field--container svelte-xyduov"}"><label for="${"description"}" class="${"svelte-xyduov"}">Description (Optional)</label>
                    <input type="${"text"}" name="${"description"}" id="${"description"}" placeholder="${"Description"}" class="${"svelte-xyduov"}"${add_attribute("value", description, 0)}></div>
            
                <div class="${"field--container svelte-xyduov"}" id="${"tags--container"}"><label for="${"tags"}" class="${"svelte-xyduov"}">Tags (Optional)</label>
                    <input list="${"tags"}" name="${"tags"}" class="${"svelte-xyduov"}">
                    <datalist id="${"tags"}" class="${"svelte-xyduov"}"><option value="${"Svelte"}" class="${"svelte-xyduov"}"></option><option value="${"Sapper"}" class="${"svelte-xyduov"}"></option><option value="${"JavaScript"}" class="${"svelte-xyduov"}"></option><option value="${"CSS"}" class="${"svelte-xyduov"}"></option><option value="${"HTML"}" class="${"svelte-xyduov"}"></option></datalist>
                    <ul id="${"tags--list"}" class="${"svelte-xyduov"}">${each(tags, (tag) => {
    return `<li id="${"tag"}" class="${"svelte-xyduov"}">${escape(tag)}</li>`;
  })}</ul></div>
            
                <div id="${"file--container"}" class="${"svelte-xyduov"}"><label for="${"image"}" class="${"svelte-xyduov"}">Picture (Optional)</label>
                    <input type="${"file"}" name="${"image"}" id="${"image"}" class="${"svelte-xyduov"}"></div>
            
                <div class="${"field--container svelte-xyduov"}"><button class="${"svelte-xyduov"}">Submit</button></div></form></div>

        <div id="${"link--container"}" class="${"svelte-xyduov"}"><div class="${"field--container svelte-xyduov"}" id="${"search--container"}"><label for="${"search"}" class="${"svelte-xyduov"}">Search</label>
                <input type="${"text"}" name="${"search"}" id="${"search"}" placeholder="${"Search"}" class="${"svelte-xyduov"}"></div>
            <div id="${"links--container"}" class="${"svelte-xyduov"}">${each(links, (link2) => {
    return `${validate_component(Link, "Link").$$render($$result, { link: link2 }, {}, {})}`;
  })}</div></div>

    </div>`;
});
export {
  Page as default
};
