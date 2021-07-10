interface ReferencesDatainterface {
    photo: string,
    company: string;
    description: string;
    name: string;
    role: string;
}

const ReferencesData: ReferencesDatainterface[] = [
    {
        photo: "https://fakeimg.pl/300x230/",
        company: "Company-1",
        description: "\"Description about you\"",
        name: "Referee-1 Name",
        role: "Referee-1 role"
    }, {
        photo: "https://fakeimg.pl/300x230/",
        company: "Company-2",
        description: "\"Description about you\"",
        name: "Referee-2 Name",
        role: "Referee-2 role"
    }, {
        photo: "https://fakeimg.pl/300x230/",
        company: "Company-3",
        description: "\"Description about you\"",
        name: "Referee-3 Name",
        role: "Referee-3 role"
    }, {
        photo: "https://fakeimg.pl/300x230/",
        company: "Company-4",
        description: "\"Description about you\"",
        name: "Referee-4 Name",
        role: "Referee-4 role"
    }, {
        photo: "https://fakeimg.pl/300x230/",
        company: "Company-5",
        description: "\"Description about you\"",
        name: "Referee-5 Name",
        role: "Referee-5 role"
    },
];

export { ReferencesData };