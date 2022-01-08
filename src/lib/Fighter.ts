import Class, { ClassLevels, IClassConfig, IClass } from "./Class";
import { HitDie } from "./HitDice";

export default class Fighter extends Class implements IClass {
	protected	_level: ClassLevels = ClassLevels.ONE
	protected	_name: string = Fighter.name
	protected _hitDie: HitDie = HitDie.D10
	constructor(){
		super();
	}
	public static CreateInstance(config?: IClassConfig) {
		const fighter = new Fighter()
		if(config) {
			if(config.level) {
				fighter._level = config.level
			}
		}
		return fighter;
	}
}

const fighter = Fighter.CreateInstance()