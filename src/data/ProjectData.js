// projectData with objects.

const projectData = [
    {
        text: 'A weather app with React Hooks using a weatherbit API.',
        date: 'Weather app with Hooks',
        category: {
            tag: 'react',
            color: '#add8e6'
        },
        link: {
            url: 'https://gabbycampos.github.io/weatherApp-with-hooks/',
            text: 'check it out'
        }
    },
    {
        text: 'This is one of the React projects from freecodecamp but developed with react hooks.',
        date: 'Calculator with Hooks',
        category: {
            tag: 'react',
            color: '#add8e6'
        },
        link: {
            url: 'https://gabbycampos.github.io/calculator-hooks/',
            text: 'check it out'
        }
    },
    {
        text: 'This is one of the React projects from freecodecamp but developed with react hooks.',
        date: 'Random Quotes with Hooks',
        category: {
            tag: 'react',
            color: '#add8e6'
        },
        link: {
            url: 'https://gabbycampos.github.io/random-quotes-hooks/',
            text: 'check it out'
        }
    },
    {
        text: 'This is a website for a HERS company. Created with React JS, bootstrap and a SendGrid API for the email contact form.It was also deployed to Heroku.',
        date: 'Just Air Experts',
        category: {
            tag: 'react',
            color: '#add8e6'
        },
        link: {
            url: 'https://powerful-reef-11464.herokuapp.com/',
            text: 'check it out'
        }
    },
    {
        text: 'A daily task management application to add/delete daily tasks with an authentication form. Created with React JS and a Firebase API database.',
        date: 'Bullet Journal',
        category: {
            tag: 'react',
            color: '#add8e6'
        },
        link: {
            url: 'https://gabbycampos.github.io/bullet-journal/',
            text: 'check it out'
        }
    },
    {
        text: 'One of the freecodecamp take home projects. Search for any article or select a random one.',
        date: 'Wikipedia Viewer',
        category: {
            tag: 'JavaScript',
            color: '#f5de1a'
        },
        link: {
            url: 'https://gabbycampos.github.io/wikipedia-viewer/',
            text: 'check it out'
        }
    },
    {
        text: 'This is an app to see different variations of your name.',
        date: 'Name variations',
        category: {
            tag: 'JavaScript',
            color: '#f5de1a'
        },
        link: {
            url: 'https://gabbycampos.github.io/name-variations/',
            text: 'check it out'
        }
    },
    {
        text: 'I learned how to pull data from Flickr using their API key. The webpage I created allows users to search for public images while also enjoying an interactive webpage where one can change the background color of the webpage.',
        date: 'Flickr API',
        category: {
            tag: 'JavaScript',
            color: '#f5de1a'
        },
        link: {
            url: 'https://gabbycampos.github.io/flickr-api/',
            text: 'check it out'
        }
    },
    {
        text: 'Built a memory game with JavaScript. Garbage Pail Kids style.',
        date: 'Memory Game',
        category: {
            tag: 'JavaScript',
            color: '#f5de1a'
        },
        link: {
            url: 'https://gabbycampos.github.io/memory-game-JS/',
            text: 'check it out'
        }
    },
    {
        text: 'Built the Whack A Mole game with JavaScript',
        date: 'Whack A Mole',
        category: {
            tag: 'JavaScript',
            color: '#f5de1a'
        },
        link: {
            url: 'https://gabbycampos.github.io/whack-a-mole-JS/',
            text: 'check it out'
        }
    },
    {
        text: 'Built a snake game with JavaScript',
        date: 'Snake Game',
        category: {
            tag: 'JavaScript',
            color: '#f5de1a'
        },
        link: {
            url: 'https://gabbycampos.github.io/snake-game-JS',
            text: 'check it out'
        }
    },
    {
        text: 'First of the Front End Libraries project. Made with React.',
        date: 'Random Quote',
        category: {
            tag: 'FreeCodeCamp',
            color: '#006400'
        },
        link: {
            url: 'https://codepen.io/gabatron/pen/QWjNMoJ',
            text: 'check it out'
        },
    },
    {
        text: 'Second of the Front End Libraries project. Made with React.',
        date: 'Markdown Previewer',
        category: {
            tag: 'FreeCodeCamp',
            color: '#006400'
        },
        link: {
            url: 'https://codepen.io/gabatron/pen/ExVKzYj',
            text: 'check it out'
        },
    },
    {
        text: 'Third of the Front End Libraries project. Made with React.',
        date: 'Drum Machine',
        category: {
            tag: 'FreeCodeCamp',
            color: '#006400'
        },
        link: {
            url: 'https://codepen.io/gabatron/pen/abvNeoP',
            text: 'check it out'
        },
    },
    {
        text: 'Fourth of the Front End Libraries project. Made with React.',
        date: 'JavaScript Calculator',
        category: {
            tag: 'FreeCodeCamp',
            color: '#006400'
        },
        link: {
            url: 'https://codepen.io/gabatron/pen/QWjEWGN',
            text: 'check it out'
        },
    },
    {
        text: 'Fifth of the Front End Libraries project. Made with React.',
        date: 'Pomodoro Check',
        category: {
            tag: 'FreeCodeCamp',
            color: '#006400'
        },
        link: {
            url: 'https://codepen.io/gabatron/pen/ExVyWQz',
            text: 'check it out'
        },
    },
    {
        text: 'JavaScript Algorithms and Data Structures application. This application takes a product price and cash given and returns the amount left in the cash register.',
        date: 'Cash Register',
        category: {
            tag: 'FreeCodeCamp',
            color: '#006400'
        },
        link: {
            url: 'https://gabbycampos.github.io/cash_register_js/',
            text: 'check it out'
        }
    },
    {
        text: 'JavaScript Algorithms and Data Structures application. This application converts a number into a roman numeral.',
        date: 'Roman Numeral Converter',
        category: {
            tag: 'FreeCodeCamp',
            color: '#006400'
        },
        link: {
            url: 'https://gabbycampos.github.io/roman_numeral_js/',
            text: 'check it out'
        }
    },
    {
        text: 'JavaScript Algorithms and Data Structures application. This application checks if a number is a valid phone number in the U.S.',
        date: 'Telephone Validator',
        category: {
            tag: 'FreeCodeCamp',
            color: '#006400'
        },
        link: {
            url: 'https://gabbycampos.github.io/telephone_validator_js/',
            text: 'check it out'
        }
    },
    {
        text: 'JavaScript Algorithms and Data Structures application. This application encodes a message.',
        date: 'Caesar cipher',
        category: {
            tag: 'FreeCodeCamp',
            color: '#006400'
        },
        link: {
            url: 'https://gabbycampos.github.io/caesar-s_cipher_js',
            text: 'check it out'
        }
    },
    {
        text: 'JavaScript Algorithms and Data Structures application. This application checks if a word or phrase is a palindrome.',
        date: 'Palindrome',
        category: {
            tag: 'FreeCodeCamp',
            color: '#006400'
        },
        link: {
            url: 'https://gabbycampos.github.io/palindrome_js/',
            text: 'check it out'
        }
    }
    , {
        text: 'This is the first of the Responsive Web Design Projects from FreeCodeCamp. Created with HTML and CSS',
        date: 'Tribute Page',
        category: {
            tag: 'FreeCodeCamp',
            color: '#006400'
        },
        link: {
            url: 'https://codepen.io/gabatron/pen/KKpZvez',
            text: 'check it out'
        }
    }
    , {
        text: 'This is the second of the Responsive Web Design Projects from FreeCodeCamp. Created with HTML and CSS.',
        date: 'Survey Form',
        category: {
            tag: 'JavaScript',
            color: '#006400'
        },
        link: {
            url: 'https://codepen.io/gabatron/pen/qBdxEzY',
            text: 'check it out'
        }
    },
    {
        text: 'This is the third of the Responsive Web Design Projects from FreeCodeCamp. Created with HTML and CSS.',
        date: 'Product Landing Page',
        category: {
            tag: 'FreeCodeCamp',
            color: '#006400'
        },
        link: {
            url: 'https://codepen.io/gabatron/pen/oNXQNKq',
            text: 'check it out'
        }
    },
    {
        text: 'This is the fourth of the Responsive Web Design Projects from FreeCodeCamp. Created with HTML and CSS.',
        date: 'Technical Documentaion Page',
        category: {
            tag: 'FreeCodeCamp',
            color: '#006400'
        },
        link: {
            url: 'https://codepen.io/gabatron/pen/yLNGGrV',
            text: 'check it out'
        }
    },
    {
        text: 'This is the fifth of the Responsive Web Design Projects from FreeCodeCamp. Created with HTML and CSS.',
        date: 'Personal Portfolio Page',
        category: {
            tag: 'FreeCodeCamp',
            color: '#006400'
        },
        link: {
            url: 'https://codepen.io/gabatron/pen/WNvPQEJ',
            text: 'check it out'
        }
    }
];

export default projectData;