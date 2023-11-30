import { generate } from "@icona/generator";
import seedIconsPkg from "./package.json" assert { type: "json" };

generate({
  config: {
    svg: {
      active: true,
      genMode: "recreate",
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
                { "data-seed-icon": "true" },
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
      genMode: "recreate",
      path: "drawable",
      svg2vectordrawableConfig: {},
      defaultColor: "@color/gray900",
    },
    pdf: {
      active: true,
      genMode: "recreate",
      path: "pdf",
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
    },
    react: {
      active: true,
      genMode: "recreate",
      path: "react",
      svgrConfig: {
        template: (variables, { tpl }) => {
          return tpl`
            ${variables.imports};
            interface Props {
              size: number | string;
              className?: string;
            }

            const SVG = (${variables.props}) => (
              ${variables.jsx}
            );

            const ${variables.componentName} = (
              { size, className }: Props,
              ref: React.ForwardedRef<HTMLSpanElement>,
            ) => {
              return (
                <span
                  ref={ref}
                  className={className}
                  style={{ display: "inline-flex", width: size, height: size }}
                >
                  <SVG />
                </span>
              )
            };
            
            export default React.forwardRef(${variables.componentName});
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
    png: {
      active: true,
      genMode: "recreate",
      path: "png",
    }
  },
});
