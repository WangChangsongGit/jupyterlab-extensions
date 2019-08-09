import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';


/**
 * Initialization data for the @smart-ai/jupyterlab-extensions extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: '@smart-ai/jupyterlab-extensions',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension @smart-ai/jupyterlab-extensions is activated!');
  }
};

export default extension;
