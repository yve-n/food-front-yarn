import { Region } from "./region";

export class Country {
  id: number;
  shortName: string;
  longName: string;
  region: Region;
  language: string;
  constructor() {}
}
