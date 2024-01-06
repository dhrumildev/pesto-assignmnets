


// class Dhrumil {
//     public title: string;
//     public description: string;
//     public skills: object;

//     constructor(title: string, description: string, skills: object) {
//         this.title = title;
//         this.description = description;
//         this.skills = skills;
//     }
// }

// const LinkedInBanner = new Dhrumil(
//     "Software Engineer",
//     "Coffee-fueled engineer, problem solver, and innovator.",
//     {
//         skillSet: {
//             languages: ["TS", "JS", "Java", "Go", "Solidity", "bash"],
//             fullStack: {
//                 backEnd: ["NestJS", "ExpressJS", "Socket.io", "Springboot"], frontEnd: ["ReactJS", "AngularJS", "VueJS", "jquery", "html", "css"], database: { SQL: ["PostgreSQL", "MySQL"], NoSQL: ["MongoDB", "CouchDB"] },
//                 cloudInfra: {
//                     AWS: ["EC2", "S3", "Lambda", "EKS", "IoT", "ECS", "ECR", "Route53", "RDS", "Managed Blockchain", "Managed IoT"], GCP: ["Compute Engine", "GKE", "Cloud NAT", "Cloud VPN", "Bucket", "Artifacts Registry"], Azure: ["AKS", "AVM"]
//                 },
//                 containerisation: ["Docker", "Docker Swarm", "Kubernetes"]
//             },
//             devOps: ["Version Control", "Jenkins Pipeline", "CI/CD", "Ingress", "Load Balancing", "SSL"],
//             blockchain: { public: ["EVM", "Truffle", "Geth", "Hardhat", "web3.js"], private: ["Hyperledger Umbrella", "Corda"] },
//             others: ["Technical Lead", "System Architect", "JIRA", "Trwllo", "Agile"]
//         }
//     }
// )


class Dhrumil {
    public title: string; public description: string; public skills: object;
    constructor(title: string, description: string, skills: object) { this.title = title; this.description = description; this.skills = skills; }
}
const LinkedInBanner = new Dhrumil(
    "Software Engineer",
    "Coffee-fueled engineer, problem solver, and innovator.",
    {
        languages: ["TS", "JS", "Java", "Go", "Solidity", "bash"],
        fullStack: ["NestJS", "ExpressJS", "Socket.io", "Springboot", "ReactJS", "AngularJS", "VueJS", "jquery", "PostgreSQL", "MySQL", "MongoDB", "CouchDB"],
        devOps: ["AWS", "GCP", "Azure", "Digital Ocean", "Version Control", "Jenkins Pipeline", "CI/CD", "Ingress"],
        blockchain: { public: ["EVM", "Truffle", "Geth", "Hardhat", "web3.js"], private: ["Hyperledger Umbrella", "Corda"] },
        others: ["Technical Lead", "System Architect", "JIRA", "Trello", "Agile"]
    }
)


// const skillSet = {
//     languages: ["TS", "JS", "Java", "Go", "Solidity", "bash"],
//     fullStack: ["NestJS", "ExpressJS", "Socket.io", "Springboot", "ReactJS", "AngularJS", "VueJS", "jquery", "PostgreSQL", "MySQL", "MongoDB", "CouchDB"],
//     devOps: ["AWS", "GCP", "Azure", "Digital Ocean", "Version Control", "Jenkins Pipeline", "CI/CD", "Ingress"],
//     blockchain: {
//         public: ["EVM", "Truffle", "Geth", "Hardhat", "web3.js"], private: ["Hyperledger Umbrella", "Corda"]
//     },
//     others: ["Technical Lead", "System Architect", "JIRA", "Trello", "Agile"]
// }

