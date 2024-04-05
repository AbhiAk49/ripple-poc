import React from "react";
import FormControl from "./forms/FormControl";
import FormGroup from "./forms/FormGroup";
import { FormStepper } from "./forms/FormStepper";
import { Button } from "@mui/material";
import FormWizard from "./forms/FormWizard";
import { IFormRenderer } from "../forms-core/constants/common-interface";
import { metaAPI } from "../forms-core/meta-api";
import MetaFormRenderer from "../forms-core/MetaformRenderer";
console.log('>>>>>>>>> INSIDE MUI FORMS<<<<<<<<<<<')
/**
 * Dynamically render forms using `metaforms schema` and `mui components`
 */
class MuiForms extends React.Component<IFormRenderer> {
    render() {
        return (
            <MetaFormRenderer
                buttons={{
                    submit: <Button variant="contained">Save</Button>,
                    next: <Button variant="contained">Next</Button>,
                    previous: <Button variant="text">Previous</Button>,
                    cancel: <Button variant="text">Cancel</Button>
                }}
                {...this.props}
                config={{
                    gapX: 1,
                    gapY: 1,
                    ...this.props.config
                }}
                baseFormControl={FormControl}
                baseFormGroup={FormGroup}
                baseFormStepper={FormStepper}
                baseFormWizard={FormWizard}
            />
        );
    }
}

export { metaAPI };

export default MuiForms;
