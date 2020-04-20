export function loadLists() {
  return [
    {
      title: 'Tasks',
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Study GatsbyJS',
          labels: ['#7159c1'],
          user: 'https://avatars3.githubusercontent.com/u/18352848?s=460&v=4',
        },
        {
          id: 2,
          content: 'Watch Firebase course classes',
          labels: ['#7159c1'],
          user: 'https://avatars3.githubusercontent.com/u/18352848?s=460&v=4',
        },
        {
          id: 3,
          content: 'Study new React Native features',
          labels: ['#7159c1'],
          user: 'https://avatars3.githubusercontent.com/u/18352848?s=460&v=4',
        },
        {
          id: 4,
          content: 'Improve project README.md',
          labels: ['#54e1f7'],
          user: 'https://avatars3.githubusercontent.com/u/18352848?s=460&v=4',
        },
        {
          id: 5,
          content: 'Improve unit tests on crud operations',
          labels: ['#54e1f7'],
          user: 'https://avatars3.githubusercontent.com/u/18352848?s=460&v=4',
        },
      ],
    },
    {
      title: 'Doing',
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Recreating Pipefy clone',
          labels: [],
          user: 'https://avatars3.githubusercontent.com/u/18352848?s=460&v=4',
        },
      ],
    },
    {
      title: 'Stale',
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Update project documentation',
          labels: ['#7159c1'],
          user: 'https://avatars3.githubusercontent.com/u/18352848?s=460&v=4',
        },
        {
          id: 8,
          content: 'Implement SSL security on website',
          labels: ['#54e1f7'],
          user: 'https://avatars3.githubusercontent.com/u/18352848?s=460&v=4',
        },
        {
          id: 9,
          content: 'Review pull requests',
          labels: [],
        },
      ],
    },
    {
      title: 'Done',
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Release app on Apple Store',
          labels: [],
        },
        {
          id: 12,
          content: 'Try out new end-to-end test libraries',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Implement i18n on React projects',
          labels: ['#7159c1'],
        },
      ],
    },
  ];
}
