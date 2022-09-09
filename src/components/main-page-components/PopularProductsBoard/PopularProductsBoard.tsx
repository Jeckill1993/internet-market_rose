import React from 'react';

import classes from './PopularProductsBoard.module.css';

const PopularProductsBoard = () => {
    return (
        <section className={classes.board}>
            <div className="wrapper wrapper_max">
                <h3 className={classes.board_title}>Popular products</h3>
                <div className={classes.board_content}>
                    <div className="row">
                        <div className={classes.board_card}>
                            <div className={classes.board_card__content}>1</div>
                        </div>
                        <div className={classes.board_card}>
                            <div className={classes.board_card__content}>2</div>
                        </div>
                        <div className={classes.board_card}>
                            <div className={classes.board_card__content}>3</div>
                        </div>
                        <div className={classes.board_card}>
                            <div className={classes.board_card__content}>4</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularProductsBoard;