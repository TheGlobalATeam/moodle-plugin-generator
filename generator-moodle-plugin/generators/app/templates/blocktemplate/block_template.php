<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * The main blockplugin file
 *
 * This file contains the initalizing of the block plugin,
 * mainly defining the Html of the view.
 *
 * @package <%= pluginName %>
 * @copyright YourName
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 * MOODLE_INTERNAL - object, moodles intenral object.
 */

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

        $this->content = new stdClass;
        //$this->content->text   = 'The content of our <%= pluginName %> block!';

        $this->content->text = "<br><b>A Fully working block plugin!</b> <br>";

        $this->content->footer = 'With a footer';

        return $this->content;

    }
}
