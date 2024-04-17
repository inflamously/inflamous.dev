"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onCreateNode = exports.shouldOnCreateNode = void 0;
const fs_1 = require("fs");
const shouldOnCreateNode = ({ node, }) => {
    var _a;
    return ((_a = node === null || node === void 0 ? void 0 : node.internal) === null || _a === void 0 ? void 0 : _a.mediaType) === "text/plain";
};
exports.shouldOnCreateNode = shouldOnCreateNode;
const onCreateNode = (_a, options_1) => __awaiter(void 0, [_a, options_1], void 0, function* ({ node, actions, createNodeId, createContentDigest }, options) {
    const { createNode, createParentChildLink } = actions;
    const { absolutePath, name, id, parent, ext } = node;
    const { leafDirectory } = options;
    console.log("processing plugin with options", options);
    console.log("processing node with id: ", id);
    if (!id ||
        (id === null || id === void 0 ? void 0 : id.length) <= 0 ||
        typeof absolutePath !== "string" ||
        typeof name !== "string" ||
        (typeof ext !== "string" && ext !== ".txt")) {
        return;
    }
    console.log("reading file");
    if (leafDirectory) {
        // TODO: Query only from leaf directory
    }
    const textData = (0, fs_1.readFileSync)(absolutePath, {
        encoding: "utf8",
    });
    console.log("creating node");
    yield createNode({
        id: createNodeId(node.id),
        absolutePath,
        name,
        ext,
        content: textData,
        parent,
        internal: {
            type: "TextFile",
            contentDigest: createContentDigest(textData),
        },
    });
});
exports.onCreateNode = onCreateNode;
