import { r as registerInstance, l as h, m as Host } from './index-64db7e8f.js';
import { g as getIonMode } from './ionic-global-d65e952b.js';

const thumbnailCss = ":host{--size:48px;--border-radius:0;border-radius:var(--border-radius);display:block;width:var(--size);height:var(--size)}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;object-fit:cover;overflow:hidden}";

const Thumbnail = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: getIonMode(this) }, h("slot", null)));
  }
};
Thumbnail.style = thumbnailCss;

export { Thumbnail as ion_thumbnail };

//# sourceMappingURL=ion-thumbnail.entry.js.map