/**
 * Yellow message with "Warning" as the default title.
 */
export declare let warning: (message?: string, title?: string, color?: string, hasTimer?: boolean) => void;
/**
 * Red message with "Error" as the default title.
 */
export declare let error: (message?: string, title?: string, color?: string, hasTimer?: boolean) => void;
/** Green message with "Success" as the default title. */
export declare let success: (message?: string, title?: string, color?: string, hasTimer?: boolean) => void;
/**
 * Red message with "FYI" as the default title.
 */
export declare let info: (message?: string, title?: string, color?: string, hasTimer?: boolean) => void;
/**
 * Blue message with "Did you know?" as the default title.
 */
export declare let fun: (message?: string, title?: string, color?: string, hasTimer?: boolean) => void;
/**
 * Adds a hidden container div for holding toast messages.
 */
export declare let init: () => void;
