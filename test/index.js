"use strict";

const shella = require("../");
const assert = require("assert");

describe("shella", () => {
  it("is a function", () => {
    assert(typeof shella === "function");
  });

  it("returns a function when 1st arg is an options", () => {
    assert(typeof shella({}) === "function");
  });

  let shellapipe;
  beforeEach(() => {
    shellapipe = shella({ stdio: "pipe" });
  });

  it("stdout", async () => {
    const { stdout, stderr } = await shellapipe`echo OK`;
    assert(stdout === "OK");
    assert(stderr === "");
  });

  it("stderr", async () => {
    const { stdout, stderr } = await shellapipe`echo NG >&2`;
    assert(stdout === "");
    assert(stderr === "NG");
  });

  it("multiline", async () => {
    const { stdout } = await shellapipe`echo OK1
    echo OK2`;
    assert(stdout === "OK1\nOK2");
  });

  it("pipe", async () => {
    const { stdout } = await shellapipe`echo ABC | sed -e 's/B/b/'`;
    assert(stdout === "AbC");
  });
});

describe("shella.sync", () => {
  it("is a function", () => {
    assert(typeof shella.sync === "function");
  });

  it("returns a function when 1st arg is an options", () => {
    assert(typeof shella.sync({}) === "function");
  });

  let shellapipe;
  beforeEach(() => {
    shellapipe = shella.sync({ stdio: "pipe" });
  });

  it("stdout", () => {
    const { stdout, stderr } = shellapipe`echo OK`;
    assert(stdout === "OK");
    assert(stderr === "");
  });

  it("stderr", () => {
    const { stdout, stderr } = shellapipe`echo NG >&2`;
    assert(stdout === "");
    assert(stderr === "NG");
  });

  it("multiline", () => {
    const { stdout } = shellapipe`echo OK1
    echo OK2`;
    assert(stdout === "OK1\nOK2");
  });

  it("pipe", () => {
    const { stdout } = shellapipe`echo ABC | sed -e 's/B/b/'`;
    assert(stdout === "AbC");
  });
});
