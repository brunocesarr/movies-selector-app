import { version as appVersionLocally } from '../package.json';

const isErrorResponse = (response: Response) => !response || response?.status != 200;

async function isSamePublishVersion() {
  try {
    const packageFileMainResponse = await fetch(
      'https://raw.githubusercontent.com/brunocesarr/movies-selector-app/main/package.json',
    );
    if (isErrorResponse(packageFileMainResponse)) return false;

    const packageFileMain = await packageFileMainResponse.json();
    const appVersionPublish = packageFileMain.version;

    if (!appVersionPublish) return false;

    return appVersionPublish === appVersionLocally;
  } catch (error) {
    console.error(error);
    return false;
  }
}

isSamePublishVersion().then((isSameVersion) => {
  if (isSameVersion) {
    throw new Error(
      'It is the same version found in the main branch. Change the version in the package.json',
    );
  }
});
