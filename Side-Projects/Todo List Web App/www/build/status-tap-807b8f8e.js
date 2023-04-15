import { t as readTask, i as writeTask } from './index-64db7e8f.js';
import { a as findClosestIonContent, s as scrollToTop } from './index-776d823a.js';
import { c as componentOnReady } from './helpers-2b773795.js';
import './index-dad75b83.js';

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const startStatusTap = () => {
  const win = window;
  win.addEventListener('statusTap', () => {
    readTask(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);
      if (!el) {
        return;
      }
      const contentEl = findClosestIonContent(el);
      if (contentEl) {
        new Promise((resolve) => componentOnReady(contentEl, resolve)).then(() => {
          writeTask(async () => {
            /**
             * If scrolling and user taps status bar,
             * only calling scrollToTop is not enough
             * as engines like WebKit will jump the
             * scroll position back down and complete
             * any in-progress momentum scrolling.
             */
            contentEl.style.setProperty('--overflow', 'hidden');
            await scrollToTop(contentEl, 300);
            contentEl.style.removeProperty('--overflow');
          });
        });
      }
    });
  });
};

export { startStatusTap };

//# sourceMappingURL=status-tap-807b8f8e.js.map