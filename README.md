Google Chrome extension helping you to stay in pomodoro mode
==========================================================

It's not easy for all of us to stay in [pomodoro] mode. Constant struggle to don't forget on/off timers can be discouraging. At the same time working with pomodoros brings efficiency and greatly reduces procrastination.

This extension utilizes already great pomodoro tool [tomato.es] and adds annoying browser notifications to constantly remind you that you MUST be in pomodoro mode.

Advantages:

* *Lightweight*: If you close tomato.es tab extension becomes completely idle and is removed from the memory. Just re-open it again and extension will start its work!
* Safe: No 3rd party calls, your data stays secure in the tab <-> extension communication channel.
* *Completely transparent*: less than a hundred lines of code are easy to read to ensure that nothing fishy is happening.

## Install

* Option 1: go to the [extension page] and install it.
* Option 2: go to your [browser extension page], enable developer mode and "load unpacked extension" this cloned folder.


## Tweak Extension

Feel free to mess around the codebase or change _locales/en/messages.json file to add your motivational phrases. After that install extension with "Option 2".

If you want to change the pomodoro website from tomato.es to something else just modify the source:

* manifest.json - permissions and content_scripts section.
* src/inject/inject.js - performed dom queries to check the timer state.

Then load unpacked extension from "Option 2".

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## Author
Arminas Zukauskas - arminas@ini.lt

## License

[MIT] Do whatever you want, attribution is nice but not required

[pomodoro]: https://cirillocompany.de/pages/pomodoro-technique
[tomato.es]: http://tomato.es
[extension page]: https://chrome.google.com/webstore/detail/pomodoro-must/fgfijdapfaaflemmapmdegapgmhgfkhh
[browser extension page]: chrome://extensions/
[MIT]: https://tldrlegal.com/license/mit-license
