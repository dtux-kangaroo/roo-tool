console.log(RooTool);
var Cookie = RooTool.Cookie;
var URI = RooTool.URI;
var Tool = RooTool.Tool;
var LocalDb = RooTool.LocalDb;
LocalDb.set('name', 'value');
var name = LocalDb.get('name');
console.log(name);
console.log(Tool.getDocumentTop())
