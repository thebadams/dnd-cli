import Ability from '../../src/lib/Ability';

describe('Ability Class', () => {
	test('Ability Should Exist', () => {
		expect(Ability).toBeDefined();
	})
	describe('Static Config Method', () => {
		const newAbility : Ability = Ability.Config()
		test('Ability Should Have A Static Method, Config, That Returns A New Instance Of the Ability Class', () =>{
			expect(newAbility).toBeInstanceOf(Ability);
		})
	})
})