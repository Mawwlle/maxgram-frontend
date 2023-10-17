#!/bin/bash

set -eo pipefail

if [[ -z "${CI_COMMIT_BRANCH}" ]]; then
    branch=$(git rev-parse --abbrev-ref HEAD)
else
    branch=$CI_COMMIT_BRANCH
fi

# Replace punctuation characters on -
branch=${branch//[[:punct:]]/-}

count=$(git log HEAD --pretty=oneline | wc -l)

# arithmetic expansion, so the result will always be only the number itself
# https://stackoverflow.com/a/30927885
count=$(($count))

short=$(git rev-parse --short HEAD)

echo "$branch-$count-$short"
