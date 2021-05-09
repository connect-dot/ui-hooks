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

    it("should be rgb(258, 266, 3) throw error", () => {
        expect(() => {
            rgbToHex(266, 123, 3);
        }).toThrowError("Error: invalid color component, red value should from 0 to 255");
    });

    it("should be rgb(258, 266, 3) throw error", () => {
        expect(() => {
            rgbToHex(252, 266, 3);
        }).toThrowError("Error: invalid color component, green value should from 0 to 255");
    });

    it("should be rgb(258, 266, 3) throw error", () => {
        expect(() => {
            rgbToHex(252, 122, -1);
        }).toThrowError("Error: invalid color component, blue value should from 0 to 255");
    });

    it("should be rgba(189, 194, 41, 1) be #bdc229 ", () => {
        expect(rgbToHex(189, 194, 41, 1)).toBe("bdc229ff");
    });

    it("should be rgba(189, 194, 41, 0.99) be #bdc229fc ", () => {
        expect(rgbToHex(189, 194, 41, 0.99)).toBe("bdc229fc");
    });

    it("should be rgba(189, 194, 41, 0.98) be #bdc229fa ", () => {
        expect(rgbToHex(189, 194, 41, 0.98)).toBe("bdc229fa");
    });

    it("should be rgb(258, 266, 3, -1) throw error", () => {
        expect(() => {
            rgbToHex(252, 123, 3, -1);
        }).toThrowError("Error: invalid color component, alpha value should from 0 to 1");
    });
});
