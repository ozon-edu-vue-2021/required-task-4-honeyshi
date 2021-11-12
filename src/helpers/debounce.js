export const debounce = (f, ms) => {
  let isReady = false;

  return function () {
    if (isReady) return;

    f.apply(this, arguments);

    isReady = true;

    setTimeout(() => (isReady = false), ms);
  };
};
