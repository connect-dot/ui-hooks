export function checkBrowser() {
    if (typeof window !== undefined) {
        return true;
    }
    return false;
}

export function checkPC() {
    const PC_OS = "win16|win32|win64|mac|macintel";
    if (navigator.platform && PC_OS.indexOf(navigator.platform.toLowerCase()) >= 0) {
        return true;
    } else {
        return false;
    }
}

export function checkCanvas(canvas: HTMLCanvasElement) {
    return Boolean(canvas.getContext("2d"));
}

export function rgbToHex(r: number, g: number, b: number) {
    if (r > 255 || g > 255 || b > 255) throw "Invalid color component";

    return ((r << 16) | (g << 8) | b).toString(16);
}
