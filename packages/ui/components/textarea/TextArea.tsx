export function TextArea(){
    return(
        <textarea id="message" rows={4} maxLength={100}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-custom-white rounded-lg md:w-1/2"
                  placeholder="Напишите ваш комментарий"></textarea>
    )
}
