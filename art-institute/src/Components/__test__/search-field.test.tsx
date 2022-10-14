import { fireEvent, screen, waitFor, render } from "@testing-library/react";
import SearchBox from "../Search/SearchBox";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";


describe("input should be filled with value", () => {
    
const mockedOnChange = jest.fn();
const mockedSubmit = jest.fn()

  test("input should be empty initially",() => {
    render(<SearchBox value="" searchInputChange={mockedOnChange}  onSubmit={mockedSubmit}/>);
    const input = screen.getByRole("textbox");

    expect(input).toHaveValue("");
  })

  test("callback function is called on user interactions", async () => {
    render(<SearchBox value="" searchInputChange={mockedOnChange} onSubmit={mockedSubmit}/>);
    const input = await screen.findByRole("textbox");
    userEvent.type(input, "new value");
    waitFor(()=> expect(mockedOnChange).toHaveBeenCalledWith("new value"));
})

})