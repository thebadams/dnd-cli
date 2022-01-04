export enum Abilities {
	STR = 'Strength',
	DEX = 'Dexterity',
	CON = 'Constitution',
	INT = 'Intelligence',
	WIS = 'Wisdom',
	CHA = 'Charisma'
};

export type abilities = 'Strength' | 'Dexterity' | 'Constitution' | 'Intelligence' | 'Wisdom' | 'Charisma';

export interface IAbilityConfig {
	name: abilities;
	score: number;
	proficiencies: IProficiencyConfig;
}

interface IProficiencyConfig {
	check: boolean;
	save: boolean;
}

export default class Ability {
	private name: abilities;
	private _score: number;
	private proficiencies: IProficiencyConfig;
	constructor(name: abilities, score: number, proficiencies: IProficiencyConfig) {
		this.name = name,
		this._score = score,
		this.proficiencies = proficiencies
	}
	private static CheckAbilityScore(score: number) {
		if(score > 0) {
			return score
		} else {
			throw Error('Invalid Score, Must Be a Positive Number')
		}
	}
	public static Config(config: IAbilityConfig) {
		try {
			const score = this.CheckAbilityScore(config.score)
			if(score === config.score) {
				return new Ability(config.name, score, config.proficiencies);
			}
			
		} catch (error) {
			if(error instanceof Error){
				console.log(error.message)
				return
			}	
		}	
	}
	public get modifier() : number {
		const modifier: number = this.calculateModifier(this.score);
		return modifier;
	}
	private calculateModifier(score: number) : number {
		const modifier = Math.floor((score - 10) / 2)
		return modifier
	}

	public get checkProficiency() : boolean {
		return this.proficiencies.check
	}

	public get saveProficiency() : boolean {
		return this.proficiencies.save
	}

	public set checkProficiency(value: boolean) {
		this.proficiencies.check = value
	}

	public set saveProficiency(value: boolean) {
		this.proficiencies.save = value
	}

	public get score() : number {
		return this._score
	}
	
	private set score(value: number) {
		this._score = value
	}

	public increaseScore(value: number) : void {
		this.score = (this.score + value);
	}
}