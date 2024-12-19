const quiz = {
  totalQuestions: 5,
  questions: [
    {
      id: 1,
      question: "You've got a long drive ahead of You. What kind of album sounds best for the road?",
      answers: [
        {text: "Smooth Jazz", pikaClone: ["Emolga", "Pichu"]},
        {text: "Alternative rock", pikaClone: ["Togedemaru", "Mimikyu"]},
        {text: "Rap", pikaClone: ["Morpeko", "Pawmo"]},
        {text: "Indie/pop", pikaClone: ["Dedenne", "Twins"]},
        {text: "Throwback classics!", pikaClone: ["Pikachu", "Pachirisu"]},
      ],
    },
    {
      id: 2,
      question: "Good morning! What's for breakfast?",
      answers: [
        {text: "Eggs with breakfast meat!", pikaClone: ["Pikachu", "Pawmo"]},
        {text: "Pancakes. Stack em high!", pikaClone: ["Morpeko", "Emolga"]},
        {text: "Acai bowl with fruits and berries", pikaClone: ["Pachirisu"]},
        {text: "Quick bagel or toast", pikaClone: ["Togedemaru", "Mimikyu"]},
        {text: "Running on coffee~", pikaClone: ["Twins", "Dedenne"]},
      ],
    },
    {
      id: 3,
      question: "You go to the theatre. Which movie are you watching?",
      answers: [
        {text: "Anything with guns, sex, or violence!", pikaClone: ["Morpeko", "Pawmo"]},
        {text: "Something animated like Cars 3 lol", pikaClone: ["Pichu", "Pachirisu"]},
        {text: "Horror movie", pikaClone: ["Mimikyu", "Dedenne"]},
        {text: "Sad,romantic", pikaClone: ["Twins", "Togedemaru"]},
        {text: "Something funny like any movie with Jonah Hill", pikaClone: ["Pikachu", "Emolga"]}
      ],

    },
    {
      id: 4,
      question: "What's your favorite type of weather?",
      answers: [
        {text: "Sunny and warm", pikaClone: ["Pikachu", "Twins"]},
        {text: "Rainy and cozy", pikaClone: ["Dedenne", "Togedemaru"]},
        {text: "Cool and breezy", pikaClone: ["Emolga", "Pawmo"]},
        {text: "Stormy and dramatic", pikaClone: ["Mimikyu", "Morpeko"]},
        {text: "Snowy and magical", pikaClone: ["Pachirisu", "Pichu"]}
      ],

    },
    {
      id: 5,
      question: "Which hobby sounds most appealing to you?",
      answers: [
        {text: "Painting or drawing", pikaClone: ["Mimikyu", "Pichu"]},
        {text: "Exploring nature", pikaClone: ["Emolga", "Pikachu"]},
        {text: "Playing team sports", pikaClone: ["Pawmo", "Morpeko"]},
        {text: "Solving the daily NYTimes games", pikaClone: ["Dedenne","Togedemaru"]},
        {text: "Dancing or performing", pikaClone: ["Pachirisu", "Twins"]}
      ],

    },
    {
      id: 6,
      question: "How do you prefer to handle challenges?",
      answers: [
        {text: "Tackle it head-on and power through!", pikaClone: ["Pichu", "Pawmo","Morpeko"]},
        {text: "Analyze the situation carefully before taking action", pikaClone: ["Emolga", "Mimikyu"]},
        {text: "Seek advice and support from others", pikaClone: ["Twins", "Togedemaru"]},
        {text: "Try a creative or unconvential solution", pikaClone: ["Dedenne","Pachirisu"]},
        {text: "Take it slow and steady, no need to rush", pikaClone: ["Pikachu", ""]}
      ],

    },
    {
      id: 7,
      question: "What would be your ideal date?",
      answers: [
        {text: "A quiet dinner at a fancy restaurant", pikaClone: ["Mimikyu", "Togedemaru"]},
        {text: "A thrilling outdoor adventure (like hiking!)", pikaClone: ["Pikachu", "Pawmo"]},
        {text: "Go see a band live! I wanna mosh!", pikaClone: ["Pachirisu", "Morpeko"]},
        {text: "Let's just stay in and watch YouTube videos", pikaClone: ["Pichu","Twins"]},
        {text: "Go to an art museum or a theater", pikaClone: ["Dedenne", "Emolga"]}
      ],

    },
    {
      id: 8,
      question: "How do you prefer to resolve conflicts?",
      answers: [
        {text: "Head-on with clear communication and action", pikaClone: ["Pichu", "Pawmo", "Pachirisu"]},
        {text: "I try to avoid conflict whenever possible", pikaClone: ["Togedemaru","Emolga"]},
        {text: "I listen to both sides and find a compromise", pikaClone: ["Pikachu", "Twins"]},
        {text: "I take a break and give myself time to think", pikaClone: ["Dedenne"]},
        {text: "I don't- I crash out insteadt", pikaClone: ["Morpeko", "Mimikyu"]}
      ],

    },
    {
      id: 9,
      question: "There is someone you want to get to know more at a party. What's your first move?",
      answers: [
        {text: "I try to make a strong and confident impression", pikaClone: ["Pawmo", "Pichu"]},
        {text: "I keep to myself and observe before engaging", pikaClone: ["Togedemaru", "Dedenne"]},
        {text: "I'm friendly and outgoing, always eager to connect", pikaClone: ["Pikachu", "Twins"]},
        {text: "Eh. I'm more interested about where the snacks are", pikaClone: ["Morpeko", "Pachirisu"]},
        {text: "I try to remain nonchalant and mysterious", pikaClone: ["Emolga", "Mimikyu"]}
      ],

    },
    {
      id: 10,
      question: "Last question! What's your favorite generation/region?",
      answers: [
        {text: "Gen 1 - Kanto", pikaClone: ["Pikachu"]},
        {text: "Gen 2 - Johto", pikaClone: ["Pichu"]},
        {text: "Gem 3 - Hoenn", pikaClone: ["Twins"]},
        {text: "Gen 4 - Sinnoh", pikaClone: ["Pachirisu"]},
        {text: "Gen 5 - Unova", pikaClone: ["Emolga"]},
        {text: "Gen 6 - Kalos", pikaClone: ["Dedenne"]},
        {text: "Gen 7 - Alola", pikaClone: ["Togedemaru", "Mimikyu"]},
        {text: "Gen 8 - Galar", pikaClone: ["Morpeko"]},
        {text: "Gen 9 - Paldea", pikaClone: ["Pawmo"]},
    
      ],

    },




  ]


}

export default quiz;