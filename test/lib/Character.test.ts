import Character from '../../src/lib/Character';

describe('Character Class', () => {
	test('Character Class Should Exist', () => {
		expect(Character).toBeDefined();
	});
	describe('Static Config Method', () => {
		const newCharacter: Character = Character.Config();
		test('New Character Should Be An Instance of Character Class', () => {
			expect(newCharacter).toBeInstanceOf(Character);
		})
	})
});