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
      message: 'Your blockplugins name (no spaces)',
      default: "aRandomName"
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {

  //not including first sitdinner/
  var fileList = [
      {inputName: 'block_sitdinner.php', outputName: 'block_'+this.props.pluginName+'.php'},
      {inputName: 'edit_form.php', outputName: 'edit_form.php'},
      {inputName: 'main.js', outputName: 'main.js'},
      {inputName: 'README.md', outputName: 'README.md'},
      {inputName: 'version.php', outputName: 'version.php'},
      {inputName: 'db/access.php', outputName: 'db/access.php'},
      {inputName: 'lang/en/block_sitdinner.php', outputName: 'lang/en/block_'+this.props.pluginName+'.php'}
  ];

  //loop over files and compu using new name and pluginName replacement
  for(let i = 0; i < fileList.length; i ++){
    //   this.log(yosay(
    //     'Current file:' + i
    //   ));
      this.fs.copyTpl(
        this.templatePath('sitdinner/' + fileList[i].inputName),
        this.destinationPath(this.props.pluginName + "/" + fileList[i].outputName),
        { pluginName: this.props.pluginName }
      );
  }


  },

  install: function () {
    this.installDependencies();
  }
});
