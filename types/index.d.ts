declare module "@connect/ui-hooks" {
    interface IResponsibleHookConfig {
        [type: string]: string;
    }
    function useMediQuery(): string[];
}
