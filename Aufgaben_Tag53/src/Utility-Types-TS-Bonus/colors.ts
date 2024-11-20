export type TBasicColors = "RED" | "BLUE" | "GREEN" | "YELLOW" | "BLACK" | "WHITE";

export type TRealColors = Exclude<TBasicColors, "BLACK" | "WHITE">;
// Exclude schließt die Werte "BLACK" und "WHITE" aus dem type TBasicColors aus und erstellt neuen type TRealColors, der nur die verbleibenden Werte enthält.

