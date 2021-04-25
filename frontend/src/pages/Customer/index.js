import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCustomers } from 'store/customer/actions';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

import styles from './styles.module.scss';
import { CUSTOMER_DETAIL_PATH } from 'router/paths';

const Character = () => {
    const { SearchBar } = Search;
    const dispatch = useDispatch();
    const { customers } = useSelector((state) => state.customer);

    const columns = [
        {
            dataField: 'id',
            text: 'Customer ID',
            headerStyle: {
				width: '15%',
				textAlign: 'left',
				textTransform: 'none',
			},
        },
        {
            dataField: 'first_name',
            text: 'First Name',
            headerStyle: {
				width: '20%',
				textAlign: 'left',
				textTransform: 'none',
			},
        },
        {
            dataField: 'last_name',
            text: 'Last Name',
            headerStyle: {
				width: '20%',
				textAlign: 'left',
				textTransform: 'none',
			},
        },
        {
            dataField: 'email',
            text: 'Email',
            headerStyle: {
				width: '30%',
				textAlign: 'left',
				textTransform: 'none',
			},
        },
        {
            dataField: 'link',
			text: 'Link',
			headerStyle: {
				width: '15%',
				textAlign: 'center',
				textTransform: 'none',
			},
			formatter: (rowContent, row) => {
				return (
					<Link
						className={styles.link}
						to={CUSTOMER_DETAIL_PATH.replace(':detailId', row.id)}
					>
						Open Customer
					</Link>
				);
			},
            align: 'center',
        }
    ];

    useEffect(() => {
        dispatch(getCustomers());
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <ToolkitProvider
            keyField="id"
            data={ customers }
            columns={ columns }
            search
            >
            {
                props => (
                <div>
                    <SearchBar { ...props.searchProps } srText=''/>
                    <hr />
                    <BootstrapTable
                    { ...props.baseProps }

                    style={{widht:'100%'}}
                    rowStyle={ {height: '30px'} }
                    />
                </div>
                )
            }
            </ToolkitProvider>
        </div>
    );
}

export default Character;
