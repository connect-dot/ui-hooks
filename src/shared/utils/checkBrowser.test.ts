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
        document.createElement
        expect(checkBrowser()).toBe(true);
    });
});
