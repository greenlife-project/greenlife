import VerifyTokenComponent from "@/components/verifyToken/VerifyTokenComponent";

export default function Page(){
    return(
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-custom-white rounded-[32px]">
            <div className="container mx-auto">
                <div className="max-w-sm mx-auto md:max-w-lg">
                    <div className="w-full">
                        <div className="bg-white h-64 py-3 rounded text-center">
                            <h1 className="text-2xl font-bold">Подтверждения телефона</h1>
                            <div className="flex flex-col mt-4">
                                <span>Сейчас на ваш телефон поступит звонок для подтверждения аккаунта</span>
                                <span>Введите код который продиктует диктор</span>
                            </div>
                            <VerifyTokenComponent/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
