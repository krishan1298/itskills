var treeJson = [
  {
    name: "Data Science and Analytics",
    value: 14,
    type: "black",
    level: "red",
    children: [
      {
        name: "Data Scientist",
        parent: "Data Science and Analytics",
        value: 12,
        type: "grey",
        level: "pink",
        _children: [
          {
            name: "Python",
            parent: "Data Scientist",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 4400 Special Topics",
                parent: "Python",
                value: 9,
                type: "darkblue",
                level: "purple",
              },    
              {
                name: "ITEC 4700  Artificial Intelligence",
                parent: "Python",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
              {
                name: "ITEC 4230 DSA Capstone",
                parent: "Python",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
              {
                name: "DATA 1501 Intro Data Science",
                parent: "Python",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
              {
                name: "Intro Programming",
                parent: "Python",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Machine Learning/AI",
            parent: "Data Scientist",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 4700  Artificial Intelligence",
                parent: "Machine Learning",
                value: 9,
                type: "darkblue",
                level: "purple",
              }, 
              {
                name: "MATH 2050 Statistics",
                parent: "Machine Learning",
                value: 9,
                type: "darkblue",
                level: "purple",
              },         
              {
                name: "MATH 2450 Linear Algebra",
                parent: "Machine Learning",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "SQL",
            parent: "Data Scientist",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 3200  Introduction Databases",
                parent: "SQL",
                value: 9,
                type: "darkblue",
                level: "purple",
              },            
              {
                name: "ITEC 3860  Software Dev I",
                parent: "SQL",
                value: 9,
                type: "darkblue",
                level: "purple",
              },        
              {
                name: "ITEC 4450  Web Dev",
                parent: "SQL",
                value: 9,
                type: "darkblue",
                level: "purple",
              },          
              {
                name: "ITEC 4230 DSA Capstone",
                parent: "SQL",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "R",
            parent: "Data Scientist",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 4220 Advanced Data Analytics",
                parent: "R",
                value: 9,
                type: "darkblue",
                level: "purple",
              },       
              {
                name: "ITEC 4230 DSA Capstone",
                parent: "R",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
        ],
      },
      {
        name: "Data Analyst",
        parent: "Data Science and Analytics",
        value: 12,
        type: "grey",
        level: "pink",
        _children: [
          {
            name: "Python",
            parent: "Data Analyst",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "DATA 1501 Intro Data Science",
                parent: "Python",
                value: 9,
                type: "darkblue",
                level: "purple",
              },        
              {
                name: "Intro Programming",
                parent: "Python",
                value: 9,
                type: "darkblue",
                level: "purple",
              },      
              {
                name: "ITEC 4700 Artificial Intelligence",
                parent: "Python",
                value: 9,
                type: "darkblue",
                level: "purple",
              },       
              {
                name: "ITEC 4400 Special Topics",
                parent: "Python",
                value: 9,
                type: "darkblue",
                level: "purple",
              },          
              {
                name: "ITEC 4230 DSA Capstone",
                parent: "Python",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Machine Learning",
            parent: "Data Analyst",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 4700  Artificial Intelligence",
                parent: "Machine Learning",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "SQL",
            parent: "Data Analyst",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 3200 Intro Databases",
                parent: "SQL",
                value: 9,
                type: "darkblue",
                level: "purple",
              },       
              {
                name: "ITEC 4450 Web Dev",
                parent: "SQL",
                value: 9,
                type: "darkblue",
                level: "purple",
              },       
              {
                name: "ITEC 4220 Advanced Data Analytics",
                parent: "SQL",
                value: 9,
                type: "darkblue",
                level: "purple",
              },        
              {
                name: "ITEC 4230 DSA Capstone",
                parent: "SQL",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "R",
            parent: "Data Analyst",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 4220 Advanced Data Analytics",
                parent: "R",
                value: 9,
                type: "darkblue",
                level: "purple",
              },       
              {
                name: "ITEC 4230 DSA Capstone",
                parent: "R",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Analysis Skills",
            parent: "Data Analyst",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 4220 Advanced Data Analytics",
                parent: "Analysis Skills",
                value: 9,
                type: "darkblue",
                level: "purple",
              },       
              {
                name: "ITEC 4230 DSA Capstone",
                parent: "Analysis Skills",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
        ],
      },
      {
        name: "Data Architect",
        parent: "Data Science and Analytics",
        value: 12,
        type: "grey",
        level: "pink",
        _children: [
          {
            name: "Machine Learning",
            parent: "Data Architect",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 4700  Artificial Intelligence",
                parent: "Machine Learning",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Python",
            parent: "Data Architect",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "DATA 1501 Intro Data Science",
                parent: "Python",
                value: 9,
                type: "darkblue",
                level: "purple",
              },      
              {
                name: "ITEC 2120 Intro Programming",
                parent: "Python",
                value: 9,
                type: "darkblue",
                level: "purple",
              },       
              {
                name: "ITEC 4400 Special Topics",
                parent: "Python",
                value: 9,
                type: "darkblue",
                level: "purple",
              },       
              {
                name: "ITEC 4700  Artificial Intelligence",
                parent: "Python",
                value: 9,
                type: "darkblue",
                level: "purple",
              },      
              {
                name: "ITEC 4230 DSA Capstone",
                parent: "Python",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "AI",
            parent: "Data Architect",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 4700  Artificial Intelligence",
                parent: "AI",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "PyTorch",
            parent: "Data Architect",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 4700  Artificial Intelligence",
                parent: "PyTorch",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "TensorFlow",
            parent: "Data Architect",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 4700  Artificial Intelligence",
                parent: "TensorFlow",
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
