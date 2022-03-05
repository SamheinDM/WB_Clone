export class Header {
  constructor(locals, logo, specials) {
    const selectedLang = window.localStorage.getItem('lang');
    this.lang = locals.indexOf(selectedLang) === -1 ? 'Ru' : selectedLang;
    window.localStorage.setItem('lang', this.lang);

    const headerWrapper = document.createElement('div');
    headerWrapper.classList.add('column_content_box');

    const header1stLine = document.createElement('div');
    header1stLine.classList.add('content_box to_sides');

    const header1stLineLeft = document.createElement('div');
    header1stLineLeft.classList.add('content_box');
    header1stLineLeft.appendChild(this.createLangPanel(locals));

    
  }

  createLangPanel = (langs) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('link_wrapper lang_link');

    const langLink = document.createElement('a');
    langLink.setAttribute('href', 'javascript:;');
    langLink.classList.add('active_link_white');
    langLink.textContent = this.lang;
    wrapper.appendChild(langLink);

    const langIcon = document.createElement('img');
    langIcon.setAttribute('src', langs.find((el) => el.lang = this.lang).icon);
    langIcon.setAttribute('alt', 'Country flag');
    langIcon.classList.add('lang_icon_small');
    wrapper.appendChild(langIcon);

    const langPanel = document.createElement('form');
    langPanel.classList.add('popup_panel inactive_popup_panel scrollable');

    const langPanelName = document.createElement('p');
    langPanelName.textContent = 'Выберите страну:';
    langPanelName.classList.add('bold_text');
    langPanel.appendChild(langPanelName);

    const menuWrapper = document.createElement('div');
    menuWrapper.classList.add('content_box');

    langs.map((el) => {
      const menuElementWrapper = document.createElement('div');
      menuElementWrapper.classList.add('content_box');

      const menuElement = document.createElement('input');
      menuElement.setAttribute('type', 'radio');
      
      const menuElementName = document.createElement('label');
      menuElementName.textContent = el.fullLang;
      menuElementName.classList.add('normal_text');

      const menuElementIcon = document.createElement('img');
      menuElementIcon.setAttribute('src', el.icon);
      menuElementIcon.setAttribute('alt', 'Country flag');
      menuElementIcon.classList.add('lang_icon');

      menuElementWrapper.appendChild(menuElement);
      menuElementWrapper.appendChild(menuElementName);
      menuElementWrapper.appendChild(menuElementIcon);

      menuWrapper.appendChild(menuElementWrapper);
    });

    createLocalLink = ()
  }
}
