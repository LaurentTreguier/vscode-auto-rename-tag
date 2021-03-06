"use strict";

import * as assert from 'assert';
import * as vscode from 'vscode';
import * as testUtil from './testUtil';


// Defines a Mocha test suite to group tests of similar kind together
suite("Extension Tests", function () {
    suiteSetup(testUtil.setupWorkspace);

    test("Insert at opening tag", function (done) {
        testUtil.insertAtPosition("<div a=b></div>", "r", new vscode.Position(0, 4), "<divr a=b></divr>", done);
    });

    test("Insert at closing tag", function (done) {
        testUtil.insertAtPosition("<xy-1></xy-1>", ":", new vscode.Position(0, 9), "<x:y-1></x:y-1>", done);
    });
});