import hljs from "highlight.js";

function prisma() {
  return {
    name: "prisma",
    keywords: {
      keyword: [
        "model",
        "enum",
        "type",
        "datasource",
        "generator",
        "provider",
        "client",
        "previewFeatures",
        "relationMode",
        "referentialIntegrity",
      ].join(" "),
      type: [
        "String",
        "Int",
        "BigInt",
        "Boolean",
        "DateTime",
        "Float",
        "Decimal",
        "Json",
        "Bytes",
        "Unsupported",
      ].join(" "),
      built_in: ["cuid", "uuid", "now", "autoincrement", "sequence"].join(" "),
      literal: "true false null",
    },
    contains: [
      {
        className: "attribute",
        begin: "@\\w+",
      },
      hljs.C_LINE_COMMENT_MODE,
      {
        className: "string",
        begin: '"',
        end: '"',
      },
      {
        className: "meta",
        begin: "@[a-zA-Z][a-zA-Z0-9_]*",
        relevance: 10,
        contains: [
          {
            begin: "\\(",
            end: "\\)",
            contains: [
              hljs.APOS_STRING_MODE,
              hljs.QUOTE_STRING_MODE,
              hljs.NUMBER_MODE,
            ],
          },
        ],
      },
      {
        className: "meta",
        begin: "@@[a-zA-Z][a-zA-Z0-9_]*",
      },
      hljs.NUMBER_MODE,
      {
        className: "symbol",
        begin: "\\?|\\[\\]",
      },
      {
        className: "class",
        beginKeywords: "model enum type",
        end: "{",
        excludeEnd: true,
        illegal: /[:"\[\]]/,
        contains: [hljs.UNDERSCORE_TITLE_MODE],
      },
    ],
  };
}

export default prisma;
