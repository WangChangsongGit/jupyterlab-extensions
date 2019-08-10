import * as React from 'react';
import {ReactWidget} from '@jupyterlab/apputils';
import {ICellFooter} from '@jupyterlab/cells';
import {CommandRegistry} from '@phosphor/commands';

/**
 * The CSS classes added to the cell footer.
 */
const CELL_FOOTER_CLASS = 'jp-CellFooter';
const CELL_FOOTER_DIV_CLASS = 'ccb-cellFooterContainer';
const CELL_FOOTER_BUTTON_CLASS = 'ccb-cellFooterBtn';

/**
 * Extend default implementation of a cell footer.
 */
export class CellFooterWidget extends ReactWidget implements ICellFooter {
    /**
     * Construct a new cell footer.
     */
    constructor(commands: CommandRegistry) {
        super();
        this.addClass(CELL_FOOTER_CLASS);
        this.commands = commands;
    }

    private readonly commands: CommandRegistry;

    render() {
        return (
            <div
                className={CELL_FOOTER_DIV_CLASS}>
                <button
                    className={CELL_FOOTER_BUTTON_CLASS}
                    onClick={event => {
                        this.commands.execute('notebook:run-cell');
                    }}>
                    run
                </button>
            </div>
        );
    }
}
