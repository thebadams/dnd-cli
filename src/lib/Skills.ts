enum Skills {
	ATHLETICS = 'Athletics',
	ACROBATICS = 'Acrobatics',
	SLEIGHT = 'Sleight of Hand',
	STEALTH = 'STEALTH',
	ARCANA = 'Arcana',
	HISTORY = 'History',
	INVESTIGATION = 'Investigation',
	NATURE = 'Nature',
	RELIGION = 'Religion',
	ANIMAL = 'Animal Handling',
	INSIGHT = 'Insight',
	MEDICINE = 'Medicine',
	PERCEPTION = 'Perception',
	SURVIVAL = 'Survival',
	DECEPTION = 'Deception',
	INTIMIDATION = 'Intimidation',
	PERFORMANCE = 'Performance',
	PERSUASION = 'Persuasion'
}

type SkillTypes = Skills.ATHLETICS | Skills.ACROBATICS 

const acrobatics : Skills = Skills.ARCANA