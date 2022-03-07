import {Gender, Person} from './entities/Person';

export const alertMe = () => {
	const person = Person.create({name: 'JP', gender: Gender.Male})

	alert(`Hello ${person.name}. We noticed that you are ${person.gender}`);
}
