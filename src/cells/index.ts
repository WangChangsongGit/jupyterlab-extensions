import {JupyterFrontEnd, JupyterFrontEndPlugin} from '@jupyterlab/application';

/**
 * Initialization data for the @smart-ai/jupyterlab-extensions extension.
 */
export const cellsExtension: JupyterFrontEndPlugin<void> = {
    id: '@smart-ai/jupyterlab-extensions',
    autoStart: true,
    activate: (app: JupyterFrontEnd) => {
        console.log('JupyterLab extension @smart-ai/jupyterlab-extensions is activated!');
    }
};

