import {action} from "@storybook/addon-actions";
import React from "react";
import {EditableSpan} from "./EditableSpan";

export default {
    title: "EditableSpan Component",
    component: EditableSpan
}

const changeCallback = action("Value is changes")


export const EditableSpanBaseExample = () => {
    return <EditableSpan value={"Start value"} onChange={changeCallback}/>
}