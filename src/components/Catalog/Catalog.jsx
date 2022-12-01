import React from "react"

import './catalog.scss'
import CatalogItem from "../CatalogItem/CatalogItem.jsx"
export default function Catalog(props) {
    

    return (
        <div className="catalog">
            <CatalogItem></CatalogItem>
            <CatalogItem></CatalogItem>
            <CatalogItem></CatalogItem>
            <CatalogItem></CatalogItem>
            <CatalogItem></CatalogItem>
            <CatalogItem></CatalogItem>
            <CatalogItem></CatalogItem>

        </div>
    )
}
