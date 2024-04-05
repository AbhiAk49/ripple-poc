import React from "react";
import { BaseFormGroup, Sections, IField, ISchema } from "../../forms-core";
import Tabs from "@mui/material/Tabs";
import Tab, { tabClasses } from "@mui/material/Tab";
import { Box, buttonClasses, styled } from "@mui/material";
import { TTabVariant } from "./ constants";

export default class FormGroup extends BaseFormGroup {
    // eslint-disable-next-line no-useless-constructor
    constructor(props: ISchema) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    tabs(): JSX.Element {
        const tabVariant: TTabVariant = this.context.formConfig?.config?.tabs?.variant as TTabVariant;
        const CustomTabs = styled(Tabs)`
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: auto;
            & .MuiTabs-flexContainer {
                gap: 12px;
            }
        `;

        const CustomTab = styled(Tab)`
            font-family: 'JioType';
            color: #141414;
            cursor: pointer;
            font-size: 14px;
            font-weight: 400;
            background-color: transparent;
            border-radius: 6px !important;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 4px !important;
            border: none;
            line-height: 20px;
            letter-spacing: -0.07px;
            min-width: auto;
            min-height: auto !important;
            text-transform: capitalize !important;
                &.${tabClasses.selected} {
                    background-color: #fff;
                    font-weight: 600 !important;
                    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.08);

                }
                &.${buttonClasses.disabled} {
                    opacity: 0.5;
                    cursor: not-allowed;
                }
          })`;
        return (
            <Box
                data-pagenumber={this.state.activeIndex + 1}
                sx={{
                    // maxWidth: { xs: 320, sm: "unset", md: "unset" },
                    overflowX: "auto",
                    background: "#f5f5f5",
                    borderRadius: "8px",
                    p: "6px",
                    width: "max-content"
                }}
            >
                <CustomTabs
                    variant={tabVariant}
                    allowScrollButtonsMobile
                    value={this.state.activeIndex}
                    onChange={this.handleChange}
                    aria-label="tabs"
                    TabIndicatorProps={{
                        style: {
                            display: "none"
                        }
                    }}
                >
                    {this.state.tabFields.map((tabField: IField, index: number) => {
                        const displayName = tabField?.meta?.displayName ? tabField.meta.displayName : tabField.name;
                        const isDisabled = tabField?.meta?.isDisabled ? true : undefined;
                        return <CustomTab key={displayName + index} label={displayName} disabled={isDisabled} />;
                    })}
                </CustomTabs>
            </Box>
        );
    }

    panels(): JSX.Element {
        return <Sections sections={this.sectionFields} activeIndex={this.state.activeIndex} error={this.state.error} />;
    }

    handleChange(arg: React.SyntheticEvent, index: number) {
        this.setActiveIndex(index);
    }

    render(): JSX.Element {
        return super.render();
    }
}
