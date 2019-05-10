var readline = require('readline');
var exec = require("child_process").exec;

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

exec('xrandr', (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(stdout)
    leitor.question("Qual display gostaria de conectar?\n", function (answer) {
        var display = answer;
        leitor.question("Qual a nova resolucao?\nEx: 1368 768 60 (width height refreshrate - Escreva separado por espaços)\n", function (res) {
            exec(`cvt ${res}`, (err, stdout, stderr) => {
                var modeline = stdout.split("Modeline");
                var resNew = modeline[1].split('"');
                resNew = resNew[1];
                exec(`xrandr --newmode ${modeline[1]}`, (err, stdout, stderr) => {
                    exec(`xrandr --addmode ${display} ${resNew}`, (err, stdout, stderr) => {
                        exec(`xrandr --output ${display} --mode ${resNew}`, (err, stdout, stderr) => {
                            leitor.close();
                        });
                    });
                });
            });

        });

    });

});