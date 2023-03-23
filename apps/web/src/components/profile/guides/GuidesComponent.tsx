import {Button, GuideCard, MyGuideCard} from "@garden/ui";

export default function GuidesComponent({guides}:any){
    return(
            <div className="py-2 px-4 sm:py-4 sm:px-6 ">
                <div
                    className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 xl:gap-x-8">
                    {guides.data.map((guide:any) => (
                        <MyGuideCard title={guide.title} name={"sdsd"} id={guide.id} img={guide.img}/>
                    ))}
                </div>
                <div className="flex justify-center mt-4">
                    <Button label={"Показать еще"}/>
                </div>
            </div>
    )
}
