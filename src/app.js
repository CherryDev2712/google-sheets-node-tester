import { googleSheets } from "./plugins/googleSheets.plugin.js";

/**
 * Read data
 */
const spreadsheetId = process.env.SPREAD_SHEET_ID;
const rangeForRead = "Hoja 1!A:A";
let resultRead;

try {
  resultRead = await googleSheets.read(spreadsheetId, rangeForRead);
  console.log(resultRead);
} catch (err) {
  // TODO (developer) - Handle exception
  throw err;
}

/**
 * Write data
 */
const rangeForWrite = "Hoja 1!B1";
let resultWrite;
const data = [
  [
    'categoria',
  ],
  [
    '2',
  ],
  [
    '3',
  ],
  [
    '4',
  ],
  [
    '5',
  ],
  [
    '6',
  ],
]

try {
  resultWrite = await googleSheets.write(spreadsheetId, rangeForWrite, data, 'RAW');
  console.log(resultWrite.data);
} catch (error) {
  throw error;
}