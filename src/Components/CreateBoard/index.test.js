import React from "react";
import { fireEvent, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import ReactTestRenderer from "react-test-renderer";
import CreateBoard from "./index";
import gameSetting from "../../const/gameSettings";

jest.mock("../../const/gameSettings", () => ({
  numRows: 3,
}));

describe("CreateBoard component", () => {
  let setBoardMock;
  let board;
  let props;

  beforeEach(() => {
    setBoardMock = jest.fn();
    board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    props = {
      winner: null,
      board,
      setBoard: setBoardMock,
      currentPlayer: "X",
    };
  });

  test("renders the correct number of rows and cells", () => {
    render(<CreateBoard {...props} />);
    const rows = screen.getAllByTestId("row");
    expect(rows).toHaveLength(gameSetting.numRows); // Change this to match `gameSetting.numRows`

    const cells = screen.getAllByTestId("cell");
    expect(cells).toHaveLength(3 * 3);
  });


  it("updates the board when a cell is clicked", () => {
    render(<CreateBoard {...props} />);
    fireEvent.click(screen.getAllByTestId("cell")[0]);
    expect(setBoardMock).toHaveBeenCalledTimes(1);

    const expectedBoard = [
      [null, null, null],
      [null, null, null],
      ["X", null, null],
    ];
    expect(setBoardMock).toHaveBeenCalledWith(expectedBoard);
  });

  it("does not update the board when there is a winner", () => {
    props.winner = "X";
    render(<CreateBoard {...props}/>)
    fireEvent.click(screen.getAllByTestId("cell")[1]);
    expect(setBoardMock).toHaveBeenCalledTimes(0);
  });

  it("renders cells with correct class names based on cell content", () => {
    props.board = [
      [null, "O", null],
      ["X", null, null],
      ["O", "X", "O"],
    ];
    render(<CreateBoard {...props} />);
    const cells = screen.getAllByTestId("cell");
    expect(cells[0]).toHaveClass("null");
    expect(cells[1]).toHaveClass("O");
    expect(cells[3]).toHaveClass("X");
    expect(cells[6]).toHaveClass("O");
  });

  it('matches the snapshot', () => {
    const component = ReactTestRenderer.create(<CreateBoard {...props}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
