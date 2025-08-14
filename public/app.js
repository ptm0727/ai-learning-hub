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
            {"id": "first-login", "title": "Welcome Aboard", "description": "Completed your first login", "icon": "👋"},
            {"id": "first-video", "title": "Knowledge Seeker", "description": "Watched your first video", "icon": "🎥"},
            {"id": "first-quiz", "title": "Quiz Master", "description": "Completed your first quiz", "icon": "📝"},
            {"id": "perfect-score", "title": "Perfectionist", "description": "Scored 100% on a quiz", "icon": "🎯"},
            {"id": "module-complete", "title": "Module Master", "description": "Completed your first module", "icon": "🏆"},
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
        const totalItems = totalVideos + 1;
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
        
        // Handle browser back/forward buttons
        window.addEventListener('popstate', (e) => {
            this.handleRoute(window.location.pathname);
        });

        // Handle initial page load with correct route
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
            if (!appState.gradeData[grade]) {
                app.innerHTML = this.render404();
                return;
            }
            app.innerHTML = this.renderLearningPage(grade);
        } else if (route.startsWith('/projects/')) {
            const pathParts = route.split('/');
            const grade = pathParts[2];
            
            if (!appState.gradeData[grade]) {
                app.innerHTML = this.render404();
                return;
            }

            if (pathParts.length === 4) {
                const projectId = pathParts[3];
                app.innerHTML = this.renderProjectDetailPage(grade, projectId);
            } else if (pathParts.length === 3) {
                app.innerHTML = this.renderProjectsPage(grade);
            } else {
                app.innerHTML = this.render404();
            }
        } else {
            app.innerHTML = this.render404();
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

renderHomePage() {
    const grades = Object.entries(appState.gradeData);
    const gradeCards = grades.map(([grade, data]) => `
        <div class="grade-card" onclick="router.navigate('/learn/${grade}')">
            <div class="grade-header">
                <div class="grade-number">Grade ${grade}</div>
                <div class="grade-icon">${this.getGradeIcon(grade)}</div>
                <div class="grade-arrow">→</div>
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
                        <span>📚</span>
                        <span>${Object.keys(data.modules).length} modules</span>
                    </div>
                    <div class="detail-item">
                        <span>🎯</span>
                        <span>${data.topics.length} key topics</span>
                    </div>
                </div>
                <div class="grade-meta">
                    <span class="difficulty ${data.difficulty.toLowerCase()}">${data.difficulty}</span>
                    <span class="progress">Free Forever</span>
                </div>
            </div>
        </div>
    `).join('');

    return `
        <!-- Hero Section with Mission Focus -->
        <section class="hero-section ngo-hero">
            <div class="container">
                <div class="hero-content">
                    <div class="hero-text">
                        <div class="hero-badge">
                            <span class="badge-icon">🇮🇳</span>
                            <span>Proudly Serving India's Youth</span>
                        </div>
                        <h1 class="hero-title">
                            Empowering India's Next Generation with 
                            <span class="highlight-text">Free AI Education</span>
                        </h1>
                        <p class="hero-subtitle">
                            Built by passionate educators for every young mind. CodeSapling.org provides world-class AI education 
                            completely free to students across India and Karnataka. Join thousands already 
                            transforming their lives through technology.
                        </p>
                        <div class="hero-stats">
                            <div class="stat-item">
                                <div class="stat-number">12,000+</div>
                                <div class="stat-label">Students Empowered</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number">100%</div>
                                <div class="stat-label">Free Forever</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number">50+</div>
                                <div class="stat-label">Cities Reached</div>
                            </div>
                        </div>
                        <div class="hero-buttons">
                            <button class="btn btn--primary btn--lg" onclick="showAuthModal('signup')">
                                <span>🚀</span>
                                Start Learning Free
                            </button>
                            <button class="btn btn--outline btn--lg" onclick="scrollToMission()">
                                <span>❤️</span>
                                Our Mission
                            </button>
                        </div>
                        <div class="hero-trust">
                            <p>✨ Trusted by students from 500+ schools across Karnataka and India</p>
                        </div>
                    </div>
                    <div class="hero-image ngo-hero-image">
                        <div class="ai-illustration">
                            <div class="brain-icon">🧠</div>
                            <div class="tech-elements">
                                <div class="tech-element">Machine Learning</div>
                                <div class="tech-element">Computer Vision</div>
                                <div class="tech-element">Natural Language</div>
                                <div class="tech-element">Deep Learning</div>
                            </div>
                            <div class="floating-icons">
                                <div class="float-icon">💻</div>
                                <div class="float-icon">🎓</div>
                                <div class="float-icon">🚀</div>
                                <div class="float-icon">💼</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Mission Statement Section -->
        <section id="mission-section" class="mission-statement">
            <div class="container">
                <div class="mission-content">
                
                    <div class="mission-text">
                        <h2>Bridging the Digital Divide, One Student at a Time</h2>
                        <p class="mission-description">
                            In a world where AI shapes the future, every Indian youth deserves equal access to 
                            cutting-edge education. CodeSapling.org isn't just a learning platform—it's a collaborative movement 
                            to democratize AI knowledge and create opportunities for every aspiring young mind.
                        </p>
                    <div class="mission-pillars">
                        <div class="pillar">
                        <div class="pillar-icon">🎯</div>
                        <h4>Our Mission</h4>
                        <p>To democratize AI education across India by providing completely free, high-quality AI learning resources to every young mind, regardless of their economic background or geographical location.</p>
                    </div>
                    
                    <div class="pillar">
                        <div class="pillar-icon">🌟</div>
                        <h4>Our Vision</h4>
                        <p>To create a generation of AI-literate youth in India who will drive technological innovation, solve local problems with AI solutions, and position India as a global leader in artificial intelligence.</p>
                    </div>
                    
                    <div class="pillar">
                        <div class="pillar-icon">❤️</div>
                        <h4>Why We Do This</h4>
                        <p>We believe every child deserves access to cutting-edge education. In a rapidly evolving digital world, AI literacy isn't just an advantage—it's essential. We're bridging the gap between potential and opportunity.</p>
                    </div>
                    
                    <div class="pillar">
                        <div class="pillar-icon">🚀</div>
                        <h4>Our Impact Goals</h4>
                        <ul>
                            <li>Reach 100,000+ students across India by 2025</li>
                            <li>Establish AI learning centers in rural Karnataka</li>
                            <li>Partner with schools for curriculum integration</li>
                            <li>Create job opportunities through AI skill development</li>
                            <li>Build India's largest free AI education community</li>
                        </ul>
                    </div>
                
                           
                        </div>
                    </div>
                                       <div class="founder-note">
    <blockquote>
        "Every line of code taught for free is an investment in India's digital future. Our youth shouldn't be limited by circumstances—they should be empowered by possibilities."
        <cite>- Pratham (Founder) & Nirbhay (Co-Founder)</cite>
    </blockquote>
</div>
                </div>
            </div>
        </section>


        <!-- Grade Selection with Free Emphasis -->
        <section class="grade-selection">
            <div class="container">
                <div class="section-header">
                    <h2>Choose Your AI Learning Path</h2>
                    <p>Comprehensive, structured curriculum designed by our team specifically for Indian students. 
                       All courses are completely free and will remain free forever.</p>
                </div>
                <div class="grade-grid">
                    ${gradeCards}
                </div>
                <div class="grade-benefits">
                    <div class="benefit-item">
                        <span class="benefit-icon">💰</span>
                        <div>
                            <h4>100% Free</h4>
                            <p>No hidden costs, no premium tiers. Education is our team's gift to India's youth.</p>
                        </div>
                    </div>
                    <div class="benefit-item">
                        <span class="benefit-icon">🏆</span>
                        <div>
                            <h4>Industry-Ready Skills</h4>
                            <p>Learn the same AI technologies used by top companies worldwide.</p>
                        </div>
                    </div>
                    <div class="benefit-item">
                        <span class="benefit-icon">🎓</span>
                        <div>
                            <h4>Certification</h4>
                            <p>Earn recognized certificates to boost your academic and career prospects.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Impact Statistics -->
        <section id="impact-section" class="impact-section">
            <div class="container">
                <div class="section-header">
                    <h2>Our Growing Impact Across India</h2>
                    <p>Real numbers, real impact, real change in young lives</p>
                </div>
                <div class="impact-grid">
                    <div class="impact-card">
                        <div class="impact-icon">👨‍🎓</div>
                        <div class="impact-number">12,547</div>
                        <div class="impact-label">Students Enrolled</div>
                        <div class="impact-growth">+2,341 this month</div>
                    </div>
                    <div class="impact-card">
                        <div class="impact-icon">🏫</div>
                        <div class="impact-number">500+</div>
                        <div class="impact-label">Partner Schools</div>
                        <div class="impact-growth">Across Karnataka & India</div>
                    </div>
                    <div class="impact-card">
                        <div class="impact-icon">🚀</div>
                        <div class="impact-number">8,932</div>
                        <div class="impact-label">AI Projects Built</div>
                        <div class="impact-growth">Solving real problems</div>
                    </div>
                    <div class="impact-card">
                        <div class="impact-icon">💼</div>
                        <div class="impact-number">1,200+</div>
                        <div class="impact-label">Career Opportunities</div>
                        <div class="impact-growth">Students placed in tech roles</div>
                    </div>
                </div>
                
                <div class="testimonials">
                    <h3>Stories of Transformation</h3>
                    <div class="testimonial-grid">
                        <div class="testimonial-card">
                            <p>"CodeSapling's team created something amazing. From a small village in Karnataka, I never thought I could learn AI. Now I'm building apps that help farmers!"</p>
                            <div class="testimonial-author">
                                <strong>Ananya S.</strong>
                                <span>Grade 11, Mysuru</span>
                            </div>
                        </div>
                        <div class="testimonial-card">
                            <p>"The team's dedication to free education changed my life. I got selected for a tech internship because of skills I learned on CodeSapling!"</p>
                            <div class="testimonial-author">
                                <strong>Rahul M.</strong>
                                <span>Grade 12, Bengaluru</span>
                            </div>
                        </div>
                        <div class="testimonial-card">
                            <p>"My teachers love using CodeSapling resources. It's incredible how the team made such quality education completely free!"</p>
                            <div class="testimonial-author">
                                <strong>Priya K.</strong>
                                <span>Grade 10, Hubli</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
<!-- Team Section -->
<section class="founder-section" id="team-section">
    <div class="container">
        <div class="section-header">
            <h2>Our Journey: From Students to Changemakers</h2>
            <p>Discover how a college assignment transformed into a mission to democratize AI education across India</p>
        </div>
        

            <div class="founder-photo">
    <img src="/assets/img.jpeg" alt="CodeSapling Team Story" class="team-story-image">
    <div class="photo-caption">
        <p><strong>Our Story</strong></p>
        <p>From classroom to community</p>
    </div>
</div>
            <div class="founder-story-wrapped">
                <div class="founder-title">The Beginning of Our Mission</div>
                
                <p>It all started during our college years when we were just students trying to earn grade points through mandatory social work. Like many of our peers, we initially approached it as just another academic requirement - something to check off our list to maintain our GPAs.</p>
                
                <p>But as we began our community service hours, visiting local schools and interacting with bright young minds who lacked access to quality technology education, something shifted. We saw the spark in their eyes when they first encountered programming concepts, the excitement when they solved their first algorithm, and the disappointment when they realized how limited their learning resources were.</p>
                
                <div class="founder-quote">
                    "What started as a requirement for grades became a calling for change. We realized that these students had the same potential as us - they just needed the right opportunities and resources."
                </div>
                
                <h4>From Obligation to Passion</h4>
                <p>Week after week, we returned to those communities, not because we had to anymore, but because we wanted to. We started bringing our own laptops, creating simple coding exercises, and sharing our knowledge. The transformation wasn't just in the students we taught - it was in us as well.</p>
                
                <p>We began to understand the systemic barriers that prevent talented young minds from accessing quality AI and technology education. Financial constraints, lack of infrastructure, limited mentorship, and geographical isolation were keeping brilliant students from reaching their potential.</p>
                
                <h4>Building Something Bigger</h4>
                <p>As our informal teaching sessions grew, we realized we needed to think bigger. What started as weekend visits evolved into structured curriculum development. Our small group of friends became a dedicated team, each bringing unique skills - some focused on content creation, others on technology development, and some on community outreach.</p>
                
                <p>Late nights in our college hostel rooms were spent planning lessons, creating interactive content, and dreaming about reaching students across India. We pooled our resources, used our academic access to research papers and tools, and slowly built what would become the foundation of CodeSapling.org.</p>
                
                <h4>The Vision Takes Shape</h4>
                <p>Today, what began as a college social work requirement has grown into a comprehensive platform serving thousands of students across India. Our team has expanded, but our core values remain the same - education should be accessible, engaging, and empowering for everyone, regardless of their background or circumstances.</p>
                
                <p>Every line of code we write, every lesson we create, and every student we reach is a testament to the power of collective action and shared vision. We're not just building an educational platform - we're building a movement.</p>
                
                <div class="founder-cta">
                    <h4>🌟 Join Our Mission</h4>
                    <p>Our story continues with every student who joins our platform. Together, we're proving that when passionate individuals unite for a common cause, they can create lasting change.</p>
                </div>
            </div>
        </div>
    </div>
</section>


<!-- New Team Carousel Section -->
<div class="team-carousel-section" style="background: var(--color-bg-1); padding: var(--space-64) 0;">
    <div class="container">
        <div class="section-header">
            <h2>Meet Our Innovation Collective</h2>
            <p>The passionate individuals who bring our vision to life</p>
        </div>
        
        <div class="team-carousel">
            <div class="team-grid">
                <div class="team-member-card">
                    <div class="member-photo">
                        <div class="member-avatar">P</div>
                    </div>
                    <div class="member-info">
                        <h4>Pratham</h4>
                        <p class="member-role">Chief Innovation Officer</p>
                        <p class="member-description">Visionary founder with deep technical expertise in AI and education technology</p>
                    </div>
                </div>
                
                <div class="team-member-card">
                    <div class="member-photo">
                        <div class="member-avatar">N</div>
                    </div>
                    <div class="member-info">
                        <h4>Nirbhay</h4>
                        <p class="member-role">Strategic Growth Architect</p>
                        <p class="member-description">Co-founder driving strategic direction and operational excellence across the organization</p>
                    </div>
                </div>
                
                <div class="team-member-card">
                    <div class="member-photo">
                        <div class="member-avatar">A</div>
                    </div>
                    <div class="member-info">
                        <h4>[Your Name]</h4>
                        <p class="member-role">Learning Experience Designer</p>
                        <p class="member-description">Crafting engaging and interactive educational experiences for students across all levels</p>
                    </div>
                </div>
                
                <div class="team-member-card">
                    <div class="member-photo">
                        <div class="member-avatar">R</div>
                    </div>
                    <div class="member-info">
                        <h4>[Your Name]</h4>
                        <p class="member-role">Community Impact Catalyst</p>
                        <p class="member-description">Building bridges between our platform and communities across India</p>
                    </div>
                </div>
                
                <div class="team-member-card">
                    <div class="member-photo">
                        <div class="member-avatar">S</div>
                    </div>
                    <div class="member-info">
                        <h4>[Your Name]</h4>
                        <p class="member-role">Technology Evangelist</p>
                        <p class="member-description">Driving technical innovation and platform development initiatives</p>
                    </div>
                </div>
                
                <div class="team-member-card">
                    <div class="member-photo">
                        <div class="member-avatar">M</div>
                    </div>
                    <div class="member-info">
                        <h4>[Your Name]</h4>
                        <p class="member-role">Student Success Advocate</p>
                        <p class="member-description">Ensuring every student receives personalized support and guidance for their learning journey</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="team-values" style="margin-top: var(--space-48); text-align: center;">
            <h3>Our Collective Values</h3>
            <div class="values-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--space-24); margin-top: var(--space-24);">
                <div class="value-item" style="background: var(--color-surface); padding: var(--space-20); border-radius: var(--radius-lg); border: 1px solid var(--color-border);">
                    <div style="font-size: var(--font-size-2xl); margin-bottom: var(--space-8);">🤝</div>
                    <h4>Collaboration</h4>
                    <p style="color: var(--color-text-secondary); margin: 0;">We believe the best solutions come from diverse minds working together</p>
                </div>
                <div class="value-item" style="background: var(--color-surface); padding: var(--space-20); border-radius: var(--radius-lg); border: 1px solid var(--color-border);">
                    <div style="font-size: var(--font-size-2xl); margin-bottom: var(--space-8);">🌱</div>
                    <h4>Growth</h4>
                    <p style="color: var(--color-text-secondary); margin: 0;">Every challenge is an opportunity to learn and improve</p>
                </div>
                <div class="value-item" style="background: var(--color-surface); padding: var(--space-20); border-radius: var(--radius-lg); border: 1px solid var(--color-border);">
                    <div style="font-size: var(--font-size-2xl); margin-bottom: var(--space-8);">💡</div>
                    <h4>Innovation</h4>
                    <p style="color: var(--color-text-secondary); margin: 0;">We constantly push boundaries to create better learning experiences</p>
                </div>
                <div class="value-item" style="background: var(--color-surface); padding: var(--space-20); border-radius: var(--radius-lg); border: 1px solid var(--color-border);">
                    <div style="font-size: var(--font-size-2xl); margin-bottom: var(--space-8);">❤️</div>
                    <h4>Impact</h4>
                    <p style="color: var(--color-text-secondary); margin: 0;">Every student's success story motivates us to do more</p>
                </div>
            </div>
        </div>
    </div>
</div>

        <!-- Call to Action -->
        <section class="final-cta">
            <div class="container">
                <div class="cta-content">
                    <h2>Ready to Shape India's AI Future?</h2>
                    <p>Join thousands of students who are already building tomorrow's solutions. 
                       Your journey into AI starts with a single click.</p>
                    <div class="cta-buttons">
                        <button class="btn btn--primary btn--lg" onclick="showAuthModal('signup')">
                            🚀 Start Learning Free
                        </button>
                        <button class="btn btn--outline btn--lg" onclick="scrollToTeam()">
                            🤝 Meet Our Team
                        </button>
                    </div>
                    <p class="cta-note">
                        <strong>🌟 Forever Free Promise:</strong> Quality AI education should never be behind a paywall. 
                        That's our team's commitment to India's youth.
                    </p>
                </div>
            </div>
        </section>
    `;
}

getGradeIcon(grade) {
        const icons = {
            '8': '🌱', // AI Foundations & Discovery
            '9': '🔍', // AI Exploration & Machine Learning  
            '10': '🧠', // Neural Networks & Advanced AI
            '11': '🚀', // AI Innovation & Research
            '12': '👨‍💼' // AI Mastery & Professional Development
        };
        return icons[grade] || '📚';
    }

    renderDashboardPage() {
        if (!appState.currentUser) {
            this.navigate('/');
            return '';
        }

        const achievements = appState.achievements.map(achievement => {
            const isEarned = appState.userProgress.achievements.includes(achievement.id);
            return `
                <div class="achievement-item ${isEarned ? 'earned' : ''}">
                    <div class="achievement-icon">${achievement.icon}</div>
                    <div class="achievement-info">
                        <h4>${achievement.title}</h4>
                        <p>${achievement.description}</p>
                    </div>
                </div>
            `;
        }).join('');

        return `
            <div class="dashboard">
                <div class="page-header">
                    <h1>Your Learning Dashboard</h1>
                    <p>Track your AI learning journey and achievements</p>
                </div>

                <div class="dashboard-stats">
                    <div class="card">
                        <div class="card__body">
                            <h3>📚 Completed Activities</h3>
                            <div class="stat-number">${appState.userProgress.completedActivities}</div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card__body">
                            <h3>🎥 Videos Watched</h3>
                            <div class="stat-number">${appState.userProgress.videosWatched}</div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card__body">
                            <h3>🏆 Achievements</h3>
                            <div class="stat-number">${appState.userProgress.achievementsEarned}</div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card__body">
                            <h3>🔥 Learning Streak</h3>
                            <div class="stat-number">${appState.userProgress.learningStreak}</div>
                        </div>
                    </div>
                </div>

                <section class="grade-selection">
                    <div class="section-header">
                        <h2>Continue Learning</h2>
                        <p>Pick up where you left off</p>
                    </div>
                    <div class="grade-grid">
                        ${Object.entries(appState.gradeData).map(([grade, data]) => `
                            <div class="grade-card" onclick="navigateToGrade('${grade}')">
                                <div class="grade-header">
                                    <div class="grade-number">Grade ${grade}</div>
                                    <div class="grade-icon">🎯</div>
                                </div>
                                <div class="grade-content">
                                    <h3>${data.title}</h3>
                                    <p>${data.description}</p>
                                    <div class="grade-details">
                                        <div class="detail-item">
                                            <span>⏱️</span>
                                            <span>${data.totalHours} hours</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="grade-meta">
                                    <span class="difficulty ${data.difficulty.toLowerCase()}">${data.difficulty}</span>
                                    <span class="progress">${appState.userProgress.gradeProgress[grade] || 0}% complete</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </section>

                <section class="achievements-section">
                    <div class="section-header">
                        <h2>Your Achievements</h2>
                        <p>Celebrate your AI learning milestones</p>
                    </div>
                    <div class="achievements-grid">
                        ${achievements}
                    </div>
                </section>
            </div>
        `;
    }

    renderLearningPage(grade) {
        const gradeData = appState.gradeData[grade];
        if (!gradeData) return this.render404();

        const modules = Object.entries(gradeData.modules || {});
        const moduleCards = modules.map(([moduleTitle, moduleData], moduleIndex) => {
            const progress = appState.getModuleProgress(grade, moduleIndex);
            const isCompleted = progress === 100;
            
            return `
                <div class="module-card ${isCompleted ? 'completed' : ''}" data-module="${moduleIndex}">
                    <div class="module-header" onclick="toggleModule(${moduleIndex})">
                        <div class="module-info">
                            <h3>${moduleTitle}</h3>
                            <p>${moduleData.description}</p>
                            <div class="module-meta">
                                <span><i>⏱️</i> ${moduleData.duration}</span>
                                <span><i>📹</i> ${moduleData.videos ? moduleData.videos.length : 0} videos</span>
                                <span><i>📝</i> Quiz included</span>
                            </div>
                        </div>
                        <div class="progress-circle" style="--progress: ${progress}">
                            <span>${progress}%</span>
                        </div>
                    </div>
                    <div class="module-content hidden" id="module-content-${moduleIndex}">
                        ${this.renderModuleContent(grade, moduleIndex, moduleData)}
                    </div>
                </div>
            `;
        }).join('');

        return `
            <div class="container">
                <div class="page-header-with-back">
                    <a href="#" onclick="navigateToHome()" class="back-btn">← Back to Home</a>
                    <div class="page-header">
                        <h1>Grade ${grade}: ${gradeData.title}</h1>
                        <p>${gradeData.description}</p>
                    </div>
                </div>

                <div class="course-info">
                    <span><i>⏱️</i> ${gradeData.totalHours} Total Hours</span>
                    <span><i>📊</i> ${gradeData.difficulty} Level</span>
                    <span><i>📚</i> ${gradeData.topics.length} Topics</span>
                    <span><i>🎯</i> ${Object.keys(gradeData.modules || {}).length} Modules</span>
                </div>

                <div class="course-modules">
                    ${moduleCards}
                </div>

                <div class="projects-section">
                    <h2>Hands-On Projects</h2>
                    <p>Apply your knowledge with this comprehensive hands-on project</p>
                    <div class="projects-grid">
                        <div class="project-card" onclick="navigateToProject('${grade}', 'main')">
                            <h4>${gradeData.mainProject.title}</h4>
                            <p>${gradeData.mainProject.description}</p>
                            <div class="project-meta">Difficulty: ${gradeData.mainProject.difficulty}</div>
                            <button class="btn btn-primary">Start Project</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    renderModuleContent(grade, moduleIndex, moduleData) {
        const videos = (moduleData.videos || []).map((video, videoIndex) => {
            const isCompleted = appState.isVideoCompleted(grade, moduleIndex, videoIndex);
            return `
                <div class="video-item ${isCompleted ? 'completed' : ''}">
                    <div class="video-checkbox">
                        <input type="checkbox" ${isCompleted ? 'checked' : ''} 
                               onchange="handleVideoComplete('${grade}', ${moduleIndex}, ${videoIndex}, this.checked)">
                    </div>
                    <div class="video-info">
                        <iframe src="https://www.youtube.com/embed/${video.id}" 
                                title="${video.title}" frameborder="0" allowfullscreen></iframe>
                        <h5>${video.title}</h5>
                        <p>${video.description}</p>
                        <span class="video-duration">⏱️ ${video.duration}</span>
                    </div>
                </div>
            `;
        }).join('');

        const isQuizCompleted = appState.isQuizCompleted(grade, moduleIndex);
        const quizScore = appState.getQuizScore(grade, moduleIndex);

        return `
            <div class="videos-section">
                <h4>📹 Video Lessons</h4>
                <div class="video-list">
                    ${videos}
                </div>
            </div>

            <div class="quiz-section">
                <h4>📝 Module Quiz</h4>
                <div class="quiz-info">
                    <p>Test your understanding with ${moduleData.quiz ? moduleData.quiz.questions.length : 0} questions</p>
                    ${isQuizCompleted ? 
                        `<div class="quiz-completed">
                            ✅ Quiz completed with ${quizScore}% score
                        </div>` : 
                        `<button class="btn btn-primary" onclick="startQuiz('${grade}', ${moduleIndex})">
                            Start Quiz
                        </button>`
                    }
                </div>
            </div>
        `;
    }

    renderProjectDetailPage(grade, projectId) {
        const gradeData = appState.gradeData[grade];
        if (!gradeData) return this.render404();

        let project;
        if (projectId === 'main') {
            project = gradeData.mainProject;
        } else {
            project = gradeData.projects?.find(p => p.id === projectId);
        }

        if (!project) return this.render404();

        const steps = project.projectSteps.map(step => `
            <div class="step-card">
                <div class="step-header">
                    <div class="step-number">${step.step}</div>
                    <div class="step-info">
                        <h4>${step.title}</h4>
                        <p class="time-estimate">⏱️ ${step.timeEstimate}</p>
                    </div>
                </div>
                <div class="step-description">
                    <p>${step.description}</p>
                </div>
                <div class="step-tasks">
                    <h5>Tasks:</h5>
                    <ul>
                        ${step.tasks.map(task => `<li>${task}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');

        return `
            <div class="project-overview">
                <div class="container">
                    <div class="page-header-with-back">
                        <a href="#" onclick="navigateToGrade('${grade}')" class="back-btn">← Back to Course</a>
                    </div>

                    <div class="project-title-section">
                        <div>
                            <h1>${project.title}</h1>
                            <div class="project-badges">
                                <span class="difficulty-badge ${project.difficulty.toLowerCase()}">${project.difficulty}</span>
                                <span class="time-badge">⏱️ ${project.estimatedTime}</span>
                            </div>
                        </div>
                    </div>

                    <div class="project-description">
                        <p class="lead">${project.description}</p>
                    </div>

                    <div class="tutorial-video-section">
                        <h3>🎥 Project Tutorial</h3>
                        <div class="tutorial-video-container">
                            <iframe src="https://www.youtube.com/embed/${project.tutorialVideo.id}" 
                                    title="${project.tutorialVideo.title}" frameborder="0" allowfullscreen></iframe>
                            <div class="tutorial-info">
                                <h4>${project.tutorialVideo.title}</h4>
                                <p>${project.tutorialVideo.description}</p>
                                <span class="duration">⏱️ ${project.tutorialVideo.duration}</span>
                            </div>
                        </div>
                    </div>

                    <div class="project-details-grid">
                        <div class="learning-outcomes">
                            <h3>🎯 Learning Outcomes</h3>
                            <ul>
                                ${project.learningOutcomes.map(outcome => `<li>${outcome}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="technical-requirements">
                            <h3>💻 Technical Requirements</h3>
                            <ul>
                                ${project.technicalRequirements.map(req => `<li>${req}</li>`).join('')}
                            </ul>
                        </div>
                    </div>

                    <div class="project-steps">
                        <h2>📋 Project Steps</h2>
                        <div class="steps-container">
                            ${steps}
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
                        <button class="btn btn-outline btn-large">Download Resources</button>
                    </div>
                </div>
            </div>
        `;
    }

    renderProjectsPage(grade) {
        const gradeData = appState.gradeData[grade];
        if (!gradeData) return this.render404();

        return `
            <div class="container">
                <div class="page-header-with-back">
                    <a href="#" onclick="navigateToGrade('${grade}')" class="back-btn">← Back to Course</a>
                    <div class="page-header">
                        <h1>Grade ${grade} Projects</h1>
                        <p>Hands-on projects to apply your AI knowledge</p>
                    </div>
                </div>

                <div class="projects-grid">
                    <div class="enhanced-project" onclick="navigateToProject('${grade}', 'main')">
                        <div class="project-header">
                            <h3>${gradeData.mainProject.title}</h3>
                            <span class="project-difficulty">${gradeData.mainProject.difficulty}</span>
                        </div>
                        <div class="project-content">
                            <p>${gradeData.mainProject.description}</p>
                            <div class="project-details">
                                <div class="project-time">
                                    <span>⏱️</span>
                                    <span class="detail-label">Estimated Time:</span>
                                    <span>${gradeData.mainProject.estimatedTime}</span>
                                </div>
                            </div>
                        </div>
                        <div class="project-actions">
                            <button class="btn btn-primary">View Details</button>
                            <button class="btn btn-outline">Start Project</button>
                        </div>
                    </div>

                    ${(gradeData.projects || []).map(project => `
                        <div class="enhanced-project" onclick="navigateToProject('${grade}', '${project.id}')">
                            <div class="project-header">
                                <h3>${project.title}</h3>
                                <span class="project-difficulty">${project.difficulty}</span>
                            </div>
                            <div class="project-content">
                                <p>${project.description}</p>
                            </div>
                            <div class="project-actions">
                                <button class="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    `).join('')}
                </div>

                ${!gradeData.projects || gradeData.projects.length === 0 ? `
                    <div class="text-center mt-32">
                        <p>Additional projects coming soon for Grade ${grade}!</p>
                    </div>
                ` : ''}
            </div>
        `;
    }

    render404() {
        return `
            <div class="container">
                <div class="page-header">
                    <h1>404 - Page Not Found</h1>
                    <p>The page you're looking for doesn't exist.</p>
                    <button class="btn btn-primary" onclick="navigateToHome()">Go Home</button>
                </div>
            </div>
        `;
    }
}

// Initialize router
const router = new Router();

// Navigation functions - FIXED
window.navigateToHome = function() {
    router.navigate('/');
};

window.navigateToGrade = function(grade) {
    router.navigate(`/learn/${grade}`);
};

window.navigateToDashboard = function() {
    router.navigate('/dashboard');
};

window.navigateToProject = function(grade, projectId) {
    router.navigate(`/projects/${grade}/${projectId}`);
};

window.scrollToGrades = function() {
    const gradesSection = document.getElementById('grades-section');
    if (gradesSection) {
        gradesSection.scrollIntoView({ behavior: 'smooth' });
    }
};

// Module management functions
window.toggleModule = function(moduleIndex) {
    const content = document.getElementById(`module-content-${moduleIndex}`);
    if (content) {
        content.classList.toggle('hidden');
    }
};

window.handleVideoComplete = function(grade, moduleIndex, videoIndex, isCompleted) {
    if (isCompleted) {
        appState.markVideoCompleted(grade, moduleIndex, videoIndex);
        if (window.markVideoCompleted) {
            window.markVideoCompleted(grade, moduleIndex, videoIndex);
        }
    }
};

// Quiz functionality
window.startQuiz = function(grade, moduleIndex) {
    const gradeData = appState.gradeData[grade];
    const modules = Object.values(gradeData.modules || {});
    const module = modules[moduleIndex];
    
    if (!module || !module.quiz) return;

    showQuizModal(module.quiz, grade, moduleIndex);
};

function showQuizModal(quiz, grade, moduleIndex) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'quiz-modal';
    
    let currentQuestion = 0;
    let score = 0;
    let answers = [];

    function renderQuestion() {
        const question = quiz.questions[currentQuestion];
        const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

        return `
            <div class="quiz-progress">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progress}%"></div>
                </div>
                <p>Question ${currentQuestion + 1} of ${quiz.questions.length}</p>
            </div>

            <div class="quiz-question">
                <h3>${question.question}</h3>
                <div class="quiz-options">
                    ${question.options.map((option, index) => `
                        <div class="quiz-option" onclick="selectAnswer(${index})">
                            <div class="quiz-option-content">
                                <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                                <span class="option-text">${option}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="quiz-actions">
                <button class="btn btn-primary" id="next-btn" disabled onclick="nextQuestion()">
                    ${currentQuestion === quiz.questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                </button>
            </div>
        `;
    }

    function renderResults() {
        const percentage = Math.round((score / quiz.questions.length) * 100);
        
        // Save quiz completion
        appState.markQuizCompleted(grade, moduleIndex, percentage);
        if (window.markQuizCompleted) {
            window.markQuizCompleted(grade, moduleIndex, percentage);
        }

        return `
            <div class="quiz-results">
                <div class="score-display">
                    <h2>Quiz Complete!</h2>
                    <div class="score-circle">
                        <div class="score-number">${percentage}%</div>
                    </div>
                    <p>You scored ${score} out of ${quiz.questions.length} questions correctly.</p>
                </div>
                <div class="quiz-actions">
                    <button class="btn btn-primary" onclick="closeQuizModal()">Continue Learning</button>
                    <button class="btn btn-outline" onclick="retakeQuiz()">Retake Quiz</button>
                </div>
            </div>
        `;
    }

    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Module Quiz</h2>
                <button class="modal-close" onclick="closeQuizModal()">&times;</button>
            </div>
            <div class="modal-body" id="quiz-body">
                ${renderQuestion()}
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Quiz functions
    window.selectAnswer = function(answerIndex) {
        // Remove previous selections
        document.querySelectorAll('.quiz-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        
        // Select current answer
        event.target.closest('.quiz-option').classList.add('selected');
        answers[currentQuestion] = answerIndex;
        
        // Enable next button
        document.getElementById('next-btn').disabled = false;
    };

    window.nextQuestion = function() {
        const question = quiz.questions[currentQuestion];
        if (answers[currentQuestion] === question.correct) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion >= quiz.questions.length) {
            // Show results
            document.getElementById('quiz-body').innerHTML = renderResults();
        } else {
            // Next question
            document.getElementById('quiz-body').innerHTML = renderQuestion();
        }
    };

    window.retakeQuiz = function() {
        currentQuestion = 0;
        score = 0;
        answers = [];
        document.getElementById('quiz-body').innerHTML = renderQuestion();
    };

    window.closeQuizModal = function() {
        document.body.removeChild(modal);
        // Refresh the page to show updated progress
        router.render();
    };
}

// Initialize the application
window.addEventListener('DOMContentLoaded', () => {
    // Make global references available
    window.appState = appState;
    window.router = router;
    
    // Check auth state and render
    if (window.checkAuthState) {
        window.checkAuthState().then(() => {
            appState.isLoading = false;
            router.render();
        });
    } else {
        appState.isLoading = false;
        router.render();
    }
});