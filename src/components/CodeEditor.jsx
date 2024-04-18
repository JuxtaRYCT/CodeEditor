import { Box, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { BOILERPLATE } from "../boilerplate";
import Runner from "./Runner";

const CodeEditor = () => {
    const editorReference = useRef();
    const [value, setValue] = useState("");
    const [language, setLanguage] = useState('javascript');
    const onMount = (editor) => {
        editorReference.current = editor;
        editor.focus();
    };

    const onSelect = (language) => {
        setLanguage(language)
        setValue(
            BOILERPLATE[language]
        )
    };

    return (
        <Box>
            <HStack spacing={4}>
                <Box w='50%'

                >
                    <LanguageSelector language={language} onSelect={onSelect} />
                    <Box border='2px solid' borderRadius={5} color='#9B51E0'>
                        <Editor
                            height="75vh"
                            theme="vs-dark"
                            language={language}
                            defaultValue={BOILERPLATE[language]}
                            onMount={onMount}
                            value={value}
                            onChange={
                                (value, event) => setvalue(value)
                            }

                        />
                    </Box>

                </Box>
                <Runner editorReference={editorReference} language={language} />
            </HStack>

        </Box>
    )
}


export default CodeEditor;