import { Box, Grid, styled } from '@mui/material'
import React, { useState, useEffect } from 'react'
import ActionItem from './ActionItem'
// import axios from 'axios';
import ProductDetail from './ProductDetail';

import { useParams } from 'react-router-dom';

const Component = styled(Box)`
    margin-top: 55px;
    // background: #F2F2F2;
    
`;

const Container = styled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}));

const RightContainer = styled(Grid)`
    margin-top: 50px;
    padding-left: 40px;
    & > p {
        margin-top: 10px;
    }
`;

const DetailView = () => {
    
    const fetchId = useParams();
    // console.log(fetchId)

    const [itemData, setItemData] = useState([]);
    // useEffect(() => {
    //     const fetchData = async () => {

    //         const result = await axios.get(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/${fetchId}`);
    //         setItemData(result.data);
    //     }
    //     fetchData();
    // }, []);
    useEffect(() => {
        fetch(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/${fetchId.id}`)
            .then(response => response.json())
            .then(json => setItemData(json))
    }, []);

    // const product = productData.find((data) => data.id === match.params.id);
    console.log(itemData);
    return (
        <Component>
            <Grid container>

                <Container item lg={4} md={4} sm={8} xs={12}>
                    <ActionItem itemData={itemData} />
                </Container>

                <RightContainer item lg={8} md={8} sm={8} xs={12}>
                    <ProductDetail itemData={itemData} />
                </RightContainer>

            </Grid>
        </Component>
    )
}

export default DetailView;