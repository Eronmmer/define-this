# define-this

Get the definitions and synonyms of words from the comfort of your terminal. ⚡

## Install

```bash
# Install globally
npm install -g define-this

# Or run directly with npx (this installs the package on every run)
npx define-this
```

## Usage

### Display the definition of a word

```bash
# Displays the definition of a random word
define-this define -w <english-word>
```

### Display synonyms of a word

```bash
# Displays a synonym of phenomenon
define-this synonym -w phenomenon

# Displays three synonyms of phenomenon
define-this synonym phenomenon -n 3
```

## Todo

- Make commands and argument follow each other in a simpler and easier to understand way

- Add interactive spinner/loader-like texts while users await results

- Display translation of words from one language to another

## APIS used

- [An unofficial Urban Dictionary API](https://rapidapi.com/community/api/urban-dictionary)

- [Datamuse API](http://www.datamuse.com/api/)
