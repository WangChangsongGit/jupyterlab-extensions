import {JupyterFrontEnd, JupyterFrontEndPlugin} from '@jupyterlab/application';
import {NotebookPanel} from '@jupyterlab/notebook';
import {IEditorServices} from '@jupyterlab/codeeditor';
import {ContentFactory} from './ContentFactory'


/**
 * Export this plugins.
 */
export const ContentFactoryPlugin: JupyterFrontEndPlugin<NotebookPanel.IContentFactory> = {
    id: 'smart-ai-cells:factory',
    provides: NotebookPanel.IContentFactory,
    requires: [IEditorServices],
    autoStart: true,
    activate: (app: JupyterFrontEnd, editorServices: IEditorServices) => {
        // tslint:disable-next-line:no-console
        console.log('JupyterLab extension smart-ai-cells:factory is activated!');

        const { commands } = app;
        const editorFactory = editorServices.factoryService.newInlineEditor;
        return new ContentFactory(commands, { editorFactory });
    }
};
