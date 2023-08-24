// links
const statefulLinks = ['https://github.com/stateful']
const unifaiLinks = ['https://github.com/unifai', 'https://linear.app']

// contexts:
const statefulContext = {
  id: 1,
  title: 'Stateful',
  description: 'Frontend',
  links: statefulLinks,
  applications: [
    { name: 'Visual Studio Code', state: null },
    { name: 'Arc', state: { space: '' } },
  ],
}
const unifaiContext = {
  id: 1,
  title: 'Unifai',
  description: 'Full Stack',
  links: unifaiLinks,
  applications: [
    'Visual Studio Code',
    'Insomnia',
    'DBeaver',
    'Docker Desktop',
    'Terminal',
  ],
  workspacePath: '',
}
const unifaiSurveyGenContext = {
  id: 1,
  title: 'Unifai',
  description: 'Full Stack',
  links: unifaiLinks,
  applications: [
    'Arc',
    'Visual Studio Code',
    'Insomnia',
    'DBeaver',
    'Docker Desktop',
    'Terminal',
    'Postgres',
  ],
  workspacePaths: [
    'Users/lorenzejay/Documents/Uplift Digital Solutions/clients/unifai/Unifai-surveygen',
    'Users/lorenzejay/Documents/Uplift Digital Solutions/clients/unifai/surveygen-frontend',
  ],
}
const contextSelections = [statefulContext, unifaiContext]

export { statefulLinks, unifaiLinks, contextSelections, unifaiSurveyGenContext }
