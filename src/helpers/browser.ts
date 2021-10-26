const userAgent = navigator.userAgent.toLowerCase();

export function getIsIOS(): boolean {
  return (
    userAgent.indexOf('iphone') > -1 ||
    userAgent.indexOf('ipad') > -1 ||
    userAgent.indexOf('ipod') > -1
  );
}

export function getIsAndroid(): boolean {
  return userAgent.indexOf('android') > -1;
}

export function getIsMobile(): boolean {
  return getIsAndroid() || getIsIOS();
}
