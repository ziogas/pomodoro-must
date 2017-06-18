#!/bin/bash

zip -r pomodoro-must.zip . -x ".git/*" -x "screenshots/*" -x "make-zip.sh" -x "README.md" -x "LICENSE" -x ".gitignore"
