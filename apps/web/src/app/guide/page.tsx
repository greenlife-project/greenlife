import {BreadCump, Button, GreenArrowRight, GuideCard, GuideHeader} from "@garden/ui";
import GuideHeaderComponent from "@/components/header/GuideHeaderComponent";

export default function Page(){
    return(
        <>
                <GuideHeaderComponent/>
                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <BreadCump links={Array.of({label: "Справочник", href: "/guide"}, {label: "Главная", href: "/guide"})}/>
                    <section className="pt-6">
                        <div className="grid md:grid-cols-12 gap-5 p-4 m-2">
                            <form className="bg-custom-white px-10 py-4 rounded-xl md:col-span-3 md:pt-0">
                                <ul role="list"
                                    className="space-y-4 py-6 text-sm font-medium text-gray-900">
                                    <li className="flex">
                                        <img src={GreenArrowRight.src} className="mr-2"/>
                                        <a href="#" className="font-medium text-lg">Все</a>
                                    </li>
                                    <li className="flex ">
                                        <img src={GreenArrowRight.src} className="mr-2"/>
                                        <a href="#" className="font-medium text-lg">Саженцы</a>
                                    </li>
                                    <li className="flex ">
                                        <img src={GreenArrowRight.src} className="mr-2"/>
                                        <a href="#" className="font-medium text-lg">Семена</a>
                                    </li>
                                </ul>
                            </form>
                            <div className="lg:px-8 md:col-span-9">
                                <h1 className="text-custom-black font-bold text-xl">Все</h1>
                                <div className="py-2 px-4 sm:py-4 sm:px-6 ">
                                    <div
                                        className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 xl:gap-x-8">
                                        <GuideCard/>
                                        <GuideCard/>
                                        <GuideCard/>
                                        <GuideCard/>
                                    </div>
                                    <div className="flex justify-center mt-4">
                                        <Button label={"Показать еще"}/>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                </main>
        </>
    )
}
