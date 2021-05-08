import { checkBrowser } from "./checkBrowser";

describe("[shared/utils] checkBrowser", () => {
    const { window } = global;

    it("should return false with undefined window", () => {
        // @ts-ignore
        delete global.window;
        expect(checkBrowser()).toBe(false);
        global.window = window;
    });

    it("should return true with object window", () => {
        expect(checkBrowser()).toBe(true);
    });
});
