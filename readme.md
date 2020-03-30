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
# Displays the definition of bloody
define-this define -w bloody

# For phrases, use quotes
define-this define -w "mad oh"
```

![](https://res.cloudinary.com/djksghat4/image/upload/v1585589511/define-this/1.png)

![](https://res.cloudinary.com/djksghat4/image/upload/v1585589511/define-this/madoh.png)

### Display synonyms of a word

```bash
# Displays a synonym of phenomenon
define-this synonym -w phenomenon

# Displays three synonyms of phenomenon
define-this synonym -w phenomenon -n 3
```

![](https://res.cloudinary.com/djksghat4/image/upload/v1585589511/define-this/2.png)

![](https://res.cloudinary.com/djksghat4/image/upload/v1585589511/define-this/3.png)

## Todo

- Make commands and argument follow each other in a simpler and easier to understand way

- Add interactive spinner/loader-like texts while users await results

- Display translation of words from one language to another

## APIS used

- [An unofficial Urban Dictionary API](https://rapidapi.com/community/api/urban-dictionary)

- [Datamuse API](http://www.datamuse.com/api/)
