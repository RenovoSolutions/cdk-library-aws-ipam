const { awscdk, javascript } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Renovo Solutions',
  authorAddress: 'webmaster+cdk@renovo1.com',
  cdkVersion: '2.21.1',
  defaultReleaseBranch: 'master',
  name: '@renovosolutions/cdk-library-aws-ipam',
  description: 'AWS CDK Construct Library to manage AWS VPC IP Address Manager resources',
  repositoryUrl: 'https://github.com/RenovoSolutions/cdk-library-aws-ipam.git',
  keywords: [
    'cdk',
    'aws-cdk',
    'aws-cdk-construct',
    'projen',
  ],
  depsUpgrade: true,
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'deps-upgrade'],
    },
  },
  githubOptions: {
    mergify: true,
    mergifyOptions: {
      rules: [
        {
          name: 'Automatically approve dependency upgrade PRs if they pass build',
          actions: {
            review: {
              type: 'APPROVE',
              message: 'Automatically approved dependency upgrade PR',
            },
          },
          conditions: [
            'label=auto-approve',
            'label=deps-upgrade',
            '-label~=(do-not-merge)',
            'status-success=build',
            'author=github-actions[bot]',
            'title="chore(deps): upgrade dependencies"',
          ],
        },
      ],
    },
    pullRequestLintOptions: {
      semanticTitle: true,
      semanticTitleOptions: {
        types: [
          'chore',
          'docs',
          'feat',
          'fix',
          'ci',
          'refactor',
          'test',
        ],
      },
    },
  },
  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  releaseWorkflow: true,
  docgen: true,
  eslint: true,
  publishToPypi: {
    distName: 'renovosolutions.aws-cdk-aws-ipam',
    module: 'ipam',
  },
  // publishToNuget: { // Currently seems to be broken. Jsii seems to incorrectly convert the CfnIPAMPool to CfnIpamPool
  //   dotNetNamespace: 'renovosolutions',
  //   packageId: 'Renovo.AWSCDK.AWSIPAM',
  // },
  jestOptions: {
    jestConfig: {
      timers: 'fake',
    },
  },
  workflowNodeVersion: '14.17.0',
  gitignore: ['**/__pycache__/**'],
});
project.synth();