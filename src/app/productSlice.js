import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

let initialState = {
    products: [
        {
            id: 1,
            name: "Amazing Camera XYZ",
            price: 3500,
            description: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus vel laboriosam enim accusamus blanditiis officiis deleniti pariatur odit doloribus. Aut?`,
            image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg"
        },
        {
            id: 2,
            name: "Great Headphone XX second",
            price: 300,
            description: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus vel laboriosam enim accusamus blanditiis officiis deleniti pariatur odit doloribus. Aut?`,
            image: "https://t4.ftcdn.net/jpg/05/24/48/71/360_F_524487156_zlY3rVr6PaU7GRLtvjGd0jDk31u4zrC5.jpg"
        },
        {
            id: 3,
            name: "Acer Laptop",
            price: 4000,
            description: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus vel laboriosam enim accusamus blanditiis officiis deleniti pariatur odit doloribus. Aut?`,
            image: "https://m.media-amazon.com/images/I/71RtdZ+xi4L._AC_UF894,1000_QL80_.jpg"
        },
        {
            id: 4,
            name: "Station Mini Plus",
            price: 240,
            description: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus vel laboriosam enim accusamus blanditiis officiis deleniti pariatur odit doloribus. Aut?`,
            image: "https://irshad.az/cdn-cgi/image/width=1400/storage/products/79594/yandex-station-mini-plus-yndx-00021-red.jpg"
        },
    ],
    cartProducts: [],
    totalProducts: 0,
};

let productSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {

        },
        deleteProd: (state, { payload }) => {

        },
        createProd: (state, { payload }) => {

        },
    }
})

export let { addToCart, deleteProd, createProd } = productSlice.actions
export default productSlice.reducer