import $ from 'jquery';
import _ from 'lodash';
import Bacon from 'baconjs';
import "bacon-matchers";

console.log("jQuery version: " + $.fn.jquery);
console.log("lodash version: " + _.VERSION);

Bacon.fromArray(["Bacon","Lettus","Tomato"]).where().equalTo("Bacon").assign(console, "log");
