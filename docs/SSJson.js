var treeJson = [
  {
    name: "Systems and Security",
    value: 14,
    type: "black",
    level: "red",
    children: [
      {
        name: "Security Engineer",
        parent: "Systems and Security",
        value: 12,
        type: "grey",
        level: "pink",
        _children: [
          {
            name: "Information Security",
            parent: "Security Engineer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "COURSE",
                parent: "Information Security",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Windows",
            parent: "Security Engineer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "COURSE",
                parent: "Windows",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "CISSP",
            parent: "Security Engineer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "COURSE",
                parent: "CISSP",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Azure",
            parent: "Security Engineer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "COURSE",
                parent: "Azure",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "PCI",
            parent: "Security Engineer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "COURSE",
                parent: "PCI",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
        ],
      },
      {
        name: "Cybersecurity Engineer",
        parent: "Systems and Security",
        value: 12,
        type: "grey",
        level: "pink",
        _children: [
          {
            name: "Information Security",
            parent: "Cybersecurity Engineer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "COURSE",
                parent: "Information Security",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Azure",
            parent: "Cybersecurity Engineer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "COURSE",
                parent: "Azure",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Analysis Skills",
            parent: "Cybersecurity Engineer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "COURSE",
                parent: "Analysis Skills",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "CISSP",
            parent: "Cybersecurity Engineer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "COURSE",
                parent: "CISSP",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "IDS",
            parent: "Cybersecurity Engineer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "COURSE",
                parent: "IDS",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
        ],
      },
      {
        name: "Cloud Security Engineer",
        parent: "Systems and Security",
        value: 12,
        type: "grey",
        level: "pink",
        _children: [
          {
            name: "Azure",
            parent: "Cloud Security Engineer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "COURSE",
                parent: "Azure",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Windows",
            parent: "Cloud Security Engineer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "COURSE",
                parent: "Windows",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Information Security",
            parent: "Cloud Security Engineer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "COURSE",
                parent: "Information Security",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "CISSP",
            parent: "Cloud Security Engineer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "COURSE",
                parent: "CISSP",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "DevOps",
            parent: "Cloud Security Engineer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "COURSE",
                parent: "DevOps",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
        ],
      },
      {
        name: "Security Analyst",
        parent: "Systems and Security",
        value: 12,
        type: "grey",
        level: "pink",
        _children: [
          {
            name: "Information Security",
            parent: "Security Analyst",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "COURSE",
                parent: "Information Security",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Windows",
            parent: "Security Analyst",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "COURSE",
                parent: "Windows",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Analysis Skills",
            parent: "Security Analyst",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "COURSE",
                parent: "Analysis Skills",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "PCI",
            parent: "Security Analyst",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "COURSE",
                parent: "PCI",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Vulnerability Management",
            parent: "Security Analyst",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "COURSE",
                parent: "Vulnerability Management",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
        ],
      },
      {
        name: "Information Systems Security Officer",
        parent: "Systems and Security",
        value: 12,
        type: "grey",
        level: "pink",
        _children: [
          {
            name: "Communication Skills",
            parent: "Information Systems Security Officer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 3870  Software Development II",
                parent: "Communication Skills",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
              {
                name: "ITEC 4230 Data Science & Analytics Capstone Project",
                parent: "Communication Skills",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Windows",
            parent: "Information Systems Security Officer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "COURSE",
                parent: "Windows",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Information Security",
            parent: "Information Systems Security Officer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "COURSE",
                parent: "Information Security",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "CISSP",
            parent: "Information Systems Security Officer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "COURSE",
                parent: "CISSP",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "IAT",
            parent: "Information Systems Security Officer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "COURSE",
                parent: "IAT",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
        ],
      },
    ],
  },
];
console.log(JSON.parse(treeJson));
