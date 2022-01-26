export class Vaisseau{

    name: string;
	model: string;
	manufacturer: string;
	cost_in_credits: number;
	length: number;
	max_atmosphering_speed: number;
	crew: number;
	passengers: number;
	cargo_capacity: number;
	consumables: string;
	vehicle_class: string;

    constructor(name: string, model: string, manufacturer: string, cost_in_credit: number,
        length: number, max_atmosphering_speed: number,
        crew: number, passengers: number, cargo_capacity: number, consumables: string, vehicle_class: string
        ){
            this.name = name;
            this.model = model;
            this.manufacturer = manufacturer;
            this.cost_in_credits = cost_in_credit;
            this.length = length;
            this.max_atmosphering_speed = max_atmosphering_speed;
            this.crew = crew;
            this.passengers = passengers;
            this.cargo_capacity = cargo_capacity;
            this.consumables = consumables;
            this.vehicle_class = vehicle_class;
        }
}