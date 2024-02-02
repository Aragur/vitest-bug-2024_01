# vitest bug
This contains a minimal reproducible example for a bug in vitest.
```
TypeError: The argument 'path' must be a string, Uint8Array, or URL without null bytes. Received '{{path_removed}}/coverage/lcov-report/vitest-bug-2024_01/\x00vite'
 ❯ Object.mkdirSync node:fs:1371:10
 ❯ module.exports.sync node_modules/.pnpm/make-dir@4.0.0/node_modules/make-dir/index.js:113:6
 ❯ FileWriter.writeFile node_modules/.pnpm/istanbul-lib-report@3.0.1/node_modules/istanbul-lib-report/lib/file-writer.js:184:16
 ❯ HtmlReport.onSummary node_modules/.pnpm/istanbul-reports@3.1.6/node_modules/istanbul-reports/lib/html/index.js:364:44
 ❯ LcovReport.<computed> [as onSummary] node_modules/.pnpm/istanbul-reports@3.1.6/node_modules/istanbul-reports/lib/lcov/index.js:28:23
 ❯ Visitor.value node_modules/.pnpm/istanbul-lib-report@3.0.1/node_modules/istanbul-lib-report/lib/tree.js:38:38
 ❯ ReportNode.visit node_modules/.pnpm/istanbul-lib-report@3.0.1/node_modules/istanbul-lib-report/lib/tree.js:86:21
 ❯ node_modules/.pnpm/istanbul-lib-report@3.0.1/node_modules/istanbul-lib-report/lib/tree.js:92:19
 ❯ ReportNode.visit node_modules/.pnpm/istanbul-lib-report@3.0.1/node_modules/istanbul-lib-report/lib/tree.js:91:28
 ```