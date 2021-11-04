var app = document.getElementById('feature-text');
var typewriter = new Typewriter(app, {
    loop: false,
    cursor: "|",
});
typewriter.pauseFor(1000)
    .typeString('Programmer')
    .pauseFor(1000)
    .deleteAll()
    .typeString('CAD Designer')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Grade 12 student')
    .start();