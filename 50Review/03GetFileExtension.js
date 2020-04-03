// Viết hàm lấy extension của một file
// Example
// getExtensionFilename("abc.mp3") // "mp3"

function getExtensionFilename1(filename) {
    // viết code ở đây.
    return filename.split('.').pop();
}

function getExtensionFilename2(filename) {
    // viết code ở đây.
    return filename.substring(filename.lastIndexOf('.') + 1, filename.length) || filename;
}

function getExtensionFilename3(filename) {
    // viết code ở đây.
    var ext = /^.+\.([^.]+)$/.exec(filename);
    return ext == null ? "" : ext[1];

    // "a.b"     (=> "b") 
    // "a"       (=> "") 
    // ".hidden" (=> "") 
    // ""        (=> "") 
    // null      (=> "")  
    // "a.b.c.d" (=> "d")
    // ".a.b"    (=> "b")
    // "a..b"    (=> "b")
}

// If you are dealing with web urls, you can use:
function getExtensionFilename4(filename) {
    // viết code ở đây.
    return filename.split("?")[0].split("#")[0].split('.').pop();
    // getExt("logic.v2.min.js") // js
    // getExt("http://example.net/site/page.php?id=16548") // php
    // getExt("http://example.net/site/page.html#welcome.to.me") // html
    // getExt("c:\\logs\\yesterday.log"); // log
}

function getExtensionFilename5(filename) {
    
    // viết code ở đây.
    var regexp = /\.([0-9a-z]+)(?:[\?#]|$)/i;
    var extension = file.match(regexp);
    return extension && extension[1];

    // console.log(getFileExtension("https://www.example.com:8080/path/name/foo"));
// console.log(getFileExtension("https://www.example.com:8080/path/name/foo.BAR"));
// console.log(getFileExtension("https://www.example.com:8080/path/name/.quz/foo.bar?key=value#fragment"));
// console.log(getFileExtension("https://www.example.com:8080/path/name/.quz.bar?key=value#fragment"));

// null
// BAR
// bar
// bar
}

console.log(getExtensionFilename2("abc.mp3"));
