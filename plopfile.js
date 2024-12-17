export default function (plop) {
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?',
      },
      {
        type: 'list',
        name: 'storybookCategory',
        message: 'In what Storybook category should this component be placed?',
        choices: ['Atoms', 'Molecules', 'Organisms', 'Templates', 'Pages'],
      },
      {
        type: 'input',
        name: 'storybookTitle',
        message: 'What is the title of the Storybook story?',
        default(answers) {
          return answers.name;
        },
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'app/components',
        templateFiles: 'plop-templates/component/**',
        base: 'plop-templates/component',
      },
    ],
  });
}
