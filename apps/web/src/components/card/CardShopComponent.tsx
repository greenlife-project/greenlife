"use client";

import {CardShop} from "@garden/ui";

export default function CardShopComponent({title,imgURL,price, id }:any){
    return(
        <CardShop title={title} imgURL={imgURL} price={price} id={id}/>
    )
}
