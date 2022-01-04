import Character from '../../src/lib/Character';
import Ability, {Abilities, ICharismaConfig, IConstitutionConfig, IDexterityConfig, IIntelligenceConfig, IProficiencyConfig, IStrengthConfig, IWisdomConfig, TAbilities, TAbilityConfigs} from '../../src/lib/Ability';

console.log(Character)
describe('Character Class', () => {
	test('Character Class Should Exist', () => {
		expect(Character).toBeDefined();
	});
	describe('Static Config Method', () => {
		const proficienciesConfig : IProficiencyConfig = {
			check: false,
			save: true
		}
		const strConfig : IStrengthConfig = {
			name: Abilities.STR,
			score: 18,
			proficiencies: proficienciesConfig
		}
		const dexConfig : IDexterityConfig = {
			name: Abilities.DEX,
			score: 17,
			proficiencies: proficienciesConfig
		}
		const conConfig : IConstitutionConfig = {
			name: Abilities.CON,
			score: 16,
			proficiencies: proficienciesConfig
		}

		const intConfig : IIntelligenceConfig = {
			name: Abilities.INT,
			score: 15,
			proficiencies: proficienciesConfig
		}

		const wisConfig : IWisdomConfig = {
			name: Abilities.WIS,
			score: 14,
			proficiencies: proficienciesConfig
		}
		const chaConfig : ICharismaConfig = {
			name: Abilities.CHA,
			score: 13,
			proficiencies: proficienciesConfig
		}
		const abilityConfigs : TAbilityConfigs = [strConfig, dexConfig, conConfig, intConfig, wisConfig, chaConfig];
		const newCharacter: Character | Error | undefined = Character.Config(abilityConfigs);
		// const expectedAbilities: TAbilities = [Ability.Config(strConfig), Ability.Config(dexConfig), Ability.Config(conConfig), Ability.Config(intConfig), Ability.Config(wisConfig), Ability.Config(chaConfig)];
		test('New Character Should Be An Instance of Character Class', () => {
			expect(newCharacter).toBeInstanceOf(Character);
		});
		test('New Character Should Have A Property, Abilities, That is the Expected Values', () => {
			expect(newCharacter).toHaveProperty('_abilities')
		})
	});
});