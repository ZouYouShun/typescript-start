# Typescript Start

[Document is here](https://docs.google.com/presentation/d/1bp23x6g_Q8hSs9rAiKCpGRw1BnMnHFvkSjlx9KahufY)

## Agenda

* Type annotations
* Arrow functions
* Interfaces
* Classes
* Contructors
* Access modifiers
* Properties
* Modules


## Coding tool

You can add the extensions, that will make your vscode more useful and work more effective.
```json
{
  "recommendations": [
    // ts tool
    "stringham.move-ts",
    "rbbit.typescript-hero",
    "ms-vscode.vscode-typescript-tslint-plugin",
    "christian-kohler.path-intellisense",
    "ms-vscode.typescript-javascript-grammar",
    "EditorConfig.EditorConfig",
    "MariusAlchimavicius.json-to-ts",
    "quicktype.quicktype",

    // HTML tool
    "formulahendry.auto-rename-tag",

    "yatki.vscode-surround",

    // themes and better look
    "johnpapa.vscode-peacock",
    "CoenraadS.bracket-pair-colorizer",
    "PKief.material-icon-theme",

    // git tool
    "eamodio.gitlens"
  ]
}
```

## Surround Tool
Custom Surround
```json
"surround.custom": {
    "promise": {
      // add @import '~scss/_my-theme.variable.scss';
      "label": "promise",
      "description": "promise",
      "snippet": "Promise<${TM_SELECTED_TEXT}>" // <-- snippet goes here.
    },
    "upcase": {
      // label must be unique(?:^\w|[A-Z]|\b\w|\s+)
      "label": "upcase",
      "description": "upcase",
      "snippet": "${TM_SELECTED_TEXT/(.*)/${1:/upcase}/}"
    },
    "downcase": {
      // label must be unique(?:^\w|[A-Z]|\b\w|\s+)
      "label": "downcase",
      "description": "downcase",
      "snippet": "${TM_SELECTED_TEXT/(.*)/${1:/downcase}/}"
    },
    "capitalize": {
      // label must be unique(?:^\w|[A-Z]|\b\w|\s+)
      "label": "capitalize",
      "description": "first char will be upcase",
      "snippet": "${TM_SELECTED_TEXT/(.*)/${1:/capitalize}/}"
    },
    "reduce": {
      // label must be unique(?:^\w|[A-Z]|\b\w|\s+)
      "label": "reduce",
      "description": "first char will be upcase",
      "snippet": ".reduce((prev, curr, i) => {return prev;},'')"
    },
    "console": {
      // label must be unique(?:^\w|[A-Z]|\b\w|\s+)
      "label": "console.log",
      "description": "console.log()",
      "snippet": "console.log($1)$0"
    }
}
```
