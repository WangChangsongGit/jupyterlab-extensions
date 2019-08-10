import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {CodeCell} from '@jupyterlab/cells';
import {CommandRegistry} from '@phosphor/commands';
import {StaticNotebook} from "@jupyterlab/notebook";

/**
 * The CSS classes added to the code cell.
 */
const CODE_CELL_CLASS = 'smart-ai-code-cell';
// const CODE_CELL_APPEND_NODE_CLASS = 'smart-ai-code-cell-append-node';
const CODE_CELL_INPUT_AREA_APPEND_NODE_CLASS = 'smart-ai-code-cell-input-area-append-node';

/**
 * Extend default implementation of a cell footer.
 */
export class CodeCellWidget extends CodeCell {
    /**
     * Construct a new cell footer.
     */
    constructor(options: CodeCell.IOptions, notebook: StaticNotebook, commands: CommandRegistry) {
        super(options);
        this.addClass(CODE_CELL_CLASS);

        let inputAreaAppendNode = document.createElement("div");
        inputAreaAppendNode.classList.add(CODE_CELL_INPUT_AREA_APPEND_NODE_CLASS);
        ReactDOM.render(<div></div>,
            this.node.getElementsByClassName("jp-Cell-inputArea").item(0).appendChild(inputAreaAppendNode)
        );

        // let cellAppendNode = document.createElement("div");
        // cellAppendNode.classList.add(CODE_CELL_APPEND_NODE_CLASS);
        // ReactDOM.render(<div></div>, this.node.appendChild(cellAppendNode));
    }
}
