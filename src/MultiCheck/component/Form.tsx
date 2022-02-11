import React, {FC} from 'react';

import  '../MultiCheck.css';
import {Option} from '../MultiCheck';
import List from "./List";

type Props = {
    options: Option[],
    columns?: number,
    values?: string[]
    onChange?: (options: Option[]) => void,
}

const Form: FC<Props> = (props): JSX.Element => {

    const lists = () => {
        const columns = props.columns? props.columns : 1;
        const length = props.options.length;
        const raws = length / columns;
        const overflow = length % columns;
        let rawNum: number[] = [];
        for (let i = 0; i < columns; i++) {
            rawNum[i] = raws * i;
        }
        rawNum[columns] = length;
        for (let i = 0; i < overflow; i++) {
            rawNum[i]++;
        }
        let res: JSX.Element[] = []
        for (let i = 0; i < columns; i++) {
            res.push(<List options={props.options.slice(rawNum[i], rawNum[i+1])} key={Math.random()} />);
        }
        return res
    }

    return (
        <form className='form'>
            abc
            {lists()}
        </form>
    )
}

Form.defaultProps = {
    columns: 1
}

export default Form