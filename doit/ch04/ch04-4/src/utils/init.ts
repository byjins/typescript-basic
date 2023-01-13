export const init = (callback: () => void): void => {
  console.log('default initialization finish');
  callback();
  console.log('all initialization');
};
