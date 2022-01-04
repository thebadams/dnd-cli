import Ability, { Abilities, IAbilityConfig } from '../../src/lib/Ability';

describe('Ability Class', () => {
	test('Ability Should Exist', () => {
		expect(Ability).toBeDefined();
	})
	describe('Static Config Method', () => {
		const abilityConfig : IAbilityConfig = {
			name: Abilities.STR,
			score: 18,
			proficiencies: {
				check: false,
				save: true
			}
		}
		const invalidAbilityConfig: IAbilityConfig = {
			name: Abilities.WIS,
			score: 0,
			proficiencies: {
				check: false,
				save: true
			}
		}
		const newAbility : Ability | undefined = Ability.Config(abilityConfig);
		const badNewAbility : Ability | undefined = Ability.Config(invalidAbilityConfig)
		test('Ability Should Have A Static Method, Config, That Returns A New Instance Of the Ability Class', () =>{
			expect(newAbility).toBeInstanceOf(Ability);
		});
		test('newAbility Should Have A Property, name, Equal to Abilities.STR', () => {
			expect(newAbility).toHaveProperty('name', Abilities.STR);
		});
		test('newAbility Should Have Property, score equal to the number 18', () => {
			expect(newAbility).toHaveProperty('score', 18);
		});
		test('newAbility Should Have Property, proficiencies, equal to abilityConfig.proficiencies', () => {
			expect(newAbility).toHaveProperty('proficiencies', abilityConfig.proficiencies)
		})
		describe('Bad Ability Config', () => {
			test('When an invalid score is passed in, badNewAbility should be undefined', () => {
				expect(badNewAbility).toBeUndefined()
			})
		})
	});
	describe('Modifier Getter', () => {
		const abilityConfig : IAbilityConfig = {
			name: Abilities.WIS,
			score: 17,
			proficiencies: {
				check: false,
				save: true
			}
		}

		const wis = Ability.Config(abilityConfig)
		let wisMod: number
		if(wis instanceof Ability) {
			wisMod = wis.modifier
		}
	
		test('The wis instance of the Ability class should have a public getter, modifier, that correctly returns 3 as the ability score modifier', () => {
				expect(wisMod).toBe(3);
			
		})
	})
});