import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        createCanvas: "readonly",
        preload: "readonly",
        setup: "readonly",
        draw: "readonly",
        loadImage: "readonly",
        mouseX: "readonly",
        mouseY: "readonly",
        image: "readonly",
        fill: "readonly",
        noFill: "readonly",
        stroke: "readonly",
        strokeWeight: "readonly",
        push: "readonly",
        pop: "readonly",
        text: "readonly",
        noStroke: "readonly"
      }
    }
  },
  pluginJs.configs.recommended,
  {
    rules: {
      "no-undef": "off",
      "no-unused-vars": ["error", { "varsIgnorePattern": "^_" }]
    }
  }
];
