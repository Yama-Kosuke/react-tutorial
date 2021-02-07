export const LANGUAGES = [
  "JavaScript", 
  "C++", 
  "Next.js", 
  "Nuxt.js", 
  "Go"
];

export const getLanguages = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(LANGUAGES);
    }, 1000)
  })
}