import { r as registerInstance, l as h, F as Fragment } from './index-64db7e8f.js';

const pageProfileCss = "";

const PageProfile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.name = undefined;
  }
  normalize(name) {
    name = name || '';
    return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
  }
  render() {
    return (h(Fragment, null, h("ion-header", null, h("ion-toolbar", { color: "primary" }, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/tab/notice" })), h("ion-title", null, "Profile: ", this.name))), h("ion-content", { fullscreen: true, class: "ion-padding" }, h("ion-card", null, h("ion-card-header", null, h("h1", null, this.normalize(this.name))), h("ion-card-content", null, h("p", null, "This name is passed in through a route param!"))))));
  }
};
PageProfile.style = pageProfileCss;

export { PageProfile as page_profile };

//# sourceMappingURL=page-profile.entry.js.map