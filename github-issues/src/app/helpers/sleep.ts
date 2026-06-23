export const sleep = async (ms: number) => {
    // Sirve para relantizar nuestra aplicacion de forma intencional
  return new Promise((resolve) => setTimeout(resolve, ms));
};