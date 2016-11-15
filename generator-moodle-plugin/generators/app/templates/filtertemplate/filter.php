<?php
// This file is part of Moodle - http://moodle.org/
//
// GeSHi syntax highlight filter for Moodle
// Based on work by Grigory Rubtsov <rgbeast@onlineuniversity.ru>, 2005
//
// Uses GeSHi syntax highlighter 1.0.7.5
// http://qbnz.com/highlighter/
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
 * @package    filter_<%= pluginName %>
 * @copyright  <%= userName %>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

//defined('MOODLE_INTERNAL') || die();


class filter_<%= pluginName %> extends moodle_text_filter {


	public function filter($text, array $options = array()) {
	  if (stripos($text, '<code>') !== false) {
	     $search = '/<code(.*?)>(.*?)<\/code>\s*/is';
	  } else {
	     $text;
	  }
	  return $text."hello world";
	}






}
