import { Abilities } from "./Ability"
import { Armor } from "./Armor"
import { HitDie } from "./HitDice"

export enum ClassLevels {
	ONE = 1,
	TWO,
	THREE,
	FOUR,
	FIVE,
	SIX,
	SEVEN,
	EIGHT,
	NINE,
	TEN,
	ELEVEN,
	TWELVE,
	THIRTEEN,
	FOURTEEN,
	FIFTEEN,
	SIXTEEN,
	SEVENTEEN,
	EIGHTEEN,
	NINETEEN,
	TWENTY
}

interface IClassInfo {
	name: string;
	level: ClassLevels,
	hitDie: HitDie
}
interface IClass {
	get name(): string;
	get level(): ClassLevels;
	levelUp(): void;
	get info(): IClassInfo;
	get hitDie() : HitDie
}

export interface IClassConfig {
	level?: ClassLevels
}

export default class Class implements IClass {
	#name: string = Class.name
	#level: ClassLevels = ClassLevels.ONE
	#hitDie: HitDie = Class.HITDIE

	constructor(){
	}

	public static CreateInstance(config?: IClassConfig) : Class {
		const newClass = new Class()
		if(config) {
			if(config.level){
				newClass.#level = config.level
			}
			
		}
		return newClass;
	}

	protected static HITDIE : HitDie = HitDie.D6
	protected static ARMORPROFICIENCIES: Armor[] = []
	public static get ArmorProficiencies() : Armor[] {
		return this.ARMORPROFICIENCIES;
	}

	protected static SAVINGTHROWPROFICIENCIES: Abilities[] = []

	protected static get SavingThrowProficiencies(): Abilities[] | string {
		if(this.SAVINGTHROWPROFICIENCIES.length = 0) {
			return `${this.name} Does Not Have Any Saving Throw Proficiencies`
		} else {
			return this.SAVINGTHROWPROFICIENCIES
		}
	}

	protected static WEAPONPROFICIENCIES: string[] = []

	protected static get WeaponProficiencies() : string[] | string {
		if(this.WEAPONPROFICIENCIES.length = 0) {
			return `${this.name} Does Not Have Any Weapon Proficiencies`
		} else {
			return this.WEAPONPROFICIENCIES
		} 
	}

	public get name(): string {
			return this.#name;
	}

	public get level(): ClassLevels {
			return this.#level
	}

	public levelUp(): void {
			this.#level = this.#level + 1
	}

	public get info(): IClassInfo {
			const info : IClassInfo = {
				name: this.#name,
				level: this.#level,
				hitDie: this.#hitDie
			}

			return info;
	}

	public get hitDie(): HitDie {
			return this.#hitDie
	}

}