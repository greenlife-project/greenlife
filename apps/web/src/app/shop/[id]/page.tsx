"use client";
import {BigCard, BreadCump, Button, Comment, GreenArrowRight, TextArea} from "@garden/ui";
import CardShopComponent from "@/components/card/CardShopComponent";
import {api} from "@/utils/api";
import CommentAdd from "@/components/comment/add/CommentAdd";


export default function Page({params: { id }}:any){
    const item = api.item.getItem.useQuery(id);
    if(!item.data){
        return "Loading..."
    }
    const data = item.data
    console.log(data)
    return(
        <div className="">
            <div>
                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <BreadCump links={Array.of({label: "Интернет-Магазин", href: "/shop"}, {label: "Каталог товаров", href: "/shop"}, {label: data.title, href: "/shop/"+data.id})}/>
                    <div>
                        <BigCard title={data.title} img={data.img} price={data.price} name={`${data.user.first_name} ${data.user.last_name}`} description={data.description}/>
                        <div className="mt-2">
                            <h1>
                                Комментарии
                                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                                    {data.Comment.map((comment:any, index:any) => (
                                        <Comment key={index} text={comment.text} firstname={comment.user.first_name} lastname={comment.user.last_name} date={comment.created.toLocaleString()}/>
                                    ))}
                                </div>
                            </h1>
                        </div>
                        <div className="mt-2">
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
                            <div className={"mt-2"}>
                                {/*<TextArea/>*/}
                            </div>
                            <div className={"mt-2"}>
                                <Button label={"Отправить комментарий"}/>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </div>

    )
}
