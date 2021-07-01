interface ResumeEducationDatainterface {
    year: string;
    title: string;
    description: string;
}

interface ResumeWorkDatainterface {
    year: string;
    title: string;
    description: string;
}

const ResumeEducationData: ResumeEducationDatainterface[] = [
    {
        year: "2010 - 2012",
        title: "MASTERS DEGREE - UNIVERSITY NAME",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    }, {
        year: "2005 - 2008",
        title: "BACHELORS DEGREE - UNIVERSITY NAME",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    }, {
        year: "2003 - 2005",
        title: "GRADUATION - COLLEGE NAME",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    },
];


const ResumeWorkData: ResumeWorkDatainterface[] = [
    {
        year: "2010 - 2012",
        title: "MASTERS DEGREE - UNIVERSITY NAME",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    }, {
        year: "2005 - 2008",
        title: "BACHELORS DEGREE - UNIVERSITY NAME",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    }, {
        year: "2003 - 2005",
        title: "GRADUATION - COLLEGE NAME",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    },
];

export { ResumeEducationData, ResumeWorkData };
