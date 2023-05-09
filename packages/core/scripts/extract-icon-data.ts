import got from "got";
import { config } from 'dotenv';
import task from 'tasuku';
import chunk from 'lodash/chunk';

config({ path: '../../.env' });

const FRAME_ID = "13023:3196";
const FIGMA_END_POINT = 'https://api.figma.com/v1';
const CONCURRENCY = +(process.env.CONCURRENCY || '10');
const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;

export async function extractIconData() {
  const result = await got(`${FIGMA_END_POINT}/files/${FIGMA_FILE_KEY}/nodes`, {
    responseType: 'json',
    headers: {
      'X-FIGMA-TOKEN': FIGMA_ACCESS_TOKEN,
    },
    searchParams: {
      ids: FRAME_ID,
    },
  });
  
  const body = result.body as any;
  const iconComponents = Object.keys(body.nodes[FRAME_ID].components);

  console.log(body.nodes[FRAME_ID].components);
  // console.log(body.nodes[FRAME_ID]);
  

  // console.log(iconComponents);

  // const iconIds = iconComponents.join(',');
  
  // const iconResult = await got(`${FIGMA_END_POINT}/images/${FIGMA_FILE_KEY}`, {
  //   responseType: 'json',
  //   headers: {
  //     'X-FIGMA-TOKEN': FIGMA_ACCESS_TOKEN,
  //   },
  //   searchParams: {
  //     ids: iconIds,
  //     format: 'svg',
  //   },
  // });

  // const iconBody = iconResult.body as any;
  // const images = iconBody.images as Record<string, string>;

  // console.log(Object.entries(images));
  

  // task.group(task => [
  //   task('Create SVG directory', async ({ task, setTitle }) => {
  //     const svgPath = path.join(__dirname, '../svg');
  //     await fs.mkdir(svgPath, { recursive: true });

  //     const imageEntries = Object.entries(images);
  //     const imageEntriesChunks = chunk(imageEntries, CONCURRENCY);
  //     for (let i = 0; i < imageEntriesChunks.length; i++) {
  //       setTitle(`Processing chunks (${i+1}/${imageEntriesChunks.length})`);
  //       const chunk = imageEntriesChunks[i] as [string, string][];
  //       const chunkTask = await task.group(task =>
  //         chunk.map(([nodeId, downloadUrl]) => {
  //           const iconName = iconNameMap.get(nodeId);
  //           return task(`Downloading ${iconName}`, async ({ task, setTitle }) => {
  //             const { body } = await got(downloadUrl);
  //             const exportingTask = await task.group(task => [
  //               task('Save as SVG', async ({ task }) => {
  //                 const filePath = path.join(svgPath, `${iconName}.svg`);
  //                 let { data: svg } = svgo.optimize(body, {
  //                   js2svg: {
  //                     indent: 2,
  //                     pretty: true,
  //                   },
  //                   plugins: [
  //                     {
  //                       name: 'addAttributesToSVGElement',
  //                       params: {
  //                         attributes: [{ 'data-karrot-ui-icon': true }],
  //                       },
  //                     },
  //                   ],
  //                 });
  //                 svg = svg.replace(/#212124/g, 'currentColor');
  //                 await fs.writeFile(filePath, svg, 'utf-8');
  //               }),
  //             ]);
  //           exportingTask.clear();
  //           setTitle(`Successfully exported ${iconName}`);
  //         });
  //       }),
  //         { concurrency: CONCURRENCY },
  //       );

  //       chunkTask.clear();
  //       setTitle('Successfully exported all icons');
  //     }
  //   }),
  //  ])
}

extractIconData();
