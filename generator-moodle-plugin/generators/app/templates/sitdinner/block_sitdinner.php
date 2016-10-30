<?php

require_once($CFG->libdir . '/pagelib.php');

class block_<%= pluginName %> extends block_base {

	private $jsWorkerLoaded = false;

    public function init() {
		GLOBAL $PAGE;

        $this->title = get_string('<%= pluginName %>', 'block_<%= pluginName %>');

    }

	public function applicable_formats() {
        return array('all' => true);
    }

	public function get_content() {

        global $CFG, $OUTPUT, $USER, $DB, $PAGE;

		//loading js file, while preventing moodle catching. probably a better way somewhere...
		if(!$this->jsWorkerLoaded){
			$this->jsWorkerLoaded = true;
			$PAGE->requires->js('/blocks/<%= pluginName %>/main.js?'.rand());
		}


        if ($this->content !== null) {
          return $this->content;
        }

        $this->content         =  new stdClass;
        //$this->content->text   = 'The content of our <%= pluginName %> block!';

        $this->content->text = "<br><b>A Fully working block plugin!</b> <br>";

        $this->content->footer = 'With a footer';

        return $this->content;

    }
}
