import Class, {ClassLevels, IClassConfig} from '../../src/lib/Class';

describe('Class', () => {
	let newClass: Class;
	let level20Class: Class;
	beforeEach(() => {
		const level20Config : IClassConfig = {
			level: ClassLevels.TWENTY
		}
		newClass = Class.CreateInstance();
		level20Class = Class.CreateInstance({level: ClassLevels.TWENTY})
	})
	test('Class Should Exist', () => {
		expect(Class).toBeDefined()
	})
	describe('Class Creation', () => {
		test('CreateInstance Static Method Should Return a new Instance of the Class', () => {
			expect(newClass).toBeInstanceOf(Class)
		})
		test('newClass Should have property, name, equal to Class', () => {
			expect(newClass).toHaveProperty('name', 'Class');
		})
		test('newClass Should Have property, level, equal to 1', () => {
			expect(newClass).toHaveProperty('level', 1);
		});
		test('newClass should have property, hitDie, that returns 6', () => {
			expect(newClass).toHaveProperty('hitDie', 6)
		})
		test('newClass Should have Property, info, equal to the expected class Info', () => {
			expect(newClass).toHaveProperty('info', {
				name: 'Class',
				hitDie: 6,
				level: 1
			})
		})
		test('level20Class Should Have a property, level, equal to 20', () => {
			expect(level20Class).toHaveProperty('level', 20);
		})
	});
	describe('Public Methods', () => {
		test('Levelup method should increase the level of the Class by 1', () => {
			const originalLevel = newClass.level
			newClass.levelUp();
			const newLevel = newClass.level
			expect(newLevel).toBe(originalLevel + 1)
		})
	})
})