interface InputProps {
  label: string; // O nome que você vai escolher ao importar
  id: string;  // id do imput
  type?: string; //tipo do imput
  multiline?: boolean;
}

export function Input({ label, id, type, multiline }: InputProps){
    return(
        <div className="relative p-3 my-2 w-full">
            {multiline? (
                <textarea
                        id={id}
                        rows={10}
                        placeholder=""
                        className="
                        w-full
                        peer
                        bg-white
                        p-2
                        border-2
                        border-gray-500
                        rounded-lg
                        placeholder-transparent
                        focus:outline-1
                        focus:outline-blue-400
                        focus:border-blue-400
                        "
                />
            ) : (
                    <input
                        id={id}
                        type={type}
                        placeholder=""
                        className="
                        w-full
                        peer
                        bg-white
                        p-2
                        border-2
                        border-gray-500
                        rounded-lg
                        placeholder-transparent
                        focus:outline-1
                        focus:outline-blue-400
                        focus:border-blue-400
                        "
                    />
            )
            }

    <label
    htmlFor={id}
    className="
        absolute
        text-xl
        left-5
        top-1/2
        -translate-y-1/2
        text-gray-500
        origin-left
        
        transition-all
        duration-300
        ease-out
        peer-focus:top-0
        peer-focus:scale-90
        peer-focus:text-black

        peer-not-placeholder-shown:top-0
        peer-not-placeholder-shown:scale-90
    "
    >
   {label}
    </label>
</div>
    )
}