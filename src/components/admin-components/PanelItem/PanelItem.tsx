import React, {FC, useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";

import {PanelItemInterface, PanelSubItemInterface} from "../../../types/admin-type";
import AdminList from "../AdminList/AdminList";
import PanelSubItem from "./PanelSubItem/PanelSubItem";

import classes from "./PanelItem.module.css";

interface PanelItemProps {
    panelItem: PanelItemInterface,
}

const PanelItem: FC<PanelItemProps> = ({ panelItem }) => {

    const navigate = useNavigate();
    const location = useLocation();

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const renderSubItem = (subItem: PanelSubItemInterface) => <PanelSubItem key={subItem.id} panelSubItem={subItem} />

    const clickHandler = () => {
        if(!panelItem.subItems?.length) return;
        setIsOpen(!isOpen)
    }

    const titleComponent = <div className={classes.panelItem} onClick={clickHandler}>
        <div className={classes.row}>
            <div className={classes.icon}>
                <img className={classes.image} src={ `${panelItem.icon}` } alt={ panelItem.title }/>
            </div>
            <div className={classes.title}>{ panelItem.title }</div>
        </div>
    </div>

    return (
        <div>
            {
                panelItem.subItems?.length
                ? <div>
                        { titleComponent }
                        { panelItem.subItems?.length && isOpen
                            ? <AdminList items={panelItem.subItems} renderItem={renderSubItem} />
                            : '' }
                    </div>
                : <Link to={`${panelItem.path}`}>
                        { titleComponent }
                    </Link>
            }

        </div>


    );
};

export default PanelItem;