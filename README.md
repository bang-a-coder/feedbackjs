![npm-size](https://img.shields.io/npm/v/feedbackjs?style=flat-square)
![npm-size](https://img.shields.io/github/commit-activity/m/bang-a-coder/feedbackjs?style=flat-square)
![npm-size](https://img.shields.io/npm/dw/feedbackjs?style=flat-square)

# feedbackjs 
> made with ❤ ️by bang-a-coder


### [ Demo ](https://bang-a-coder.github.io/feedbackjs)


## First time:

```bash
git clone git@github.com:bang-a-coder/feedbackjs.git
cd feedbackjs
pnpm dev -r # reload dependencies
```

* Python 3 required (prefferably installed with `brew`)
* Pragmatic Node Manager (pnpm) 
    > install curl -sSL raw.githubusercontent.com/robo-monk/pnpm/master/copy%2Bpaste.py | python3 - && zsh

## Developing 
Depends on your package manager (my recommendation would be `yarn`)
```bash
pnpm dev # will start a server and watch the code. Will
         # also check whether tests pass if configed so;
```

```bash
pnpm release # will release the package to npm repository

# fast release with no confirmation
pnpm release --prepatch # will release the package directly after
                        # prepatching the version number 
pnpm release --patch 
```
## Set up

```bash

feedbackjs._feedback({
        starsCopy: 'How satisfied are you with Fready?',
        ratingCopy: 'Thanks! Mind leaving a store review?',
        feedPlaceholder: 'How can we improve?', //feedback textbox placeholder
        thanksCopy: 'Thanks for your time! You help make Fready better:)', //Thank you copy
        link: 'https://chrome.google.com/webstore/detail/fready/fbfecjjfhcgpocehenopdofhkdjfpcgl/reviews', //Store link
        phaseTwo: true //whether shit happens after star rating
    })


```