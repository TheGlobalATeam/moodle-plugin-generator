'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

const blockPluginID = 0;
const attoPluginID = 1;

//not including first sitdinner/
let fileListBlockPlugin = [
    {inputName: 'block_sitdinner.php', outputName: 'block_'+this.props.pluginName+'.php'},
    {inputName: 'edit_form.php', outputName: 'edit_form.php'},
    {inputName: 'main.js', outputName: 'main.js'},
    {inputName: 'README.md', outputName: 'README.md'},
    {inputName: 'version.php', outputName: 'version.php'},
    {inputName: 'db/access.php', outputName: 'db/access.php'},
    {inputName: 'lang/en/block_sitdinner.php', outputName: 'lang/en/block_'+this.props.pluginName+'.php'}
];

//not including first syntaxhighlighter/
fileListAttoPlugin = [
    {inputName: 'README.md', outputName: 'README.md'},
    {inputName: 'version.php', outputName: 'version.php'},
    {inputName: 'db/access.php', outputName: 'db/access.php'},
    {inputName: 'lang/en/atto_syntaxhighlighter.php', outputName: 'lang/en/atto_'+this.props.pluginName+'.php'} //not done!
];

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
      default: "myblockplugin"
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
    ],
    default: "myblockplugin"
  }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {

      this.log(yosay(
        'Plugin type ID: ' +this.props.pluginType
      ));



    this.props.pluginName = this.props.pluginName.toLowerCase();



  if(this.props.pluginType == blockPluginID){

      let topFolder = 'sitdinner';
      let fileList = fileListBlockPlugin;

  }else if(this.props.pluginType == attoPluginID){

      let topFolder = 'syntaxhighlighter';
      let fileList = fileListAttoPlugin;

  }


  //loop over files and compu using new name and pluginName replacement
  for(let i = 0; i < fileList.length; i ++){
    //   this.log(yosay(
    //     'Current file:' + i
    //   ));
      this.fs.copyTpl(
        this.templatePath(topFolder+'/' + fileList[i].inputName),
        this.destinationPath(this.props.pluginName + "/" + fileList[i].outputName),
        { pluginName: this.props.pluginName }
      );
  }


  },

  install: function () {
    this.installDependencies();
  }
});
