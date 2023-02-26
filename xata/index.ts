// Generated by Xata Codegen 0.21.0. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "product",
    columns: [
      { name: "name", type: "string" },
      { name: "sale_price", type: "float" },
      { name: "stock", type: "int", notNull: true, defaultValue: "0" },
      { name: "description", type: "text" },
      { name: "price", type: "float", notNull: true, defaultValue: "0" },
      { name: "additional_images", type: "multiple" },
      {
        name: "google_category",
        type: "string",
        notNull: true,
        defaultValue: "Sporting Goods > Exercise & Fitness > Exercise Bands",
      },
      { name: "image", type: "string" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Product = InferredTypes["product"];
export type ProductRecord = Product & XataRecord;

export type DatabaseSchema = {
  product: ProductRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL: "https://fitpeak-4hlshe.us-east-1.xata.sh/db/catalog",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};