function generateArgumentError(target: string, config: { start: number; end: number }) {
    throw new Error(`Error: invalid color component, ${target} value should from ${config.start} to ${config.end}`);
}

function validateArgument(r: number, g: number, b: number): void;
function validateArgument(r: number, g: number, b: number, a: number): void;

function validateArgument(...args: number[]) {
    if (args[0] > 255 || args[0] < 0) generateArgumentError("red", { start: 0, end: 255 });
    if (args[1] > 255 || args[1] < 0) generateArgumentError("green", { start: 0, end: 255 });
    if (args[2] > 255 || args[2] < 0) generateArgumentError("blue", { start: 0, end: 255 });
    if (args.length === 4 && (args[3] > 1 || args[3] < 0)) generateArgumentError("alpha", { start: 0, end: 1 });
}

export function rgbToHex(r: number, g: number, b: number): string;
export function rgbToHex(r: number, g: number, b: number, a: number): string;

export function rgbToHex(...args: number[]): string {
    if (args.length === 4) {
        validateArgument(args[0], args[1], args[2], args[3]);
        return ((args[0] << 16) | (args[1] << 8) | args[2]).toString(16) + Math.round(args[3] * 255).toString(16);
    }

    validateArgument(args[0], args[1], args[2]);
    return ((args[0] << 16) | (args[1] << 8) | args[2]).toString(16);
}
