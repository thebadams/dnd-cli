import Class, { ClassLevels, IClassConfig, IClass } from "./Class";
import { HitDie } from "./HitDice";

export default class Fighter extends Class implements IClass {
	#level: ClassLevels = ClassLevels.ONE
	#name: string = Fighter.name
	#hitDie: HitDie = HitDie.D10
	public static CreateInstance(config: IClassConfig) {
		const fighter = new Fighter()
		if(config) {
			if(config.level) {
				fighter.#level = config.level
			}
		}
		return fighter;
	}
}