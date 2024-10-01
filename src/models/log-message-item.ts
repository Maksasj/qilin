export enum LogLevel {
    Trace,
    Debug,
    Information,
    Warning,
    Error,
    Critical,
    None,
}

export function logLevelToString(logLevel: LogLevel) {
    switch (logLevel) {
        case LogLevel.Trace: return "Trace";
        case LogLevel.Debug: return "Debug";
        case LogLevel.Information: return "Information";
        case LogLevel.Warning: return "Warning";
        case LogLevel.Error: return "Error";
        case LogLevel.Critical: return "Critical";
        case LogLevel.None: return "None";
    }
}

export type LogMessageItem = {
    id: string,
    logLevel: LogLevel,
    sourceName: string,
    message: string,
    sendAt: string,
    receivedAt: string
};