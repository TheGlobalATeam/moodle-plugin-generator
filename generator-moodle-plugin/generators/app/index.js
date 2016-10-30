'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the slick ' + chalk.red('generator-moodle-plugin') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'pluginName',
      message: 'Your blockplugins name',
      default: "aRandomName"
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath(this.props.pluginName.'.txt')
    );

    //copy folder with all content.
    //TODO change names of files
    this.fs.copy(
      this.templatePath('sitdinner'),
      this.destinationRoot('sitdinner')
    );

    // this.fs.copy(
    //   this.templatePath('.*'),
    //   this.destinationRoot()
    // );

  },

  install: function () {
    this.installDependencies();
  }
});
