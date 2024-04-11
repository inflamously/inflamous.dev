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
const shouldOnCreateNode = ({ node, }) => {
    console.log(node);
    return true;
};
const onCreateNode = (_a) => __awaiter(void 0, [_a], void 0, function* ({ node, actions, loadNodeContent, createNodeId, createContentDigest, }) {
    const { createNode, createParentChildLink } = actions;
    const transformText = () => { };
    console.log(node);
    createNode({
        id: "test-id",
        test: "test",
        parent: node.id,
        internal: {
            type: "TextFileTestNode",
            contentDigest: createContentDigest("test"),
        }
    });
});
exports.shouldOnCreateNode = shouldOnCreateNode;
exports.onCreateNode = onCreateNode;
