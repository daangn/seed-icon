import type { DrawableConfig, PDFConfig, PNGConfig, ReactConfig, SVGConfig, Vue2Config, Vue3Config } from "@icona/generator";
import { generate } from "@icona/generator";
import assetPkg from "./assets/package.json" assert { type: "json" };

const svgConfig: SVGConfig = {
  genMode: "recreate",
  path: "assets/svg",
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
            { "data-seed-icon": "true" },
            { "data-seed-icon-version": assetPkg.version },
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
        fn: () => {
          return {
            element: {
              enter: node => {
                // NOTE: Not working
                // if (node.name === 'mask') return;

                // NOTE: Working
                if (node.name !== 'mask') delete node.attributes.id;
              }
            }
          }
        }
      },
    ],
  },
};

const drawableConfig: DrawableConfig = {
  active: true,
  genMode: "recreate",
  path: "assets/xml",
  svg2vectordrawableConfig: {},
  defaultColor: "@color/gray900",
};

const pdfConfig: PDFConfig = {
  active: true,
  genMode: "recreate",
  path: "assets/pdf",
  pdfKitConfig: {
    size: [24, 24],
    margin: 0,
    layout: "landscape",
  },
  svgToPdfOptions: {
    x: 0,
    y: 0,
    assumePt: true,
    width: 24,
    height: 24,
  },
};

const reactConfig: ReactConfig = {
  active: true,
  genIndexFile: true,
  genMode: "recreate",
  path: "packages/react/src",
  svgrConfig: {
    template: (variables: any, { tpl }: { tpl: any }) => {
      return tpl`
        ${variables.imports};

        const ${variables.componentName} = (
          { size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string },
          ref: Ref<SVGSVGElement>
        ) => (
          ${variables.jsx}
        );

        ${variables.exports}
      `;
    },
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
              { "data-seed-icon": "true" },
              { "data-seed-icon-version": assetPkg.version },
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
          fn: () => {
            return {
              element: {
                enter: node => {
                  // NOTE: Not working
                  // if (node.name === 'mask') return;

                  // NOTE: Working
                  if (node.name !== 'mask') delete node.attributes.id;
                }
              }
            }
          }
        },
      ],
    },
    typescript: true,
    dimensions: false,
    ref: true,
    svgProps: {
      width: "{size}",
      height: "{size}",
    },
  },
};

const pngConfig: PNGConfig = {
  active: true,
  genMode: "recreate",
  path: "assets/png",
};

const vue2Config: Vue2Config = {
  active: true,
  path: "packages/vue2/src",
  genMode: "recreate",
  genIndexFile: true,
  genShimFile: true,
  attributes: {
    "data-seed-icon": "true",
    "data-seed-icon-version": assetPkg.version,
  }
};

const vue3Config: Vue3Config = {
  active: true,
  path: "packages/vue3/src",
  genMode: "recreate",
  genIndexFile: true,
  genShimFile: true,
  attributes: {
    "data-seed-icon": "true",
    "data-seed-icon-version": assetPkg.version,
  }
};

generate({
  config: {
    svg: svgConfig,
    drawable: drawableConfig,
    pdf: pdfConfig,
    react: reactConfig,
    png: pngConfig,
    vue2: vue2Config,
    vue3: vue3Config,
  },
});
