var treeJson = [
  {
    name: "Digital Media",
    value: 14,
    type: "black",
    level: "red",
    children: [
      {
        name: "Marketing Specialist",
        parent: "Digital Media",
        value: 12,
        type: "grey",
        level: "pink",
        _children: [
          {
            name: "Marketing",
            parent: "Marketing Specialist",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 3350 Digital Commerce",
                parent: "Marketing",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Microsoft Excel",
            parent: "Marketing Specialist",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "DATA 1501 Intro to Data Science",
                parent: "Microsoft Excel",
                value: 9,
                type: "darkblue",
                level: "purple",
              },              
              {
                name: "ITEC 2201 Intro to Info Systems",
                parent: "Microsoft Excel",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Social Media Management",
            parent: "Marketing Specialist",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "COURSE",
                parent: "Social Media Management",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Adobe Photoshop",
            parent: "Marketing Specialist",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 2110  Digital Media",
                parent: "Adobe Photoshop",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Microsoft Powerpoint",
            parent: "Marketing Specialist",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 1001 Introduction to Computing",
                parent: "Microsoft Powerpoint",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
        ],
      },
      {
        name: "Communications Specialist",
        parent: "Digital Media",
        value: 12,
        type: "grey",
        level: "pink",
        _children: [
          {
            name: "Writing Skills",
            parent: "Communications Specialist",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "COURSE",
                parent: "Writing Skills",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Communication Skills",
            parent: "Communications Specialist",
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
                name: "ITEC 4230 DSA Capstone",
                parent: "Communication Skills",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Editing",
            parent: "Communications Specialist",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 2110 Digital Media",
                parent: "Editing",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Microsoft Excel",
            parent: "Communications Specialist",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "DATA 1501 Intro to Data Science",
                parent: "Microsoft Excel",
                value: 9,
                type: "darkblue",
                level: "purple",
              },          
              {
                name: "ITEC 2201 Intro to Info Systems",
                parent: "Microsoft Excel",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Social Media Management",
            parent: "Communications Specialist",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "COURSE",
                parent: "Social Media Management",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
        ],
      },
      {
        name: "Media Specialist",
        parent: "Digital Media",
        value: 12,
        type: "grey",
        level: "pink",
        _children: [
          {
            name: "Social Media Management",
            parent: "Media Specialist",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "COURSE",
                parent: "Social Media Management",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Communication Skills",
            parent: "Media Specialist",
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
            ],
          },
          {
            name: "Adobe Photoshop",
            parent: "Media Specialist",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 2110 Digital Media",
                parent: "Adobe Photoshop",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Marketing",
            parent: "Media Specialist",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 3350 Digital Commerce",
                parent: "Marketing",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Writing Skills",
            parent: "Media Specialist",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "COURSE",
                parent: "Writing Skills",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
        ],
      },
      {
        name: "Digital Marketing Specialist",
        parent: "Digital Media",
        value: 12,
        type: "grey",
        level: "pink",
        _children: [
          {
            name: "Digital Marketing",
            parent: "Digital Marketing Specialist",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 3350 Digital Commerce",
                parent: "Digital Marketing",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Social Media Management",
            parent: "Digital Marketing Specialist",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "COURSE",
                parent: "Social Media Management",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Microsoft Excel",
            parent: "Digital Marketing Specialist",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "DATA 1501 Intro to Data Science",
                parent: "Microsoft Excel",
                value: 9,
                type: "darkblue",
                level: "purple",
              },          
              {
                name: "ITEC 2201 Intro to Info Systems",
                parent: "Microsoft Excel",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "SEO",
            parent: "Digital Marketing Specialist",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "COURSE",
                parent: "SEO",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
        ],
      },
      {
        name: "Content Specialist",
        parent: "Digital Media",
        value: 12,
        type: "grey",
        level: "pink",
        _children: [
          {
            name: "Social Media Management",
            parent: "Content Specialist",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "COURSE",
                parent: "Social Media Management",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Marketing",
            parent: "Content Specialist",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 3350 Digital Commerce",
                parent: "Marketing",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Writing Skills",
            parent: "Content Specialist",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "COURSE",
                parent: "Writing Skills",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Editing",
            parent: "Content Specialist",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 2110 Digital Media",
                parent: "Editing",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Adobe Premiere",
            parent: "Content Specialist",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 2110  Digital Media",
                parent: "Adobe Premiere",
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
