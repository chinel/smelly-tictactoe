import { Tile } from "./Tile";

export default class RefactoredBoard {
  private _plays: Tile[] = [];

  constructor() {
      for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
              const tile: Tile = { X: i, Y: j, Symbol: " " };
              this._plays.push(tile);
          }
      }
  }

  public IsBoardFull(): boolean {
    return this._plays.every((tile: Tile) => tile.Symbol !== undefined);
  }

  public TileAt(x: number, y: number): Tile {
      return this._plays.find((t: Tile) => t.X === x && t.Y === y)!;
  }

  public AddTileAt(symbol: string, x: number, y: number): void {
    const targetTile = this._plays.find((t: Tile) => t.X === x && t.Y === y)!;
    const updatedTile: Tile = { X: x, Y: y, Symbol: symbol };
    Object.assign(targetTile, updatedTile);
  } 
}
