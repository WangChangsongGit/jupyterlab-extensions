import * as React from 'react';
import {ReactWidget} from '@jupyterlab/apputils';
import {ICellHeader} from '@jupyterlab/cells';
import {CommandRegistry} from '@phosphor/commands';

/**
 * The CSS classes added to the cell header.
 */
const CELL_HEADER_CLASS = 'jp-CellHeader';
const CELL_HEADER_DIV_CLASS = 'ccb-cellHeaderContainer';
const CELL_HEADER_BUTTON_CLASS = 'ccb-cellHeaderBtn';

/**
 * Extend default implementation of a cell footer.
 */
export class CellHeaderWidget extends ReactWidget implements ICellHeader {
    /**
     * Construct a new cell footer.
     */
    constructor(commands: CommandRegistry) {
        super();
        this.addClass(CELL_HEADER_CLASS);
        this.commands = commands;
    }

    private readonly commands: CommandRegistry;

    render() {
        return (
            <div
                className={CELL_HEADER_DIV_CLASS}>
                <button
                    className={CELL_HEADER_BUTTON_CLASS}
                    onClick={event => {
                        this.commands.execute('notebook:run-cell');
                    }}>
                    run
                </button>
            </div>
        );
    }
}
