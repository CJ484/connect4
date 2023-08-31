import checkConsecutive from './index'
import gameSetting from "../../const/gameSettings/index";

describe("checkConsecutive function", () => {
  let grid;
  let numRows;
  let numCols;

  beforeEach(() => {
    numRows = gameSetting.numRows;
    numCols = gameSetting.numCols;

    // Initialize an empty grid for testing
    grid = Array.from(Array(numRows), () => Array(numCols).fill(null));
  });

  it("should return true for consecutive horizontal cells of the same color", () => {
    grid[0][0] = "R";
    grid[0][1] = "R";
    grid[0][2] = "R";
    grid[0][3] = "R";
    expect(checkConsecutive(grid, "R", 0, 0, 0, 1)).toBe(true);
  });

  it("should return false for non-consecutive horizontal cells", () => {
    grid[0][0] = "R";
    grid[0][1] = "R";
    grid[0][2] = "Y";
    grid[0][3] = "R";
    expect(checkConsecutive(grid, "R", 0, 0, 0, 1)).toBe(false);
  });

  it("should return true for consecutive vertical cells of the same color", () => {
    grid[0][0] = "R";
    grid[1][0] = "R";
    grid[2][0] = "R";
    grid[3][0] = "R";
    expect(checkConsecutive(grid, "R", 0, 0, 1, 0)).toBe(true);
  });

  it("should return false for cells outside of the grid bounds", () => {
    grid[0][0] = "R";
    expect(checkConsecutive(grid, "R", -1, 0, 1, 0)).toBe(false);
  });

});
