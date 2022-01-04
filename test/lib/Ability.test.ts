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
		test('newAbility Should Have Property, _score equal to the number 18', () => {
			expect(newAbility).toHaveProperty('_score', 18);
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
	describe('Getters and Setters', () => {
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
		let checkProficiency: boolean
		let saveProficiency: boolean
		let score: number
		if(wis instanceof Ability) {
			wisMod = wis.modifier
			checkProficiency = wis.checkProficiency
			saveProficiency = wis.saveProficiency
			score = wis.score
		}
		describe('Modifier Getter', () => {
			test('The wis instance of the Ability class should have a public getter, modifier, that correctly returns 3 as the ability score modifier', () => {
				expect(wisMod).toBe(3);
			})
		})
		describe('checkProficiency Getter', () => {
			test('checkProficiency Getter Should return the boolean false', () => {
				expect(checkProficiency).toBe(false)
			});
		});
		describe('saveProficiency Getter', () => {
			test('saveProficiency should be the boolean true', () => {
				expect(saveProficiency).toBe(true);
			});
		});
		describe('score Getter', () => {
			test('score Getter should get the number 17', () => {
				expect(score).toBe(17);
			})
		})
		describe('checkProficiency setter', () => {
			let newCheckProf:boolean
			if(wis instanceof Ability) {
				wis.checkProficiency = true;
				newCheckProf = wis.checkProficiency
			}
			
			
			test('Check proficiency setter should change the value of the proficiency to the passed in value', () => {
				expect(newCheckProf).toBe(true);
				expect(newCheckProf).not.toEqual(checkProficiency)
			})
		})
	});
});