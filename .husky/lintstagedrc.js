module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.vue': ['eslint --fix', 'prettier --write', 'stylelint'],
  '*.{scss,less,styl,html}': ['stylelint', 'prettier --write'],
  '*.md': ['prettier --write'],
};
