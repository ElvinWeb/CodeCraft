import { Monaco } from "@monaco-editor/react";
import { THEME_DEFINITONS } from "./constants";

export const defineMonacoThemes = (monaco: Monaco) => {
    Object.entries(THEME_DEFINITONS).forEach(([themeName, themeData]) => {
      monaco.editor.defineTheme(themeName, {
        base: themeData.base,
        inherit: themeData.inherit,
        rules: themeData.rules.map((rule) => ({
          ...rule,
          foreground: rule.foreground,
        })),
        colors: themeData.colors,
      });
    });
  };