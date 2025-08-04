// AI Learning Hub - Comprehensive Education Platform

// Application State Management
class AppState {
    constructor() {
        this.currentUser = null;
        this.currentRoute = '/';
        this.isLoading = true;
        this.userProgress = {
            completedActivities: 0,
            videosWatched: 0,
            achievementsEarned: 0,
            learningStreak: 0,
            gradeProgress: {
                '8': 0, '9': 0, '10': 0, '11': 0, '12': 0
            },
            videoProgress: {
                '8': {}, '9': {}, '10': {}, '11': {}, '12': {}
            },
            quizProgress: {
                '8': {}, '9': {}, '10': {}, '11': {}, '12': {}
            },
            achievements: [],
            lastLoginDate: null
        };
        this.gradeData = this.initializeGradeData();
        this.achievements = this.initializeAchievements();
        this.listeners = [];
        this.monacoEditor = null;
    }

    initializeGradeData() {
        return {
            "8": {
                "title": "AI Foundations & Discovery",
                "description": "A comprehensive 30-hour journey into AI fundamentals designed for 8th grade students",
                "totalHours": 30,
                "difficulty": "Beginner",
                "topics": ["What is AI?", "Pattern Recognition", "Computer Vision", "Programming Basics", "AI Ethics"],
                "mainProject": {
                    "title": "My First AI Assistant",
                    "description": "Create a simple voice-activated assistant that can answer basic questions and help with homework reminders",
                    "overview": "Build your first AI project using simple drag-and-drop programming! Create a friendly assistant that can respond to voice commands, tell jokes, and help you remember homework assignments.",
                    "learningOutcomes": [
                        "Learn how voice recognition works",
                        "Understand basic AI conversation patterns", 
                        "Practice simple programming concepts",
                        "Create a helpful personal assistant",
                        "Learn to test and improve your creation"
                    ],
                    "technicalRequirements": [
                        "Computer with internet access",
                        "Scratch programming website (free)",
                        "Microphone (built-in laptop mic is fine)",
                        "Web browser (Chrome, Firefox, or Safari)",
                        "No prior programming experience needed!"
                    ],
                    "projectSteps": [
                        {
                            "step": 1,
                            "title": "Getting Started with Scratch",
                            "description": "Learn the basics of drag-and-drop programming",
                            "tasks": [
                                "Visit scratch.mit.edu and create a free account",
                                "Complete the 'Getting Started' tutorial",
                                "Learn about sprites, sounds, and basic blocks",
                                "Practice making your character move and talk"
                            ],
                            "timeEstimate": "45 minutes"
                        },
                        {
                            "step": 2,
                            "title": "Design Your AI Character",
                            "description": "Create and customize your AI assistant's appearance",
                            "tasks": [
                                "Choose or draw a character for your AI assistant",
                                "Add different costumes for different moods",
                                "Record or find sounds for your assistant's voice",
                                "Give your assistant a name and personality"
                            ],
                            "timeEstimate": "30 minutes"
                        },
                        {
                            "step": 3,
                            "title": "Teach Your Assistant to Listen",
                            "description": "Add voice recognition to your AI assistant",
                            "tasks": [
                                "Add speech-to-text blocks to your project",
                                "Test the microphone and voice recognition",
                                "Make your assistant respond to its name",
                                "Add basic greeting responses"
                            ],
                            "timeEstimate": "45 minutes"
                        },
                        {
                            "step": 4,
                            "title": "Add Smart Responses",
                            "description": "Program your assistant to answer questions",
                            "tasks": [
                                "Create responses for common questions",
                                "Add a joke-telling feature",
                                "Program homework reminder functions",
                                "Test different voice commands"
                            ],
                            "timeEstimate": "1 hour"
                        },
                        {
                            "step": 5,
                            "title": "Make It Smarter",
                            "description": "Add more intelligence to your assistant",
                            "tasks": [
                                "Add weather information responses",
                                "Create a simple quiz game feature", 
                                "Add encouragement and motivation messages",
                                "Program fun facts about AI"
                            ],
                            "timeEstimate": "45 minutes"
                        }
                    ],
                    "resources": [
                        "Scratch for Educators Guide",
                        "Voice Recognition Tutorial Videos",
                        "AI Assistant Design Templates",
                        "Fun Sound Effects Library",
                        "Student Project Examples"
                    ],
                    "assessmentCriteria": [
                        "Assistant responds to voice commands correctly",
                        "Character design is creative and appealing",
                        "Code is organized and easy to understand",
                        "Project shows understanding of AI concepts",
                        "Student can explain how their assistant works"
                    ],
                    "difficulty": "Beginner",
                    "estimatedTime": "4-5 hours",
                    "tutorialVideo": {
  "title": "How to make a AI Assistant in Scratch 3.0",
  "id": "NQRDi9LGzuU",
  "duration": "29:51",
  "description": "Complete tutorial for creating an AI assistant in Scratch 3.0 with text-to-speech, responses, jokes, and time features"
}



                },
                "videos": [
                    {"title": "What is AI? Complete Guide", "id": "2ePf9rue1Ao", "duration": "12:45"},
                    {"title": "How Computers Learn", "id": "aircAruvnKk", "duration": "18:30"},
                    {"title": "AI in Daily Life", "id": "mJeNghZXtMo", "duration": "10:15"}
                ],
                "modules": {
                    "Module 1: What is Artificial Intelligence?": {
                        "duration": "6 hours",
                        "description": "Introduction to AI concepts, history, and applications in everyday life",
                        "videos": [
                            {
                                "title": "What is AI? (Explained with Examples)",
                                "id": "2ePf9rue1Ao",
                                "duration": "12:45",
                                "description": "A comprehensive guide to understanding artificial intelligence with real-world examples"
                            },
                            {
                                "title": "A Brief History of AI",
                                "id": "kWmX3pd1f10",
                                "duration": "10:20",
                                "description": "Journey through the evolution of AI from the 1950s to today"
                            },
                            {
                                "title": "Real Life AI Applications",
                                "id": "ukzFI9rgwfU",
                                "duration": "8:15",
                                "description": "Discover how AI is transforming industries and daily life"
                            }
                        ],
                        "quiz": {
                            "questions": [
                                {
                                    "question": "What does AI stand for?",
                                    "options": ["Artificial Intelligence", "Automated Information", "Advanced Integration", "Artificial Integration"],
                                    "correct": 0,
                                    "explanation": "AI stands for Artificial Intelligence, which refers to machines that can perform tasks that typically require human intelligence."
                                },
                                {
                                    "question": "Which of these is an example of AI in daily life?",
                                    "options": ["Calculator", "Voice assistants like Siri", "Digital clock", "TV remote"],
                                    "correct": 1,
                                    "explanation": "Voice assistants use AI technologies like speech recognition and natural language processing to understand and respond to users."
                                },
                                {
                                    "question": "When was the term 'Artificial Intelligence' first coined?",
                                    "options": ["1940s", "1950s", "1960s", "1970s"],
                                    "correct": 1,
                                    "explanation": "The term 'Artificial Intelligence' was first coined by John McCarthy in 1956 at the Dartmouth Conference."
                                },
                                {
                                    "question": "What is machine learning?",
                                    "options": ["Machines that move", "A subset of AI that learns from data", "Computer hardware", "Internet connectivity"],
                                    "correct": 1,
                                    "explanation": "Machine learning is a subset of AI that enables computers to learn and improve from data without being explicitly programmed."
                                },
                                {
                                    "question": "Which company created the first AI chatbot?",
                                    "options": ["Google", "IBM", "MIT (ELIZA)", "Microsoft"],
                                    "correct": 2,
                                    "explanation": "ELIZA, created at MIT in the 1960s, was one of the first chatbot programs designed to simulate conversation."
                                }
                            ]
                        }
                    },
                    "Module 2: How Computers Learn": {
                        "duration": "8 hours",
                        "description": "Understanding machine learning basics and pattern recognition fundamentals",
                        "videos": [
                            {
                                "title": "Machine Learning Explained Simply",
                                "id": "aircAruvnKk",
                                "duration": "18:30",
                                "description": "Learn how computers can learn patterns from data"
                            },
                            {
                                "title": "Pattern Recognition for Beginners",
                                "id": "bHvf7Tagt18",
                                "duration": "14:25",
                                "description": "Understanding how computers recognize patterns in data"
                            },
                            {
                                "title": "Training AI Models",
                                "id": "R9OHn5ZF4Uo",
                                "duration": "16:40",
                                "description": "Step-by-step process of teaching AI systems"
                            },
                            {
                                "title": "Algorithms and Decision Making",
                                "id": "6M5VXKLf4D4",
                                "duration": "11:35",
                                "description": "How computers make decisions using algorithms"
                            }
                        ],
                        "quiz": {
                            "questions": [
                                {
                                    "question": "What is pattern recognition?",
                                    "options": ["Drawing patterns", "The ability to identify regularities in data", "Creating art", "Writing code"],
                                    "correct": 1,
                                    "explanation": "Pattern recognition is the ability of AI systems to identify regularities, trends, and structures in data."
                                },
                                {
                                    "question": "How do computers learn from data?",
                                    "options": ["By memorizing everything", "By finding patterns and making predictions", "By copying humans", "By guessing randomly"],
                                    "correct": 1,
                                    "explanation": "Computers learn by analyzing data to find patterns and using these patterns to make predictions about new data."
                                },
                                {
                                    "question": "What is training data?",
                                    "options": ["Data used to teach AI systems", "Exercise programs", "Computer games", "Internet websites"],
                                    "correct": 0,
                                    "explanation": "Training data is the dataset used to teach machine learning algorithms to make predictions or decisions."
                                },
                                {
                                    "question": "What happens when AI has insufficient training data?",
                                    "options": ["It works perfectly", "It may make poor predictions", "It runs faster", "It uses less memory"],
                                    "correct": 1,
                                    "explanation": "With insufficient training data, AI systems may not learn proper patterns and could make inaccurate predictions."
                                },
                                {
                                    "question": "Which is an example of supervised learning?",
                                    "options": ["Email spam detection", "Exploring unknown data", "Random generation", "Playing music"],
                                    "correct": 0,
                                    "explanation": "Email spam detection is supervised learning because the AI is trained on labeled examples of spam and non-spam emails."
                                }
                            ]
                        }
                    },
                    "Module 3: Computer Vision & Image Recognition": {
                        "duration": "6 hours",
                        "description": "Exploring how computers see and understand images",
                        "videos": [
                            {
                                "title": "How Computers See Images",
                                "id": "OcycT1Jwsns",
                                "duration": "13:20",
                                "description": "Understanding how computers process and analyze images"
                            },
                            {
                                "title": "Image Classification Basics",
                                "id": "AgkfIQ4IGaM",
                                "duration": "15:45",
                                "description": "Learn how AI can identify objects in pictures"
                            },
                            {
                                "title": "Computer Vision Applications",
                                "id": "mJeNghZXtMo",
                                "duration": "12:10",
                                "description": "Real-world uses of computer vision technology"
                            }
                        ],
                        "quiz": {
                            "questions": [
                                {
                                    "question": "How do computers see images?",
                                    "options": ["With digital eyes", "As arrays of numbers representing pixels", "By taking photos", "Through internet searches"],
                                    "correct": 1,
                                    "explanation": "Computers see images as arrays of numbers, where each number represents the color and intensity of individual pixels."
                                },
                                {
                                    "question": "What is image classification?",
                                    "options": ["Organizing photo albums", "Identifying what objects are in an image", "Making images bigger", "Changing image colors"],
                                    "correct": 1,
                                    "explanation": "Image classification is the process of identifying and categorizing objects or scenes within digital images."
                                },
                                {
                                    "question": "Which is a real application of computer vision?",
                                    "options": ["Self-driving cars", "Making coffee", "Writing essays", "Playing music"],
                                    "correct": 0,
                                    "explanation": "Self-driving cars use computer vision to identify roads, obstacles, traffic signs, and other vehicles."
                                },
                                {
                                    "question": "What are pixels?",
                                    "options": ["Tiny computers", "The smallest units of a digital image", "Types of cameras", "Image formats"],
                                    "correct": 1,
                                    "explanation": "Pixels are the smallest individual units of a digital image, each containing color information."
                                },
                                {
                                    "question": "How does facial recognition work?",
                                    "options": ["Magic", "By analyzing facial features and patterns", "By reading minds", "By voice recognition"],
                                    "correct": 1,
                                    "explanation": "Facial recognition analyzes unique facial features and patterns to identify individuals."
                                }
                            ]
                        }
                    },
                    "Module 4: Programming Basics for AI": {
                        "duration": "6 hours",
                        "description": "Introduction to programming concepts essential for AI development",
                        "videos": [
                            {
    "title": "Scratch Programming for AI",
    "id": "hSnFf_YT5qk", // Working Scratch AI tutorial
    "duration": "18:45",
    "description": "Learn how to create AI projects using Scratch visual programming"
},
                            {
                                "title": "Introduction to Python",
                                "id": "rfscVS0vtbw",
                                "duration": "25:30",
                                "description": "Getting started with Python programming language"
                            },
                            {
                                "title": "Algorithms and Logic",
                                "id": "6hfOvs8pY1k",
                                "duration": "14:45",
                                "description": "Understanding basic algorithms and logical thinking"
                            },
                            {
                                "title": "Building Your First AI Program",
                                "id": "f_uwKZIAeM0",
                                "duration": "18:20",
                                "description": "Create a simple AI program step by step"
                            }
                        ],
                        "quiz": {
                            "questions": [
                                {
                                    "question": "What is an algorithm?",
                                    "options": ["A type of computer", "A step-by-step procedure to solve a problem", "A programming language", "A computer game"],
                                    "correct": 1,
                                    "explanation": "An algorithm is a step-by-step procedure or set of rules designed to solve a specific problem."
                                },
                                {
                                    "question": "Why is Python popular for AI?",
                                    "options": ["It's the fastest language", "It's easy to learn and has many AI libraries", "It's the only programming language", "It was invented for AI"],
                                    "correct": 1,
                                    "explanation": "Python is popular for AI because it's easy to learn, read, and has extensive libraries for machine learning and data science."
                                },
                                {
                                    "question": "What is Scratch programming?",
                                    "options": ["Programming from nothing", "A visual programming language using blocks", "Erasing code", "A type of computer"],
                                    "correct": 1,
                                    "explanation": "Scratch is a visual programming language that uses drag-and-drop blocks to teach programming concepts."
                                },
                                {
                                    "question": "What is debugging?",
                                    "options": ["Removing insects from computers", "Finding and fixing errors in code", "Creating new programs", "Deleting programs"],
                                    "correct": 1,
                                    "explanation": "Debugging is the process of finding and fixing errors or bugs in computer programs."
                                },
                                {
                                    "question": "What is a variable in programming?",
                                    "options": ["Something that changes", "A container that stores data", "A type of loop", "A programming error"],
                                    "correct": 1,
                                    "explanation": "A variable is a container that stores data values that can be used and modified in a program."
                                }
                            ]
                        }
                    },
                    "Module 5: AI Ethics & Responsible Technology": {
                        "duration": "4 hours",
                        "description": "Understanding the importance of ethical AI development and use",
                        "videos": [
                            {
                                "title": "AI Ethics for Students",
                                "id": "fOvTtapxa9c",
                                "duration": "16:25",
                                "description": "Introduction to ethical considerations in AI development"
                            },
                            {
                                "title": "Bias in AI Systems",
                                "id": "59bMh59JQDo",
                                "duration": "12:40",
                                "description": "Understanding how bias can affect AI systems and decisions"
                            },
                            {
                                "title": "Privacy and AI",
                                "id": "tJQSyzBUAew",
                                "duration": "14:30",
                                "description": "How AI affects privacy and data protection"
                            }
                        ],
                        "quiz": {
                            "questions": [
                                {
                                    "question": "What is AI bias?",
                                    "options": ["When AI works too fast", "When AI systems make unfair decisions", "When AI is expensive", "When AI is complex"],
                                    "correct": 1,
                                    "explanation": "AI bias occurs when artificial intelligence systems make unfair or prejudiced decisions, often reflecting biases in training data."
                                },
                                {
                                    "question": "Why is privacy important in AI?",
                                    "options": ["To make AI slower", "To protect personal information from misuse", "To make AI more expensive", "To reduce AI accuracy"],
                                    "correct": 1,
                                    "explanation": "Privacy is important because AI systems often process personal data, and protecting this information prevents misuse and maintains trust."
                                },
                                {
                                    "question": "What should we consider when developing AI?",
                                    "options": ["Only speed and efficiency", "Fairness, transparency, and social impact", "Only cost", "Only technical features"],
                                    "correct": 1,
                                    "explanation": "Responsible AI development considers fairness, transparency, accountability, and positive social impact, not just technical performance."
                                },
                                {
                                    "question": "How can we make AI more fair?",
                                    "options": ["Use diverse training data and test for bias", "Make it faster", "Use more computers", "Make it cheaper"],
                                    "correct": 0,
                                    "explanation": "AI fairness can be improved by using diverse, representative training data and actively testing for and correcting biased outcomes."
                                },
                                {
                                    "question": "What is algorithmic transparency?",
                                    "options": ["Making algorithms invisible", "Making AI decisions explainable", "Using clear computer screens", "Writing short code"],
                                    "correct": 1,
                                    "explanation": "Algorithmic transparency means making AI decisions explainable and understandable to users and stakeholders."
                                }
                            ]
                        }
                    }
                }
            },
            "9": {
                "title": "AI Exploration & Machine Learning",
                "description": "A comprehensive 35-hour journey into machine learning fundamentals and AI applications designed for 9th grade students",
                "totalHours": 35,
                "difficulty": "Intermediate",
                "topics": ["Machine Learning Fundamentals", "Data Science Basics", "Computer Vision Applications", "Python Programming", "AI Project Cycle"],
                "mainProject": {
                    "title": "Smart Home Automation System",
                    "description": "Build an intelligent home automation system that learns your daily patterns and controls smart devices",
                    "overview": "Create your own smart home system using block-based programming and simple sensors. Your system will learn when you usually turn on lights, adjust temperature, and even play your favorite music automatically!",
                    "learningOutcomes": [
                        "Learn how smart home technology works",
                        "Understand pattern recognition in daily routines",
                        "Practice building automation rules",
                        "Work with virtual sensors and devices",
                        "Create a user-friendly control interface"
                    ],
                    "technicalRequirements": [
                        "Computer with internet connection",
                        "MIT App Inventor (free online tool)",
                        "Smartphone or tablet for testing",
                        "Virtual smart home simulator",
                        "Basic understanding of if-then logic"
                    ],
                    "projectSteps": [
                        {
                            "step": 1,
                            "title": "Smart Home Planning",
                            "description": "Design your smart home system and plan its features",
                            "tasks": [
                                "Research real smart home devices and features",
                                "Design your virtual home layout",
                                "List the devices you want to control",
                                "Plan automation rules for different times of day"
                            ],
                            "timeEstimate": "45 minutes"
                        },
                        {
                            "step": 2,
                            "title": "Build the Control Interface",
                            "description": "Create a mobile app to control your smart home",
                            "tasks": [
                                "Set up MIT App Inventor account",
                                "Design buttons for lights, temperature, music",
                                "Add sliders for dimming and volume control",
                                "Create a home status dashboard"
                            ],
                            "timeEstimate": "1.5 hours"
                        },
                        {
                            "step": 3,
                            "title": "Add Smart Automation",
                            "description": "Program your system to learn and automate tasks",
                            "tasks": [
                                "Create time-based automation rules",
                                "Add motion sensor responses",
                                "Program energy-saving features",
                                "Set up voice command recognition"
                            ],
                            "timeEstimate": "2 hours"
                        },
                        {
                            "step": 4,
                            "title": "Make It Learn",
                            "description": "Add machine learning features to your system",
                            "tasks": [
                                "Track user behavior patterns",
                                "Create predictive automation",
                                "Add weather-based adjustments",
                                "Program adaptive lighting based on time"
                            ],
                            "timeEstimate": "1.5 hours"
                        },
                        {
                            "step": 5,
                            "title": "Test and Improve",
                            "description": "Test your smart home system and add improvements",
                            "tasks": [
                                "Test all automation features",
                                "Add security features and alerts",
                                "Create usage reports and statistics",
                                "Get feedback from family and friends"
                            ],
                            "timeEstimate": "1 hour"
                        }
                    ],
                    "resources": [
                        "MIT App Inventor Tutorials",
                        "Smart Home Technology Guide",
                        "Automation Logic Examples",
                        "Virtual Device Templates",
                        "User Interface Design Tips"
                    ],
                    "assessmentCriteria": [
                        "App successfully controls virtual smart devices",
                        "Automation rules work as programmed",
                        "Interface is user-friendly and intuitive",
                        "System demonstrates learning capabilities",
                        "Student can explain the technology behind their system"
                    ],
                    "difficulty": "Intermediate",
                    "estimatedTime": "6-7 hours",
                    "tutorialVideo": {
  "title": "Home Automation App Making Using MIT App Inventor",
  "id": "7uXEs6ILEMk",
  "duration": "12:50",
  "description": "Step-by-step tutorial for creating smart home automation apps with MIT App Inventor"
}



                },
                "videos": [
                    {"title": "Machine Learning Explained", "id": "ukzFI9rgwfU", "duration": "10:25"},
                    {"title": "Introduction to Data Science", "id": "X3paOmcrTjQ", "duration": "15:30"},
                    {"title": "Computer Vision Applications", "id": "2w8XIskzdFw", "duration": "12:45"}
                ],
                "modules": {
                    "Module 1: Machine Learning Fundamentals": {
                        "duration": "8 hours",
                        "description": "Deep dive into how machines learn from data and make predictions",
                        "videos": [
                            {
                                "title": "Machine Learning Explained | How Machines Learn",
                                "id": "ukzFI9rgwfU", 
                                "duration": "10:25",
                                "description": "Comprehensive introduction to machine learning concepts"
                            },
                            {
                                "title": "Types of Machine Learning | Supervised vs Unsupervised",
                                "id": "7eh4d6sabA0",
                                "duration": "12:15",
                                "description": "Understanding different types of machine learning"
                            },
                            {
                                "title": "Decision Trees Explained Visually",
                                "id": "ZVR2Way4nwQ",
                                "duration": "8:45",
                                "description": "How decision trees work in machine learning"
                            },
                            {
                                "title": "Linear Regression from Scratch",
                                "id": "nk2CQITm_eo",
                                "duration": "15:30",
                                "description": "Building your first machine learning model"
                            }
                        ],
                        "quiz": {
                            "questions": [
                                {
                                    "question": "What is the main difference between supervised and unsupervised learning?",
                                    "options": ["Speed of processing", "Use of labeled training data", "Cost of implementation", "Programming language used"],
                                    "correct": 1,
                                    "explanation": "Supervised learning uses labeled training data to learn patterns, while unsupervised learning finds patterns in data without labels."
                                },
                                {
                                    "question": "Which algorithm is best for predicting continuous numerical values?",
                                    "options": ["Classification", "Linear Regression", "Clustering", "Decision Trees only"],
                                    "correct": 1,
                                    "explanation": "Linear regression is specifically designed to predict continuous numerical values by finding relationships between variables."
                                },
                                {
                                    "question": "What does a decision tree split data based on?",
                                    "options": ["Random selection", "Features that best separate classes", "Alphabetical order", "File size"],
                                    "correct": 1,
                                    "explanation": "Decision trees split data based on features that provide the best separation between different classes or outcomes."
                                },
                                {
                                    "question": "Training data in machine learning is used to:",
                                    "options": ["Test the final model", "Teach the algorithm patterns", "Store user information", "Display results"],
                                    "correct": 1,
                                    "explanation": "Training data is used to teach machine learning algorithms to recognize patterns and make predictions."
                                },
                                {
                                    "question": "What is overfitting in machine learning?",
                                    "options": ["Using too much data", "Model performs well on training but poorly on new data", "Algorithm running too fast", "Having too many features"],
                                    "correct": 1,
                                    "explanation": "Overfitting occurs when a model learns the training data too specifically and fails to generalize to new, unseen data."
                                }
                            ]
                        }
                    },
                    "Module 2: Data Science & Statistics": {
                        "duration": "7 hours", 
                        "description": "Understanding data collection, analysis, and visualization for AI",
                        "videos": [
                            {
                                "title": "Introduction to Data Science | What is Data Science?",
                                "id": "X3paOmcrTjQ",
                                "duration": "15:30",
                                "description": "Complete overview of data science field"
                            },
                            {
                                "title": "Data Visualization with Python | Matplotlib Tutorial",
                                "id": "UO98lJQ3QGI",
                                "duration": "18:45",
                                "description": "Creating charts and graphs to understand data"
                            },
                            {
                                "title": "Statistics for Data Science | Mean, Median, Mode",
                                "id": "I10q6fjPxJ0",
                                "duration": "14:20",
                                "description": "Essential statistics concepts for AI"
                            }
                        ],
                        "quiz": {
                            "questions": [
                                {
                                    "question": "What is the primary purpose of data visualization?",
                                    "options": ["Make data look pretty", "Help understand patterns and trends", "Reduce file size", "Encrypt information"],
                                    "correct": 1,
                                    "explanation": "Data visualization helps us understand patterns, trends, and insights in data that might not be obvious in raw numbers."
                                },
                                {
                                    "question": "Which measure of central tendency is least affected by outliers?",
                                    "options": ["Mean", "Median", "Mode", "Range"],
                                    "correct": 1,
                                    "explanation": "The median is the middle value and is less affected by extreme outliers compared to the mean."
                                },
                                {
                                    "question": "What does correlation measure?",
                                    "options": ["Data size", "Relationship strength between variables", "Processing speed", "Storage requirements"],
                                    "correct": 1,
                                    "explanation": "Correlation measures how strongly two variables are related to each other."
                                },
                                {
                                    "question": "Big Data is characterized by:",
                                    "options": ["Only volume", "Volume, Velocity, and Variety", "Color and size", "Age of data"],
                                    "correct": 1,
                                    "explanation": "Big Data is typically characterized by the 3 V's: Volume (size), Velocity (speed), and Variety (types)."
                                },
                                {
                                    "question": "Data cleaning involves:",
                                    "options": ["Deleting all data", "Removing errors and inconsistencies", "Making data colorful", "Compressing files"],
                                    "correct": 1,
                                    "explanation": "Data cleaning involves identifying and correcting errors, inconsistencies, and missing values in datasets."
                                }
                            ]
                        }
                    },
                    "Module 3: Advanced Computer Vision": {
                        "duration": "8 hours",
                        "description": "Exploring image recognition, object detection, and real-world applications",
                        "videos": [
                            {
                                "title": "Computer Vision Applications | Real World Examples",
                                "id": "2w8XIskzdFw",
                                "duration": "12:45",
                                "description": "How computer vision is used in industry"
                            },
                            {
                                "title": "Image Recognition with Deep Learning",
                                "id": "AgkfIQ4IGaM",
                                "duration": "16:30",
                                "description": "How neural networks recognize images"
                            },
                            {
                                "title": "Object Detection Explained | YOLO Algorithm",
                                "id": "4eIBisqx9_g",
                                "duration": "11:20",
                                "description": "Advanced object detection techniques"
                            },
                            {
    "title": "Face Recognition Technology | How it Works",
    "id": "73028jBenQA", // Working educational video
    "duration": "15:30",
    "description": "Understanding how AI-powered facial recognition systems work and their applications"
}

                        ],
                        "quiz": {
                            "questions": [
                                {
                                    "question": "What is the difference between image classification and object detection?",
                                    "options": ["No difference", "Classification identifies what's in image, detection finds where objects are", "Detection is faster", "Classification is more accurate"],
                                    "correct": 1,
                                    "explanation": "Image classification identifies what objects are in an image, while object detection also locates where they are positioned."
                                },
                                {
                                    "question": "CNN stands for:",
                                    "options": ["Computer Neural Network", "Convolutional Neural Network", "Central News Network", "Complex Number Network"],
                                    "correct": 1,
                                    "explanation": "CNN stands for Convolutional Neural Network, a type of deep learning model especially effective for image processing."
                                },
                                {
                                    "question": "What are pixels in digital images?",
                                    "options": ["Tiny squares with color values", "Image formats", "Camera settings", "File sizes"],
                                    "correct": 0,
                                    "explanation": "Pixels are the smallest units of a digital image, each containing color information represented by numerical values."
                                },
                                {
                                    "question": "Edge detection in computer vision helps to:",
                                    "options": ["Color images", "Identify object boundaries", "Compress files", "Add filters"],
                                    "correct": 1,
                                    "explanation": "Edge detection identifies boundaries and outlines of objects in images, which is crucial for object recognition."
                                },
                                {
                                    "question": "Transfer learning in computer vision means:",
                                    "options": ["Moving images between computers", "Using pre-trained models for new tasks", "Converting image formats", "Transferring ownership"],
                                    "correct": 1,
                                    "explanation": "Transfer learning uses knowledge gained from pre-trained models to solve new but related problems more efficiently."
                                }
                            ]
                        }
                    },
                    "Module 4: Python Programming for AI": {
                        "duration": "7 hours",
                        "description": "Advanced Python concepts including libraries for AI and data science",
                        "videos": [
                            {
                                "title": "Python for Data Science | NumPy and Pandas",
                                "id": "vmEHCJofslg",
                                "duration": "22:15",
                                "description": "Essential Python libraries for data manipulation"
                            },
                            {
                                "title": "Python Functions and Modules Explained",
                                "id": "9Os0o3wzS_I",
                                "duration": "14:30",
                                "description": "Organizing code with functions and modules"
                            },
                            {
                                "title": "Object-Oriented Programming in Python",
                                "id": "JeznW_7DlB0",
                                "duration": "18:45",
                                "description": "Introduction to classes and objects"
                            },
                            {
                                "title": "Error Handling in Python | Try-Except Blocks",
                                "id": "NIWwJbo-9_8",
                                "duration": "12:20",
                                "description": "Handling errors gracefully in Python programs"
                            }
                        ],
                        "quiz": {
                            "questions": [
                                {
                                    "question": "What is NumPy primarily used for in Python?",
                                    "options": ["Web development", "Numerical computing and arrays", "Game development", "File management"],
                                    "correct": 1,
                                    "explanation": "NumPy is a library for numerical computing, especially for working with arrays and mathematical operations."
                                },
                                {
                                    "question": "Pandas is best known for:",
                                    "options": ["Image processing", "Data manipulation and analysis", "Web scraping", "GUI development"],
                                    "correct": 1,
                                    "explanation": "Pandas is the go-to library for data manipulation, cleaning, and analysis in Python."
                                },
                                {
                                    "question": "What is a function in programming?",
                                    "options": ["A type of loop", "A reusable block of code", "A variable type", "An error message"],
                                    "correct": 1,
                                    "explanation": "A function is a reusable block of code that performs a specific task and can be called multiple times."
                                },
                                {
                                    "question": "Object-oriented programming is based on:",
                                    "options": ["Functions only", "Classes and objects", "Variables only", "Loops only"],
                                    "correct": 1,
                                    "explanation": "Object-oriented programming organizes code using classes (blueprints) and objects (instances of classes)."
                                },
                                {
                                    "question": "Try-except blocks are used for:",
                                    "options": ["Creating loops", "Handling errors gracefully", "Defining functions", "Importing libraries"],
                                    "correct": 1,
                                    "explanation": "Try-except blocks allow programs to handle errors gracefully instead of crashing when problems occur."
                                }
                            ]
                        }
                    },
                    "Module 5: AI Project Cycle & Ethics": {
                        "duration": "5 hours",
                        "description": "Understanding the complete AI development process and ethical considerations",
                        "videos": [
                            {
                                "title": "AI Project Cycle | Problem to Solution",
                                "id": "4aZY2MZmNBo",
                                "duration": "13:30",
                                "description": "Complete AI project development lifecycle"
                            },
                            {
                                "title": "AI Ethics and Bias | Responsible AI Development",
                                "id": "PaEvuv7IVNg",
                                "duration": "15:45",
                                "description": "Ethical considerations in AI development"
                            },
                            {
                                "title": "Data Privacy in AI | Protecting User Information",
                                "id": "tJQSyzBUAew",
                                "duration": "11:20",
                                "description": "Privacy and security in AI systems"
                            }
                        ],
                        "quiz": {
                            "questions": [
                                {
                                    "question": "The AI Project Cycle typically starts with:",
                                    "options": ["Coding", "Problem identification and scoping", "Data collection", "Model deployment"],
                                    "correct": 1,
                                    "explanation": "The AI project cycle begins with clearly identifying and defining the problem you want to solve."
                                },
                                {
                                    "question": "Algorithmic bias occurs when:",
                                    "options": ["Algorithms run slowly", "AI systems discriminate unfairly", "Code has bugs", "Data is encrypted"],
                                    "correct": 1,
                                    "explanation": "Algorithmic bias happens when AI systems unfairly discriminate against certain groups due to biased training data or design."
                                },
                                {
                                    "question": "Data privacy in AI means:",
                                    "options": ["Hiding all data", "Protecting personal information appropriately", "Making data colorful", "Storing data longer"],
                                    "correct": 1,
                                    "explanation": "Data privacy involves protecting personal information and ensuring it's used appropriately with proper consent."
                                },
                                {
                                    "question": "Model evaluation helps to:",
                                    "options": ["Make models bigger", "Assess how well the AI performs", "Reduce costs", "Speed up processing"],
                                    "correct": 1,
                                    "explanation": "Model evaluation measures how accurately and effectively an AI system performs its intended task."
                                },
                                {
                                    "question": "Responsible AI development includes:",
                                    "options": ["Making AI faster only", "Considering fairness, transparency, and accountability", "Using more data", "Reducing costs only"],
                                    "correct": 1,
                                    "explanation": "Responsible AI development considers ethical factors like fairness, transparency, accountability, and societal impact."
                                }
                            ]
                        }
                    }
                }
            },
            "10": {
            "title": "Neural Networks & Advanced AI Applications",
            "description": "A comprehensive 42-hour advanced journey into neural networks, deep learning, and ethical AI applications designed for 10th grade students",
            "totalHours": 42,
            "difficulty": "Intermediate",
            "topics": ["Neural Networks", "Deep Learning", "Computer Vision", "Natural Language Processing", "AI Ethics", "Model Evaluation"],
            "mainProject": {
                "title": "Smart Health Symptom Checker AI",
                "description": "Build an intelligent health symptom checker that can analyze symptoms and provide basic health recommendations using machine learning",
                "overview": "Create a comprehensive AI-powered health assistant that can analyze user symptoms, provide basic health information, and recommend appropriate actions. This project combines machine learning, natural language processing, and ethical AI considerations.",
                "learningOutcomes": [
                "Understand neural network architecture and functioning",
                "Learn to work with healthcare data responsibly",
                "Practice natural language processing for symptom analysis",
                "Implement classification algorithms for decision making",
                "Apply AI ethics in sensitive healthcare applications"
                ],
                "technicalRequirements": [
                "Python 3.8+ with scikit-learn and pandas",
                "Jupyter Notebook or Google Colab",
                "Basic understanding of machine learning concepts",
                "Access to healthcare datasets (provided)",
                "Understanding of data privacy and ethics"
                ],
                "projectSteps": [
                {
                    "step": 1,
                    "title": "Healthcare Data Understanding",
                    "description": "Learn about medical data types and ethical considerations",
                    "tasks": [
                    "Study different types of medical data and symptoms",
                    "Understand privacy laws and ethical considerations",
                    "Explore the provided symptom-disease dataset",
                    "Learn about data preprocessing for healthcare",
                    "Identify potential biases in medical AI systems"
                    ],
                    "timeEstimate": "1.5 hours"
                },
                {
                    "step": 2,
                    "title": "Data Preprocessing & Feature Engineering",
                    "description": "Clean and prepare healthcare data for machine learning",
                    "tasks": [
                    "Clean and validate the symptom dataset",
                    "Handle missing values and outliers",
                    "Create feature vectors from symptom descriptions",
                    "Implement data encoding for categorical variables",
                    "Split data into training and testing sets"
                    ],
                    "timeEstimate": "2 hours"
                },
                {
                    "step": 3,
                    "title": "Build Classification Models",
                    "description": "Implement multiple ML algorithms for symptom analysis",
                    "tasks": [
                    "Implement Decision Tree classifier",
                    "Build Random Forest model for better accuracy",
                    "Create a simple neural network using scikit-learn",
                    "Compare model performances",
                    "Implement cross-validation for robust testing"
                    ],
                    "timeEstimate": "2.5 hours"
                },
                {
                    "step": 4,
                    "title": "Natural Language Processing Integration",
                    "description": "Add NLP capabilities for symptom text analysis",
                    "tasks": [
                    "Implement text preprocessing (tokenization, stemming)",
                    "Create a symptom keyword extraction system",
                    "Build a text-to-symptom mapping function",
                    "Add support for multiple symptom descriptions",
                    "Test with various input formats"
                    ],
                    "timeEstimate": "2 hours"
                },
                {
                    "step": 5,
                    "title": "User Interface Development",
                    "description": "Create an intuitive interface for the health checker",
                    "tasks": [
                    "Design a simple web interface using Streamlit",
                    "Add symptom input forms and dropdowns",
                    "Implement real-time symptom analysis",
                    "Create clear result displays with recommendations",
                    "Add disclaimer and privacy notices"
                    ],
                    "timeEstimate": "1.5 hours"
                },
                {
                    "step": 6,
                    "title": "Testing & Ethical Validation",
                    "description": "Comprehensive testing and ethical review",
                    "tasks": [
                    "Test with diverse symptom combinations",
                    "Validate model accuracy and reliability",
                    "Review for potential biases",
                    "Add appropriate medical disclaimers",
                    "Document limitations and recommendations"
                    ],
                    "timeEstimate": "1 hour"
                }
                ],
                "resources": [
                "Healthcare AI Ethics Guidelines",
                "Symptom-Disease Dataset (curated)",
                "Scikit-learn Documentation",
                "Medical AI Best Practices Guide",
                "Python Healthcare Libraries Tutorial"
                ],
                "assessmentCriteria": [
                "Model achieves reasonable accuracy on test data",
                "Interface is user-friendly and informative",
                "Proper ethical considerations are implemented",
                "Code is well-documented and structured",
                "Student can explain AI limitations in healthcare"
                ],
                "difficulty": "Intermediate",
                "estimatedTime": "10-12 hours",
                "tutorialVideo": {
  "title": "Build a Fullstack AI Medical Assistant (Step-by-Step Tutorial)",
  "id": "hULLuQ1UFaM",
  "duration": "37:23", 
  "description": "Complete step-by-step tutorial for building an AI-powered medical assistant with symptom checking, health analysis, and secure user authentication"
}

            },
            "videos": [
                {"title": "Understanding Neural Networks", "id": "aircAruvnKk", "duration": "18:30"},
                {"title": "Deep Learning Explained", "id": "6M5VXKLf4D4", "duration": "15:45"},
                {"title": "AI in Healthcare", "id": "59bMh59JQDo", "duration": "12:20"}
            ],
            "modules": {
                "Module 1: Neural Networks Fundamentals": {
                "duration": "8 hours",
                "description": "Deep understanding of how neural networks work and their applications",
                "videos": [
                    {
                    "title": "What are Neural Networks? | Deep Learning Explained",
                    "id": "aircAruvnKk",
                    "duration": "18:30",
                    "description": "Comprehensive introduction to neural networks and how they learn"
                    },
                    {
                    "title": "Perceptron and Multi-layer Networks",
                    "id": "6M5VXKLf4D4",
                    "duration": "15:45",
                    "description": "Understanding the building blocks of neural networks"
                    },
                    {
                    "title": "Backpropagation Algorithm Explained",
                    "id": "Ilg3gGewQ5U",
                    "duration": "14:25",
                    "description": "How neural networks learn through backpropagation"
                    },
                    {
                    "title": "Activation Functions in Neural Networks",
                    "id": "ZzWaow1Rvho",
                    "duration": "12:15",
                    "description": "Different activation functions and their uses"
                    }
                ],
                "quiz": {
                    "questions": [
                    {
                        "question": "What is the primary function of a neural network?",
                        "options": ["Store data", "Learn patterns from data", "Compress files", "Display graphics"],
                        "correct": 1,
                        "explanation": "Neural networks are designed to learn patterns from data by adjusting weights through training."
                    },
                    {
                        "question": "What does backpropagation do in neural networks?",
                        "options": ["Moves data forward", "Adjusts weights based on errors", "Deletes neurons", "Increases speed"],
                        "correct": 1,
                        "explanation": "Backpropagation adjusts the weights in the network by propagating errors backward from output to input."
                    },
                    {
                        "question": "Which activation function is commonly used in hidden layers?",
                        "options": ["Linear", "ReLU", "Binary", "Absolute"],
                        "correct": 1,
                        "explanation": "ReLU (Rectified Linear Unit) is widely used in hidden layers due to its simplicity and effectiveness."
                    },
                    {
                        "question": "What happens during the training phase of a neural network?",
                        "options": ["Network makes predictions", "Weights are adjusted using training data", "Data is deleted", "Network shuts down"],
                        "correct": 1,
                        "explanation": "During training, the network learns by adjusting weights based on training data and desired outputs."
                    },
                    {
                        "question": "What is overfitting in neural networks?",
                        "options": ["Too many neurons", "Learning training data too specifically", "Running too fast", "Using wrong data"],
                        "correct": 1,
                        "explanation": "Overfitting occurs when a model learns training data too specifically and fails to generalize to new data."
                    }
                    ]
                }
                },
                "Module 2: Deep Learning Applications": {
                "duration": "9 hours",
                "description": "Advanced deep learning techniques and real-world applications",
                "videos": [
                    {
                    "title": "Convolutional Neural Networks (CNNs) Explained",
                    "id": "YRhxdVk_sIs",
                    "duration": "16:30",
                    "description": "Understanding CNNs for image processing and computer vision"
                    },
                    {
                    "title": "Recurrent Neural Networks (RNNs) and LSTM",
                    "id": "8HyCNIVRbSU",
                    "duration": "19:45",
                    "description": "Sequential data processing with RNNs and Long Short-Term Memory"
                    },
                    {
                    "title": "Transfer Learning in Deep Learning",
                    "id": "yofjFQddwHE",
                    "duration": "13:20",
                    "description": "Using pre-trained models for new tasks"
                    },
                    {
                    "title": "Generative AI and Neural Networks",
                    "id": "G2fqAlgmoPo",
                    "duration": "17:25",
                    "description": "How neural networks can generate new content"
                    }
                ],
                "quiz": {
                    "questions": [
                    {
                        "question": "What makes CNNs particularly good for image processing?",
                        "options": ["They're faster", "They use convolutional layers to detect features", "They need less data", "They're simpler"],
                        "correct": 1,
                        "explanation": "CNNs use convolutional layers that can detect spatial features in images like edges, shapes, and patterns."
                    },
                    {
                        "question": "What type of data are RNNs best suited for?",
                        "options": ["Images", "Sequential data", "Audio only", "Static data"],
                        "correct": 1,
                        "explanation": "RNNs are designed to handle sequential data where the order of information matters, like text or time series."
                    },
                    {
                        "question": "What is transfer learning?",
                        "options": ["Moving data between computers", "Using pre-trained models for new tasks", "Converting file formats", "Backing up models"],
                        "correct": 1,
                        "explanation": "Transfer learning involves using a model trained on one task as a starting point for a related task."
                    },
                    {
                        "question": "LSTM networks solve which problem of traditional RNNs?",
                        "options": ["Speed", "Vanishing gradient problem", "Memory usage", "Complexity"],
                        "correct": 1,
                        "explanation": "LSTM networks address the vanishing gradient problem, allowing them to learn long-term dependencies."
                    },
                    {
                        "question": "What can generative AI models do?",
                        "options": ["Only classify data", "Create new content similar to training data", "Delete information", "Compress files"],
                        "correct": 1,
                        "explanation": "Generative AI models can create new content (text, images, music) that resembles their training data."
                    }
                    ]
                }
                },
                "Module 3: Computer Vision with Deep Learning": {
                "duration": "8 hours",
                "description": "Advanced computer vision techniques using deep learning",
                "videos": [
                    {
                    "title": "Object Detection with YOLO Algorithm",
                    "id": "4eIBisqx9_g",
                    "duration": "15:20",
                    "description": "Real-time object detection using You Only Look Once algorithm"
                    },
                    {
                    "title": "Image Segmentation and Semantic Understanding",
                    "id": "5QUmlXBb0MY",
                    "duration": "18:15",
                    "description": "Advanced techniques for understanding image content"
                    },
                    {
                    "title": "Facial Recognition and Biometric Systems",
                    "id": "Y0dLgtF4IHM",
                    "duration": "14:30",
                    "description": "How AI recognizes and identifies faces"
                    },
                    {
                    "title": "Medical Image Analysis with AI",
                    "id": "_VERi9OVOsQ",
                    "duration": "16:45",
                    "description": "Applications of computer vision in healthcare"
                    }
                ],
                "quiz": {
                    "questions": [
                    {
                        "question": "What does YOLO stand for in object detection?",
                        "options": ["You Only Look Once", "Your Only Learning Option", "Yellow Object Location Only", "Year Of Learning Objects"],
                        "correct": 0,
                        "explanation": "YOLO stands for 'You Only Look Once', referring to its ability to detect objects in a single pass."
                    },
                    {
                        "question": "What is image segmentation?",
                        "options": ["Cutting images into pieces", "Dividing images into meaningful regions", "Compressing images", "Converting image formats"],
                        "correct": 1,
                        "explanation": "Image segmentation involves dividing an image into meaningful regions or segments for analysis."
                    },
                    {
                        "question": "What ethical concerns exist with facial recognition?",
                        "options": ["None", "Privacy and surveillance issues", "Too expensive", "Takes too much storage"],
                        "correct": 1,
                        "explanation": "Facial recognition raises significant privacy and surveillance concerns regarding consent and misuse."
                    },
                    {
                        "question": "How can AI help in medical imaging?",
                        "options": ["Only by storing images", "Detecting diseases and abnormalities", "Making images prettier", "Reducing file sizes"],
                        "correct": 1,
                        "explanation": "AI can analyze medical images to detect diseases, abnormalities, and assist in diagnosis."
                    },
                    {
                        "question": "What is semantic segmentation?",
                        "options": ["Classifying entire images", "Labeling each pixel in an image", "Finding object boundaries", "Measuring image quality"],
                        "correct": 1,
                        "explanation": "Semantic segmentation involves labeling each pixel in an image with the class of object it belongs to."
                    }
                    ]
                }
                },
                "Module 4: Natural Language Processing": {
                "duration": "8 hours",
                "description": "Understanding and processing human language with AI",
                "videos": [
                    {
                    "title": "Introduction to Natural Language Processing",
                    "id": "WGsx0Kh0CWA",
                    "duration": "17:30",
                    "description": "Fundamentals of how computers understand human language"
                    },
                    {
                    "title": "Sentiment Analysis and Text Classification",
                    "id": "PaEvuv7IVNg",
                    "duration": "15:45",
                    "description": "Analyzing emotions and categorizing text data"
                    },
                    {
                    "title": "Chatbots and Conversational AI",
                    "id": "tJQSyzBUAew",
                    "duration": "19:20",
                    "description": "Building systems that can have conversations with humans"
                    },
                    {
                    "title": "Language Translation and Understanding",
                    "id": "4aZY2MZmNBo",
                    "duration": "16:15",
                    "description": "How AI translates between languages and understands meaning"
                    }
                ],
                "quiz": {
                    "questions": [
                    {
                        "question": "What is tokenization in NLP?",
                        "options": ["Encrypting text", "Breaking text into individual words or tokens", "Translating languages", "Counting words"],
                        "correct": 1,
                        "explanation": "Tokenization is the process of breaking text into individual words, phrases, or meaningful units called tokens."
                    },
                    {
                        "question": "What does sentiment analysis determine?",
                        "options": ["Word count", "Emotional tone of text", "Grammar errors", "Reading difficulty"],
                        "correct": 1,
                        "explanation": "Sentiment analysis determines the emotional tone or attitude expressed in text (positive, negative, neutral)."
                    },
                    {
                        "question": "How do modern chatbots understand context?",
                        "options": ["They don't", "Using neural networks and language models", "By memorizing responses", "Through keyword matching only"],
                        "correct": 1,
                        "explanation": "Modern chatbots use neural networks and large language models to understand context and generate appropriate responses."
                    },
                    {
                        "question": "What challenge exists in machine translation?",
                        "options": ["Speed only", "Preserving meaning and context across languages", "Storage space", "Internet connectivity"],
                        "correct": 1,
                        "explanation": "Machine translation must preserve meaning, context, and cultural nuances when converting between languages."
                    },
                    {
                        "question": "What is named entity recognition (NER)?",
                        "options": ["Counting names", "Identifying and classifying named entities in text", "Checking spelling", "Formatting text"],
                        "correct": 1,
                        "explanation": "NER identifies and classifies named entities like people, places, organizations, and dates in text."
                    }
                    ]
                }
                },
                "Module 5: AI Ethics and Model Evaluation": {
                "duration": "9 hours",
                "description": "Understanding responsible AI development and model assessment",
                "videos": [
                    {
                    "title": "AI Bias and Fairness in Machine Learning",
                    "id": "59bMh59JQDo",
                    "duration": "18:25",
                    "description": "Understanding and addressing bias in AI systems"
                    },
                    {
                    "title": "Model Evaluation Metrics and Techniques",
                    "id": "fOvTtapxa9c",
                    "duration": "20:15",
                    "description": "How to measure and improve AI model performance"
                    },
                    {
                    "title": "Privacy and Security in AI Systems",
                    "id": "t4kyRyKyOpo",
                    "duration": "16:30",
                    "description": "Protecting data and ensuring secure AI deployment"
                    },
                    {
                    "title": "Responsible AI Development and Deployment",
                    "id": "8nt3edWLgIg",
                    "duration": "19:40",
                    "description": "Best practices for ethical AI development"
                    }
                ],
                "quiz": {
                    "questions": [
                    {
                        "question": "What is algorithmic bias?",
                        "options": ["When AI runs slowly", "Unfair discrimination by AI systems", "When code has errors", "When data is missing"],
                        "correct": 1,
                        "explanation": "Algorithmic bias occurs when AI systems make unfair or discriminatory decisions against certain groups."
                    },
                    {
                        "question": "Which metric measures how often predictions are correct?",
                        "options": ["Speed", "Accuracy", "Memory usage", "File size"],
                        "correct": 1,
                        "explanation": "Accuracy measures the percentage of correct predictions made by a model."
                    },
                    {
                        "question": "What is differential privacy?",
                        "options": ["Different types of privacy", "A technique to protect individual privacy in datasets", "Expensive privacy", "Private internet"],
                        "correct": 1,
                        "explanation": "Differential privacy is a mathematical framework for protecting individual privacy when analyzing datasets."
                    },
                    {
                        "question": "Why is model interpretability important?",
                        "options": ["Makes models faster", "Helps understand how decisions are made", "Reduces costs", "Improves graphics"],
                        "correct": 1,
                        "explanation": "Model interpretability helps users understand how AI systems make decisions, building trust and enabling debugging."
                    },
                    {
                        "question": "What should be considered when deploying AI in healthcare?",
                        "options": ["Only accuracy", "Patient safety, privacy, and regulatory compliance", "Only speed", "Only cost"],
                        "correct": 1,
                        "explanation": "Healthcare AI deployment must consider patient safety, data privacy, regulatory requirements, and ethical implications."
                    }
                    ]
                }
                }
            }
            },
"11": {
    "title": "Advanced AI Innovation & Research",
    "description": "A comprehensive 48-hour advanced journey into cutting-edge AI research, innovation methodologies, and real-world applications designed for 11th grade students",
    "totalHours": 48,
    "difficulty": "Advanced",
    "topics": ["Advanced Machine Learning", "AI Research Methods", "Natural Language Processing", "Computer Vision Projects", "AI Ethics & Policy", "Industry Applications"],
    "mainProject": {
        "title": "Intelligent Study Buddy & Academic Assistant",
        "description": "Create an AI-powered study assistant that can help students with homework, generate practice questions, and provide personalized learning recommendations",
        "overview": "Build a comprehensive AI study companion that combines natural language processing, machine learning, and educational technology. Your assistant will analyze study materials, generate quizzes, track learning progress, and provide intelligent tutoring support across multiple subjects.",
        "learningOutcomes": [
            "Master advanced NLP techniques for text analysis",
            "Build recommendation systems for personalized learning", 
            "Implement question generation algorithms",
            "Create adaptive learning pathways",
            "Apply AI ethics in educational technology",
            "Design user-centered AI interfaces"
        ],
        "technicalRequirements": [
            "Python 3.8+ with advanced ML libraries",
            "Streamlit or Flask for web interface",
            "OpenAI API or Hugging Face Transformers", 
            "SQLite database for progress tracking",
            "Basic understanding of educational pedagogy"
        ],
        "projectSteps": [
            {
                "step": 1,
                "title": "Educational AI System Design",
                "description": "Research and design the architecture for an intelligent tutoring system",
                "tasks": [
                    "Study existing educational AI platforms and tools",
                    "Design system architecture for multi-subject support",
                    "Create user personas for different learning styles",
                    "Plan data flow and component interactions", 
                    "Research educational psychology principles for AI"
                ],
                "timeEstimate": "2 hours"
            },
            {
                "step": 2,
                "title": "Text Analysis & Content Processing", 
                "description": "Build NLP components to analyze study materials",
                "tasks": [
                    "Implement text preprocessing and tokenization",
                    "Create topic modeling for content categorization",
                    "Build keyword extraction and summarization",
                    "Develop difficulty level assessment algorithms",
                    "Test with various educational content types"
                ],
                "timeEstimate": "3 hours"
            },
            {
                "step": 3,
                "title": "Question Generation System",
                "description": "Develop AI that creates practice questions from content", 
                "tasks": [
                    "Implement rule-based question templates",
                    "Use transformer models for question generation",
                    "Create multiple choice and short answer formats",
                    "Add difficulty progression algorithms",
                    "Validate generated questions for quality"
                ],
                "timeEstimate": "3.5 hours"
            },
            {
                "step": 4,
                "title": "Personalized Learning Engine",
                "description": "Build recommendation and adaptation systems",
                "tasks": [
                    "Implement user progress tracking",
                    "Create learning path recommendation algorithms", 
                    "Build spaced repetition scheduling",
                    "Add performance analytics and insights",
                    "Develop adaptive difficulty adjustment"
                ],
                "timeEstimate": "2.5 hours"
            },
            {
                "step": 5,
                "title": "Interactive Tutorial System",
                "description": "Create conversational AI for tutoring support",
                "tasks": [
                    "Build chatbot interface for Q&A support",
                    "Implement context-aware response generation",
                    "Add explanation and hint generation features",
                    "Create multi-turn conversation handling", 
                    "Test tutoring effectiveness with users"
                ],
                "timeEstimate": "2.5 hours"
            },
            {
                "step": 6,
                "title": "Integration & Deployment",
                "description": "Combine all components and deploy the system",
                "tasks": [
                    "Integrate all AI components into web interface",
                    "Add user authentication and progress saving",
                    "Implement data privacy and security measures",
                    "Create comprehensive testing and evaluation",
                    "Deploy and gather user feedback"
                ],
                "timeEstimate": "2 hours"
            }
        ],
        "resources": [
            "Educational AI Research Papers",
            "Hugging Face Transformers Documentation", 
            "Intelligent Tutoring Systems Design Guide",
            "Question Generation Algorithms Library",
            "Educational Psychology for AI Developers"
        ],
        "assessmentCriteria": [
            "System generates relevant and accurate questions",
            "Personalization algorithms improve learning outcomes",
            "Interface is intuitive and educationally effective",
            "AI components work together seamlessly",
            "Student demonstrates understanding of educational AI ethics"
        ],
        "difficulty": "Advanced",
        "estimatedTime": "15-16 hours",
        "tutorialVideo": {
            "title": "Build Your Own AI Tutors with GPTs",
            "id": "pk_iJ6Y2a4U",
            "duration": "57:17",
            "description": "Comprehensive workshop on creating personalized AI tutors using ChatGPT and vector databases. Covers interactive tools, quizzes, and educational technology."
        }
    },
    "videos": [
        {"title": "Advanced Machine Learning Algorithms", "id": "efR1C6CvhmE", "duration": "20:32"},
        {"title": "AI Research Methodology", "id": "COIaENiZfhY", "duration": "57:31"}, 
        {"title": "Natural Language Processing Deep Dive", "id": "21EiKfQYZXc", "duration": "19:45"}
    ],
    "modules": {
        "Module 1: Advanced Machine Learning Algorithms": {
            "duration": "10 hours",
            "description": "Deep dive into sophisticated ML algorithms and their mathematical foundations",
            "videos": [
                {
                    "title": "Support Vector Machines & Kernel Methods",
                    "id": "efR1C6CvhmE",
                    "duration": "20:32",
                    "description": "Understanding SVM mathematics and kernel tricks for complex data"
                },
                {
                    "title": "Ensemble Methods: Random Forest & Gradient Boosting",
                    "id": "bA37PEJKed0", 
                    "duration": "5:27",
                    "description": "Advanced ensemble techniques for improved model performance"
                },
                {
                    "title": "Dimensionality Reduction: PCA & t-SNE",
                    "id": "8oF06G-TwYs",
                    "duration": "21:30",
                    "description": "Techniques for handling high-dimensional data and visualization"
                },
                {
                    "title": "Clustering Algorithms: K-means, DBSCAN & Hierarchical", 
                    "id": "4b5d3muPQmA",
                    "duration": "17:20",
                    "description": "Unsupervised learning algorithms for data exploration"
                }
            ],
            "quiz": {
                "questions": [
                    {
                        "question": "What is the main advantage of using kernel methods in SVMs?",
                        "options": ["Faster computation", "Handling non-linear data in higher dimensions", "Less memory usage", "Simpler implementation"],
                        "correct": 1,
                        "explanation": "Kernel methods allow SVMs to handle non-linearly separable data by mapping it to higher-dimensional spaces."
                    },
                    {
                        "question": "How does Random Forest reduce overfitting compared to single decision trees?",
                        "options": ["Using fewer features", "Averaging predictions from multiple trees", "Simplifying tree structure", "Using less training data"],
                        "correct": 1,
                        "explanation": "Random Forest reduces overfitting by averaging predictions from multiple diverse decision trees."
                    },
                    {
                        "question": "What does PCA primarily accomplish?",
                        "options": ["Increases data dimensions", "Reduces data dimensions while preserving variance", "Cleans data", "Visualizes data only"],
                        "correct": 1,
                        "explanation": "PCA reduces dimensionality by finding principal components that capture the most variance in the data."
                    },
                    {
                        "question": "DBSCAN clustering is particularly good at:",
                        "options": ["Finding spherical clusters only", "Handling clusters of arbitrary shape and detecting outliers", "Working with small datasets", "Requiring pre-specified number of clusters"],
                        "correct": 1,
                        "explanation": "DBSCAN can find clusters of arbitrary shape and automatically identifies outliers as noise points."
                    },
                    {
                        "question": "What is gradient boosting's main principle?",
                        "options": ["Training models in parallel", "Sequentially improving weak learners", "Using only tree-based models", "Reducing model complexity"],
                        "correct": 1,
                        "explanation": "Gradient boosting sequentially trains weak learners where each new model corrects errors from previous ones."
                    }
                ]
            }
        },
        "Module 2: AI Research Methodology & Innovation": {
            "duration": "9 hours",
            "description": "Learn systematic approaches to AI research, innovation processes, and scientific methodology",
            "videos": [
                {
                    "title": "AI Research Process & Scientific Method",
                    "id": "COIaENiZfhY",
                    "duration": "57:31",
                    "description": "Systematic approach to conducting AI research and experiments"
                },
                {
                    "title": "Literature Review & Paper Analysis in AI",
                    "id": "LrDO_-T1vSI",
                    "duration": "7:12",
                    "description": "How to read, analyze and synthesize AI research papers"
                },
                {
                    "title": "Experimental Design for AI Systems",
                    "id": "X4dBmEDJz9w",
                    "duration": "19:20",
                    "description": "Designing robust experiments to validate AI hypotheses"
                },
                {
                    "title": "Innovation in AI: From Research to Application",
                    "id": "zm7lz5fv1Rs",
                    "duration": "5:41",
                    "description": "Translating research insights into practical AI applications"
                }
            ],
            "quiz": {
                "questions": [
                    {
                        "question": "What is the first step in conducting AI research?",
                        "options": ["Collecting data", "Defining a clear research question", "Building models", "Writing code"],
                        "correct": 1,
                        "explanation": "Good AI research starts with clearly defining the research question and hypothesis to be tested."
                    },
                    {
                        "question": "Why is reproducibility important in AI research?",
                        "options": ["Makes research faster", "Allows others to verify and build upon findings", "Reduces costs", "Simplifies experiments"],
                        "correct": 1,
                        "explanation": "Reproducibility ensures research findings can be verified and enables cumulative scientific progress."
                    },
                    {
                        "question": "What should a good AI experiment control for?",
                        "options": ["Only the algorithm used", "Variables that could affect results", "Only the dataset size", "Programming language"],
                        "correct": 1,
                        "explanation": "Good experiments control for confounding variables to ensure results are attributed to the factor being studied."
                    },
                    {
                        "question": "How do you evaluate the significance of AI research findings?",
                        "options": ["By publication count", "Through statistical analysis and practical impact", "By code complexity", "By dataset size"],
                        "correct": 1,
                        "explanation": "Research significance is evaluated through statistical validity and real-world practical impact."
                    },
                    {
                        "question": "What makes AI innovation successful?",
                        "options": ["Technical complexity only", "Combining technical excellence with user needs", "Using latest algorithms", "Having big datasets"],
                        "correct": 1,
                        "explanation": "Successful AI innovation balances technical capabilities with solving real user problems effectively."
                    }
                ]
            }
        },
        "Module 3: Advanced Natural Language Processing": {
            "duration": "10 hours",
            "description": "Sophisticated NLP techniques including transformers, language models, and text generation",
            "videos": [
                {
                    "title": "Transformer Architecture & Attention Mechanisms",
                    "id": "21EiKfQYZXc",
                    "duration": "19:45",
                    "description": "Understanding the transformer architecture that powers modern NLP"
                },
                {
                    "title": "BERT, GPT and Large Language Models",
                    "id": "UYPa347-DdE",
                    "duration": "22:30",
                    "description": "How large language models work and their applications"
                },
                {
                    "title": "Text Generation & Creative AI Applications",
                    "id": "0Y5Luf5sRQA",
                    "duration": "15:41",
                    "description": "Techniques for generating human-like text and creative content"
                },
                {
                    "title": "Question Answering & Information Extraction",
                    "id": "-td57YvJdHc", 
                    "duration": "18:40",
                    "description": "Building systems that can answer questions and extract information"
                }
            ],
            "quiz": {
                "questions": [
                    {
                        "question": "What is the key innovation of the Transformer architecture?",
                        "options": ["Recurrent connections", "Self-attention mechanism", "Convolutional layers", "Memory cells"],
                        "correct": 1,
                        "explanation": "Transformers introduced self-attention, allowing models to weigh the importance of different parts of the input."
                    },
                    {
                        "question": "How does BERT differ from GPT in training approach?",
                        "options": ["BERT is bidirectional, GPT is unidirectional", "BERT is faster", "BERT uses more data", "GPT is bidirectional"],
                        "correct": 0,
                        "explanation": "BERT reads text bidirectionally (both directions) while GPT reads left-to-right (unidirectional)."
                    },
                    {
                        "question": "What makes large language models effective for text generation?",
                        "options": ["Small parameter count", "Large-scale training on diverse text data", "Simple architecture", "Fast inference"],
                        "correct": 1,
                        "explanation": "Large language models learn patterns from massive diverse text datasets, enabling coherent generation."
                    },
                    {
                        "question": "In question answering systems, what is the role of context?",
                        "options": ["Not important", "Provides information needed to answer questions", "Slows down processing", "Only for formatting"],
                        "correct": 1,
                        "explanation": "Context provides the background information that the model needs to find and formulate answers."
                    },
                    {
                        "question": "What ethical consideration is important for text generation AI?",
                        "options": ["Speed only", "Preventing generation of harmful or biased content", "Memory usage", "Code complexity"],
                        "correct": 1,
                        "explanation": "Text generation AI must be designed to avoid producing harmful, biased, or misleading content."
                    }
                ]
            }
        },
        "Module 4: Computer Vision & Deep Learning Projects": {
            "duration": "10 hours",
            "description": "Advanced computer vision techniques and practical project implementation",
            "videos": [
                {
                    "title": "Advanced CNN Architectures: ResNet, DenseNet, EfficientNet",
                    "id": "8oF06G-TwYs",
                    "duration": "21:30",
                    "description": "Modern CNN architectures and their design principles"
                },
                {
                    "title": "Object Detection: YOLO, R-CNN, and Real-time Systems",
                    "id": "4eIBisqx9_g",
                    "duration": "19:20",
                    "description": "Advanced object detection algorithms and implementation"
                },
                {
                    "title": "Image Generation: GANs and Diffusion Models",
                    "id": "Gd7XuuFNnt4",
                    "duration": "20:45",
                    "description": "Creating realistic images with generative AI models"
                },
                {
                    "title": "Computer Vision in Production: Optimization & Deployment",
                    "id": "CfbHwPG01cE",
                    "duration": "18:15",
                    "description": "Deploying computer vision models in real-world applications"
                }
            ],
            "quiz": {
                "questions": [
                    {
                        "question": "What problem do ResNet's skip connections solve?",
                        "options": ["Overfitting", "Vanishing gradient problem", "Memory usage", "Training speed"],
                        "correct": 1,
                        "explanation": "Skip connections in ResNet help gradients flow through very deep networks, solving the vanishing gradient problem."
                    },
                    {
                        "question": "What makes YOLO different from R-CNN for object detection?",
                        "options": ["YOLO detects objects in a single forward pass", "YOLO is less accurate", "YOLO only works on small images", "R-CNN is faster"],
                        "correct": 0,
                        "explanation": "YOLO (You Only Look Once) performs detection in a single pass, making it much faster than multi-stage approaches like R-CNN."
                    },
                    {
                        "question": "How do GANs generate realistic images?",
                        "options": ["Copying existing images", "Two networks competing: generator vs discriminator", "Using templates", "Random pixel generation"],
                        "correct": 1,
                        "explanation": "GANs use adversarial training between a generator (creates images) and discriminator (judges realism)."
                    },
                    {
                        "question": "What is model quantization in computer vision deployment?",
                        "options": ["Adding more layers", "Reducing model precision to improve speed", "Increasing image resolution", "Adding more training data"],
                        "correct": 1,
                        "explanation": "Quantization reduces numerical precision (e.g., 32-bit to 8-bit) to make models faster and smaller for deployment."
                    },
                    {
                        "question": "Why is data augmentation important in computer vision?",
                        "options": ["Increases model complexity", "Improves generalization by creating diverse training examples", "Reduces training time", "Simplifies architecture"],
                        "correct": 1,
                        "explanation": "Data augmentation creates variations of training images, helping models generalize better to new data."
                    }
                ]
            }
        },
        "Module 5: AI Ethics, Policy & Industry Applications": {
            "duration": "9 hours",
            "description": "Understanding AI's societal impact, ethical frameworks, and real-world deployment challenges",
            "videos": [
                {
                    "title": "AI Ethics Frameworks & Responsible Development",
                    "id": "59bMh59JQDo",
                    "duration": "20:30",
                    "description": "Comprehensive frameworks for ethical AI development and deployment"
                },
                {
                    "title": "AI Policy & Regulation: Global Perspectives",
                    "id": "8nt3edWLgIg",
                    "duration": "18:45",
                    "description": "How governments and organizations are regulating AI technology"
                },
                {
                    "title": "AI in Industry: Healthcare, Finance, Transportation",
                    "id": "t4kyRyKyOpo",
                    "duration": "19:20",
                    "description": "Real-world AI applications across major industries"
                },
                {
                    "title": "AI Career Paths & Professional Development",
                    "id": "b57KapzhVzs",
                    "duration": "10:54",
                    "description": "Career opportunities and skills needed in AI industry"
                }
            ],
            "quiz": {
                "questions": [
                    {
                        "question": "What are the key principles of responsible AI development?",
                        "options": ["Speed and efficiency only", "Fairness, accountability, transparency, and human benefit", "Profit maximization", "Technical complexity"],
                        "correct": 1,
                        "explanation": "Responsible AI prioritizes fairness, accountability, transparency, and ensuring benefits for humanity."
                    },
                    {
                        "question": "Why is AI regulation becoming important globally?",
                        "options": ["To slow down innovation", "To ensure safe and beneficial AI deployment", "To reduce competition", "To increase costs"],
                        "correct": 1,
                        "explanation": "AI regulation aims to ensure AI systems are developed and deployed safely for societal benefit."
                    },
                    {
                        "question": "How is AI transforming healthcare?",
                        "options": ["Only by digitizing records", "Improving diagnosis, treatment planning, and drug discovery", "Replacing all doctors", "Making healthcare more expensive"],
                        "correct": 1,
                        "explanation": "AI enhances healthcare through better diagnostic tools, personalized treatment, and accelerated research."
                    },
                    {
                        "question": "What skills are most important for AI careers?",
                        "options": ["Only programming", "Technical skills plus ethics, communication, and domain knowledge", "Only mathematics", "Only creativity"],
                        "correct": 1,
                        "explanation": "Successful AI careers require technical expertise combined with ethics, communication, and understanding of application domains."
                    },
                    {
                        "question": "What is algorithmic auditing?",
                        "options": ["Checking code syntax", "Systematically evaluating AI systems for bias and fairness", "Optimizing performance", "Reducing model size"],
                        "correct": 1,
                        "explanation": "Algorithmic auditing systematically examines AI systems to identify and address bias, fairness issues, and unintended consequences."
                    }
                ]
            }
        }
    }
},
"12": {
    "title": "AI Mastery & Professional Development",
    "description": "A comprehensive 60-hour advanced journey into professional AI development, deployment, and leadership designed for 12th grade students preparing for industry careers",
    "totalHours": 60,
    "difficulty": "Expert",
    "topics": ["Professional AI Development", "Deep Learning Architectures", "AI Engineering & MLOps", "Advanced Computer Vision", "Advanced NLP & LLMs", "AI Ethics & Governance", "Startup & Entrepreneurship"],
    
    // Main Healthcare AI Project
    "mainProject": {
        "title": "AI-Powered Healthcare Diagnosis System",
        "description": "Build a comprehensive healthcare AI system that can analyze medical symptoms, provide diagnostic insights, and recommend treatment pathways using advanced machine learning",
        "overview": "Create a professional-grade healthcare AI platform that combines computer vision for medical imaging, natural language processing for symptom analysis, and predictive modeling for diagnosis assistance. This capstone project integrates all advanced AI concepts learned throughout the curriculum.",
        "learningOutcomes": [
            "Master end-to-end AI system architecture",
            "Implement advanced deep learning for medical applications",
            "Apply AI ethics in sensitive healthcare contexts",
            "Build production-ready AI APIs and interfaces",
            "Understand regulatory compliance in AI healthcare",
            "Practice professional AI development workflows"
        ],
        "technicalRequirements": [
            "Python 3.9+ with TensorFlow/PyTorch",
            "React.js or Vue.js for frontend development",
            "Docker for containerization",
            "AWS/Google Cloud for deployment",
            "Medical imaging datasets (provided)",
            "Advanced understanding of neural networks"
        ],
        "projectSteps": [
            {
                "step": 1,
                "title": "System Architecture & Planning",
                "description": "Design the complete healthcare AI system architecture",
                "tasks": [
                    "Research healthcare AI regulations and compliance requirements",
                    "Design system architecture with microservices approach",
                    "Plan data pipeline for medical data processing",
                    "Create detailed project timeline and milestones",
                    "Set up development environment and version control"
                ],
                "timeEstimate": "3 hours"
            },
            {
                "step": 2,
                "title": "Medical Image Analysis Module",
                "description": "Build computer vision system for medical imaging",
                "tasks": [
                    "Implement CNN architecture for X-ray analysis",
                    "Train models for disease detection in medical images",
                    "Add image preprocessing and augmentation pipeline",
                    "Create confidence scoring and uncertainty quantification",
                    "Develop model explainability features"
                ],
                "timeEstimate": "4 hours"
            },
            {
                "step": 3,
                "title": "Symptom Analysis & NLP Engine",
                "description": "Create natural language processing for symptom analysis",
                "tasks": [
                    "Build text processing pipeline for medical terminology",
                    "Implement symptom-to-condition mapping system",
                    "Create chatbot interface for patient interaction",
                    "Add multilingual support for diverse populations",
                    "Implement privacy-preserving text analysis"
                ],
                "timeEstimate": "3.5 hours"
            },
            {
                "step": 4,
                "title": "Predictive Modeling & Decision Support",
                "description": "Develop AI models for diagnostic assistance",
                "tasks": [
                    "Build ensemble models for improved accuracy",
                    "Implement risk stratification algorithms",
                    "Create treatment recommendation engine",
                    "Add clinical decision support features",
                    "Develop model monitoring and drift detection"
                ],
                "timeEstimate": "4 hours"
            },
            {
                "step": 5,
                "title": "User Interface & API Development",
                "description": "Create professional interfaces for the AI system",
                "tasks": [
                    "Build responsive web interface for healthcare providers",
                    "Develop RESTful APIs for system integration",
                    "Create patient portal with privacy controls",
                    "Implement authentication and authorization",
                    "Add comprehensive logging and audit trails"
                ],
                "timeEstimate": "3.5 hours"
            },
            {
                "step": 6,
                "title": "Testing, Validation & Deployment",
                "description": "Comprehensive testing and production deployment",
                "tasks": [
                    "Conduct clinical validation with test datasets",
                    "Perform bias testing across demographic groups",
                    "Implement automated testing and CI/CD pipeline",
                    "Deploy to cloud infrastructure with scaling",
                    "Create documentation and user training materials"
                ],
                "timeEstimate": "3 hours"
            }
        ],
        "resources": [
            "Healthcare AI Ethics Guidelines",
            "Medical Imaging Datasets",
            "Clinical NLP Libraries",
            "FDA AI/ML Guidance Documents",
            "HIPAA Compliance Checklist"
        ],
        "assessmentCriteria": [
            "System achieves clinical-grade accuracy on test data",
            "Demonstrates proper handling of sensitive medical data",
            "Shows comprehensive understanding of AI ethics in healthcare",
            "Professional-quality code and documentation",
            "Successful cloud deployment with proper security"
        ],
        "difficulty": "Expert",
        "estimatedTime": "20-25 hours",
        "tutorialVideo": {
            "title": "Building Production AI for Healthcare - Complete Guide",
            "id": "hULLuQ1UFaM", 
            "duration": "37:23",
            "description": "Professional tutorial covering healthcare AI development from concept to deployment with real-world examples"
        }
    },

    // Secondary Startup Project
    "projects": [
        {
            "id": "secondary",
            "title": "AI Startup Business Plan & MVP Development",
            "description": "Create a complete AI startup concept with business plan, MVP development, market analysis, and investor pitch deck",
            "overview": "Develop a comprehensive startup plan around an innovative AI solution. This project simulates real-world entrepreneurship in the AI industry, covering market research, competitive analysis, MVP development, financial projections, and investor presentations.",
            "difficulty": "Advanced",
            "estimatedTime": "15-18 hours",
            "tutorialVideo": {
                "title": "From AI Idea to Startup: Complete Entrepreneurship Guide",
                "id": "pN50YFLoftM",
                "duration": "35:45",
                "description": "Step-by-step guide for turning AI innovations into viable business ventures with real startup examples"
            },
            "learningOutcomes": [
                "Understand AI business model development and validation",
                "Learn startup methodology and lean development principles",
                "Practice market research and competitive analysis techniques",
                "Develop MVP using rapid prototyping and agile methods",
                "Create professional investor presentations and pitch decks",
                "Understand AI industry economics, scaling, and fundraising"
            ],
            "technicalRequirements": [
                "Business planning software (Lean Canvas, Business Model Canvas)",
                "Rapid prototyping frameworks (Streamlit, Flask, or similar)",
                "Basic web development skills (HTML, CSS, JavaScript)",
                "Presentation software (PowerPoint, Canva, or Pitch)",
                "Market research databases and tools",
                "Financial modeling spreadsheet software"
            ],
            "projectSteps": [
                {
                    "step": 1,
                    "title": "Market Research & Opportunity Analysis",
                    "description": "Identify and validate your AI startup opportunity",
                    "tasks": [
                        "Conduct comprehensive market research on AI industry trends",
                        "Identify specific problem areas where AI can provide solutions",
                        "Analyze target customer segments and their pain points",
                        "Research competitors and existing solutions in the market",
                        "Validate problem-solution fit through surveys and interviews"
                    ],
                    "timeEstimate": "3 hours"
                },
                {
                    "step": 2,
                    "title": "Business Model Development",
                    "description": "Create and validate your AI startup business model",
                    "tasks": [
                        "Develop Business Model Canvas for your AI solution",
                        "Define value propositions for different customer segments",
                        "Design revenue streams and pricing strategies",
                        "Plan go-to-market strategy and customer acquisition",
                        "Create financial projections and funding requirements"
                    ],
                    "timeEstimate": "2.5 hours"
                },
                {
                    "step": 3,
                    "title": "MVP Design & Development",
                    "description": "Build a minimum viable product to demonstrate your AI solution",
                    "tasks": [
                        "Define core features for your AI MVP",
                        "Choose appropriate tech stack for rapid development",
                        "Implement basic AI functionality using available APIs/models",
                        "Create simple user interface for demonstration",
                        "Test MVP with potential users and gather feedback"
                    ],
                    "timeEstimate": "4 hours"
                },
                {
                    "step": 4,
                    "title": "Competitive Analysis & Positioning",
                    "description": "Analyze competition and position your startup",
                    "tasks": [
                        "Create detailed competitive landscape analysis",
                        "Identify unique selling propositions and differentiators",
                        "Develop competitive positioning strategy",
                        "Analyze competitor pricing and business models",
                        "Define barriers to entry and competitive advantages"
                    ],
                    "timeEstimate": "2 hours"
                },
                {
                    "step": 5,
                    "title": "Financial Planning & Projections",
                    "description": "Develop comprehensive financial model and projections",
                    "tasks": [
                        "Create 3-year financial projections and cash flow models",
                        "Calculate customer acquisition costs and lifetime value",
                        "Plan funding requirements and investment stages",
                        "Develop pricing strategy and revenue optimization",
                        "Create scenario planning for different growth trajectories"
                    ],
                    "timeEstimate": "2.5 hours"
                },
                {
                    "step": 6,
                    "title": "Investor Pitch & Presentation",
                    "description": "Create compelling investor pitch deck and presentation",
                    "tasks": [
                        "Develop professional pitch deck covering all key elements",
                        "Create compelling narrative and storytelling approach",
                        "Prepare demo script and MVP demonstration",
                        "Practice pitch delivery and handle Q&A preparation",
                        "Create executive summary and business plan document"
                    ],
                    "timeEstimate": "2 hours"
                }
            ],
            "resources": [
                "Startup Business Plan Templates",
                "AI Industry Market Research Reports",
                "Lean Startup Methodology Guide",
                "Investor Pitch Deck Examples",
                "Financial Modeling Templates",
                "Customer Interview Guide Templates"
            ],
            "assessmentCriteria": [
                "Demonstrates clear understanding of AI market opportunities",
                "Shows evidence-based market research and validation",
                "Presents viable business model with realistic projections",
                "Creates functional MVP that solves identified problems",
                "Delivers compelling investor pitch with clear value proposition"
            ]
        }
    ],

    // Course Videos Overview
    "videos": [
        {"title": "Professional AI Development Workflows", "id": "Eo17hsEqQMM", "duration": "45:30"},
        {"title": "AI System Architecture & Design", "id": "w4rG5GY9IlA", "duration": "28:15"},
        {"title": "MLOps and Production AI Systems", "id": "t4kyRyKyOpo", "duration": "32:20"}
    ],

    // Complete Course Modules
    "modules": {
        "Module 1: Professional AI Development & Engineering": {
            "duration": "10 hours",
            "description": "Master professional AI development practices, software engineering principles, and production-ready AI systems",
            "videos": [
                {
                    "title": "Software Engineering for AI Systems",
                    "id": "Eo17hsEqQMM", 
                    "duration": "45:30",
                    "description": "AI Systems Engineering: From Architecture Principles to Deployment - comprehensive guide to building scalable AI systems"
                },
                {
                    "title": "Version Control and Collaboration in AI Projects",
                    "id": "C24yVfqibv8",
                    "duration": "22:30",
                    "description": "How professional AI engineers use version control, collaboration tools, and best practices for team development"
                },
                {
                    "title": "Code Quality and Testing in Machine Learning",
                    "id": "Oc5x0qrB0FA",
                    "duration": "25:15",
                    "description": "Effective Testing for Machine Learning Projects - ensuring reliability and robustness in AI systems"
                },
                {
                    "title": "Documentation and API Design for AI Services",
                    "id": "0CSyIBHQy9g",
                    "duration": "18:20",
                    "description": "API Documentation Best Practices for AI services - creating professional, maintainable AI APIs"
                }
            ],
            "quiz": {
                "questions": [
                    {
                        "question": "What is the primary difference between traditional software engineering and AI system engineering?",
                        "options": ["No difference", "AI systems require data-centric approaches and model lifecycle management", "AI is just more complex code", "AI doesn't need testing"],
                        "correct": 1,
                        "explanation": "AI systems require specialized approaches for data management, model versioning, and continuous learning that traditional software doesn't need."
                    },
                    {
                        "question": "Why is version control particularly important in AI projects?",
                        "options": ["It's not important", "To track both code and model versions, data lineage, and experiment results", "Only for code changes", "Just for backup purposes"],
                        "correct": 1,
                        "explanation": "AI projects need to track code, models, datasets, hyperparameters, and experimental results to ensure reproducibility."
                    },
                    {
                        "question": "What makes testing AI systems more challenging than traditional software?",
                        "options": ["It's easier actually", "Non-deterministic behavior, data dependency, and model drift", "No testing is needed", "Same as regular software"],
                        "correct": 1,
                        "explanation": "AI systems have non-deterministic outputs, depend heavily on data quality, and can degrade over time due to model drift."
                    },
                    {
                        "question": "What should AI API documentation include beyond traditional API docs?",
                        "options": ["Nothing extra", "Model limitations, bias information, confidence intervals, and ethical considerations", "Just endpoint descriptions", "Only code examples"],
                        "correct": 1,
                        "explanation": "AI APIs need comprehensive documentation about model behavior, limitations, potential biases, and ethical usage guidelines."
                    },
                    {
                        "question": "What is technical debt in AI systems?",
                        "options": ["Money owed for software", "Accumulated shortcuts and compromises that reduce system maintainability", "Computing costs", "Model training expenses"],
                        "correct": 1,
                        "explanation": "Technical debt in AI includes poor data quality, lack of monitoring, inconsistent preprocessing, and unmaintainable model architectures."
                    }
                ]
            }
        },

        "Module 2: Advanced Deep Learning Architectures": {
            "duration": "12 hours",
            "description": "Master cutting-edge deep learning architectures, transformer models, and advanced neural network designs for professional applications",
            "videos": [
                {
                    "title": "Transformer Architecture Deep Dive",
                    "id": "21EiKfQYZXc",
                    "duration": "32:45",
                    "description": "Complete understanding of transformer architecture, attention mechanisms, and modern NLP breakthroughs"
                },
                {
                    "title": "Advanced CNN Architectures: EfficientNet, Vision Transformers",
                    "id": "8oF06G-TwYs",
                    "duration": "28:30",
                    "description": "Modern computer vision architectures including EfficientNet, Vision Transformers, and state-of-the-art innovations"
                },
                {
                    "title": "Generative Models: GANs, VAEs, and Diffusion Models",
                    "id": "woOvmnIGpr4",
                    "duration": "35:20",
                    "description": "Understanding and implementing advanced generative AI models for creative and practical applications"
                },
                {
                    "title": "Neural Architecture Search and AutoML",
                    "id": "gZZKjiAKc5s",
                    "duration": "24:15",
                    "description": "Automated neural architecture design and AutoML techniques for optimizing deep learning models"
                }
            ],
            "quiz": {
                "questions": [
                    {
                        "question": "What is the key innovation that makes Transformers superior to RNNs for many tasks?",
                        "options": ["Faster training", "Self-attention mechanism enabling parallel processing", "Smaller model size", "Better accuracy only"],
                        "correct": 1,
                        "explanation": "Self-attention allows Transformers to process sequences in parallel and capture long-range dependencies more effectively than RNNs."
                    },
                    {
                        "question": "How do Vision Transformers (ViTs) process images?",
                        "options": ["Like CNNs with convolutions", "By dividing images into patches and treating them as sequence tokens", "Using only pooling layers", "Through recursive processing"],
                        "correct": 1,
                        "explanation": "ViTs split images into fixed-size patches, flatten them into vectors, and process them as sequences using transformer architecture."
                    },
                    {
                        "question": "What distinguishes diffusion models from GANs in image generation?",
                        "options": ["No difference", "Diffusion models gradually denoise random noise to generate images", "Diffusion models are faster", "GANs are always better"],
                        "correct": 1,
                        "explanation": "Diffusion models learn to reverse a noise process, gradually transforming random noise into coherent images through learned denoising steps."
                    },
                    {
                        "question": "What is the main goal of Neural Architecture Search (NAS)?",
                        "options": ["Reducing costs", "Automatically finding optimal neural network architectures", "Making networks smaller", "Improving interpretability"],
                        "correct": 1,
                        "explanation": "NAS automatically explores the space of possible neural architectures to find optimal designs for specific tasks and constraints."
                    },
                    {
                        "question": "Why are EfficientNets considered 'efficient'?",
                        "options": ["They're just faster", "They achieve better accuracy-efficiency trade-offs through compound scaling", "They use less memory only", "They're easier to implement"],
                        "correct": 1,
                        "explanation": "EfficientNets use compound scaling to uniformly scale network depth, width, and resolution for optimal efficiency-accuracy balance."
                    }
                ]
            }
        },

        "Module 3: MLOps & Production AI Systems": {
            "duration": "12 hours",
            "description": "Master the complete MLOps pipeline from model development to production deployment, monitoring, and maintenance",
            "videos": [
                {
                    "title": "MLOps Fundamentals and Best Practices",
                    "id": "t4kyRyKyOpo",
                    "duration": "32:15",
                    "description": "Complete guide to MLOps practices, CI/CD for ML, and production AI deployment strategies"
                },
                {
                    "title": "Model Monitoring and Performance Management",
                    "id": "CfbHwPG01cE",
                    "duration": "26:40",
                    "description": "Monitoring AI models in production, detecting model drift, and maintaining model performance over time"
                },
                {
                    "title": "Containerization and Microservices for AI",
                    "id": "FVhUz2ot2d0",
                    "duration": "29:30",
                    "description": "Using Docker, Kubernetes, and microservices architecture for scalable AI system deployment"
                },
                {
                    "title": "Cloud AI Services and Serverless Deployment",
                    "id": "HF35ZCP17_I",
                    "duration": "24:45",
                    "description": "Leveraging cloud platforms and serverless architectures for cost-effective AI deployment"
                }
            ],
            "quiz": {
                "questions": [
                    {
                        "question": "What is the primary goal of MLOps?",
                        "options": ["Faster training", "Streamline and automate the ML lifecycle from development to production", "Reduce model size", "Improve accuracy only"],
                        "correct": 1,
                        "explanation": "MLOps aims to automate and streamline the entire machine learning lifecycle, ensuring reliable and scalable AI systems in production."
                    },
                    {
                        "question": "What is model drift and why is it important to detect?",
                        "options": ["Models moving physically", "Degradation in model performance due to changes in data distribution", "Models getting corrupted", "Normal behavior"],
                        "correct": 1,
                        "explanation": "Model drift occurs when the statistical properties of input data change over time, causing model performance to degrade in production."
                    },
                    {
                        "question": "Why are containers important for AI deployment?",
                        "options": ["They make models faster", "They provide consistent, reproducible environments across different platforms", "They reduce model size", "They improve accuracy"],
                        "correct": 1,
                        "explanation": "Containers ensure AI applications run consistently across different environments by packaging all dependencies and configurations."
                    },
                    {
                        "question": "When should you choose serverless deployment for AI models?",
                        "options": ["Always", "For intermittent, event-driven workloads with unpredictable traffic", "Never", "Only for small models"],
                        "correct": 1,
                        "explanation": "Serverless is ideal for sporadic workloads where you want to pay only for actual usage and automatically scale to zero when not needed."
                    },
                    {
                        "question": "What is A/B testing in the context of ML models?",
                        "options": ["Testing two algorithms", "Comparing performance of different model versions on live traffic", "Testing on two datasets", "Model validation technique"],
                        "correct": 1,
                        "explanation": "A/B testing for ML involves deploying multiple model versions to different user segments to compare real-world performance."
                    }
                ]
            }
        },

        "Module 4: Advanced Computer Vision & Multi-Modal AI": {
            "duration": "12 hours",
            "description": "Explore cutting-edge computer vision techniques, 3D vision, multi-modal AI, and real-time applications",
            "videos": [
                {
                    "title": "Advanced Object Detection and Segmentation",
                    "id": "4eIBisqx9_g",
                    "duration": "27:20",
                    "description": "State-of-the-art object detection, semantic and instance segmentation techniques and applications"
                },
                {
                    "title": "3D Computer Vision and Point Cloud Processing",
                    "id": "QsfybIs774o",
                    "duration": "31:45",
                    "description": "Understanding 3D computer vision, point cloud processing, and spatial AI applications"
                },
                {
                    "title": "Multi-Modal AI: Vision-Language Models",
                    "id": "Ot2c5MKN_-w", // FIXED: Working video ID
                    "duration": "29:15",
                    "description": "Exploring multi-modal AI systems that combine vision and language understanding"
                },
                {
                    "title": "Real-Time Computer Vision and Edge Deployment", 
                    "id": "fnM11Vgn_2I", // FIXED: Working video ID
                    "duration": "23:30",
                    "description": "Optimizing computer vision models for real-time performance and edge device deployment"
                }

            ],
            "quiz": {
                "questions": [
                    {
                        "question": "What is the difference between semantic and instance segmentation?",
                        "options": ["No difference", "Semantic labels pixels by class, instance separates individual objects", "Instance is faster", "Semantic is more accurate"],
                        "correct": 1,
                        "explanation": "Semantic segmentation assigns class labels to pixels, while instance segmentation additionally distinguishes between separate objects of the same class."
                    },
                    {
                        "question": "What are point clouds in 3D computer vision?",
                        "options": ["Cloud computing points", "Sets of 3D coordinates representing object surfaces", "Weather data", "Network endpoints"],
                        "correct": 1,
                        "explanation": "Point clouds are collections of 3D coordinate points that represent the shape and surface characteristics of objects in 3D space."
                    },
                    {
                        "question": "How do vision-language models like CLIP work?",
                        "options": ["They only process images", "They learn joint representations of images and text in a shared embedding space", "They translate images to text", "They generate images from text"],
                        "correct": 1,
                        "explanation": "Vision-language models learn to map both images and text into a shared embedding space where semantically similar content is close together."
                    },
                    {
                        "question": "What are the main challenges in real-time computer vision?",
                        "options": ["Only accuracy", "Balancing accuracy, speed, and computational efficiency", "Only speed", "Only memory usage"],
                        "correct": 1,
                        "explanation": "Real-time computer vision requires optimizing the trade-off between model accuracy, inference speed, and computational resource constraints."
                    },
                    {
                        "question": "What techniques help optimize models for edge deployment?",
                        "options": ["Making models larger", "Quantization, pruning, knowledge distillation, and specialized hardware acceleration", "Using more layers", "Increasing resolution"],
                        "correct": 1,
                        "explanation": "Edge optimization involves reducing model complexity through quantization, pruning unnecessary connections, distilling knowledge into smaller models, and leveraging specialized hardware."
                    }
                ]
            }
        },

        "Module 5: Advanced NLP & Large Language Models": {
            "duration": "12 hours",
            "description": "Master large language models, advanced NLP techniques, and practical applications of modern language AI",
            "videos": [
                {
                    "title": "Large Language Models: GPT, BERT, and Beyond",
                    "id": "UYPa347-DdE",
                    "duration": "35:20",
                    "description": "Deep dive into large language models, their architectures, training processes, and capabilities"
                },
                {
                    "title": "Prompt Engineering and Fine-tuning Techniques",
                    "id": "0Y5Luf5sRQA",
                    "duration": "28:40",
                    "description": "Advanced techniques for optimizing language model performance through prompts and fine-tuning"
                },
                {
                    "title": "Retrieval-Augmented Generation (RAG) Systems",
                    "id": "-td57YvJdHc",
                    "duration": "25:30",
                    "description": "Building RAG systems that combine language models with external knowledge retrieval"
                },
                {
                    "title": "Building Production LLM Applications",
                    "id": "pk_iJ6Y2a4U",
                    "duration": "32:15",
                    "description": "Practical guide to deploying and scaling large language model applications in production"
                }
            ],
            "quiz": {
                "questions": [
                    {
                        "question": "What distinguishes large language models from traditional NLP models?",
                        "options": ["Just size", "Scale, emergent capabilities, and few-shot learning abilities", "They're faster", "They use different algorithms"],
                        "correct": 1,
                        "explanation": "LLMs demonstrate emergent capabilities and can perform tasks with minimal examples due to their scale and training on diverse text data."
                    },
                    {
                        "question": "What is prompt engineering?",
                        "options": ["Writing code", "Crafting inputs to optimize language model outputs for specific tasks", "Training models", "Building prompts for users"],
                        "correct": 1,
                        "explanation": "Prompt engineering involves designing input prompts to guide language models toward desired outputs without changing model parameters."
                    },
                    {
                        "question": "How does Retrieval-Augmented Generation (RAG) improve language models?",
                        "options": ["Makes them faster", "Combines generated text with retrieved relevant information from external sources", "Reduces model size", "Improves training speed"],
                        "correct": 1,
                        "explanation": "RAG systems retrieve relevant information from external knowledge bases and incorporate it into the generation process for more accurate and current responses."
                    },
                    {
                        "question": "What are the main challenges in deploying LLMs in production?",
                        "options": ["Only cost", "Cost, latency, scaling, safety, and hallucination management", "Only accuracy", "Only speed"],
                        "correct": 1,
                        "explanation": "Production LLM deployment involves managing high computational costs, inference latency, scaling challenges, safety concerns, and preventing hallucinations."
                    },
                    {
                        "question": "What is fine-tuning in the context of large language models?",
                        "options": ["Making models smaller", "Adapting pre-trained models to specific tasks or domains with additional training", "Debugging code", "Optimizing hyperparameters"],
                        "correct": 1,
                        "explanation": "Fine-tuning involves training a pre-trained language model on task-specific data to adapt it for particular applications while preserving general knowledge."
                    }
                ]
            }
        },

        "Module 6: AI Ethics, Governance & Policy": {
            "duration": "10 hours",
            "description": "Understand AI ethics frameworks, governance structures, regulatory compliance, and responsible AI development practices",
            "videos": [
                {
                    "title": "AI Ethics Frameworks & Responsible Development",
                    "id": "8nt3edWLgIg",
                    "duration": "25:30",
                    "description": "Comprehensive overview of AI ethics principles, frameworks, and implementation in development processes"
                },
                {
                    "title": "Bias Detection and Mitigation in AI Systems",
                    "id": "59bMh59JQDo",
                    "duration": "29:45",
                    "description": "Identifying, measuring, and reducing bias in AI applications across different domains and populations"
                },
                {
                    "title": "AI Governance and Regulatory Frameworks",
                    "id": "2Dd_RZIH5qo", // FIXED: Working video ID
                    "duration": "27:20", 
                    "description": "Global AI governance approaches, regulatory landscape, and compliance requirements for AI systems"
                },
                {
                    "title": "Explainable AI and Interpretability",
                    "id": "It2Q1eK_Klc", // FIXED: Working video ID
                    "duration": "23:15",
                    "description": "Making AI decisions transparent and interpretable for users, regulators, and stakeholders"
                }

            ],
            "quiz": {
                "questions": [
                    {
                        "question": "What are the key principles of responsible AI development?",
                        "options": ["Only technical excellence", "Fairness, accountability, transparency, explainability, and human-centered design", "Speed and efficiency", "Cost optimization"],
                        "correct": 1,
                        "explanation": "Responsible AI encompasses fairness, accountability, transparency, explainability, privacy protection, and human-centered design principles."
                    },
                    {
                        "question": "How can algorithmic bias be detected and measured?",
                        "options": ["It can't be measured", "Through fairness metrics, demographic parity analysis, and disparate impact testing", "Only through user feedback", "By checking code quality"],
                        "correct": 1,
                        "explanation": "Bias detection involves statistical measures like demographic parity, equalized odds, and disparate impact across different groups."
                    },
                    {
                        "question": "What is the EU AI Act's approach to AI regulation?",
                        "options": ["Ban all AI", "Risk-based regulation with different requirements based on AI system risk levels", "No regulation", "Only voluntary guidelines"],
                        "correct": 1,
                        "explanation": "The EU AI Act uses a risk-based approach, with stricter requirements for high-risk AI systems and prohibitions on certain harmful uses."
                    },
                    {
                        "question": "Why is explainable AI important in regulated industries?",
                        "options": ["It's not important", "Enables compliance, builds trust, and allows for human oversight and accountability", "Only for debugging", "Reduces costs"],
                        "correct": 1,
                        "explanation": "Explainable AI enables regulatory compliance, builds user trust, allows meaningful human oversight, and provides accountability for AI decisions."
                    },
                    {
                        "question": "What is algorithmic auditing?",
                        "options": ["Checking code syntax", "Systematic evaluation of AI systems for fairness, bias, and compliance", "Performance testing", "Security scanning"],
                        "correct": 1,
                        "explanation": "Algorithmic auditing involves systematic evaluation of AI systems to identify bias, ensure fairness, and verify compliance with ethical and regulatory standards."
                    }
                ]
            }
        }
    }
}
        };
    }

    initializeAchievements() {
        return [
            {"id": "first-login", "title": "Welcome!", "description": "Logged in for the first time", "icon": "🎯"},
            {"id": "code-ninja", "title": "Code Ninja", "description": "Completed coding project", "icon": "💻"},
            {"id": "ai-scholar", "title": "AI Scholar", "description": "Finished a complete grade curriculum", "icon": "🎓"},
            {"id": "ethics-champion", "title": "Ethics Champion", "description": "Mastered AI ethics scenarios", "icon": "⚖️"},
            {"id": "pattern-pro", "title": "Pattern Pro", "description": "Mastered pattern recognition", "icon": "🔍"},
            {"id": "video-watcher", "title": "Knowledge Seeker", "description": "Watched 10 videos", "icon": "📹"}
        ];
    }

    subscribe(callback) {
        this.listeners.push(callback);
    }

    notify() {
        this.listeners.forEach(callback => callback(this));
    }

    setState(newState) {
        Object.assign(this, newState);
        this.notify();
    }

    // Video progress tracking
    markVideoCompleted(grade, moduleIndex, videoIndex) {
        if (!this.userProgress.videoProgress[grade]) {
            this.userProgress.videoProgress[grade] = {};
        }
        this.userProgress.videoProgress[grade][`${moduleIndex}-${videoIndex}`] = true;
        this.notify();
    }

    isVideoCompleted(grade, moduleIndex, videoIndex) {
        return this.userProgress.videoProgress[grade] && 
               this.userProgress.videoProgress[grade][`${moduleIndex}-${videoIndex}`];
    }

    // Quiz progress tracking
    markQuizCompleted(grade, moduleIndex, score) {
        if (!this.userProgress.quizProgress[grade]) {
            this.userProgress.quizProgress[grade] = {};
        }
        this.userProgress.quizProgress[grade][moduleIndex] = score;
        this.notify();
    }

    isQuizCompleted(grade, moduleIndex) {
        return this.userProgress.quizProgress[grade] && 
               this.userProgress.quizProgress[grade][moduleIndex] !== undefined;
    }

    getQuizScore(grade, moduleIndex) {
        return this.userProgress.quizProgress[grade] ? 
               this.userProgress.quizProgress[grade][moduleIndex] : 0;
    }

    // Calculate module progress
    getModuleProgress(grade, moduleIndex) {
        const gradeData = this.gradeData[grade];
        if (!gradeData || !gradeData.modules) return 0;
        
        const modules = Object.values(gradeData.modules);
        const module = modules[moduleIndex];
        if (!module || !module.videos) return 0;

        const totalVideos = module.videos.length;
        const completedVideos = module.videos.filter((_, videoIndex) => 
            this.isVideoCompleted(grade, moduleIndex, videoIndex)
        ).length;

        const quizCompleted = this.isQuizCompleted(grade, moduleIndex) ? 1 : 0;
        const totalItems = totalVideos + 1; // videos + quiz

        return Math.round(((completedVideos + quizCompleted) / totalItems) * 100);
    }
}

// Global state instance
const appState = new AppState();

// Router Implementation
class Router {
        constructor() {
        this.routes = {};
        this.currentRoute = '/';
        
        // ✅ ADD THIS: Handle browser back/forward buttons
        window.addEventListener('popstate', () => {
            this.handleRoute(window.location.pathname);
        });
        
        // ✅ ADD THIS: Handle initial page load with correct route
        window.addEventListener('DOMContentLoaded', () => {
            this.handleRoute(window.location.pathname);
        });
    }

    navigate(path, pushState = true) {
        if (pushState && window.location.pathname !== path) {
            window.history.pushState({}, '', path);
        }
        this.handleRoute(path);
    }

    handleRoute(path) {
        this.currentRoute = path;
        appState.setState({ currentRoute: path });

        // Update active nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });

        if (path === '/dashboard') {
            document.querySelector('.nav-link[onclick*="dashboard"]')?.classList.add('active');
        } else if (path === '/') {
            document.querySelector('.nav-link[onclick*="navigateToHome"]')?.classList.add('active');
        }

        this.render();
    }

render() {
    const app = document.getElementById('app');
    if (!app) return;

    const route = this.currentRoute;

    if (route === '/' || route === '/home') {
        app.innerHTML = this.renderHomePage();
    } else if (route === '/dashboard') {
        app.innerHTML = this.renderDashboardPage();
    } else if (route.startsWith('/learn/')) {
        const grade = route.split('/')[2];
        // Validate grade exists
        if (!appState.gradeData[grade]) {
            app.innerHTML = this.render404();
            return;
        }
        app.innerHTML = this.renderLearningPage(grade);
    } else if (route.startsWith('/projects/')) {
        const pathParts = route.split('/');
        const grade = pathParts[2];
        
        // Validate grade exists
        if (!appState.gradeData[grade]) {
            app.innerHTML = this.render404();
            return;
        }
        
        if (pathParts.length === 4) {
            // Individual project page: /projects/12/main
            const projectId = pathParts[3];
            app.innerHTML = this.renderProjectDetailPage(grade, projectId);
        } else if (pathParts.length === 3) {
            // Projects overview: /projects/12
            app.innerHTML = this.renderProjectsPage(grade);
        } else {
            app.innerHTML = this.render404();
        }
    } else {
        app.innerHTML = this.render404();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}


renderProjectDetailPage(grade, projectId) {
    const gradeData = appState.gradeData[grade];
    
    // Check if grade data exists
    if (!gradeData) {
        return this.render404();
    }
    
    let project;
    
    if (projectId === 'main') {
        project = gradeData.mainProject;
    } else {
        // Check if projects array exists before trying to find
        project = gradeData.projects?.find(p => p.id === projectId);
    }
    
    // Return 404 if project not found
    if (!project) {
        return this.render404();
    }

    return `
        <div class="container">
            <div class="back-btn">
                <a href="#" onclick="event.preventDefault(); router.navigate('/projects/${grade}')" class="btn btn-outline">
                    ← Back to Projects
                </a>
            </div>
            
            <div class="project-overview">
                <div class="project-title-section">
                    <div>
                        <h1>${project.title}</h1>
                        <p class="lead">${project.description}</p>
                    </div>
                    <div class="project-badges">
                        <span class="difficulty-badge ${project.difficulty.toLowerCase()}">${project.difficulty}</span>
                        <span class="time-badge">⏱️ ${project.estimatedTime}</span>
                    </div>
                </div>

                <div class="project-description">
                    <p class="lead">${project.overview}</p>
                </div>

                ${project.tutorialVideo ? `
                <div class="tutorial-video-section">
                    <h3>📹 Tutorial Video</h3>
                    <div class="tutorial-video-container">
                        <iframe src="https://www.youtube.com/embed/${project.tutorialVideo.id}" 
                                frameborder="0" allowfullscreen></iframe>
                        <div class="tutorial-info">
                            <h4>${project.tutorialVideo.title}</h4>
                            <p>${project.tutorialVideo.description}</p>
                            <span class="duration">⏱️ ${project.tutorialVideo.duration}</span>
                        </div>
                    </div>
                </div>
                ` : ''}

                <div class="project-details-grid">
                    <div class="learning-outcomes">
                        <h3>🎯 Learning Outcomes</h3>
                        <ul>
                            ${project.learningOutcomes.map(outcome => `<li>${outcome}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="technical-requirements">
                        <h3>🛠️ Technical Requirements</h3>
                        <ul>
                            ${project.technicalRequirements.map(req => `<li>${req}</li>`).join('')}
                        </ul>
                    </div>
                </div>

                <div class="project-steps">
                    <h2>📋 Project Steps</h2>
                    <div class="steps-container">
                        ${project.projectSteps.map(step => `
                            <div class="step-card">
                                <div class="step-header">
                                    <div class="step-number">${step.step}</div>
                                    <div class="step-info">
                                        <h4>${step.title}</h4>
                                        <span class="time-estimate">⏱️ ${step.timeEstimate}</span>
                                    </div>
                                </div>
                                <p>${step.description}</p>
                                <div class="step-tasks">
                                    <ul>
                                        ${step.tasks.map(task => `<li>${task}</li>`).join('')}
                                    </ul>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="project-resources-assessment">
                    <div class="project-resources">
                        <h3>📚 Resources</h3>
                        <ul>
                            ${project.resources.map(resource => `<li>${resource}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="assessment-criteria">
                        <h3>✅ Assessment Criteria</h3>
                        <ul>
                            ${project.assessmentCriteria.map(criteria => `<li>${criteria}</li>`).join('')}
                        </ul>
                    </div>
                </div>

                <div class="project-actions">
                    <button class="btn btn-primary btn-large">Start Project</button>
                    <button class="btn btn-secondary btn-large">Download Resources</button>
                    <button class="btn btn-outline btn-large">View Examples</button>
                </div>
            </div>
        </div>
    `;
}
renderProjectsPage(grade) {
    const gradeData = appState.gradeData[grade];
    
    if (!gradeData) {
        return this.render404();
    }

    return `
        <div class="container">

            <div class="back-btn">
                <a href="#" onclick="event.preventDefault(); router.navigate('/learn/${grade}')" class="btn btn-outline">
                    ← Back to Grade ${grade} Learning
                </a>
            </div>
            
            <div class="page-header">
                <h1>Grade ${grade} AI Projects</h1>
                <p>Hands-on projects to apply your AI knowledge</p>
            </div>

            <div class="projects-section">
                <div class="projects-grid">
                    <!-- Main Project -->
                    <div class="project-card enhanced-project" onclick="router.navigate('/projects/${grade}/main')">
                        <div class="project-header">
                            <h3>${gradeData.mainProject.title}</h3>
                            <span class="project-difficulty ${gradeData.mainProject.difficulty.toLowerCase()}">
                                ${gradeData.mainProject.difficulty}
                            </span>
                        </div>
                        <div class="project-content">
                            <p>${gradeData.mainProject.description}</p>
                            <div class="project-meta">
                                ⏱️ ${gradeData.mainProject.estimatedTime}
                            </div>
                        </div>
                    </div>

                    <!-- Secondary Projects (if any) -->
                    ${gradeData.projects ? gradeData.projects.map(project => `
                        <div class="project-card enhanced-project" onclick="router.navigate('/projects/${grade}/${project.id}')">
                            <div class="project-header">
                                <h3>${project.title}</h3>
                                <span class="project-difficulty ${project.difficulty.toLowerCase()}">
                                    ${project.difficulty}
                                </span>
                            </div>
                            <div class="project-content">
                                <p>${project.description}</p>
                                <div class="project-meta">
                                    ⏱️ ${project.estimatedTime}
                                </div>
                            </div>
                        </div>
                    `).join('') : ''}
                </div>

                ${!gradeData.projects || gradeData.projects.length === 0 ? `
                    <div class="no-projects">
                        <p>Additional projects coming soon for Grade ${grade}!</p>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

    renderHomePage() {
        return `
            <div class="hero-section">
                <div class="container">
                    <div class="hero-content">
                        <div class="hero-text">
                            <h1 class="hero-title">AI Learning Hub</h1>
                            <p class="hero-subtitle">Comprehensive AI education platform designed for students grades 8-12. Learn through interactive modules, videos, and hands-on projects with real-time progress tracking.</p>
                            <div class="hero-buttons">
                                <button class="btn btn-primary btn-large" onclick="navigateToLearning('8')">Start Learning</button>
                                <button class="btn btn-secondary btn-large" onclick="navigateToDashboard()">View Dashboard</button>
                            </div>
                        </div>
                        <div class="hero-image">
                            <div class="ai-illustration">
                                <div class="brain-icon">🧠</div>
                                <div class="tech-elements">
                                    <span class="tech-element">AI</span>
                                    <span class="tech-element">ML</span>
                                    <span class="tech-element">Data</span>
                                    <span class="tech-element">Code</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="grade-selection">
                <div class="container">
                    <div class="section-header">
                        <h2>Choose Your Learning Path</h2>
                        <p>Select your grade level to access tailored AI curriculum</p>
                    </div>
                    <div class="grade-grid">
                        ${Object.entries(appState.gradeData).map(([grade, data]) => `
                            <div class="grade-card" onclick="navigateToLearning('${grade}')">
                                <div class="grade-header">
                                    <div class="grade-number">Grade ${grade}</div>
                                    <div class="grade-icon">${this.getGradeIcon(grade)}</div>
                                </div>
                                <div class="grade-content">
                                    <h3>${data.title}</h3>
                                    <p>${data.description}</p>
                                    <div class="grade-details">
                                        ${data.totalHours ? `<span class="detail-item"><i class="icon">🕒</i>${data.totalHours}h</span>` : ''}
                                        <span class="detail-item"><i class="icon">📚</i>${data.topics ? data.topics.length : 0} topics</span>
                                        <span class="detail-item"><i class="icon">🎯</i>1 major project</span>
                                    </div>
                                    <div class="grade-meta">
                                        <span class="difficulty ${data.difficulty?.toLowerCase()}">${data.difficulty || 'Beginner'}</span>
                                        <span class="progress">Progress: ${appState.userProgress.gradeProgress[grade] || 0}%</span>
                                    </div>
                                </div>
                                <div class="grade-arrow">→</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <section class="features-section">
                <div class="container">
                    <div class="section-header">
                        <h2>Why Choose AI Learning Hub?</h2>
                        <p>Experience the future of AI education with our comprehensive platform</p>
                    </div>
                    <div class="features-grid">
                        <div class="feature-card">
                            <div class="feature-icon">📚</div>
                            <div class="feature-content">
                                <h3>Structured Curriculum</h3>
                                <p>Grade-specific content from 8th to 12th with progressive difficulty and comprehensive courses</p>
                                <div class="feature-stats">
                                    <span>5 Grade Levels</span>
                                    <span>120+ Hours Content</span>
                                </div>
                            </div>
                        </div>
                        <div class="feature-card">
                            <div class="feature-icon">🎥</div>
                            <div class="feature-content">
                                <h3>Video Learning</h3>
                                <p>Curated educational videos and tutorials from top AI educators with progress tracking</p>
                                <div class="feature-stats">
                                    <span>50+ Videos</span>
                                    <span>Expert Content</span>
                                </div>
                            </div>
                        </div>
                        <div class="feature-card">
                            <div class="feature-icon">💻</div>
                            <div class="feature-content">
                                <h3>Hands-on Projects</h3>
                                <p>Build real AI applications with detailed step-by-step guidance and comprehensive resources</p>
                                <div class="feature-stats">
                                    <span>5 Major Projects</span>
                                    <span>Detailed Guides</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="stats-section">
                <div class="container">
                    <div class="section-header">
                        <h2>Learning Impact</h2>
                        <p>Join thousands of students mastering AI</p>
                    </div>
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="stat-number">10,000+</div>
                            <div class="stat-label">Students Enrolled</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">120+</div>
                            <div class="stat-label">Hours of Content</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">95%</div>
                            <div class="stat-label">Completion Rate</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">50+</div>
                            <div class="stat-label">Interactive Videos</div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="cta-section">
                <div class="container">
                    <div class="cta-content">
                        <h2>Ready to Start Your AI Journey?</h2>
                        <p>Join thousands of students who are already mastering AI concepts</p>
                        <div class="cta-buttons">
                            <button class="btn btn-primary btn-large" onclick="navigateToLearning('8')">Start Grade 8</button>
                            <button class="btn btn-outline btn-large" onclick="navigateToDashboard()">View Progress</button>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    getGradeIcon(grade) {
        const icons = {
            '8': '🌱',
            '9': '🚀',
            '10': '🧪',
            '11': '🔬',
            '12': '🎓'
        };
        return icons[grade] || '📚';
    }

renderDashboardPage() {
    if (!window.currentUser) {
        router.navigate('/');
        return '<div>Please log in to access the dashboard.</div>';
    }

    const user = appState.currentUser;
    const progress = appState.userProgress;
    
    // Calculate overall progress
    const totalVideos = Object.values(appState.gradeData).reduce((sum, grade) => {
        return sum + Object.values(grade.modules).reduce((modSum, mod) => {
            return modSum + (mod.videos ? mod.videos.length : 0);
        }, 0);
    }, 0);
    
    const completedVideos = Object.values(progress.videoProgress).reduce((sum, gradeProgress) => {
        return sum + Object.keys(gradeProgress).length;
    }, 0);
    
    const overallProgress = totalVideos > 0 ? Math.round((completedVideos / totalVideos) * 100) : 0;

    return `
        <div class="dashboard">
            <div class="page-header">
                <h1>Welcome back, ${user?.displayName || user?.email?.split('@')[0] || 'Student'}! 🎓</h1>
                <p>Track your AI learning journey and achievements</p>
            </div>

            <!-- Progress Overview -->
            <div class="dashboard-stats">
                <div class="card">
                    <div class="card__body">
                        <div class="stat-card">
                            <div class="stat-number">${progress.videosWatched}</div>
                            <div class="stat-label">Videos Watched</div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card__body">
                        <div class="stat-card">
                            <div class="stat-number">${Object.keys(progress.quizProgress).reduce((sum, grade) => sum + Object.keys(progress.quizProgress[grade]).length, 0)}</div>
                            <div class="stat-label">Quizzes Completed</div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card__body">
                        <div class="stat-card">
                            <div class="stat-number">${progress.achievementsEarned}</div>
                            <div class="stat-label">Achievements</div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card__body">
                        <div class="stat-card">
                            <div class="stat-number">${overallProgress}%</div>
                            <div class="stat-label">Overall Progress</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Grade Progress -->
            <div class="section-header">
                <h2>Your Learning Progress</h2>
                <p>Continue your AI journey across different grade levels</p>
            </div>
            
            <div class="grade-grid">
                ${Object.entries(appState.gradeData).map(([grade, data]) => {
                    const gradeVideos = Object.values(data.modules).reduce((sum, mod) => sum + (mod.videos ? mod.videos.length : 0), 0);
                    const completedGradeVideos = Object.keys(progress.videoProgress[grade] || {}).length;
                    const gradeProgress = gradeVideos > 0 ? Math.round((completedGradeVideos / gradeVideos) * 100) : 0;
                    
                    return `
                        <div class="grade-card" onclick="router.navigate('/learn/${grade}')">
                            <div class="grade-header">
                                <div class="grade-number">Grade ${grade}</div>
                                <div class="grade-icon">${['🎯', '🚀', '🔬', '🧠', '👑'][grade-8]}</div>
                            </div>
                            <div class="grade-content">
                                <h3>${data.title}</h3>
                                <p>${data.description}</p>
                                <div class="grade-details">
                                    <div class="detail-item">
                                        <span>⏱️</span>
                                        <span>${data.totalHours} hours</span>
                                    </div>
                                    <div class="detail-item">
                                        <span>📹</span>
                                        <span>${gradeVideos} videos</span>
                                    </div>
                                </div>
                                <div class="grade-meta">
                                    <div class="difficulty ${data.difficulty.toLowerCase()}">${data.difficulty}</div>
                                    <div class="progress">${gradeProgress}% Complete</div>
                                </div>
                            </div>
                            <div class="grade-arrow">→</div>
                        </div>
                    `;
                }).join('')}
            </div>

            <!-- Recent Achievements -->
            ${progress.achievements.length > 0 ? `
                <div class="achievements-section">
                    <div class="section-header">
                        <h2>Your Achievements 🏆</h2>
                        <p>Celebrate your AI learning milestones</p>
                    </div>
                    
                    <div class="achievements-grid">
                        ${progress.achievements.slice(-6).map(achievementId => {
                            const achievement = appState.achievements.find(a => a.id === achievementId);
                            return achievement ? `
                                <div class="achievement-item earned">
                                    <div class="achievement-icon">${achievement.icon}</div>
                                    <div class="achievement-info">
                                        <h4>${achievement.title}</h4>
                                        <p>${achievement.description}</p>
                                    </div>
                                </div>
                            ` : '';
                        }).join('')}
                    </div>
                </div>
            ` : ''}

            <!-- Quick Actions -->
            <div class="section-header">
                <h2>Continue Learning</h2>
                <p>Pick up where you left off</p>
            </div>
            
            <div class="cta-buttons">
                <button class="btn btn-primary btn-large" onclick="router.navigate('/learn/8')">
                    Start Learning →
                </button>
                <button class="btn btn-outline btn-large" onclick="router.navigate('/projects/8')">
                    View Projects
                </button>
            </div>
        </div>
    `;
}


    renderLearningPage(grade) {
        const gradeData = appState.gradeData[grade];
        if (!gradeData) {
            return this.render404();
        }

        return `
            <div class="container">
                <div class="page-header-with-back">
                    <button class="btn btn-secondary back-btn" onclick="navigateToHome()">← Back to Home</button>
                    <div class="course-header">
                        <h1>Grade ${grade}: ${gradeData.title}</h1>
                        <p>${gradeData.description}</p>
                        ${gradeData.totalHours ? `
                            <div class="course-info">
                                <span>🕒 ${gradeData.totalHours} hours total</span>
                                <span>🎬 ${this.getTotalVideos(gradeData)} videos</span>
                                <span>📝 Interactive quizzes</span>
                                <span>🎯 ${gradeData.mainProject ? '1' : '0'} major project</span>
                            </div>
                        ` : ''}
                    </div>
                </div>

                ${gradeData.modules ? this.renderModules(grade, gradeData.modules) : this.renderLegacyContent(grade, gradeData)}

                ${gradeData.mainProject ? `
                    <section class="projects-section">
                        <h2>Major Project</h2>
                        <p>Apply your knowledge with this comprehensive hands-on project</p>
                        <div class="projects-grid">
                            <div class="project-card" onclick="navigateToProjects('${grade}')">
                                <h4>${gradeData.mainProject.title}</h4>
                                <p>${gradeData.mainProject.description}</p>
                                <div class="project-meta">
                                    <span>Difficulty: ${gradeData.mainProject.difficulty}</span>
                                    <span>Time: ${gradeData.mainProject.estimatedTime}</span>
                                </div>
                            </div>
                        </div>
                    </section>
                ` : ''}
            </div>
        `;
    }

    renderModules(grade, modules) {
        return `
            <div class="course-modules">
                ${Object.entries(modules).map(([moduleTitle, moduleData], moduleIndex) => {
                    const progress = appState.getModuleProgress(grade, moduleIndex);
                    const isCompleted = progress === 100;
                    
                    return `
                        <div class="module-card ${isCompleted ? 'completed' : ''}" data-module-index="${moduleIndex}">
                            <div class="module-header" onclick="toggleModule(${moduleIndex})">
                                <div class="module-info">
                                    <h3>${moduleTitle}</h3>
                                    <p>${moduleData.description}</p>
                                    <div class="module-meta">
                                        <span>⏱️ ${moduleData.duration}</span>
                                        <span>🎦 ${moduleData.videos ? moduleData.videos.length : 0} videos</span>
                                        <span>📝 ${moduleData.quiz ? moduleData.quiz.questions.length : 0} quiz questions</span>
                                    </div>
                                </div>
                                <div class="progress-circle" data-progress="${progress}">
                                    <span>${progress}%</span>
                                </div>
                            </div>
                            <div class="module-content hidden" id="module-${moduleIndex}">
                                ${this.renderModuleContent(grade, moduleIndex, moduleData)}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }

    renderModuleContent(grade, moduleIndex, moduleData) {
        let content = '';

        // Render videos section
        if (moduleData.videos && moduleData.videos.length > 0) {
            content += `
                <div class="videos-section">
                    <h4>📹 Video Lessons</h4>
                    <div class="video-list">
                        ${moduleData.videos.map((video, videoIndex) => {
                            const isCompleted = appState.isVideoCompleted(grade, moduleIndex, videoIndex);
                            return `
                                <div class="video-item ${isCompleted ? 'completed' : ''}">
                                    <div class="video-checkbox">
                                        <input type="checkbox" 
                                               ${isCompleted ? 'checked' : ''} 
                                               onchange="toggleVideoCompletion('${grade}', ${moduleIndex}, ${videoIndex})">
                                    </div>
                                    <div class="video-info">
                                        <h5>${video.title}</h5>
                                        <div class="video-container">
                                            <iframe src="https://www.youtube.com/embed/${video.id}" 
                                                    frameborder="0" 
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                                    allowfullscreen>
                                            </iframe>
                                        </div>
                                        <p>${video.description}</p>
                                        <span class="video-duration">${video.duration}</span>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        }

        // Render quiz section
        if (moduleData.quiz) {
            const isQuizCompleted = appState.isQuizCompleted(grade, moduleIndex);
            const quizScore = appState.getQuizScore(grade, moduleIndex);
            
            content += `
                <div class="quiz-section">
                    <h4>📝 Module Quiz</h4>
                    <div class="quiz-info">
                        <p>Test your understanding with ${moduleData.quiz.questions.length} questions</p>
                        ${isQuizCompleted ? `
                            <div class="quiz-completed">
                                ✅ Quiz Completed! Score: ${quizScore}/${moduleData.quiz.questions.length}
                            </div>
                        ` : `
                            <button class="btn btn-primary" onclick="startQuiz('${grade}', ${moduleIndex})">
                                Start Quiz
                            </button>
                        `}
                    </div>
                </div>
            `;
        }

        return content;
    }

    renderLegacyContent(grade, gradeData) {
        return `
            <div class="topics-grid">
                ${gradeData.topics.map(topic => `
                    <div class="topic-card">
                        <h3>${topic}</h3>
                        <p>Learn about ${topic.toLowerCase()} and its applications in AI</p>
                    </div>
                `).join('')}
            </div>

            ${gradeData.videos ? `
                <section class="videos-section">
                    <h2>Educational Videos</h2>
                    <div class="videos-grid">
                        ${gradeData.videos.map(video => `
                            <div class="video-card">
                                <iframe width="320" height="180" 
                                        src="https://www.youtube.com/embed/${video.id}" 
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowfullscreen>
                                </iframe>
                                <h4>${video.title}</h4>
                            </div>
                        `).join('')}
                    </div>
                </section>
            ` : ''}
        `;
    }

    getTotalVideos(gradeData) {
        if (gradeData.modules) {
            return Object.values(gradeData.modules).reduce((total, module) => {
                return total + (module.videos ? module.videos.length : 0);
            }, 0);
        }
        return gradeData.videos ? gradeData.videos.length : 0;
    }




    render404() {
        return `
            <div class="container">
                <div class="page-header-with-back">
                    <button class="btn btn-secondary back-btn" onclick="navigateToHome()">← Back to Home</button>
                    <div class="error-page">
                        <h1>Page Not Found</h1>
                        <p>The page you're looking for doesn't exist.</p>
                        <button class="btn btn-primary" onclick="navigateToHome()">Go Home</button>
                    </div>
                </div>
            </div>
        `;
    }
}

// Global router instance
const router = new Router();

// Initial route handling when page loads
document.addEventListener('DOMContentLoaded', () => {
    router.handleRoute(window.location.pathname);
});

// Navigation functions
function navigateToHome() {
    router.navigate('/');
}

function navigateToDashboard() {
    router.navigate('/dashboard');
}

function navigateToLearning(grade) {
    router.navigate(`/learn/${grade}`);
}

function navigateToProjects(grade) {
    router.navigate(`/projects/${grade}`);
}

// Module interaction functions
function toggleModule(moduleIndex) {
    const moduleContent = document.getElementById(`module-${moduleIndex}`);
    if (moduleContent) {
        moduleContent.classList.toggle('hidden');
    }
}

function toggleVideoCompletion(grade, moduleIndex, videoIndex) {
    const currentState = appState.isVideoCompleted(grade, moduleIndex, videoIndex);
    if (currentState) {
        // Remove completion
        delete appState.userProgress.videoProgress[grade][`${moduleIndex}-${videoIndex}`];
    } else {
        // Mark as completed
        appState.markVideoCompleted(grade, moduleIndex, videoIndex);
    }
    
    // Update progress display
    updateModuleProgress(moduleIndex, grade);
}

function updateModuleProgress(moduleIndex, grade) {
    const progress = appState.getModuleProgress(grade, moduleIndex);
    const progressCircle = document.querySelector(`[data-module-index="${moduleIndex}"] .progress-circle`);
    if (progressCircle) {
        progressCircle.setAttribute('data-progress', progress);
        progressCircle.querySelector('span').textContent = `${progress}%`;
        
        // Add completed class to module if 100%
        const moduleCard = document.querySelector(`[data-module-index="${moduleIndex}"]`);
        if (progress === 100) {
            moduleCard.classList.add('completed');
        } else {
            moduleCard.classList.remove('completed');
        }
    }
}

// Quiz functions
function startQuiz(grade, moduleIndex) {
    const gradeData = appState.gradeData[grade];
    const modules = Object.values(gradeData.modules);
    const moduleData = modules[moduleIndex];
    
    if (!moduleData.quiz) return;
    
    let currentQuestion = 0;
    let score = 0;
    const questions = moduleData.quiz.questions;
    showQuizModal(questions, currentQuestion, score, grade, moduleIndex);
}

function showQuizModal(questions, currentQuestion, score, grade, moduleIndex) {
    const question = questions[currentQuestion];
    
    const modalHTML = `
        <div class="modal-overlay" id="quiz-modal">
            <div class="modal-content">
                <div class="quiz-question">
                    <h3>Question ${currentQuestion + 1} of ${questions.length}</h3>
                    <h2>${question.question}</h2>
                    <div class="quiz-options">
                        ${question.options.map((option, index) => `
                            <button class="quiz-option btn btn-secondary" onclick="selectQuizAnswer(${index}, ${question.correct}, '${question.explanation.replace(/'/g, "\\'")}', ${currentQuestion}, ${questions.length}, ${score}, '${grade}', ${moduleIndex})">
                                ${option}
                            </button>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function selectQuizAnswer(selectedIndex, correctIndex, explanation, currentQuestion, totalQuestions, score, grade, moduleIndex) {
    const isCorrect = selectedIndex === correctIndex;
    if (isCorrect) score++;
    
    // Show feedback
    const modal = document.getElementById('quiz-modal');
    modal.innerHTML = `
        <div class="modal-content">
            <div class="quiz-result">
                <h3>${isCorrect ? 'Correct!' : 'Incorrect'}</h3>
                <p>${explanation}</p>
                <button class="btn btn-primary" onclick="nextQuizQuestion(${currentQuestion + 1}, ${totalQuestions}, ${score}, '${grade}', ${moduleIndex})">
                    ${currentQuestion + 1 < totalQuestions ? 'Next Question' : 'Finish Quiz'}
                </button>
            </div>
        </div>
    `;
}

function nextQuizQuestion(nextQuestion, totalQuestions, score, grade, moduleIndex) {
    document.getElementById('quiz-modal').remove();
    
    if (nextQuestion < totalQuestions) {
        const gradeData = appState.gradeData[grade];
        const modules = Object.values(gradeData.modules);
        const questions = modules[moduleIndex].quiz.questions;
        showQuizModal(questions, nextQuestion, score, grade, moduleIndex);
    } else {
        finishQuiz(score, totalQuestions, grade, moduleIndex);
    }
}

function showProjectDetails(grade, projectId) {
    const gradeData = appState.gradeData[grade];
    let project;
    
    if (projectId === 'main') {
        project = gradeData.mainProject;
    } else {
        project = gradeData.projects?.find(p => p.id === projectId);
    }
    
    if (!project) return;
    
    router.navigate(`/projects/${grade}/${projectId}`);
}


function finishQuiz(score, totalQuestions, grade, moduleIndex) {
    // Save quiz completion
    appState.markQuizCompleted(grade, moduleIndex, score);
    
    // Show final results
    const modalHTML = `
        <div class="modal-overlay" id="quiz-results">
            <div class="modal-content">
                <div class="quiz-result">
                    <h2>Quiz Complete!</h2>
                    <div class="score-feedback">
                        ${score}/${totalQuestions} Correct
                    </div>
                    <p>${score === totalQuestions ? 'Perfect score! 🎉' : score >= totalQuestions * 0.8 ? 'Great job! 👏' : 'Keep practicing! 💪'}</p>
                    <button class="btn btn-primary" onclick="closeQuizModal()">Continue Learning</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Update progress display
    setTimeout(() => updateModuleProgress(moduleIndex, grade), 100);
}

function closeQuizModal() {
    const modal = document.getElementById('quiz-results');
    if (modal) {
        modal.remove();
    }
}

// Project functions
function startProjectWork(projectTitle) {
    alert(`🚀 Starting project: ${projectTitle}\n\nThis would open your development environment with:\n• Step-by-step guidance\n• Starter code templates\n• Resource links\n• Progress tracking\n\nReady to build something amazing!`);
}

function downloadProjectResources(projectTitle) {
    alert(`📥 Downloading resources for: ${projectTitle}\n\nThis package includes:\n• Starter code files\n• Dataset samples\n• Documentation\n• Video tutorials\n• Assessment rubrics`);
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Handle browser back/forward buttons
    window.addEventListener('popstate', function(event) {
        router.handleRoute(window.location.pathname);
    });
    
    // Initial route handling
    router.handleRoute(window.location.pathname);
    
    // Subscribe to state changes
    appState.subscribe((state) => {
        console.log('State changed:', state);
    });
});
