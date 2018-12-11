#!/usr/bin/env node

let spawn = require('child_process').spawn;

//
//USE: ./index.js <ms npm can be idle> <number of attempts> [... NPM ARGS]
//

let timeout = process.argv[2] || process.env.NPM_INSTALL_TIMEOUT || 60000;
let attempts = process.argv[3] || 3;
let args = process.argv.slice(4);
if (args.length === 0) {
  args = ['install'];
}

(function npm() {
  let timer;
  args.push('--verbose');
  let proc = spawn('npm', args);
  proc.stdout.pipe(process.stdout);
  proc.stderr.pipe(process.stderr);
  proc.stdin.end();
  proc.stdout.on('data', () => {
    setTimer();
  });
  proc.stderr.on('data', () => {
    setTimer();
  });

  // side effect: this also restarts when npm exits with a bad code even if it
  // didnt timeout
  proc.on('close', (code, signal) => {
    clearTimeout(timer);
    if (code || signal) {
      console.log('[npm-are-you-sleeping] npm exited with code ' + code + '');

      if (--attempts) {
        console.log('[npm-are-you-sleeping] restarting');
        npm();
      } else {
        console.log('[npm-are-you-sleeping] i tried lots of times. giving up.');
        throw new Error("npm install fails");
      }
    }
  });

  function setTimer() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log('[npm-are-you-sleeping] killing npm with SIGTERM');
      proc.kill('SIGTERM');
      // wait a couple seconds
      timer = setTimeout(() => {
        // its it's still not closed sigkill
        console.log('[npm-are-you-sleeping] killing npm with SIGKILL');
        proc.kill('SIGKILL');
      }, 2000);
    }, timeout);
  }
})();
