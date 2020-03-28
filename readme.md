# define-this

Get the definition of words on the command line along with options to show synonyms, examples and translations. 

## Install

```bash
# Install globally
npm install -g define-this

# Or run directly with npx (this installs the package on every run)
npx define-this
```

## Usage

### Display definition of a random word

```bash
# Displays the defintion of a random word
define-this
``

### Define a word

```bash
# Display the definition of a word
define-this phenomenon
```

### Display synonyms of a word

Minimum of one and maximum of five.

```bash
# Displays a synonym of phenomenon
define-this phenomenon synonym

# Displays four synonyms of phenomenon
define-this phenomenon synonym --four

# Displays five synonyms of phenomenon
define-this phenomenon synonym --five
```

### Display translation of a word

```bash
# Displays the french translation of phenomenon
define-this phenomenon translate --french
```

### Display example usage of a word

```bash
# Displays an example of the usage of phenomenon
define-this phenomenon example
```
