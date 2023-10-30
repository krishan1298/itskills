var treeJson = [
  {
    name: "Software Development",
    value: 14,
    type: "black",
    level: "red",
    children: [
      {
        name: "Software Engineer",
        parent: "Software Development",
        value: 12,
        type: "grey",
        level: "pink",
        _children: [
          {
            name: "C#",
            parent: "Software Engineer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 4650 ",
                line2: "Game Dev",
                parent: "C++",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "SQL",
            parent: "Software Engineer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 3200 ",
                line2: "Intro Databases",
                parent: "SQL",
                value: 9,
                type: "darkblue",
                level: "purple",
              },    
              {
                name: "ITEC 4450 ",
                line2: "Web Dev",
                parent: "SQL",
                value: 9,
                type: "darkblue",
                level: "purple",
              },      
              {
                name: "ITEC 4220 ",
                line2: "Advanced Data Analytics",
                parent: "SQL",
                value: 9,
                type: "darkblue",
                level: "purple",
              },         
              {
                name: "ITEC 3860 ",
                line2: "Software Dev I",
                parent: "SQL",
                value: 9,
                type: "darkblue",
                level: "purple",
              },       
              {
                name: "ITEC 4230 ",
                line2: "DSA Capstone",
                parent: "SQL",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "React",
            parent: "Software Engineer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 3870 ",
                line2: "Software Dev II",
                parent: "React",
                value: 9,
                type: "darkblue",
                level: "purple",
              },     
              {
                name: "ITEC 4860 ",
                line2: "Software Dev Project",
                parent: "React",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Agile",
            parent: "Software Engineer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 3870 ",
                line2: "Software Dev II",
                parent: "Agile",
                value: 9,
                type: "darkblue",
                level: "purple",
              },        
              {
                name: "ITEC 4860 ",
                line2: "Software Dev Project",
                parent: "Agile",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Design Patterns",
            parent: "Software Engineer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "COURSE",
                line2: "",
                parent: "Design Patterns",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
        ],
      },
      {
        name: "Software Developer",
        parent: "Software Development",
        value: 12,
        type: "grey",
        level: "pink",
        _children: [
          {
            name: "SQL",
            parent: "Software Developer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 3200 ",
                line2: "Intro Databases",
                parent: "SQL",
                value: 9,
                type: "darkblue",
                level: "purple",
              },    
              {
                name: "ITEC 4450 ",
                line2: "Web Dev",
                parent: "SQL",
                value: 9,
                type: "darkblue",
                level: "purple",
              },      
              {
                name: "ITEC 4220 ",
                line2: "Advanced Data Analytics",
                parent: "SQL",
                value: 9,
                type: "darkblue",
                level: "purple",
              },         
              {
                name: "ITEC 3860 ",
                line2: "Software Dev I",
                parent: "SQL",
                value: 9,
                type: "darkblue",
                level: "purple",
              },       
              {
                name: "ITEC 4230 ",
                line2: "DSA Capstone",
                parent: "SQL",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "CSS",
            parent: "Software Developer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 2130 ",
                line2: "Web Tech",
                parent: "CSS",
                value: 9,
                type: "darkblue",
                level: "purple",
              },     
              {
                name: "ITEC 4450 ",
                line2: "Web Dev",
                parent: "CSS",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "AWS/Azure",
            parent: "Software Dev",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 4000 ",
                line2: "Cloud Computing Technologies",
                parent: "Azure",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "React",
            parent: "Software Developer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 3870 ",
                line2: "Software Dev II",
                parent: "React",
                value: 9,
                type: "darkblue",
                level: "purple",
              },     
              {
                name: "ITEC 4860 ",
                line2: "Software Dev Project",
                parent: "React",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "REST",
            parent: "Software Developer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 3870 ",
                line2: "Software Dev II",
                parent: "REST",
                value: 9,
                type: "darkblue",
                level: "purple",
              },      
              {
                name: "ITEC 4550 ",
                line2: "Mobile Apps Dev",
                parent: "REST",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
        ],
      },
      {
        name: "DevOps Engineer",
        parent: "Software Development",
        value: 12,
        type: "grey",
        level: "pink",
        _children: [
          {
            name: "AWS/Azure",
            parent: "DevOps Engineer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 4000 ",
                line2: "Cloud Computing Technologies",
                parent: "Azure",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Shell Scripting",
            parent: "DevOps Engineer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 4100 ",
                line2: "Advanced Networks",
                parent: "Shell Scripting",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
              {
                name: "ITEC 3600 ",
                line2: "OS",
                parent: "Shell Scripting",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Bash",
            parent: "DevOps Engineer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 3860  ",
                line2: "Software Development I",
                parent: "Bash",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
              {
                name: "ITEC 3870  ",
                line2: "Software Development II",
                parent: "Bash",
                value: 9,
                type: "darkblue",
                level: "purple",
              },           
              {
                name: "ITEC 3300 ",
                line2: "Information Security",
                parent: "Bash",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Java",
            parent: "DevOps Engineer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 3150 ",
                line2: "Advanced Programming",
                parent: "Jenkins",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
        ],
      },
        {
        name: "Web Developer",
        parent: "Software Development",
        value: 12,
        type: "grey",
        level: "pink",
        _children: [
          {
            name: "CSS",
            parent: "Web Developer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 2130 ",
                line2: "Web Tech",
                parent: "CSS",
                value: 9,
                type: "darkblue",
                level: "purple",
              },     
              {
                name: "ITEC 4450 ",
                line2: "Web Dev",
                parent: "CSS",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "SQL",
            parent: "Web Developer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 3200 ",
                line2: "Intro Databases",
                parent: "SQL",
                value: 9,
                type: "darkblue",
                level: "purple",
              },    
              {
                name: "ITEC 4450 ",
                line2: "Web Dev",
                parent: "SQL",
                value: 9,
                type: "darkblue",
                level: "purple",
              },      
              {
                name: "ITEC 4220 ",
                line2: "Advanced Data Analytics",
                parent: "SQL",
                value: 9,
                type: "darkblue",
                level: "purple",
              },         
              {
                name: "ITEC 3860 ",
                line2: "Software Dev I",
                parent: "SQL",
                value: 9,
                type: "darkblue",
                level: "purple",
              },       
              {
                name: "ITEC 4230 ",
                line2: "DSA Capstone",
                parent: "SQL",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Node.js",
            parent: "Web Developer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 3870  ",
                line2: "Software Development II",
                parent: "Node.js",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "React",
            parent: "Web Developer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 3870 ",
                line2: "Software Dev II",
                parent: "React",
                value: 9,
                type: "darkblue",
                level: "purple",
              },     
              {
                name: "ITEC 4860 ",
                line2: "Software Dev Project",
                parent: "React",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "APIs",
            parent: "Web Developer",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 4220 ",
                line2: "Advanced Data Analytics",
                parent: "APIs",
                value: 9,
                type: "darkblue",
                level: "purple",
              },      
              {
                name: "ITEC 3870 ",
                line2: "Software Dev II",
                parent: "APIs",
                value: 9,
                type: "darkblue",
                level: "purple",
              },       
              {
                name: "ITEC 4860 ",
                line2: "Software Dev Project",
                parent: "APIs",
                value: 9,
                type: "darkblue",
                level: "purple",
              },        
              {
                name: "ITEC 4550 ",
                line2: "Mobile Apps Dev",
                parent: "APIs",
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
