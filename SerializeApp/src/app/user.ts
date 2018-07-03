export class User {
    id: number = 1;
    firstName: string = "Johny";
    lastName: string = "Cage";
    age: number = 27;

    getName(): string {
        return this.firstName + " " + this.lastName;
    }

    isKid(): boolean {
        return this.age < 18;
    }
}
