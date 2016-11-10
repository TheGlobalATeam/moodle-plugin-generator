'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

const blockPluginID = 0;
const attoPluginID = 1;
const filterPluginID = 2;
const activityModuleID = 3;

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the slick ' + chalk.red('generator-moodle-plugin') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'pluginName',
      message: 'Your blockplugins name (no spaces, and only lowercase)',
      default: "mynewplugin"
  },
  {
    type: 'list',
    name: 'pluginType',
    message: 'What type of plugin?',
    choices: [{
            name: 'Block',
            value: blockPluginID
        },
        {
            name: 'Atto button',
            value: attoPluginID
        },
		{
			name: 'Filter',
            value: filterPluginID
		},
        {
            name: 'Activity module',
            value: activityModuleID
        }
    ],
    default: blockPluginID
  }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {

      this.props.pluginName = this.props.pluginName.toLowerCase();

      let fileList;
      let topFolder

      //Code for block plugin.
      if(this.props.pluginType == blockPluginID){

          //Not including first blocktemplate.
          let fileListBlockPlugin = [
              {inputName: 'block_template.php', outputName: 'block_'+this.props.pluginName+'.php'},
              {inputName: 'edit_form.php', outputName: 'edit_form.php'},
              {inputName: 'main.js', outputName: 'main.js'},
              {inputName: 'README.md', outputName: 'README.md'},
              {inputName: 'version.php', outputName: 'version.php'},
              {inputName: 'db/access.php', outputName: 'db/access.php'},
              {inputName: 'lang/en/block_template.php', outputName: 'lang/en/block_'+this.props.pluginName+'.php'}
          ];

          topFolder = 'blocktemplate';
          fileList = fileListBlockPlugin;

      //Code for atto button.
      }else if(this.props.pluginType == attoPluginID){

          //not including first attobuttontemplate/
          let fileListAttoPlugin = [
              {inputName: 'README.md', outputName: 'README.md'},
              {inputName: 'version.php', outputName: 'version.php'},
              {inputName: 'lang/en/attobuttontemplate.php', outputName: 'lang/en/atto_'+this.props.pluginName+'.php'}, //not done!
              {inputName: 'yui/src/button/build.json', outputName: 'yui/src/button/build.json'},
              {inputName: 'yui/src/button/js/button.js', outputName: 'yui/src/button/js/button.js'},
              {inputName: 'yui/src/button/meta/button.json', outputName: 'yui/src/button/meta/button.json'},
          ];

          topFolder = 'attobuttontemplate';
          fileList = fileListAttoPlugin;

	  //Code for atto button.
      }else if(this.props.pluginType == filterPluginID) {

          //not including first attobuttontemplate/
          let fileListFilterPlugin = [

              {inputName: 'filter.php', outputName: 'filter.php'},
              {inputName: 'README.md', outputName: 'README.md'},
              {inputName: 'version.php', outputName: 'version.php'},
              {
                  inputName: 'lang/en/filter_syntaxhighlighter.php',
                  outputName: 'lang/en/filter_' + this.props.pluginName + '.php'
              }, //not done!
          ];

          topFolder = 'filtertemplate';
          fileList = fileListFilterPlugin;

          //Code for activity Module
      }else if(this.props.pluginType == activityModuleID){

              let fileListActivityModule = [

                  {inputName: 'activity_form.php', outputName: 'activity_form.php'},
                  {inputName: 'index.php', outputName: 'index.php'},
                  {inputName: 'lib.php', outputName: 'lib.php'},
                  {inputName: 'version.php', outputName: 'version.php'},
                  {inputName: 'view.php', outputName: 'view.php'},
                  {inputName: 'lang/en/activitytemplate.php', outputName: 'lang/en/activityModule_'+this.props.pluginName+'.php'}, //not done!
              ];

              topFolder = 'activitytemplate';
              fileList = fileListActivityModule;

      }

      //Loop over files and compu using new name and pluginName replacement.
      for(let i = 0; i < fileList.length; i ++){
          this.fs.copyTpl(
            this.templatePath(topFolder+'/' + fileList[i].inputName),
            this.destinationPath(this.props.pluginName + "/" + fileList[i].outputName),
            { pluginName: this.props.pluginName }
          );
      }


  },

  install: function () {
    //No dependencies currently used.
    //this.installDependencies();
  }
});
