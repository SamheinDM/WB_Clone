export class Header {
  constructor(locals, logo, specials) {

  }

  createLangPanel = (langs) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('link_wrapper lang_link');

    const langLink = document.createElement('a');
    langLink.setAttribute('href', 'javascript:;');
    langLink.classList.add('active_link_white');
    wrapper.appendChild(langLink);

    const langIcon = document.createElement('img');
    langIcon.setAttribute('src', langs.find((el) => el.lang = 'Ru').icon);
    langIcon.setAttribute('alt', 'Country flag');
    langIcon.classList.add('lang_icon_small');
    wrapper.appendChild(langIcon);

    const langPanel = document.createElement('form');
    langPanel.classList.add('popup_panel inactive_popup_panel scrollable');

    const langPanelName = document.createElement('p');
    langPanelName.textContent = 'Выберите страну:';
    langPanelName.classList.add('bold_text');

    const menuWrapper = document.createElement('div');
    menuWrapper.classList.add('content_box');

    langs.map((el) => {
      const menuElement = document.createElement('input');
      menuElement.setAttribute('type', 'radio');
      
      const menuElementName = document.createElement('label');
      menuElementName.textContent = el.fullLang;
      menuElementName.classList.add('normal_text');

      const menuElementIcon = document.createElement('img');
      menuElementIcon.setAttribute('src', el.icon);
      menuElementIcon.setAttribute('alt', 'Country flag');
      menuElementIcon.classList.add('lang_icon');

      menuWrapper.appendChild(menuElement);
      menuWrapper.appendChild(menuElementName);
      menuWrapper.appendChild(menuElementIcon);
    });
  }
}
