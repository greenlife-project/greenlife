
interface CommentProps{
    firstname: string
    lastname: string
    date: string
    text: string
}

export function Comment({firstname, lastname, date, text}:CommentProps){
    return(
    <article className="p-6 text-base bg-custom-white rounded-2xl">
        <footer className="flex justify-between items-center mb-2">
            <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-custom-grey"><img
                    className="mr-2 w-6 h-6 rounded-full"
                    src=""/>{`${firstname} ${lastname}`}</p>
                <p className="text-sm text-custom-grey">{date}</p>
            </div>
        </footer>
        <p className="text-custom-black">{text}</p>
    </article>
    )
}
