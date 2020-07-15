import { useState, useEffect, useCallback } from "react";
import { rgbToHex, checkCanvas } from "../../shared/utils";

type ImageType = File | string;
type ColorPosition = { x: number; y: number };

const CANVAS_ID = "picker_canvas";
const INIT_COLOR = "#ffffff";

const useColorPicker = (img: ImageType, position: ColorPosition = { x: 0, y: 0 }, initColor = INIT_COLOR) => {
    const [color, setColor] = useState(initColor);
    const [loading, setLoading] = useState(true);
    const extractColorFromImage = useCallback(async () => {
        try {
            setLoading(true);
            await mountCanvas();
            const url = await convertImageToString(img);
            const color = await extractColor(url, position, initColor);
            color && setColor(color);
            await unMountCanvas();
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
            throw error;
        }
    }, [img]);

    useEffect(() => {
        extractColorFromImage();
    }, []);

    return { color, loading };
};

async function convertImageToString(imgURL: ImageType) {
    try {
        return;
    } catch (error) {
        console.error(error);
        return error;
    }
}

async function mountCanvas() {
    try {
        const canvas = document.createElement("canvas");
        if (!checkCanvas(canvas)) throw new Error("This browser doesn't support canvas apis");

        canvas.id = CANVAS_ID;
        document.body.appendChild(canvas);

        return true;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function unMountCanvas() {
    try {
        const canvas = document.getElementById(CANVAS_ID) as HTMLCanvasElement;
        const context = canvas.getContext("2d");

        context && context.clearRect(0, 0, canvas.width, canvas.height);
        context && context.beginPath;

        return true;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function extractColor(url: string, position: ColorPosition, initColor: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const { x, y } = position;
        const canvas = document.getElementById(CANVAS_ID) as HTMLCanvasElement;
        const context = canvas.getContext("2d");
        const img = new Image();
        img.src = url;
        context &&
            (img.onload = function () {
                context.drawImage(img, 0, 0);
                const pixel = context.getImageData(x, y, 1, 1).data;
                const isTransparent = validateTransparent(pixel);
                const hexCode = "#" + ("000000" + rgbToHex(pixel[0], pixel[1], pixel[2])).slice(-6);
                isTransparent ? Promise.resolve(hexCode) : Promise.resolve(initColor);
            });
    });
}

function validateTransparent(pixel: Uint8ClampedArray) {
    return Number(pixel[0]) === 0 && Number(pixel[1]) === 0 && Number(pixel[2]) === 0 && Number(pixel[3]) === 0;
}

export default useColorPicker;
