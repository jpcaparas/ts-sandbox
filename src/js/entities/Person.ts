type PersonType = {
    name: string,
    gender?: Gender
}

enum Gender {
    Male = 'Male',
    Female ='Female'
}

class Person {
    public readonly name: string;
    public readonly gender?: string;

    constructor(name: string, gender?: string) {
        this.name = name;
        this.gender = gender;
    }

    static create(params: PersonType) {
        const { name, gender } = params;

        return new Person(name, gender)
    }
}

export { Gender, Person };
