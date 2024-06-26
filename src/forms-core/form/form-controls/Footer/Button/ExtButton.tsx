import styled from "@emotion/styled";
import React from "react";
/**
 * Represents an external button
 * @param param
 * @returns
 */

function ExtButton({
    className,
    children,
    type,
    onClick
}: {
    className: string;
    children: JSX.Element;
    type?: string;
    onClick: (e: React.MouseEvent) => void;
}) {
    return (
        <SpanBtn
            data-btn-type={type}
            onClick={(e) => {
                if (e.currentTarget === e.target) {
                    // ignore click on self
                    e.stopPropagation();
                    e.preventDefault();
                } else {
                    onClick(e);
                }
            }}
            // className={className}
        >
            {children}
        </SpanBtn>
    );
}

const SpanBtn = styled.span`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0;
    width: 100px;
`;

export default ExtButton;
