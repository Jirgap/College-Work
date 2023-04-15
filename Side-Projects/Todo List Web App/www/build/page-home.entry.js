import { r as registerInstance, l as h, F as Fragment } from './index-64db7e8f.js';

const pageHomeCss = ".todo-container{display:flex;align-items:center}ion-item{width:100%;margin-left:20px}ion-label{margin-left:20px}";

const PageHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.todos = [];
  }
  componentWillLoad() {
    this.todos = [
      { id: "1", title: "First todo", description: "First todo description" },
      { id: "2", title: "Second todo", description: "Second todo description" },
      { id: "3", title: "Third todo", description: "Third todo description" },
      { id: "4", title: "Fourth todo", description: "Fourth todo description" },
      { id: "5", title: "Fifth todo", description: "Fifth todo description" }
    ];
    console.log(this.todos);
  }
  render() {
    return (h(Fragment, null, h("ion-header", null, h("ion-toolbar", { color: "primary" }, h("ion-title", null, "Todo"), h("ion-buttons", { slot: "end" }, h("ion-button", null, h("ion-icon", { slot: "icon-only", name: "add" }))))), h("ion-content", { class: "ion-padding" }, h("ion-list", { lines: "none" }, this.todos.map(todo => (h("div", { class: "todo-container", key: todo.id }, h("ion-checkbox", null), h("ion-label", null, todo.title), h("ion-item", { button: true, href: `/${todo.id}` }))))))));
  }
};
PageHome.style = pageHomeCss;

export { PageHome as page_home };

//# sourceMappingURL=page-home.entry.js.map