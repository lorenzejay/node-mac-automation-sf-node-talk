// links
const statefulLinks = [
  'https://github.com/stateful/runme.dev',
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
  applications: [
    'Terminal',
    'Arc',
    'Insomnia',
    'DBeaver',
    'Docker Desktop',
    'Postgres',
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
  workspaceCommands: ['npm run start:dev', 'npm run start'],
  spaceName: 'unifai',
  spaceId: 'unifai',
}

const statefulContext = {
  id: 2,
  title: 'Stateful',
  description: 'runme.dev - next app',
  workspacePaths: ['Users/lorenzejay/workspace/stateful/runme.dev'],
  workspaceCommands: ['npm run dev'],
  applications: ['Terminal', 'Arc'],
  spaceName: 'Stateful',
  browserLinks: statefulLinks,
}
const workspaceContainers = {
  id: 3,
  title: 'Workspace Containers',
  description: 'Workspace automation',
  applications: [
    'Obsidian',
    'Script Editor',
    'LaunchControl',
    'Terminal',
    'Arc',
  ],
  workspacePaths: ['/Users/lorenzejay/workspace/mac-automation-applescript/'],
  workspaceCommands: [''],
  spaceName: 'Mac Container Workspaces',
  browserLinks: [''],
}

const contextSelections = [unifaiContext, statefulContext, workspaceContainers]

export {
  unifaiContext,
  statefulLinks,
  unifaiLinks,
  contextSelections,
  modeOptions,
}
