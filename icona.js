import { generate } from "@icona/generator";
import seedIconsPkg from "./package.json" assert { type: "json" };

generate({
  config: {
    svg: {
      active: true,
      path: "svg",
      svgoConfig: {
        js2svg: {
          indent: 2,
          pretty: true,
        },
        plugins: [
          {
            name: "addAttributesToSVGElement",
            params: {
              attributes: [
                { "data-seed-icon": true },
                { "data-seed-icon-version": seedIconsPkg.version },
              ],
            },
          },
          {
            name: "convertColors",
            params: {
              currentColor: true,
            },
          },
          {
            name: "removeAttrs",
            params: {
              attrs: ["id"],
            },
          },
        ],
      },
    },
    drawable: {
      active: true,
      path: "drawable",
      svg2vectordrawableConfig: {},
      defaultColor: "@color/gray900",
    },
    pdf: {
      active: true,
      path: "pdf",
      pdfKitConfig: {
        size: [24, 24],
        margin: 0,
        layout: "landscape",
      },
      svgToPdfOptions: {
        assumePt: true,
        x: 0,
        y: 0,
        width: 24,
        height: 24,
      },
    },
    react: {
      active: true,
      path: "react",
      svgrConfig: {
        jsxRuntime: "classic",
        plugins: [
          "@svgr/plugin-svgo",
          "@svgr/plugin-jsx",
          "@svgr/plugin-prettier",
        ],
        prettierConfig: {
          tabWidth: 2,
          useTabs: false,
          singleQuote: true,
          semi: true,
        },
        svgoConfig: {
          plugins: [
            {
              name: "addAttributesToSVGElement",
              params: {
                attributes: [
                  { "data-seed-icon": true },
                  { "data-seed-icon-version": seedIconsPkg.version },
                ],
              },
            },
            {
              name: "convertColors",
              params: {
                currentColor: true,
              },
            },
            {
              name: "removeAttrs",
              params: {
                attrs: ["id"],
              },
            },
          ],
        },
        typescript: true,
        dimensions: false,
      },
    },
  },
});
