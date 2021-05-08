export function checkPC() {
    const PC_OS = "win16|win32|win64|mac|macintel";
    const isPC = navigator.platform && PC_OS.indexOf(navigator.platform.toLowerCase()) >= 0;

    if (isPC) return true;
    return false;
}
