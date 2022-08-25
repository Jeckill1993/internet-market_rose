import React, {FC, useState} from 'react';
import {PanelItemInterface, PanelSubItemInterface} from "../../../types/admin-type";
import AdminList from "../AdminList/AdminList";
import PanelSubItem from "./PanelSubItem/PanelSubItem";

interface PanelItemProps {
    panelItem: PanelItemInterface,
}

const PanelItem: FC<PanelItemProps> = ({ panelItem }) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const renderSubItem = (subItem: PanelSubItemInterface) => <PanelSubItem key={subItem.id} panelSubItem={subItem} />

    const clickHandler = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <div onClick={clickHandler}>
                <div className={'row'}>
                    <div className={'icon'}>
                        <img src={ `${panelItem.icon}` } alt={ panelItem.title }/>
                    </div>
                    <div className={'title'}>{ panelItem.title }</div>
                </div>
            </div>
            { panelItem.subItems?.length && isOpen
                ? <AdminList items={panelItem.subItems} renderItem={renderSubItem} />
                : '' }
        </div>

    );
};

export default PanelItem;