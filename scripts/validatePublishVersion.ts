import fetch from 'isomorphic-fetch';

import { expo as expoAppFile } from '../app.json';
import { version as appVersionLocally } from '../package.json';

const isErrorResponse = (response: Response) => !response || response?.status != 200;

const isNotFoundResponse = (response: Response) => response?.status === 404;

async function isSamePublishVersion() {
  try {
    const packageFileMainResponse = await fetch(
      'https://raw.githubusercontent.com/brunocesarr/movies-selector-app/main/package.json',
    );

    if (isNotFoundResponse(packageFileMainResponse)) return true;
    if (isErrorResponse(packageFileMainResponse)) return false;

    const packageFileMain: any = await packageFileMainResponse.json();
    const appVersionPublish = packageFileMain.version;
    const expoAppVersion = expoAppFile.version;

    if (!appVersionPublish || !expoAppVersion || !appVersionLocally) return false;

    return appVersionPublish === appVersionLocally && appVersionPublish === expoAppVersion;
  } catch (error) {
    console.error(error);
    return false;
  }
}

isSamePublishVersion().then((isSameVersion) => {
  if (!isSameVersion) {
    throw new Error(
      'It is the same version found in the main branch. Change the version in the package.json',
    );
  }
});
