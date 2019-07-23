import * as constant from "./constants.js";


export function getLegalCellsAround(graph, current_cell) {
    const tmp = [-1, 1];
    const board = graph.board;
    const curr_row = current_cell.row;
    const curr_col = current_cell.col;
    let legal_cells = [];
    const legal_color = [constant.UNDISCOVERED_COLOR, constant.TARGET_COLOR];
    // row
    tmp.forEach((offset) => {
        const new_row = curr_row + offset;
        if (new_row >= 0 && new_row < board.length) {
            const new_cell = board[new_row][curr_col];
            if (legal_color.includes(new_cell.color)) {
                legal_cells.push(new_cell);
            }
        }
    });
    // col
    tmp.forEach((offset) => {
        const new_col = curr_col + offset;
        if (new_col >= 0 && new_col < board[0].length) {
            const new_cell = board[curr_row][new_col];
            if (legal_color.includes(new_cell.color)) {
                legal_cells.push(new_cell);
            }
        }
    });
    return legal_cells;
}

export function moveByDir(graph,current_cell) {
    const board = graph.board;
    const curr_row = current_cell.row;
    const curr_col = current_cell.col;
    const legal_color = [constant.UNDISCOVERED_COLOR, constant.TARGET_COLOR];

    // console.log(current_cell.moves[current_cell.curMove]);
    switch (current_cell.curMove) {
        case 0:
            current_cell.curMove ++;
            if(curr_row + 1 < board.length){
                var new_cell = board[curr_row + 1][curr_col];

                if (legal_color.includes(new_cell.color)) {
                    return new_cell;
                }
            }
            return undefined;
        case 1:
            current_cell.curMove ++;
            if(curr_col + 1 < board[0].length){
                var new_cell = board[curr_row][curr_col + 1];
                if (legal_color.includes(new_cell.color)) {
                    return new_cell;
                }
            }

            return undefined;

        case 2:
            current_cell.curMove ++;
            if(curr_row - 1 > -1){
                var new_cell = board[curr_row - 1][curr_col];
                if (legal_color.includes(new_cell.color)) {
                    return new_cell;
                }
            }

            return undefined;
        case 3:
            current_cell.curMove ++;
            if(curr_col -1 > -1){
                var new_cell = board[curr_row][curr_col - 1];
                if (legal_color.includes(new_cell.color)) {
                    return new_cell;
                }
            }

            return undefined;
        default:
            cell.update(color)
    }

}

function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            return false;
        }
    }
    return true
}