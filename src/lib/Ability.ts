export enum Abilities {
	STR = 'Strength',
	DEX = 'Dexterity',
	CON = 'Constitution',
	INT = 'Intelligence',
	WIS = 'Wisdom',
	CHA = 'Charisma',
	DEF = 'Default'
}

export type AbilityTypes = Abilities.STR | Abilities.DEX | Abilities.CON | Abilities.INT | Abilities.WIS |Abilities.CHA | Abilities.DEF

export interface IProficiency {
	check: boolean;
	save: boolean;
}

interface IAbility {
	get name(): Abilities;
	get score(): number;
	changeScore(value: number): void;
	get proficiencies(): IProficiency;
	set checkProficiency(value: boolean);
	get checkProficiency() : boolean;
	set saveProficiency(value: boolean);
	get saveProficiency() : boolean;

}

export interface IAbilityConfig {
	name? : Abilities;
	proficiencies? : IProficiency;
	score?: number;
}

export interface IStrConfig extends IAbilityConfig {
	name: Abilities.STR
}

interface IDexConfig extends IAbilityConfig {
	name: Abilities.DEX
}

interface IConstitutionConfig extends IAbilityConfig {
	name: Abilities.CON
}

interface IIntConfig extends IAbilityConfig {
	name: Abilities.INT
}

interface IWisConfig extends IAbilityConfig {
	name: Abilities.WIS
}

interface IChaConfig extends IAbilityConfig {
	name: Abilities.CHA
}

export default class Ability implements IAbility {
	#name: AbilityTypes = Abilities.DEF
	#score: number = 10
	#proficiencies: IProficiency = {
		check: false,
		save: false
	}
	// constructor() {
	// }

	public static Create(config?: IAbilityConfig ) : Ability {
		const newAbility = new Ability();
		if(config){
			if (config.name) {
				newAbility.#name = config.name
			}
			if (config.proficiencies) {
				newAbility.#proficiencies = config.proficiencies
			}

			if (config.score) {
				const validScore = this.#checkScore(config.score)
				if (validScore) {
					newAbility.#score = config.score
				}

			}
		}
		

		return newAbility;
		
	}

	static #checkScore(value: number) : boolean {
		if(value > 0) {
			return true;
		} else {
			return false
		}
	}

	public get name() : AbilityTypes {
		return this.#name;
	}
	public get score() : number {
		return this.#score;
	}

	public changeScore(value: number): void {
			this.#score = (this.#score + value);
	}

	public get proficiencies(): IProficiency {
			return this.#proficiencies;
	}

	public set saveProficiency(value: boolean) {
			this.#proficiencies.save = value;
	}
	public get saveProficiency(): boolean {
			return this.#proficiencies.save
	}

	public set checkProficiency(value: boolean) {
			this.#proficiencies.check = value;
	}
	public get checkProficiency(): boolean {
			return this.#proficiencies.check
	}


}