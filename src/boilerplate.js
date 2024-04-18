export const BOILERPLATE = {
  javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + " from JavaScript!");\n}\n\ngreet("Yash");\n`,
  typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + " from TypeScript!");\n}\n\ngreet({ name: "Yash" });\n`,
  python: `\ndef greet(name):\n\tprint("Hello, " + name + " from Python!")\n\ngreet("Yash")\n`,
  java: `\npublic class HelloYash {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello Yash from Java!");\n\t}\n}\n`,
  c: `\n#include <stdio.h>\n\nint main() {\n\tprintf("Hello Yash from C!\\n");\n\treturn 0;\n}\n`,
  cpp: `\n#include <iostream>\n\nint main() {\n\tstd::cout << "Hello Yash from C++!" << std::endl;\n\treturn 0;\n}\n`,
  go: `\npackage main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello Yash from Go!")\n}\n`,
  kotlin: `\nfun main() {\n\tprintln("Hello Yash from Kotlin!")\n}\n`,
  csharp:
    'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello Yash from C#!");\n\t\t}\n\t}\n}\n',
  php: "<?php\n\n$name = 'Yash';\necho $name;\n",
};
