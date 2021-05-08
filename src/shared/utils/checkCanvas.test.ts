import { checkCanvas } from "./checkCanvas";

describe("[shared/utils] checkCanvas", () => {
    it("should return false when don't support <canvas>", () => {
        //@ts-ignore
        HTMLCanvasElement.prototype.getContext = () => {
            return undefined;
        };
        expect(checkCanvas()).toBe(false);
    });

    it("should return true when support <canvas>", () => {
        require("jest-canvas-mock");
        expect(checkCanvas()).toBe(true);
    });
});
