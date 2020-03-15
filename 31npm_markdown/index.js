var markdown = require( "markdown" ).markdown;

var markdownText = 'Hello *Coders.Tokyo*!';

var textToHTML = markdown.toHTML(markdownText);
console.log(textToHTML);

