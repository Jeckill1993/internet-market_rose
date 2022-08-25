import React, {FC} from 'react';
import {PanelItemInterface, PanelSubItemInterface} from "../../../../types/admin-type";

interface PanelSubItemProps {
    panelSubItem: PanelSubItemInterface,
}

const PanelSubItem:FC<PanelSubItemProps> = ({ panelSubItem }) => {
    return (
        <div>
            { panelSubItem.title }
        </div>
    );
};

export default PanelSubItem;