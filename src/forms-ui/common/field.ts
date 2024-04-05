import { IError, IField, IFormField, IMeta, IOption, MetaForm } from "../../forms-core";
import { TMouseEvent, TValue } from "../../forms-core/constants/types";

export interface IFieldProps {
    className: string;
    context: MetaForm;
    field: IField;
    form: IFormField;
    name: string;
    size: "small" | "medium";
    variant?: string;
    error: IError;
    handleChange(e: TMouseEvent, val?: TValue, ref?: IOption): void;
    handleValidation: () => void;
    setError: (hasError: boolean, errorMsg: string) => void;
}
