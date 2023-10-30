var treeJson = [
  {
    name: "Enterprise Systems",
    value: 14,
    type: "black",
    level: "red",
    children: [
      {
        name: "Business Analyst",
        parent: "Enterprise Systems",
        value: 12,
        type: "grey",
        level: "pink",
        _children: [
          {
            name: "ERP Systems",
            parent: "Business Analyst",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 4750 Enterprise Architecture Design",
                line2: "",
                parent: "ERP Systems",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "SQL",
            parent: "Business Analyst",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 3200 ",
                line2: "Intro to Databases",
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
                name: "ITEC 4450 ",
                line2: "Web Dev",
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
            name: "Microsoft Excel",
            parent: "Microsoft Excel",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "DATA 1501 ",
                line2: "Intro to Data Science",
                parent: "Microsoft Excel",
                value: 9,
                type: "darkblue",
                level: "purple",
              },       
              {
                name: "ITEC 2201 ",
                line2: "Intro to Info Systems",
                parent: "Microsoft Excel",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Analysis Skills",
            parent: "Business Analyst",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 4150",
                line2: "Enterprise Process Integration",
                parent: "Analysis Skills",
                value: 9,
                type: "darkblue",
                level: "purple",
              },        
              {
                name: "ITEC 4750 ",
                line2: "Enterprise Architecture Design",
                parent: "Analysis Skills",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "SAP/Power BI/Tableau",
            parent: "Business Analyst",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 4210",
                line2: "Info Analytics",
                parent: "SAP",
                value: 9,
                type: "darkblue",
                level: "purple",
              },         
              {
                name: "ITEC 4750",
                line2: "Enterprise Architecture Design",
                parent: "SAP",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
        ],
      },
      {
        name: "IT Business Analyst",
        parent: "Enterprise Systems",
        value: 12,
        type: "grey",
        level: "pink",
        _children: [
          {
            name: "ERP Systems",
            parent: "IT Business Analyst",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 4750 Enterprise Architecture Design",
                line2: "",
                parent: "ERP Systems",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Business Analysis",
            parent: "IT Business Analyst",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "Domain Elective(s) for General Business",
                line2: "",
                parent: "Business Analysis",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Microsoft Excel",
            parent: "IT Business Analyst",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "DATA 1501 ",
                line2: "Intro to Data Science",
                parent: "Microsoft Excel",
                value: 9,
                type: "darkblue",
                level: "purple",
              },       
              {
                name: "ITEC 2201 ",
                line2: "Intro to Info Systems",
                parent: "Microsoft Excel",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "SQL",
            parent: "IT Business Analyst",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 3200 ",
                line2: "Intro to Databases",
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
                name: "ITEC 4450 ",
                line2: "Web Dev",
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
        ],
      },
      {
        name: "ERP Analyst",
        parent: "Enterprise Systems",
        value: 12,
        type: "grey",
        level: "pink",
        _children: [
          {
            name: "ERP Systems",
            parent: "ERP Analyst",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 4750 Enterprise Architecture Design",
                line2: "",
                parent: "ERP Systems",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Microsoft Excel",
            parent: "ERP Analyst",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "DATA 1501 ",
                line2: "Intro to Data Science",
                parent: "Microsoft Excel",
                value: 9,
                type: "darkblue",
                level: "purple",
              },       
              {
                name: "ITEC 2201 ",
                line2: "Intro to Info Systems",
                parent: "Microsoft Excel",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "SQL",
            parent: "ERP Analyst",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 3200 ",
                line2: "Intro to Databases",
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
                name: "ITEC 4450 ",
                line2: "Web Dev",
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
            name: "SAP/Power BI/Tableau",
            parent: "ERP Analyst",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
             {
                name: "ITEC 4210",
                line2: "Info Analytics",
                parent: "SAP",
                value: 9,
                type: "darkblue",
                level: "purple",
              },         
              {
                name: "ITEC 4750",
                line2: "Enterprise Architecture Design",
                parent: "SAP",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
        ],
      },
      {
        name: "Operations Analyst",
        parent: "Enterprise Systems",
        value: 12,
        type: "grey",
        level: "pink",
        _children: [
          {
            name: "Microsoft Excel",
            parent: "ERP Analyst",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "DATA 1501 ",
                line2: "Intro to Data Science",
                parent: "Microsoft Excel",
                value: 9,
                type: "darkblue",
                level: "purple",
              },       
              {
                name: "ITEC 2201 ",
                line2: "Intro to Info Systems",
                parent: "Microsoft Excel",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Analysis Skills",
            parent: "ERP Analyst",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 4150",
                line2: "Enterprise Process Integration",
                parent: "Analysis Skills",
                value: 9,
                type: "darkblue",
                level: "purple",
              },        
              {
                name: "ITEC 4750 ",
                line2: "Enterprise Architecture Design",
                parent: "Analysis Skills",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "ERP Systems",
            parent: "ERP Analyst",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 4750 Enterprise Architecture Design",
                line2: "",
                parent: "ERP Systems",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "SQL",
            parent: "ERP Analyst",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 3200 ",
                line2: "Intro to Databases",
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
                name: "ITEC 4450 ",
                line2: "Web Dev",
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
        ],
      },
      {
        name: "Financial Analyst",
        parent: "Enterprise Systems",
        value: 12,
        type: "grey",
        level: "pink",
        _children: [
          {
            name: "Microsoft Excel",
            parent: "Financial Analyst",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "DATA 1501 ",
                line2: "Intro to Data Science",
                parent: "Microsoft Excel",
                value: 9,
                type: "darkblue",
                level: "purple",
              },       
              {
                name: "ITEC 2201 ",
                line2: "Intro to Info Systems",
                parent: "Microsoft Excel",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "ERP Systems",
            parent: "Financial Analyst",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 4750 Enterprise Architecture Design",
                line2: "",
                parent: "ERP Systems",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Accounting",
            parent: "Financial Analyst",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "Domain Elective Accounting: ACCT 2101",
                line2: "",
                parent: "Accounting",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Analysis Skills",
            parent: "Financial Analyst",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 4150",
                line2: "Enterprise Process Integration",
                parent: "Analysis Skills",
                value: 9,
                type: "darkblue",
                level: "purple",
              },        
              {
                name: "ITEC 4750 ",
                line2: "Enterprise Architecture Design",
                parent: "Analysis Skills",
                value: 9,
                type: "darkblue",
                level: "purple",
              },
            ],
          },
          {
            name: "Microsoft Powerpoint",
            parent: "Financial Analyst",
            value: 10,
            type: "steelblue",
            level: "green",
            _children: [
              {
                name: "ITEC 1001 Introduction to Computing",
                line2: "",
                parent: "Microsoft Powerpoint",
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
