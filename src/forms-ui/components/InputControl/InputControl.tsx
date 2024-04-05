import React from "react";
import { IFieldProps } from "../../common/field";
import MuiFormUtil from "../../utils/MuiFormUtil";

interface InputControlProps extends IFieldProps {
    type: string;
    htmlProps?: React.InputHTMLAttributes<HTMLInputElement>;
}
function InputControl(props: InputControlProps) {
    const label = MuiFormUtil.getDisplayLabel(props.form);
    let infoText: string = props.form?.validation?.infoDetail?.infoMsg ?? "";
    const wrapperClassName = "meta-form-control-" + props.field.name;
    const htmlProps = props.htmlProps ?? {};
    const isInfoFnExists = infoText?.includes("$");
    if (isInfoFnExists) {
        const infoMsgFnName: string = props.form?.validation?.infoDetail?.infoMsgFn ?? "";
        const infoMsgFn = props.context.getFn(infoMsgFnName);
        infoText = infoMsgFn ? (infoMsgFn(null, undefined, props.form) as string) : "";
    }
    return (
        <div className={wrapperClassName}>
            <label className="meta-select-label">{label}</label>
            <input
                className={wrapperClassName}
                type={props.type}
                name={props.name}
                disabled={props.form.isDisabled}
                placeholder={props.form?.placeholder}
                value={typeof props.form?.value === "boolean" ? (props.form?.value ? 1 : 0) : props.form?.value || ""}
                onChange={props.handleChange}
                onBlur={props.handleValidation}
            />
            {props.error?.hasError && <span>{props.error.errorMsg || infoText}</span>}
        </div>
    );
}

export default InputControl;
