import { r as registerInstance, l as h, m as Host } from './index-64db7e8f.js';
import { g as getIonMode } from './ionic-global-d65e952b.js';
import { c as createColorClasses } from './theme-7ef00c83.js';

const textCss = ":host(.ion-color){color:var(--ion-color-base)}";

const Text = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const mode = getIonMode(this);
    return (h(Host, { class: createColorClasses(this.color, {
        [mode]: true,
      }) }, h("slot", null)));
  }
};
Text.style = textCss;

export { Text as ion_text };

//# sourceMappingURL=ion-text.entry.js.map