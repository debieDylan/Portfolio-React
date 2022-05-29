import mycookbook from './assets/images/mycookbook.png'
import portfolio from './assets/images/portfolio-min.png'
import projectML from './assets/images/projectML-min.jpg'

export const projects = [
    {
        id: 1,
        name: "MyCookbook",
        desc: "A mobile Recipe organizer, made with Ionic, Angular and Firebase, includes API.",
        img: mycookbook,
        link: "https://mycookbook-87252.web.app/",
        github: "https://github.com/debieDylan/mycookbook-public"
    },
    {
        id: 2,
        name: "Portfolio",
        desc: "The portfolio you are watching now. A static website written with React.",
        img: portfolio,
        link: 'https://dylan-de-bie.com/',
        github: "https://github.com/debieDylan/Portfolio-React"
    },
    {
        id: 3,
        name: "Genre Predictor",
        desc: "A .NET application that uses Machine Learning to predict the genre of a movie.",
        img: projectML,
        link: undefined,
        github: "https://github.com/debieDylan/Movie-Genre-Predictor"
    }
]