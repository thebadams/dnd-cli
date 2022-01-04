import Ability, {TAbilities, TAbilityConfigs} from "./Ability"

export default class Character {
	private _abilities: TAbilities
	constructor(abilities: TAbilities) {
		this._abilities = abilities
	}
	private static AbilityService = Ability
	private static generateAbilities(configs: TAbilityConfigs) : TAbilities | Error {
		const abilities = configs.map((config) => {
			const configCheck = this.AbilityService.CheckConfig(config)
			if(configCheck === true) {
				return this.AbilityService.Config(config)
			} else {
				return new Error('Invalid Config')
			}
		})
		if (abilities.every((ability) => ability instanceof this.AbilityService)) {
			return abilities as TAbilities;
		} else {
			throw new Error('Invalid Config');
		}
		

		
	} 
	public static Config(abilityConfigs: TAbilityConfigs)  {
		try {
			const abilities: TAbilities | Error = this.generateAbilities(abilityConfigs);
			if(!(abilities instanceof Error)) {
				if (abilities.every((ability) => ability instanceof Ability)) {
					return new Character(abilities)
				}
			} else {
				throw abilities
			}
			
			
		} catch (error) {
			if(error instanceof Error) {
				console.log(error.message)
				return error
			}
			
		}
		
	}
}