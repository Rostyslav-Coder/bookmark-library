// Bookmark Library


// Like Database
const javaScript = [
    {
        categories: 'JavaScript',
        title: 'The Odin Project',
        description: 'Simple & Free JavaSCript guide',
        url: 'https://www.theodinproject.com/'
    },
    {
        categories: 'JavaScript',
        title: 'JavaScriptInfo',
        description: 'Simple & Free JavaSCript guide',
        url: 'https://javascript.info/'
    },
    {
        categories: 'JavaScript',
        title: 'MDN JS Lerning',
        description: 'JavaScript in depth, as taught in JavaScript guide',
        url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript'
    },
    {
        categories: 'JavaScript',
        title: 'W3School JavaScript Tutorial',
        description: 'Simple & Free JavaSCript guide',
        url: 'https://www.w3schools.com/js/default.asp'
    },
    {
        categories: 'JavaScript',
        title: 'freeCodeCamp JavaScript Tutorial',
        description: 'Simple & Free JavaSCript guide',
        url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/'
    }
];
const reactList = [
    {
        categories: 'React',
        title: 'React Home Page',
        description: 'The library for web and native user interfaces',
        url: 'https://react.dev/'
    },
    {
        categories: 'React',
        title: 'React MDN Tutorial',
        description: 'Getting started with React',
        url: 'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started'
    },
    {
        categories: 'React',
        title: 'React Microsoft Learn',
        description: 'Getting started with React on Microsoft',
        url: 'https://learn.microsoft.com/ru-ru/windows/dev-environment/javascript/react-overview'
    },
    {
        categories: 'React',
        title: 'React W3School',
        description: 'Getting started with React on W3School',
        url: 'https://www.w3schools.com/REACT/DEFAULT.ASP'
    },
    {
        categories: 'React',
        title: 'freeCodeCamp React Tutorial',
        description: 'Simple & Free React guide',
        url: 'https://www.freecodecamp.org/learn/front-end-development-libraries/'
    }
];
const nodeJSList = [
    {
        categories: 'NodeJS',
        title: 'Learn Node.js',
        description: 'Learn Node.js on nodejs.org',
        url: 'https://nodejs.org/en/learn'
    },
    {
        categories: 'NodeJS',
        title: 'Node.js Course',
        description: 'Learn Node.js on The Odin Project',
        url: 'https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs'
    },
    {
        categories: 'NodeJS',
        title: 'Node.js Course',
        description: 'Learn Node.js on The W3SChool',
        url: 'https://www.w3schools.com/nodejs/'
    },
    {
        categories: 'NodeJS',
        title: 'Node.js Course',
        description: 'Learn Node.js on freeCodeCamp',
        url: 'https://www.freecodecamp.org/learn/back-end-development-and-apis/'
    },
];
const htmlList = [
    {
        categories: 'HTML',
        title: 'HTML Course',
        description: 'Learn HTML on The Odin Project',
        url: ''
    },
];
const cssList = [];
const pythonList = [];
const djangoList = [];
const fastAPIList = [];
const gitList = [];
const dockerList = [];
const sqlList = [];
const mySqlList = [];
const postgreSqlList = [];
const celeryList = [];
const redisList = [];
const swaggerList = [];
const postmanList = [];
const vsCodeList = [
    {
        categories: 'VSCode',
        title: 'Download VS Code',
        description: 'Dowloed last VS Code version',
        url: 'https://code.visualstudio.com/download'
    },
    {
        categories: 'VSCode',
        title: 'VS Code Docs',
        description: 'VS Code Usage Documentation',
        url: 'https://code.visualstudio.com/docs'
    },
    {
        categories: 'VSCode',
        title: 'VS Code Learn',
        description: 'Learn to code with VS Code',
        url: 'https://code.visualstudio.com/learn'
    },
    {
        categories: 'VSCode',
        title: 'VS Code`s Update info',
        description: 'Information about last VS Code Version',
        url: 'https://code.visualstudio.com/updates'
    },
];


// Library List
const categoriesList = [
    javaScript,
    reactList,
    nodeJSList,
    vsCodeList,
    htmlList,
    cssList,
    pythonList,
    djangoList,
    fastAPIList,
    gitList,
    dockerList,
    sqlList,
    mySqlList,
    postgreSqlList,
    celeryList,
    redisList,
    swaggerList,
    postmanList,
];


// All cetegories buttons in document
const buttonValues = {
    JavaScript: document.querySelector('#javaScript_'),
    React: document.querySelector('#react_'),
    NodeJS: document.querySelector('#nodeJS_'),
    HTML: document.querySelector('#html_'),
    css: document.querySelector('#css_'),
    python: document.querySelector('#python_'),
    django: document.querySelector('#django_'),
    fastAPI: document.querySelector('#fastAPI_'),
    git: document.querySelector('#git_'),
    docker: document.querySelector('#docker_'),
    sql: document.querySelector('#sql_'),
    mySql: document.querySelector('#mySql_'),
    postgreSql: document.querySelector('#postgreSql_'),
    celery: document.querySelector('#celery_'),
    redis: document.querySelector('#redis_'),
    swagger: document.querySelector('#swagger_'),
    postman: document.querySelector('#postman_'),
    VSCode: document.querySelector('#vsCode_'),
};


// All mutable containers on document
const containers = {
    dataContainer: document.querySelector('#data-container'),
    dataSubContainer: document.querySelector('#data-sub-container'),
    formContainer:  document.querySelector('#form-container'),
};


let addData = document.querySelector('#add');

containers.formContainer.style.zIndex = '-2';


// Hide / unhide the user input form
addData.addEventListener('click', function() {
    if (containers.formContainer.style.zIndex === '-2') {
        addData.style.transform = 'rotate(45deg)';
        addData.style.transition = '0.3s';
        containers.formContainer.style.zIndex = '5';
        containers.dataContainer.style.gridColumn = '2 / 3';
    } else {
        addData.style.transform = 'rotate(0deg)';
        addData.style.transition = '0.3s';
        containers.formContainer.style.zIndex = '-2';
        containers.dataContainer.style.gridColumn = '2 / 4';
    }
});


// Function for creating an HTML card
function createCard(data) {
    return `
        <div class="card">
            <p class="categories_">Categories:</p>
            <p>${data.categories}</p>
            <p class="title_">Title:</p>
            <p>${data.title}</p>
            <p class="description_">Description:</p>
            <p>${data.description}</p>
            <p class="url_">URL:</p>
            <p><a href='${data.url}'>${data.url}</a></p>
        </div>
    `;
};


// Add event handlers for each button
Object.keys(buttonValues).forEach(key => {
    buttonValues[key].addEventListener('click', () => {
        containers.dataSubContainer.innerHTML = '';
        
        const list = categoriesList.find(list => list[0].categories === key);
        
        list.forEach(item => {
            containers.dataSubContainer.innerHTML += createCard(item);
        });
    });
});


// Add a new user entry
const addBookmark = function() {
    let userData = {
        categories: document.querySelector('#form').elements.namedItem('categories').value,
        title: document.querySelector('#form').elements.namedItem('title').value,
        description: document.querySelector('#form').elements.namedItem('description').value,
        url: document.querySelector('#form').elements.namedItem('url').value
    };

    let list = categoriesList.find(list => list[0].categories === userData.categories);

    list.push(userData);
    // containers.dataSubContainer.innerHTML += createCard(userData);
};
