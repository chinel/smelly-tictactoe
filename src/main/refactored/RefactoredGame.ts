import RefactoredBoard from "./RefactoredBoard";

export class RefactoredGame {
  private _lastSymbol: string = ' ';
  private _board: RefactoredBoard = new RefactoredBoard();

  public Play(symbol: string, x: number, y: number): void {
    if (this.isFirstMove()) {
      this.validateFirstPlayer(symbol);
    } else {
      this.validateNextPlayer(symbol);
      this.validatePosition(x, y);
    }

    this.updateGameState(symbol, x, y);
  }


  private isFirstMove(): boolean {
    return this._lastSymbol === ' ';
  }

  private validateFirstPlayer(symbol: string): void {
    if (symbol === 'O') {
      throw new Error('Invalid first player');
    }
  }

  private validateNextPlayer(symbol: string): void {
    if (symbol === this._lastSymbol) {
      throw new Error('Invalid next player');
    }
  }

  private validatePosition(x: number, y: number): void {
    const tile = this._board.TileAt(x, y);
    if (tile.Symbol !== ' ') {
      throw new Error('Invalid position');
    }
  }

  private updateGameState(symbol: string, x: number, y: number): void {
    this._lastSymbol = symbol;
    this._board.AddTileAt(symbol, x, y);
  }

  public Winner(): string {

    if (
      this.isRowFull(0) ||
      this.isRowFull(1) ||
      this.isRowFull(2) ||
      this.isColumnFull(0) ||
      this.isColumnFull(1) ||
      this.isColumnFull(2) ||
      this.isDiagonalFull() ||
      this.isAntiDiagonalFull()
    ) {
      return this._lastSymbol;
    }
  
    if (this._board.IsBoardFull()) {
      return 'Tie';
    }
  
    return ' '; 
  }
  
  private isRowFull(row: number): boolean {
    const tile1 = this._board.TileAt(row, 0).Symbol;
    const tile2 = this._board.TileAt(row, 1).Symbol;
    const tile3 = this._board.TileAt(row, 2).Symbol;
  
    return tile1 !== " " && tile1 === tile2 && tile2 === tile3;
  }
  
  private isColumnFull(column: number): boolean {
    const tile1 = this._board.TileAt(0, column).Symbol;
    const tile2 = this._board.TileAt(1, column).Symbol;
    const tile3 = this._board.TileAt(2, column).Symbol;
  
    return tile1 !== " " && tile1 === tile2 && tile2 === tile3;
  }
  
  private isDiagonalFull(): boolean {
    const tile1 = this._board.TileAt(0, 0).Symbol;
    const tile2 = this._board.TileAt(1, 1).Symbol;
    const tile3 = this._board.TileAt(2, 2).Symbol;
  
    return tile1 !== " " && tile1 === tile2 && tile2 === tile3;
  }
  
  private isAntiDiagonalFull(): boolean {
    const tile1 = this._board.TileAt(0, 2).Symbol;
    const tile2 = this._board.TileAt(1, 1).Symbol;
    const tile3 = this._board.TileAt(2, 0).Symbol;
  
    return tile1 !== " " && tile1 === tile2 && tile2 === tile3;
  } 
}
