// links
const statefulLinks = [
  'https://github.com/stateful',
  'https://runme.dev',
  'https://stateful.com',
]
const unifaiLinks = ['https://github.com/unifai', 'https://linear.app']

const modeOptions = ['Work Mode', 'Writing Mode', 'Email']

// contexts:
const unifaiContext = {
  id: 1,
  title: 'Unifai',
  description: 'Full Stack',
  links: unifaiLinks,
  applications: [
    // 'Visual Studio Code', // assumed defalt code editor is this
    'Insomnia',
    'DBeaver',
    'Docker Desktop',
    'Terminal',
    'Postgres',
    'Arc',
  ],
  workspacePaths: [
    'Users/lorenzejay/Documents/Uplift Digital Solutions/clients/unifai/Unifai-surveygen',
    'Users/lorenzejay/Documents/Uplift Digital Solutions/clients/unifai/surveygen-frontend',
  ],
  browserLinks: [
    'https://github.com/Unifai-us/Unifai-surveygen',
    'https://github.com/Unifai-us/surveygen-frontend',
    'https://linear.app/leadwithunifai/team/UM/all',
  ],
  terminalCommands: [],
  spaceName: 'unifai',
  spaceId: 'unifai',
}

const statefulContext = {
  id: 2,
  title: 'Stateful',
  description: 'runme.dev - next app',
  links: statefulLinks,
  applications: ['Terminal', 'Arc'],
  workspacePaths: ['Users/lorenzejay/workspace/stateful/runme.dev'],
  terminalCommands: [],
  spaceName: 'Stateful',
  browserLinks: [''],
}

const contextSelections = [unifaiContext, statefulContext]

export {
  unifaiContext,
  statefulLinks,
  unifaiLinks,
  contextSelections,
  // unifaiSurveyGenContext,
  modeOptions,
}
