module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['prettier/@typescript-eslint'],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    // '@typescript-eslint/adjacent-overload-signatures': 'error', //	Require that member overloads be consecutive	✔️
    // '@typescript-eslint/array-type': 'error', //	Requires using either T[] or Array<T> for arrays		🔧
    // '@typescript-eslint/await-thenable': 'error', //	Disallows awaiting a value that is not a Thenable	✔️		💭
    // '@typescript-eslint/ban-ts-comment': 'error', //	Bans // @ts-<directive> comments from being used or requires descriptions after directive	✔️
    // '@typescript-eslint/ban-tslint-comment': 'error', //	Bans // tslint:<rule-flag> comments from being used		🔧
    // '@typescript-eslint/ban-types': 'error', //	Bans specific types from being used	✔️	🔧
    // '@typescript-eslint/class-literal-property-style': 'error', //	Ensures that literals on classes are exposed in a consistent style		🔧
    // '@typescript-eslint/consistent-type-assertions': 'error', //	Enforces consistent usage of type assertions
    // '@typescript-eslint/consistent-type-definitions': 'error', //	Consistent with type definition either interface or type		🔧
    // '@typescript-eslint/consistent-type-imports': 'error', //	Enforces consistent usage of type imports		🔧
    // '@typescript-eslint/explicit-function-return-type': 'error', //	Require explicit return types on functions and class methods
    // '@typescript-eslint/explicit-member-accessibility': 'error', //	Require explicit accessibility modifiers on class properties and methods		🔧
    // '@typescript-eslint/explicit-module-boundary-types': 'error', //	Require explicit return and argument types on exported functions' and classes' public class methods	✔️
    // '@typescript-eslint/member-delimiter-style': 'error', //	Require a specific member delimiter style for interfaces and type literals		🔧
    // '@typescript-eslint/member-ordering': 'error', //	Require a consistent member declaration order
    // '@typescript-eslint/method-signature-style': 'error', //	Enforces using a particular method signature syntax.		🔧
    // '@typescript-eslint/naming-convention': 'error', //	Enforces naming conventions for everything across a codebase			💭
    // '@typescript-eslint/no-base-to-string': 'error', //	Requires that .toString() is only called on objects which provide useful information when stringified			💭
    // '@typescript-eslint/no-confusing-non-null-assertion': 'error', //	Disallow non-null assertion in locations that may be confusing		🔧
    // '@typescript-eslint/no-dynamic-delete': 'error', //	Disallow the delete operator with computed key expressions		🔧
    // '@typescript-eslint/no-empty-interface': 'error', //	Disallow the declaration of empty interfaces	✔️	🔧
    // '@typescript-eslint/no-explicit-any': 'error', //	Disallow usage of the any type	✔️	🔧
    // '@typescript-eslint/no-extra-non-null-assertion': 'error', //	Disallow extra non-null assertion	✔️	🔧
    // '@typescript-eslint/no-extraneous-class': 'error', //	Forbids the use of classes as namespaces
    // '@typescript-eslint/no-floating-promises': 'error', //	Requires Promise-like values to be handled appropriately	✔️		💭
    // '@typescript-eslint/no-for-in-array': 'error', //	Disallow iterating over an array with a for-in loop	✔️		💭
    // '@typescript-eslint/no-implicit-any-catch': 'error', //	Disallow usage of the implicit any type in catch clauses		🔧
    // '@typescript-eslint/no-implied-eval': 'error', //	Disallow the use of eval()-like methods	✔️		💭
    // '@typescript-eslint/no-inferrable-types': 'error', //	Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean	✔️	🔧
    // '@typescript-eslint/no-invalid-void-type': 'error', //	Disallows usage of void type outside of generic or return types
    // '@typescript-eslint/no-misused-new	Enforce': 'error', // valid definition of new and constructor	✔️
    // '@typescript-eslint/no-misused-promises': 'error', //	Avoid using promises in places not designed to handle them	✔️		💭
    // '@typescript-eslint/no-namespace': 'error', //	Disallow the use of custom TypeScript modules and namespaces	✔️
    // '@typescript-eslint/no-non-null-asserted-optional-chain': 'error', //	Disallows using a non-null assertion after an optional chain expression	✔️
    // '@typescript-eslint/no-non-null-assertion': 'error', //	Disallows non-null assertions using the ! postfix operator	✔️
    // '@typescript-eslint/no-parameter-properties': 'error', //	Disallow the use of parameter properties in class constructors
    // '@typescript-eslint/no-require-imports': 'error', //	Disallows invocation of require()
    // '@typescript-eslint/no-this-alias': 'error', //	Disallow aliasing this	✔️
    // '@typescript-eslint/no-throw-literal': 'error', //	Disallow throwing literals as exceptions			💭
    // '@typescript-eslint/no-type-alias': 'error', //	Disallow the use of type aliases
    // '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error', //	Flags unnecessary equality comparisons against boolean literals		🔧	💭
    // '@typescript-eslint/no-unnecessary-condition': 'error', //	Prevents conditionals where the type is always truthy or always falsy		🔧	💭
    // '@typescript-eslint/no-unnecessary-qualifier': 'error', //	Warns when a namespace qualifier is unnecessary		🔧	💭
    // '@typescript-eslint/no-unnecessary-type-arguments': 'error', //	Enforces that type arguments will not be used if not required		🔧	💭
    // '@typescript-eslint/no-unnecessary-type-assertion': 'error', //	Warns if a type assertion does not change the type of an expression	✔️	🔧	💭
    // '@typescript-eslint/no-unsafe-assignment': 'error', //	Disallows assigning any to variables and properties	✔️		💭
    // '@typescript-eslint/no-unsafe-call': 'error', //	Disallows calling an any type value	✔️		💭
    // '@typescript-eslint/no-unsafe-member-access': 'error', //	Disallows member access on any typed variables	✔️		💭
    // '@typescript-eslint/no-unsafe-return': 'error', //	Disallows returning any from a function	✔️		💭
    // '@typescript-eslint/no-var-requires': 'error', //	Disallows the use of require statements except in import statements	✔️
    // '@typescript-eslint/prefer-as-const': 'error', //	Prefer usage of as const over literal type	✔️	🔧
    // '@typescript-eslint/prefer-enum-initializers': 'error', //	Prefer initializing each enums member value
    // '@typescript-eslint/prefer-for-of': 'error', //	Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
    // '@typescript-eslint/prefer-function-type': 'error', //	Use function types instead of interfaces with call signatures		🔧
    // '@typescript-eslint/prefer-includes': 'error', //	Enforce includes method over indexOf method		🔧	💭
    // '@typescript-eslint/prefer-literal-enum-member': 'error', //	Require that all enum members be literal values to prevent unintended enum member name shadow issues
    // '@typescript-eslint/prefer-namespace-keyword': 'error', //	Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules	✔️	🔧
    // '@typescript-eslint/prefer-nullish-coalescing': 'error', //	Enforce the usage of the nullish coalescing operator instead of logical chaining			💭
    // '@typescript-eslint/prefer-optional-chain': 'error', //	Prefer using concise optional chain expressions instead of chained logical ands
    // '@typescript-eslint/prefer-readonly': 'error', //	Requires that private members are marked as readonly if they're never modified outside of the constructor		🔧	💭
    // '@typescript-eslint/prefer-readonly-parameter-types': 'error', //	Requires that function parameters are typed as readonly to prevent accidental mutation of inputs			💭
    // '@typescript-eslint/prefer-reduce-type-parameter': 'error', //	Prefer using type parameter when calling Array#reduce instead of casting		🔧	💭
    // '@typescript-eslint/prefer-regexp-exec': 'error', //	Enforce that RegExp#exec is used instead of String#match if no global flag is provided	✔️		💭
    // '@typescript-eslint/prefer-string-starts-ends-with': 'error', //	Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings		🔧	💭
    // '@typescript-eslint/prefer-ts-expect-error': 'error', //	Recommends using // @ts-expect-error over // @ts-ignore		🔧
    // '@typescript-eslint/promise-function-async': 'error', //	Requires any function or method that returns a Promise to be marked async			💭
    // '@typescript-eslint/require-array-sort-compare': 'error', //	Requires Array#sort calls to always provide a compareFunction			💭
    // '@typescript-eslint/restrict-plus-operands': 'error', //	When adding two variables, operands must both be of type number or of type string	✔️		💭
    // '@typescript-eslint/restrict-template-expressions': 'error', //	Enforce template literal expressions to be of string type	✔️		💭
    // '@typescript-eslint/strict-boolean-expressions': 'error', //	Restricts the types allowed in boolean expressions			💭
    // '@typescript-eslint/switch-exhaustiveness-check': 'error', //	Exhaustiveness checking in switch with union type			💭
    // '@typescript-eslint/triple-slash-reference': 'error', //	Sets preference level for triple slash directives versus ES6-style import declarations	✔️
    // '@typescript-eslint/type-annotation-spacing': 'error', //	Require consistent spacing around type annotations		🔧
    // '@typescript-eslint/typedef': 'error', //	Requires type annotations to exist
    // '@typescript-eslint/unbound-method': 'error', //	Enforces unbound methods are called with their expected scope	✔️		💭
    // '@typescript-eslint/unified-signatures': 'error', //
    // '@typescript-eslint/brace-style': 'error', //	Enforce consistent brace style for blocks		🔧
    // '@typescript-eslint/comma-spacing': 'error', //	Enforces consistent spacing before and after commas		🔧
    // '@typescript-eslint/default-param-last': 'error', //	Enforce default parameters to be last
    // '@typescript-eslint/dot-notation': 'error', //	enforce dot notation whenever possible		🔧	💭
    // '@typescript-eslint/func-call-spacing': 'error', //	Require or disallow spacing between function identifiers and their invocations		🔧
    // '@typescript-eslint/indent': 'error', //	Enforce consistent indentation		🔧
    // '@typescript-eslint/init-declarations': 'error', //	require or disallow initialization in variable declarations
    // '@typescript-eslint/keyword-spacing': 'error', //	Enforce consistent spacing before and after keywords		🔧
    // '@typescript-eslint/lines-between-class-members': 'error', //	Require or disallow an empty line between class members		🔧
    // '@typescript-eslint/no-array-constructor': 'error', //	Disallow generic Array constructors	✔️	🔧
    // '@typescript-eslint/no-dupe-class-members': 'error', //	Disallow duplicate class members
    // '@typescript-eslint/no-empty-function': 'error', //	Disallow empty functions	✔️
    // '@typescript-eslint/no-extra-parens': 'error', //	Disallow unnecessary parentheses		🔧
    // '@typescript-eslint/no-extra-semi': 'error', //	Disallow unnecessary semicolons	✔️	🔧
    // '@typescript-eslint/no-invalid-this': 'error', //	disallow this keywords outside of classes or class-like objects
    // '@typescript-eslint/no-loop-func': 'error', //	Disallow function declarations that contain unsafe references inside loop statements
    // '@typescript-eslint/no-loss-of-precision': 'error', //	Disallow literal numbers that lose precision
    // '@typescript-eslint/no-magic-numbers': 'error', //	Disallow magic numbers
    // '@typescript-eslint/no-redeclare': 'error', //	Disallow variable redeclaration
    // '@typescript-eslint/no-shadow': 'error', //	Disallow variable declarations from shadowing variables declared in the outer scope
    // '@typescript-eslint/no-unused-expressions': 'error', //	Disallow unused expressions
    // '@typescript-eslint/no-unused-vars': 'error', //	Disallow unused variables	✔️
    // '@typescript-eslint/no-use-before-define': 'error', //	Disallow the use of variables before they are defined
    // '@typescript-eslint/no-useless-constructor': 'error', //	Disallow unnecessary constructors
    // '@typescript-eslint/quotes': 'error', //	Enforce the consistent use of either backticks, double, or single quotes		🔧
    // '@typescript-eslint/require-await': 'error', //	Disallow async functions which have no await expression	✔️		💭
    // '@typescript-eslint/return-await	Enforces': 'error', // consistent returning of awaited values		🔧	💭
    // '@typescript-eslint/semi': 'error', //	Require or disallow semicolons instead of ASI		🔧
    // '@typescript-eslint/space-before-function-paren': 'error', //	Enforces consistent spacing before function parenthesis		🔧
  },
};
