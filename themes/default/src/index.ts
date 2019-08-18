import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for @smart-ai/jupyterlab-theme-default
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'smart-ai-themes:default',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    const style = '@smart-ai/jupyterlab-theme-default/index.css';

    manager.register({
      name: 'smart default',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
