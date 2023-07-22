(function($) {
	'use strict';
	$(document).ready(function() {
		if ($('#js_file').length) {
			var editorSettings = wp.codeEditor.defaultSettings
				? _.clone(wp.codeEditor.defaultSettings)
				: {};
			editorSettings.codemirror = _.extend(
				{},
				editorSettings.codemirror,
				{
					indentUnit: 4,
					tabSize: 4,
					mode: 'javascript'
				}
			);
			var editor = wp.codeEditor.initialize(
				$('#js_file'),
				editorSettings
			);
		}

		if ($('#css_file').length) {
			var editorSettings = wp.codeEditor.defaultSettings
				? _.clone(wp.codeEditor.defaultSettings)
				: {};
			editorSettings.codemirror = _.extend(
				{},
				editorSettings.codemirror,
				{
					indentUnit: 4,
					tabSize: 4,
					mode: 'css'
				}
			);
			var editor = wp.codeEditor.initialize(
				$('#css_file'),
				editorSettings
			);
		}
	});
})(jQuery);
