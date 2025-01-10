import fs from "fs";
import Papa from "papaparse";
import { JigsawStack } from "jigsawstack";
const jigsaw = JigsawStack({ apiKey: "your-api-key" });

// JSON example 
const result = await jigsaw.prediction({
  dataset: [
    { date: "2008-01-03", value: 353459 },
    { date: "2008-01-04", value: 313734 },
    { date: "2008-01-05", value: 333774 },
    { date: "2008-01-06",	value: 348636 },
    { date: "2008-01-07",	value: 278903 }
  ],
  steps: 3, // Number of future predictions
  columns: "date,value"
});

console.log(result.prediction);

//CSV Example

// const schema = {
//   datasetPath: "example.csv", // Path to your local CSV file
//   steps: 10, // Number of steps for predictions
//   columns: "date,departure_total_delay_mins", // Columns in your CSV file
// };

// const runPredictionWithLocalCSV = async (schema) => {
//   try {
//     // Read the local CSV file
//     const csv = fs.readFileSync(schema.datasetPath, "utf-8");

//     const { data, errors } = Papa.parse(csv, {
//       delimiter: csv.includes("\t") ? undefined : ",",
//       header: true,
//     });

//     if (!data.length) throw new Error("Invalid CSV file");
//     if (errors.length) console.error("CSV import errors", errors);

//     const [dateKey, valueKey] = schema.columns.split(",").map((col) => col.trim());

//     const dataMapped = data.map((row) => ({
//       date: row[dateKey],
//       value: row[valueKey],
//     }));

//     const jigsaw = JigsawStack({ apiKey: "sk_fd1db0b55cbeff61e8a61d34bca3cf7d66d657c8f741c132c02af0364db5240edd89a21ebeaa9fdb82e741eabb3a32fb478ebcd58e125fc3d25cf640a4f1169a024TbQKnRl6GutKvhZDOv" });

//     const result = await jigsaw.prediction({
//       dataset: dataMapped,
//       steps: schema.steps,
//       columns: schema.columns,
//     });

//     console.log("Prediction result:", result);
//   } catch (error) {
//     console.error("Error during prediction:", error.message);
//   }
// };

// //Call the function with the local CSV file path
// runPredictionWithLocalCSV(schema);

