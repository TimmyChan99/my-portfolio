import {
  SiJavascript, SiRuby, SiHtml5, SiCss3,
  SiReact, SiRubyonrails, SiJest, SiRedux,
  SiSwagger, SiVisualstudiocode, SiHeroku,
} from 'react-icons/si';
import {
  FaDatabase, FaSass, FaGitAlt, FaGithub,
} from 'react-icons/fa';
import { GiCapybara } from 'react-icons/gi';
import { HiTerminal } from 'react-icons/hi';

const skills = [
  {
    id: 1,
    title: 'Languages',
    list: [
      {
        name: 'JavaScript',
        icon: SiJavascript,
		  },
      {
        name: 'Ruby',
        icon: SiRuby,
		  },
      {
        name: 'HTML',
        icon: SiHtml5,
		  },
      {
        name: 'CSS',
        icon: SiCss3,
		  },
      {
        name: 'SQL',
        icon: FaDatabase,
		  },
      {
        name: 'Sass',
        icon: FaSass,
		  },
    ],
  },
  {
    id: 2,
    title: 'Frameworks & Libraries',
    list: [
      {
        name: 'React',
        icon: SiReact,
		  },
      {
        name: 'Redux',
        icon: SiRedux,
		  },
      {
        name: 'Rails',
        icon: SiRubyonrails,
		  },
      {
        name: 'Jest',
        icon: SiJest,
		  },
      {
        name: 'Capybara',
        icon: GiCapybara,
		  },
    ],
  },
  {
    id: 3,
    title: 'Tools',
    list: [
      {
        name: 'GitHub',
        icon: FaGithub,
		  },
      {
        name: 'Git',
        icon: FaGitAlt,
		  },
      {
        name: 'VS Code',
        icon: SiVisualstudiocode,
		  },
      {
        name: 'Swagger',
        icon: SiSwagger,
		  },
      {
        name: 'Terminal',
        icon: HiTerminal,
		  },
      {
        name: 'Heroku',
        icon: SiHeroku,
		  },
    ],
  },

];

export default skills;
