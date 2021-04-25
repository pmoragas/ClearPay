import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCustomer } from 'store/customer/actions';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import Modal from 'component/Modal';
import Card from 'component/Card';
import { executeTransfer, resetErrorMsg } from 'store/customer/actions';

import styles from './styles.module.scss';

const sumAllAmounts = (wallets) => {
    return wallets.reduce((acc, item) => {return acc + item.amount}, 0);
}

const CharacterDetail = () => {
    const { SearchBar } = Search;
    const dispatch = useDispatch();
    const params = useParams();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedWallet, setSelectedWallet] = useState(undefined);
    const detailId = params.detailId ? parseInt(params.detailId, 10) : undefined;
    const { customerDetail, hasDataChanged, errorMsg } = useSelector((state) => state.customer);

    const onSubmitForm = (values) => {
        dispatch(executeTransfer(values));
    };

    const columns = [
        {
            dataField: 'id',
            text: 'Wallet ID',
            headerStyle: {
				width: '80%',
				textAlign: 'left',
				textTransform: 'none',
			},
        },
        {
            dataField: 'amount',
            text: 'Amount',
            headerStyle: {
				width: '10%',
				textAlign: 'left',
				textTransform: 'none',
			},
            formatter: (rowContent, row) => {
				return (
					`${rowContent}€`
				);
			},
        },
        {
            dataField: 'transfer',
			text: '',
			headerStyle: {
				width: '10%',
				textAlign: 'center',
				textTransform: 'none',
			},
			formatter: (rowContent, row) => {
				return (
					<button className={styles.transferButton} onClick={() => {
                        setSelectedWallet(row);
                        setIsModalVisible(true);
                    }}>Transfer</button>
				);
			},
            align: 'center',
        }
    ];

    useEffect(() => {
        setIsModalVisible(false);
        dispatch(getCustomer(detailId));
    }, [dispatch, detailId, hasDataChanged]);

    return (

        <div className={styles.container}>
            <Modal visible={isModalVisible} onClose={() => {
                setIsModalVisible(false);
                dispatch(resetErrorMsg());
            }}>
                <Card wallet={selectedWallet} onSubmit={onSubmitForm} errorMsg={errorMsg}></Card>
            </Modal>
            <div className={styles.customerInfo}>
                <div className={styles.personalInfo}>
                    <div className={styles.dataPoint}>
                        <div className={styles.label}>First name</div>
                        <div className={styles.data}>{customerDetail.firstName}</div>
                    </div>
                    <div className={styles.dataPoint}>
                        <div className={styles.label}>Last name</div>
                        <div className={styles.data}>{customerDetail.lastName}</div>
                    </div>
                    <div className={styles.dataPoint}>
                        <div className={styles.label}>Email</div>
                        <div className={styles.data}>{customerDetail.email}</div>
                    </div>
                </div>
                <div className={styles.economicalInfo}>
                    <div className={styles.dataPoint}>
                        <div className={styles.label}>Total amount</div>
                        <div className={styles.data}>{`${sumAllAmounts(customerDetail.wallets)}€`}</div>
                    </div>
                </div>
            </div>
            <div className={styles.wallets}>
                <ToolkitProvider
                keyField="id"
                data={ customerDetail.wallets }
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
                            rowClasses={styles.rows}
                        />
                    </div>
                    )
                }
                </ToolkitProvider>
            </div>
        </div>
    );
}

export default CharacterDetail;
