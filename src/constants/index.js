import spotifyist from '../assets/spotifyist.png'
import portfolio from '../assets/portfolio.png'

const constants = {
  links: {
    github: 'https://github.com/DanielVertlib',
    linkedIn: 'https://www.linkedin.com/in/daniel-vertlib-87962a111/'
  },
  projects: [
    {
      title: 'Spotifyist',
      description: 'Spotifyist allows users to explore their top artists and songs as well as their recently played songs.'
      + ' Leveraging the Spotify Web API, users can also create spotify playlists from the user specific top charts.',
      stack: ['React', 'Redux', 'TypeScript', 'SCSS', 'HTML5'],
      github: 'https://github.com/DanielVertlib/spotify-history',
      app: 'https://spotifyist.netlify.app/',
      img: spotifyist
    },
    {
      title: 'Portfolio',
      description: 'Portfolio Site built with React and SCSS.',
      stack: ['React', 'SCSS', 'Javascript', 'HTML5', 'Material-UI'],
      github: 'https://github.com/DanielVertlib/portfolio',
      app: 'https://danielvertlib.github.io/portfolio/',
      img: portfolio
    }
  ],
  skills: [
    'React',
    'JavaScript',
    'TypeScript',
    'HTML5',
    'SCSS',
    'Redux',
    'React-Router',
    'Formik',
    'Openlayers',
    'Jest',
    'Enzyme',
    'React Testing Library',
    'Karma',
    'Mocha',
    'Chai',
    'Sinon',
    'PhantomJS',
    'Webpack',
    'Babel',
    'npm',
    'Gulp',
    'Node.js',
    'Material-UI',
    'CI/CD',
    'Git'
  ]
}

export default constants
