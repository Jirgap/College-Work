import { r as registerInstance, l as h, F as Fragment } from './index-64db7e8f.js';

const pageNoticeCss = "";

const PageNotice = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.names = [
      'Alice',
      'Bob',
      'Charlie',
      'Dave',
      'Eve',
      'Frank',
    ];
  }
  render() {
    return (h(Fragment, null, h("ion-header", null, h("ion-toolbar", { color: "primary" }, h("ion-title", null, "Notices"))), h("ion-content", { class: "ion-padding" }, h("ion-list", null, this.names.map(name => h("ion-item", { href: "/profile/" + name.toLowerCase(), key: name }, h("ion-label", null, name, " is following you")))))));
  }
};
PageNotice.style = pageNoticeCss;

export { PageNotice as page_notice };

//# sourceMappingURL=page-notice.entry.js.map