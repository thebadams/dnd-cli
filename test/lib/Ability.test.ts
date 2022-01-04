import Ability, { Abilities, IAbilityConfig } from '../../src/lib/Ability';

describe('Ability Class', () => {
	test('Ability Should Exist', () => {
		expect(Ability).toBeDefined();
	})
	describe('Static Config Method', () => {
		const abilityConfig : IAbilityConfig = {
			name: Abilities.STR
		}
		const newAbility : Ability = Ability.Config(abilityConfig);
		test('Ability Should Have A Static Method, Config, That Returns A New Instance Of the Ability Class', () =>{
			expect(newAbility).toBeInstanceOf(Ability);
		});
		test('newAbility Should Have A Property, name, Equal to Abilities.STR', () => {
			expect(newAbility).toHaveProperty('name', Abilities.STR);
		});
	});
});