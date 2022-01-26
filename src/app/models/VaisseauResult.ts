import { Vaisseau } from "./Vaisseau";

export class VaisseauResult{
    map() {
      throw new Error('Method not implemented.');
    }

    count: Number;
    results: Vaisseau[];
  longitude: any;
  latitude: any;

    constructor(count: Number, results: Vaisseau[]
        ){
            this.count = count;
            this.results = results;
        }
}