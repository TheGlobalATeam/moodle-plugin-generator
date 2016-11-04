# moodle-plugin-generator
yeoman moodle plugin generator

# Setup

1. Clone repo to new folder
2. Install YEOMAN by `npm install -g yo` and OPTIONALLY `npm install -g generator-generator`
2. Navigate to the folder `generator-moodle-plugin` and run `npm link`
3. Navigate to the folder `generated-plugins` and run `yo moodle-plugin`
4. The code in `generator-moodle-plugin/generators/app/index.js` will be executed and the dummyfile under `generator-moodle-plugin/generators/app/templates` will be copied to `generated-plugins`
5. Profit!
