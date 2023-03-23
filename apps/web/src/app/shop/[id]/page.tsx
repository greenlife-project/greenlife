"use client";
import {BigCard, LongCard, BreadCump, Button, Comment, GreenArrowRight, TextArea} from "@garden/ui";
import {api} from "@/utils/api";
import CommentAdd from "@/components/comment/add/CommentAdd";
import CardShopComponent from "@/components/card/CardShopComponent";


export default function Page({params: { id }}:any){
    const item = api.item.getItem.useQuery(id);
    const items = api.item.getItemsCount.useQuery(4);
    if(!item.data || !items.data){
        return "Loading..."
    }
    const data = item.data
    console.log(data)
    return(
        <div className="my-2">
            <div>
                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/*
// @ts-ignore */}
                    <BreadCump links={Array.of({label: "Интернет-Магазин", href: "/shop"}, {label: "Каталог товаров", href: "/shop"}, {label: data.title, href: "/shop/"+data.id})}/>
                    <div>

                        <div className="mt-2">
                            <h1>
                                Комментарии
                                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                                    {/*
// @ts-ignore */}
                                    {data.Comment.map((comment:any, index:any) => (
                                        <Comment key={index} text={comment.text} firstname={comment.user.first_name} lastname={comment.user.last_name} date={comment.created.toLocaleString()}/>
                                    ))}
                                </div>
                            </h1>
                        </div>
                        <div className="mt-2">
                            {/*
// @ts-ignore */}
                            <CommentAdd id={data.id}/>
                        </div>
                        <div className="mt-2">
                            <h1>
                                Руководтсво по теме
                            </h1>
                            <div className={"mt-2"}>
                                {/*<TextArea/>*/}
                            </div>
                            <div className={"mt-2"}>
                                <Button label={"Отправить комментарий"}/>
                            </div>
                        </div>
                        <div className="mt-2">
                            <h1>
                                Вам также могут понравиться
                            </h1>
                            <div className={"mt-2 md:flex [&>*]:mr-2"}>
                                {items.data.map((item) => (
                                    <CardShopComponent title={item.title} price={item.price} imgURL={item.img} id={item.id}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>

    )
}
