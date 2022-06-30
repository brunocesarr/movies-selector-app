import * as fs from 'fs';
import { branch } from 'git-rev-sync';
import * as path from 'path';

const statusBadgeMarkdownTemplate = `

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=brunocesarr_movies-selector-app&metric=alert_status&branch={BRANCH})](https://sonarcloud.io/summary/new_code?id=brunocesarr_movies-selector-app&branch={BRANCH}) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=brunocesarr_movies-selector-app&metric=coverage&branch={BRANCH})](https://sonarcloud.io/summary/new_code?id=brunocesarr_movies-selector-app&branch={BRANCH}) [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=brunocesarr_movies-selector-app&metric=code_smells&branch={BRANCH})](https://sonarcloud.io/summary/new_code?id=brunocesarr_movies-selector-app&branch={BRANCH}) 
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/brunocesarr/movies-selector-app/tree/{BRANCH}.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/brunocesarr/movies-selector-app/tree/{BRANCH})

`;

fs.readFile(
  path.join(__dirname, '..', 'README.md'),
  { encoding: 'utf-8' },
  function (err: NodeJS.ErrnoException | null, data: string | Buffer) {
    if (err) return console.error(err);

    const currentLongBranch: string = (branch().includes('main') || branch().includes('develop') || branch().includes('release/'))
      ? branch() : 'main';

    const statusBadges: string = (data as string).split('***')[2];
    const statusBadgesCurrentBranch: string = statusBadgeMarkdownTemplate.replace(
      /{BRANCH}/gi,
      currentLongBranch,
    );

    const readmeModified = (data as string).replace(statusBadges, statusBadgesCurrentBranch);
    fs.writeFile(
      path.join(__dirname, '..', 'README.md'),
      readmeModified,
      { encoding: 'utf-8' },
      function (err: any) {
        if (err) return console.error(err);
      },
    );
  },
);
