import { useEffect, useRef } from "react";

type HookParentOffsetReturnType = {
    offset: HookParentOffsetType;
    targetRef: HookParentOffsetRefType;
};

type HookParentOffsetType = {
    width: number;
    height: number;
};
type HookParentOffsetRefType =
    | React.Ref<HTMLElement>
    | React.Ref<SVGElement>
    | React.Ref<SVGSVGElement>
    | React.LegacyRef<HTMLElement>
    | React.LegacyRef<SVGElement>
    | React.LegacyRef<SVGSVGElement>;

const useParentOffset = (): HookParentOffsetReturnType => {
    const offset = useRef<HookParentOffsetType>({ width: 0, height: 0 });
    const targetRef: HookParentOffsetRefType = useRef<HTMLElement>(null);

    useEffect(() => {
        if (targetRef.current && targetRef.current.parentElement) {
            offset.current.width = targetRef.current.parentElement.offsetLeft;
            offset.current.height = targetRef.current.parentElement.offsetTop;
        }
    }, []);

    return { targetRef, offset: offset.current };
};

export default useParentOffset;
