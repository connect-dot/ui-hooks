export function checkCanvas() {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("2d"));
}
