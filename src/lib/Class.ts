enum ClassLevels {
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
	level: ClassLevels
}
interface IClass {
	get name(): string;
	get level(): ClassLevels;
	levelUp(): void;
	get info(): IClassInfo;
}

interface IClassConfig {
	level?: ClassLevels
}

export default class Class implements IClass {
	#name: string = Class.name
	#level: ClassLevels = ClassLevels.ONE

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
				level: this.#level
			}

			return info;
	}

}