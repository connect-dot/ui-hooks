import { rgbToHex } from "./rgbToHex";

describe("[shared/utils] rgbToHex", () => {
    it("should be rgb(189, 186, 41) be #bdc229 ", () => {
        expect(rgbToHex(189, 194, 41)).toBe("bdc229");
    });

    it("should be rgb(235, 64, 52) be #eb4034 ", () => {
        expect(rgbToHex(235, 64, 52)).toBe("eb4034");
    });

    it("should be rgb(52, 79, 235) be #344feb ", () => {
        expect(rgbToHex(52, 79, 235)).toBe("344feb");
    });

    it("should be rgb(258, 186, 3) throw error", () => {
        expect(() => {
            rgbToHex(252, 266, 3);
        }).toThrowError("Error: invalid color component");
    });
});
