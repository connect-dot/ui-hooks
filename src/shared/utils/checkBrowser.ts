export function checkBrowser(): boolean {
    if (typeof window === "object") return true;
    return false;
}
