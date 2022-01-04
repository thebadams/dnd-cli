enum Abilities {
	STR = 'Strength',
	DEX = 'Dexterity',
	CON = 'Constitution',
	INT = 'Intelligence',
	WIS = 'Wisdom',
	CHA = 'Charisma'
};

type abilities = 'Strength' | 'Dexterity' | 'Constitution' | 'Intelligence' | 'Wisdom' | 'Charisma';

interface IAbilityConfig {
	name: abilities
}

export default class Ability {
	name: abilities;
	constructor(name: abilities) {
		this.name = name
	}
	private static ABILITIES = Abilities
	public static Config(config: IAbilityConfig) {
		return new Ability(config.name)
	}
}