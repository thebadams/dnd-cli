import Ability, {IStrConfig, IAbilityConfig, Abilities} from '../../src/lib/Ability';

describe('Ability Class', () => {
	let newAbility: Ability
	let strAbility: Ability
	let badAbility: Ability
	beforeEach(() => {
		const strConfig: IStrConfig = {
			name: Abilities.STR,
			score: 18,
			proficiencies: {
				save: true,
				check: true
			} 
		}
		const badConfig: IAbilityConfig = {
			score: -1
		}
		newAbility = Ability.Create();
		strAbility = Ability.Create(strConfig)
		badAbility = Ability.Create(badConfig);
	})
	test('Ability Should Exist', () => {
		expect(Ability).toBeDefined();
	})
	describe('Default New Ability', () => {
		test('newAbility Should Be An Instance of Ability', () => {
			expect(newAbility).toBeInstanceOf(Ability);
		})
		test('newAbility Should Have the name, default', () => {
			expect(newAbility).toHaveProperty('name', 'Default')
		})
		test('newAbility Should Have the score, 10', () => {
			expect(newAbility).toHaveProperty('score', 10)
		})
		test('newAbility should have property, proficiencies, equal to the expected object', () => {
			expect(newAbility).toHaveProperty('proficiencies', {check: false, save: false})
		})
		test('newAbility should have property, saveProficiency, equal to false', () => {
			expect(newAbility).toHaveProperty('saveProficiency', false)
		})
		test('newAbility should have property, checkProficiency, equal to false', () => {
			expect(newAbility).toHaveProperty('checkProficiency', false);
		})
		describe('Setter Behaviors', () => {
		
			describe('Change Score Method', () => {
				test('Change Score Method should change the score by the amount provided', () => {
					const initialScore = newAbility.score;
					newAbility.changeScore(1)
					const newScore = newAbility.score
					expect(newScore).toEqual(initialScore + 1)
				})
				test('checkProficiency Setter Should Set checkProficiency to the value provided',() => {
					const initialCheck = newAbility.checkProficiency
					newAbility.checkProficiency = true
					const newCheck = newAbility.checkProficiency
					expect(initialCheck).toBe(false);
					expect(newCheck).toBe(true)
				})
				test('saveProficiency Setter Should set saveProficiency to the value provided', () => {
					const initialSave = newAbility.saveProficiency;
					newAbility.saveProficiency = true
					const newSave = newAbility.saveProficiency;
					expect(initialSave).toBe(false);
					expect(newSave).toBe(true)
				})
			})
		})
	})
	describe('Configuration Behavior', () => {
		test('strAbility Should Have Property, name, equal to Strength', () => {
			expect(strAbility).toHaveProperty('name', Abilities.STR);
		})
		test('strAbility Should Have property, score, equal to 18', () => {
			expect(strAbility).toHaveProperty('score', 18);
		})
		test('strAbility Should have property, proficiencies, equal to expected object', () => {
			expect(strAbility).toHaveProperty('proficiencies', {check: true, save: true});
		})
		test('strAbility Should have property, checkProficiency, equal to true', () => {
			expect(strAbility).toHaveProperty('checkProficiency', true);
		})
		test('strAbility Should have property, saveProficiency, equal to true', () => {
			expect(strAbility).toHaveProperty('saveProficiency', true);
		})
		test('badAbility Should have property, score equal to 10', () => {
			expect(badAbility).toHaveProperty('score', 10)
		})
	})
})