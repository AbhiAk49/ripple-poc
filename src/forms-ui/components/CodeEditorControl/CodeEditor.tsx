import { IFieldProps } from "../../common/field";
import React from "react";
import Editor from "@monaco-editor/react";
import { Box, FormControl, FormLabel } from "@mui/material";
import MandatoryLabel from "../../common/MandatoryLabel";

interface CodeEditorControlProps extends IFieldProps {
    language?: string;
    height?: string;
}

function CodeEditor(props: CodeEditorControlProps) {
    const wrapperClassName =
        "meta-form-control-" +
        props.field.name +
        (props.form?.displayProps?.fieldLayout === "row" ? "d-md-flex flex-md-row justify-content-md-between" : "");
    const fieldLabelClassname = wrapperClassName ? "field-label d-md-flex align-items-md-center" : "field-label";

    const handleChange = (value: string, event: any) => {
        props.handleChange(event, value);
    };
    return (
        <FormControl
            className={props.className}
            size={props.size}
            sx={{
                position: "relative"
            }}
            fullWidth
            error={props.error.hasError ? true : undefined}
        >
            <FormLabel className={fieldLabelClassname} sx={{ fontSize: "13px !important", left: "10px !important" }}>
                {props.form.displayName}
                {props.form?.validation?.required && <MandatoryLabel />}
            </FormLabel>
            <Box
                sx={{
                    border: "1px solid #B5B5B5",
                    borderRadius: 1.5,
                    padding: 1
                }}
            >
                <Editor
                    height={props.height || "300px"}
                    width="100%"
                    defaultValue={props.form.value as any}
                    defaultLanguage={props.language || "javascript"}
                    onChange={handleChange}
                    options={{
                        minimap: { enabled: false },
                        autoIndent: "full",
                        formatOnType: true,
                        formatOnPaste: true,
                        glyphMargin: false,
                        lineDecorationsWidth: 0,
                        lineNumbersMinChars: 0,
                        scrollBeyondLastLine: false
                    }}
                    className="overflow-hidden"
                />
            </Box>
        </FormControl>
    );
}

export default CodeEditor;
