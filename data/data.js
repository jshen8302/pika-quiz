const quiz = {
  totalQuestions: 5,
  questions: [
    {
      id: 1,
      question: "You've got a long drive ahead of You. What kind of album sounds best for the road?",
      answers: [
        {
          text: "Smooth Jazz", 
          attributes: [
            {key: 'G', weight: 2},
            {key: 'M', weight: 1},
            {key: 'L', weight: 1}
          ]
        },
        {
          text: "Alternative rock", 
          attributes: [
            {key: 'E', weight: 2},
            {key: 'I', weight: 1},
            {key: 'B', weight: 1},

          ]
        },
        {
          text: "Rap",
          attributes: [
            {key: 'I', weight: 2},
            {key: 'K', weight: 1},
            {key: 'A', weight: 1},
          ]

        },
        {
          text: "Indie/pop",
          attributes: [
            {key: 'H', weight: 2},
            {key: 'N', weight: 1},
            {key: 'J', weight: 1},
          ]
        },
        {
          text: "Throwback classics!",
          attributes: [
            {key: 'C', weight: 2},
            {key: 'F', weight: 2},
            {key: 'D', weight: 1},
          ]
        },
      ],
    },
    {
      id: 2,
      question: "Good morning! What's for breakfast?",
      answers: [
        {
          text: "Eggs with breakfast meat!", 
          attributes: [
            {key: 'J', weight: 2},
            {key: 'K', weight: 1},
          ]
        },
        {
          text: "Pancakes. Stack em high!", 
          attributes: [
            {key: 'A', weight: 2},
            {key: 'B', weight: 1},
            {key: 'G', weight: 2},

          ]
        },
        {
          text: "Acai bowl with fruits and berries",
          attributes: [
            {key: 'N', weight: 2},
            {key: 'H', weight: 1},
          ]
        },
        {
          text: "Quick bagel or toast",
          attributes: [
            {key: 'L', weight: 2},
            {key: 'C', weight: 2},
            {key: 'I', weight: 1},
          ]
        },
        {
          text: "Running on coffee~",
          attributes: [
            {key: 'E', weight: 2},
            {key: 'M', weight: 2},
          ]
        },
      ],
    },
    {
      id: 3,
      question: "You go to the theatre. Which movie are you watching?",
      answers: [
        {
          text: "Action-packed blockbusters", 
          attributes: [
            {key: 'A', weight: 2},
            {key: 'I', weight: 1},
          ]
        },
        {
          text: "Animated films", 
          attributes: [
            {key: 'C', weight: 2},
            {key: 'G', weight: 1},

          ]
        },
        {
          text: "Horror. I want to get spooked",
          attributes: [
            {key: 'B', weight: 2},
            {key: 'E', weight: 1},
          ]

        },
        {
          text: "Romantic dramas",
          attributes: [
            {key: 'D', weight: 1},
            {key: 'H', weight: 1},
            {key: 'J', weight: 2},
          ]
        },
        {
          text: "Something funny with Jonah Hill",
          attributes: [
            {key: 'F', weight: 2},
            {key: 'L', weight: 1},
  
          ]
        },
      ],

    },
    {
      id: 4,
      question: "What's your favorite type of weather?",
      answers: [
        {
          text: "Sunny and warm", 
          attributes: [
            {key: 'A', weight: 2},
            {key: 'D', weight: 1},
          ]
        },
        {
          text: "Rainy and cozy", 
          attributes: [
            {key: 'J', weight: 2},
            {key: 'H', weight: 1},

          ]
        },
        {
          text: "Cool and breezy",
          attributes: [
            {key: 'L', weight: 2},
            {key: 'N', weight: 1},
            {key: 'M', weight: 1},
          ]

        },
        {
          text: "Stormy and dramatic",
          attributes: [
            {key: 'I', weight: 2},
            {key: 'B', weight: 1},
            {key: 'F', weight: 1},
          ]
        },
        {
          text: "Snowy and magical",
          attributes: [
            {key: 'C', weight: 2},
            {key: 'G', weight: 1},
          ]
        },
      ],

    },
    {
      id: 5,
      question: "Which hobby sounds most appealing to you?",
      answers: [
        {
          text: "Painting/drawing",
          attributes: [
            {key: 'M', weight: 2},
            {key: 'H', weight: 1},
            {key: 'N', weight: 1},
          ]
        },
        {
          text: "Exploring nature",
          attributes: [
            {key: 'B', weight: 2},
            {key: 'G', weight: 1},
          ]
        },
        {
          text: "Playing team sports",
          attributes: [
            {key: 'A', weight: 2},
            {key: 'D', weight: 1},
            {key: 'I', weight: 1},
          ]
        },
        {
          text: "Solving puzzles",
          attributes: [
            {key: 'L', weight:2},
            {key: 'C', weight: 1},
          ]
        },
        {
          text: "Dancing/performing",
          attributes: [
            {key: 'F', weight: 2},
            {key: 'A', weight: 1},
            {key: 'M', weight: 1},
          ]
        },
        
      ]

    },
    {
      id: 6,
      question: "How do you prefer to handle challenges?",
      answers: [
        {
          text: "Tackle it head-on and power through!",
          attributes: [
            {key: 'I', weight: 2},
            {key: 'K', weight: 1},
          ]
        },
        {
          text: "Analyze the situation carefully before taking action",
          attributes: [
            {key: 'L', weight: 2},
            {key: 'G', weight: 1},
          ]
        },
        {
          text: "Seek advice and support from others",
          attributes: [
            {key: 'D', weight: 2},
            {key: 'J', weight: 1},
          ]
        },
        {
          text: "Try a creative or unconventional solution",
          attributes: [
            {key: 'M', weight: 2},
            {key: 'C', weight: 1},
          ]
        },
        {
          text: "Take is slow and steady, no need to rush",
          attributes: [
            {key: 'H', weight: 2},
            {key: 'N', weight: 1},
          ]
        }

      ],

    },
    {
      id: 7,
      question: "What would be your ideal date?",
      answers: [
        {
          text: "A quiet dinner at a fancy restaurant",
          attributes: [
            {key: 'E', weight: 2},
            {key: 'H', weight: 1},
            {key: 'J', weight: 1},
          ]

        },
        {
          text: "A thrilling outdoor adventure (like hiking!)",
          attributes: [
            {key: 'B', weight: 2},
            {key: 'I', weight: 1},
            {key: 'K', weight: 1},
          ]

        },
        {
          text: "Go see a band live! I wanna mosh!",
          attributes: [
            {key: 'M', weight: 2},
            {key: 'F', weight: 1},
          ]

        },
        {
          text: "Let's just stay in and watch Youtube videos",
          attributes: [
            {key: 'C', weight: 2},
            {key: 'L', weight: 1},
          ]

        },
        {
          text: "Go to an art museum or a theater",
          attributes: [
            {key: 'G', weight: 2},
            {key: 'D', weight: 1},
            {key: 'N', weight: 1},
          ]

        },
      ]

    },







  ]


}

export default quiz;