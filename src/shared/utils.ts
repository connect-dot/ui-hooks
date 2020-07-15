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
