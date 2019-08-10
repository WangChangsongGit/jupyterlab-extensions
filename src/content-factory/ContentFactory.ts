import {NotebookPanel, StaticNotebook} from '@jupyterlab/notebook';
import {Cell, CodeCell, ICellFooter, ICellHeader} from '@jupyterlab/cells';
import {CommandRegistry} from '@phosphor/commands';
import {CellFooterWidget} from "./CellFooterWidget";
import {CellHeaderWidget} from "./CellHeaderWidget";
import {CodeCellWidget} from "./CodeCellWidget";

/**
 * Extend the default implementation of an `IContentFactory`.
 */
export class ContentFactory extends NotebookPanel.ContentFactory {

    constructor(
        commands: CommandRegistry,
        options?: Cell.ContentFactory.IOptions | undefined,
    ) {
        super(options);
        this.commands = commands;
    }

    /**
     * Create a new content area for the panel.
     */
    // createNotebook(options: Notebook.IOptions): Notebook;

    /**
     * Create a new cell header for the parent widget.
     */
    createCellHeader(): ICellHeader {
        return new CellHeaderWidget(this.commands);
    }

    /**
     * Create a new cell footer for the parent widget.
     */
    createCellFooter(): ICellFooter {
        return new CellFooterWidget(this.commands);
    }

    /**
     * Create a new code cell widget.
     */
    createCodeCell(options: CodeCell.IOptions, parent: StaticNotebook): CodeCell {
        return new CodeCellWidget(options, parent, this.commands);
    };

    private readonly commands: CommandRegistry;
}
