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

export interface IProficiencyConfig {
	check: boolean;
	save: boolean;
}

export interface IStrengthConfig extends IAbilityConfig {
	name: Abilities.STR;
}

export interface IDexterityConfig extends IAbilityConfig {
	name: Abilities.DEX
}

export interface IConstitutionConfig extends IAbilityConfig {
	name: Abilities.CON
}

export interface IIntelligenceConfig extends IAbilityConfig {
	name: Abilities.INT
}

export interface IWisdomConfig extends IAbilityConfig {
	name: Abilities.WIS
}

export interface ICharismaConfig extends IAbilityConfig {
	name: Abilities.CHA
}

export type TAbilityConfigs = [
	strConfig: IStrengthConfig,
	dexConfig: IDexterityConfig,
	conConfig: IConstitutionConfig,
	intConfig: IIntelligenceConfig, wisConfig: IWisdomConfig,
	chaConfig: ICharismaConfig
];

export type TAbilities = [
	strAbility: Ability,
	dexAbility: Ability,
	conAbility: Ability,
	intAbility: Ability,
	wisAbility: Ability,
	chaAbiltiy: Ability
]


export default class Ability {
	protected _name: abilities;
	private _score: number;
	private proficiencies: IProficiencyConfig;
	constructor(name: abilities, score: number, proficiencies: IProficiencyConfig) {
		this._name = name,
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
	public static CheckConfig(config: IAbilityConfig) {
		try {
			this.CheckAbilityScore(config.score);
			return true
		} catch (error) {
			if(error instanceof Error) {
				console.log(error.message);
				return false
			}
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

	public get name() : abilities {
		return this._name
	}

	public increaseScore(value: number) : void {
		this.score = (this.score + value);
	}
}
const strAbilityConfig : IStrengthConfig = {
	name: Abilities.STR,
	score: 18,
	proficiencies: {
		check: false,
		save: true
	}
}