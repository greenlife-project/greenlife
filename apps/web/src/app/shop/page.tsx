"use client"
import {BreadCump, GreenArrowRight} from "@garden/ui";
import CardShopComponent from "@/components/card/CardShopComponent";
import {api} from "@/utils/api";


export default function Page(){
    const items = api.item.getItems.useQuery();

    return(
                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <BreadCump links={Array.of({label: "Интернет-Магазин", href: "/shop"}, {label: "Каталог товаров", href: "/shop"})}/>
                    <section className="pt-6">
                        <div className="grid md:grid-cols-12 gap-5 p-4 m-2">
                            <div className="bg-custom-white px-10 py-4 rounded-xl md:col-span-3 md:pt-0">
                                <ul role="list"
                                    className="space-y-4 py-6 text-sm font-medium text-gray-900">
                                    <li className="flex">
                                        <img src={GreenArrowRight.src} className="mr-2"/>
                                        <a href="#" className="font-medium text-lg">Саженцы</a>
                                    </li>
                                    <li className="flex ">
                                        <img src={GreenArrowRight.src} className="mr-2"/>
                                        <a href="#" className="font-medium text-lg">Саженцы</a>
                                    </li>
                                    <li className="flex ">
                                        <img src={GreenArrowRight.src} className="mr-2"/>
                                        <a href="#" className="font-medium text-lg">Саженцы</a>
                                    </li>
                                    <li className="flex ">
                                        <img src={GreenArrowRight.src} className="mr-2"/>
                                        <a href="#" className="font-medium text-lg">Саженцы</a>
                                    </li>
                                    <li className="flex ">
                                        <img src={GreenArrowRight.src} className="mr-2"/>
                                        <a href="#" className="font-medium text-lg">Саженцы</a>
                                    </li>
                                    <li className="flex ">
                                        <img src={GreenArrowRight.src} className="mr-2"/>
                                        <a href="#" className="font-medium text-lg">Саженцы</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="lg:px-8 md:col-span-9">
                                <h1 className="text-custom-black font-bold text-xl">Семена</h1>
                                    <div className="py-2 px-4 sm:py-4 sm:px-6 ">
                                        <div
                                            className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 xl:gap-x-8">
                                            {items.data && items.data.map((item) => (
                                                <CardShopComponent title={item.title} price={item.price} imgURL={item.img} id={item.id}/>
                                            ))}
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </section>
                </main>
)
}
