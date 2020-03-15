// Node built-in modules
// https://nodejs.org/dist/latest-v12.x/docs/api/fs.html

// https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_fs_readfilesync_path_options

var fs = require('fs');

// Read file
var text = fs.readFileSync('./song.txt',{encoding:'UTF8'});

console.log(text);

// Write file
// https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_fs_writefilesync_file_data_options

fs.writeFileSync('./song-2.txt','I am CoderX');
