module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 120], // Maximum header length
    'type-enum': [ // Enforce specific commit types
      2,
      'always',
      [
        'feat',
        'added',
        'edited',
        'update',
        'chore',
        'build',
        'ci',
        'fix',
        'optimize',
        'refactor',
        'test',
        'release',
        'incomplete',
        'removed'
      ]
    ],
    'subject-full-stop': [ // Disallow full stop at the end of the subject
      2,
      'never',
      '.'
    ],
    'body-max-line-length': [ // Maximum line length for the body
      2,
      'always',
      100
    ],
    'footer-max-line-length': [ // Maximum line length for the footer
      2,
      'always',
      100
    ]
  }
};