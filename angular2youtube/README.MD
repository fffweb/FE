typescript Declaretion file
    Version 2.2.1
    PS C:\Users\liuff\Source\GitHub\FE\angular2youtube> .\node_modules\.bin\tsc --rootDir src --outDir dist
    node_modules/@angular/common/src/directives/ng_class.d.ts(46,34): error TS2304: Cannot find name 'Set'.
    node_modules/@angular/compiler/src/aot/compiler.d.ts(43,32): error TS2304: Cannot find name 'Map'.
    node_modules/@angular/compiler/src/compile_metadata.d.ts(344,20): error TS2304: Cannot find name 'Set'.
    node_modules/@angular/compiler/src/compile_metadata.d.ts(346,28): error TS2304: Cannot find name 'Set'.
    node_modules/@angular/compiler/src/compile_metadata.d.ts(348,15): error TS2304: Cannot find name 'Set'.
    node_modules/@angular/compiler/src/compile_metadata.d.ts(350,23): error TS2304: Cannot find name 'Set'.
    node_modules/@angular/compiler/src/compile_metadata.d.ts(352,17): error TS2304: Cannot find name 'Set'.
    node_modules/@angular/compiler/src/compile_metadata.d.ts(354,25): error TS2304: Cannot find name 'Set'.
    node_modules/@angular/compiler/src/output/output_ast.d.ts(427,63): error TS2304: Cannot find name 'Set'.
    node_modules/@angular/core/src/change_detection/differs/default_keyvalue_differ.d.ts(24,15): error TS2304: Cannot find name 'Map'.
    node_modules/@angular/core/src/change_detection/differs/default_keyvalue_differ.d.ts(28,16): error TS2304: Cannot find name 'Map'.
    node_modules/@angular/core/src/di/reflective_provider.d.ts(88,123): error TS2304: Cannot find name 'Map'.
    node_modules/@angular/core/src/di/reflective_provider.d.ts(88,165): error TS2304: Cannot find name 'Map'.
    node_modules/@angular/core/src/facade/lang.d.ts(12,17): error TS2304: Cannot find name 'Map'.
    node_modules/@angular/core/src/facade/lang.d.ts(13,17): error TS2304: Cannot find name 'Set'.
    node_modules/@angular/http/src/headers.d.ts(52,59): error TS2304: Cannot find name 'Map'.
    node_modules/@angular/http/src/url_search_params.d.ts(46,16): error TS2304: Cannot find name 'Map'.
    node_modules/@angular/platform-browser/src/browser/browser_adapter.d.ts(79,33): error TS2304: Cannot find name 'Map'.
    node_modules/@angular/platform-browser/src/dom/dom_adapter.d.ts(97,42): error TS2304: Cannot find name 'Map'.
    node_modules/@angular/platform-browser/src/dom/dom_renderer.d.ts(22,37): error TS2304: Cannot find name 'Map'.
    node_modules/rxjs/Observable.d.ts(68,60): error TS2693: 'Promise' only refers to a type, but is being used as a value here.
    PS C:\Users\liuff\Source\GitHub\FE\angular2youtube> ^C

install typings, typings folder and typings.json
    npm install --save-dev typings
    typings search core-js
    typings install --global --save dt~core-js