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
}

export default class Ability {
	name: abilities;
	score: number;
	constructor(name: abilities, score: number) {
		this.name = name,
		this.score = score
	}
	private static ABILITIES = Abilities
	private static checkAbilityScore(score: number) {
		if(score > 0) {
			return score
		} else {
			throw Error('Invalid Score, Must Be a Positive Number')
		}
	}
	public static Config(config: IAbilityConfig) {
		try {
			const score = this.checkAbilityScore(config.score)
			return new Ability(config.name, score);
		} catch (error) {
			if(error instanceof Error){
				console.log(error)
				return
			}
			
		}
		
	}
}