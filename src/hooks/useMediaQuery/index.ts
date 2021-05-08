import { useEffect, useMemo, useState, useCallback, useRef } from "react";

import { checkBrowser, checkPC, checkConfig } from "../../shared/utils";
interface IResponsibleHookConfig {
    [type: string]: string;
}

function sortConfigWithSize(config: IResponsibleHookConfig, order: "ASC" | "DESC" = "ASC") {
    const sortedConfig = {};
    const configEntries = Object.entries(config);
    const sortedConfigEntries = configEntries.sort((before, after) => {
        const beforeSize = Number(before[1].replace("px", ""));
        const afterSize = Number(after[1].replace("px", ""));

        if (!before || !afterSize) throw new Error("You need to use px in size");

        return order === "ASC" ? beforeSize - afterSize : afterSize - beforeSize;
    });
    sortedConfigEntries.forEach(item => {
        Object.assign(sortedConfig, { [item[0]]: item[1] });
    });
    return sortedConfig;
}

export const useMediaQuery = (config: IResponsibleHookConfig, initial: string): [string, any?] => {
    try {
        if (!checkBrowser()) {
            throw new Error("It is not broswer environment, you need to use this in browser environment");
        }
        const [mediaType, setMediaType] = useState<string>("");
        const latestType = useRef<string>("");

        checkConfig(config);

        const sortedConfig = useMemo(() => sortConfigWithSize(config, "DESC"), [config]);
        const configKeys = useMemo(() => Object.keys(sortedConfig), [sortedConfig]);

        const eventHandlerGenerator = useCallback(
            (type: string) => (event: MediaQueryListEvent) => {
                if (event.matches) {
                    setMediaType(prev => {
                        latestType.current = prev;
                        return type;
                    });
                }
                const index = configKeys.findIndex(value => value === type);
                if (index && index - 1 >= 0) {
                    setMediaType(configKeys[index - 1]);
                }
                setMediaType(initial);
            },
            [initial, configKeys]
        );

        const mediaQueries = useMemo(
            () =>
                configKeys.map(key => {
                    const mediaQuery = window.matchMedia(`screen and (max-width: ${config[key]})`);
                    return { mediaQuery, eventHandler: eventHandlerGenerator(key), type: key };
                }),
            [configKeys]
        );

        useEffect(() => {
            const shouldInitial = !mediaQueries.reverse().some(item => {
                const { mediaQuery, type } = item;
                if (mediaQuery.matches) {
                    setMediaType(type);
                    latestType.current = type;
                    return true;
                }
                return false;
            });
            if (shouldInitial) {
                setMediaType(initial);
            }
        }, [mediaQueries, initial]);

        useEffect(() => {
            if (checkPC()) {
                mediaQueries.forEach(item => {
                    const { mediaQuery, eventHandler } = item;
                    mediaQuery.addEventListener("change", eventHandler);
                });

                return () => {
                    mediaQueries.forEach(item => {
                        const { mediaQuery, eventHandler } = item;
                        mediaQuery.removeEventListener("change", eventHandler);
                    });
                };
            }
        }, [mediaQueries]);

        return [mediaType];
    } catch (error) {
        return ["Error", error];
    }
};

export default useMediaQuery;
