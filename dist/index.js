/**
 * Initialization data for the @smart-ai/jupyterlab-extensions extension.
 */
const extension = {
    id: '@smart-ai/jupyterlab-extensions',
    autoStart: true,
    activate: (app) => {
        console.log('JupyterLab extension @smart-ai/jupyterlab-extensions is activated!');
    }
};
export default extension;
