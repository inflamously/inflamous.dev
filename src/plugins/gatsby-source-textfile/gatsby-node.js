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
const fs_1 = require("fs");
const shouldOnCreateNode = ({ node, }) => node.internal.mediaType === "text/plain";
const onCreateNode = (_a) => __awaiter(void 0, [_a], void 0, function* ({ node, actions, loadNodeContent, createNodeId, createContentDigest, }) {
    const { createNode, createParentChildLink } = actions;
    const { absolutePath, name, id, parent, ext } = node;
    console.log("processing node with id: ", id);
    if (!id ||
        (id === null || id === void 0 ? void 0 : id.length) <= 0 ||
        typeof absolutePath !== "string" ||
        typeof name !== "string" ||
        (typeof ext !== "string" && ext !== ".txt")) {
        return;
    }
    console.log("reading file");
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
exports.shouldOnCreateNode = shouldOnCreateNode;
exports.onCreateNode = onCreateNode;
