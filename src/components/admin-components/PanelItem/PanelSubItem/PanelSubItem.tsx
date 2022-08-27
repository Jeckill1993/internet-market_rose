import React, {FC} from 'react';
import {PanelItemInterface, PanelSubItemInterface} from "../../../../types/admin-type";
import {Link} from "react-router-dom";

interface PanelSubItemProps {
    panelSubItem: PanelSubItemInterface,
}

const PanelSubItem:FC<PanelSubItemProps> = ({ panelSubItem }) => {
    return (
        <Link to={panelSubItem.path}>
            { panelSubItem.title }
        </Link>
    );
};

export default PanelSubItem;