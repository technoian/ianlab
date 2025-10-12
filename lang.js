// Simple multilingual loader
(function(){
  const available = {
    "it": "Italiano",
    "en": "English",
    "fr": "Français",
    "es": "Español",
    "de": "Deutsch"
  };

  const defaultLang = "it";

  function getSaved() {
    try { return localStorage.getItem("site-lang") || null; } catch(e){return null;}
  }
  function save(lang) {
    try { localStorage.setItem("site-lang", lang); } catch(e){}
  }

  async function loadTranslations(lang) {
    try {
      const res = await fetch("/lang/" + lang + ".json");
      if(!res.ok) throw new Error("Language file not found");
      return await res.json();
    } catch(e) {
      console.warn("Could not load language", lang, e);
      return {};
    }
  }

  function applyTranslations(translations) {
    // data-i18n => textContent
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if(!key) return;
      // support nested keys with dot
      const parts = key.split(".");
      let val = translations;
      for(const p of parts) {
        if(val && p in val) val = val[p]; else { val = null; break; }
      }
      if(val !== null && val !== undefined) {
        // preserve inner HTML if element has data-i18n-html="true"
        if(el.getAttribute("data-i18n-html")==="true") el.innerHTML = val;
        else el.textContent = val;
      }
    });
    // document title
    if(translations.site && translations.site.title) document.title = translations.site.title;
  }

  function makeLangSwitcher(current) {
    const root = document.getElementById("lang-root") || (function(){
      const d = document.createElement("div"); d.id = "lang-root"; document.body.prepend(d); return d;
    })();
    root.innerHTML = "";
    const select = document.createElement("select");
    select.setAttribute("aria-label","Language selector");
    for(const [code,label] of Object.entries(available)) {
      const opt = document.createElement("option");
      opt.value = code;
      opt.textContent = label;
      if(code===current) opt.selected = true;
      select.appendChild(opt);
    }
    select.addEventListener("change", async function(){
      const lang = this.value;
      const translations = await loadTranslations(lang);
      applyTranslations(translations);
      save(lang);
    });
    // style minimal
    select.style.padding = "6px 8px";
    select.style.borderRadius = "6px";
    select.style.fontSize = "14px";
    root.appendChild(select);
  }

  async function init() {
    const saved = getSaved() || (navigator.language ? navigator.language.slice(0,2) : null) || defaultLang;
    const lang = (saved in available) ? saved : defaultLang;
    makeLangSwitcher(lang);
    const translations = await loadTranslations(lang);
    applyTranslations(translations);
  }

  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  // expose for debugging
  window.siteLang = {
    set: async function(code){ save(code); const t = await loadTranslations(code); applyTranslations(t); },
    get: function(){ return getSaved(); }
  };
})();