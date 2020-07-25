import { transform, addBlank } from "./validate"

test("User can only type numbers", () => {
    expect(transform("a123")).toBe("123")
    expect(transform("asdf")).toBe("")
    expect(transform("a=-2")).toBe("2")
    expect(transform("ㄏㄚ ")).toBe("")
})

test("add blank in every 4 digits", () => {
    expect(addBlank("123456")).toBe("1234 56")
    expect(addBlank("123456789")).toBe("1234 5678 9")
})