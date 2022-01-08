import { Abilities, AbilityTypes } from "./Ability"
import { Armor, ArmorTypes } from "./Armor"
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

type ClassLevelTypes = ClassLevels.ONE | ClassLevels.TWO | ClassLevels.THREE | ClassLevels.FOUR | ClassLevels.FIVE | ClassLevels.SIX | ClassLevels.SEVEN | ClassLevels.EIGHT | ClassLevels.NINE | ClassLevels.TEN | ClassLevels.ELEVEN | ClassLevels.TWELVE | ClassLevels.THIRTEEN | ClassLevels.FOURTEEN | ClassLevels.FIFTEEN | ClassLevels.SIXTEEN | ClassLevels.SEVENTEEN | ClassLevels.EIGHTEEN | ClassLevels.NINETEEN | ClassLevels.TWENTY; 

interface IClassInfo {
	name: string;
	level: ClassLevels,
	hitDie: HitDie
}

interface IClassProficiencies {
	savingThrow: [AbilityTypes, AbilityTypes];
	armor: ArmorTypes[];
	weapons: string[];
	tool: string[];
	skills: SkillTypes[];
}
export interface IClass {
	get name(): string;
	get level(): ClassLevelTypes;
	levelUp(): void;
	get info(): IClassInfo;
	get hitDie() : HitDie
	//get proficiencies() : IClassProficiencies
}

export interface IClassConfig {
	level?: ClassLevelTypes
}

export default class Class implements IClass {
	protected readonly _name: string = this.name
	protected _level: ClassLevelTypes = ClassLevels.ONE
	protected readonly _hitDie: HitDie = Class.HITDIE

	constructor(){
	}

	public static CreateInstance(config?: IClassConfig) : Class {
		const newClass = new Class()
		if(config) {
			if(config.level){
				newClass._level = config.level
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
			return this._name;
	}

	public get level(): ClassLevelTypes {
			return this._level
	}

	public levelUp(): void {
			this._level = this._level + 1
	}

	public get info(): IClassInfo {
			const info : IClassInfo = {
				name: this._name,
				level: this._level,
				hitDie: this._hitDie
			}

			return info;
	}

	public get hitDie(): HitDie {
			return this._hitDie
	}
	// public get proficiencies(): IClassProficiencies {
	// 		return {
	// 			savingThrow: t
	// 		}
	// }

}