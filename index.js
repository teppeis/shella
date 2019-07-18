"use strict";

const escape = require("@tehshrike/shell-escape-tag");
const execa = require("execa");

function shella(...args) {
  const opts = { stdio: "inherit", shell: true };
  if (!Array.isArray(args[0])) {
    Object.assign(opts, args[0]);
    return (...args) => shellaDo(args, opts);
  }
  return shellaDo(args, opts);
}

function shellaDo(args, opts) {
  const cmd = escape(...args);
  return execa(cmd, opts);
}

function shellaSync(...args) {
  const opts = { stdio: "inherit", shell: true };
  if (!Array.isArray(args[0])) {
    Object.assign(opts, args[0]);
    return (...args) => shellaSyncDo(args, opts);
  }
  return shellaSyncDo(args, opts);
}

function shellaSyncDo(args, opts) {
  const cmd = escape(...args);
  return execa.sync(cmd, opts);
}

module.exports = shella;
shella.sync = shellaSync;
