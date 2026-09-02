import { guidelines } from "../assets/items";

const GuideLines = () => {
  return (
    <div className="GuideLines w-full bg-white flex flex-col justify-center items-center">
      <div className="wrapper max-w-270 flex flex-col justify-center items-center p-8.5">
        <div className="guides accent-bg3 flex flex-col justify-center items-center py-7.75 px-14">
          <h2 className="font-bold text-[18px] italic mb-3">Manual dos convidados</h2>
          <div className="grid grid-cols-2 gap-y-6.75 gap-x-14">
            {guidelines.map(item => (
              <div className="flex flex-col justify-center items-center gap-1">
                <img className="h-9" src={item.image} alt={`Item de ${item.text}`} />
                <h3 className="Inter text-[9px] max-w-21.5 text-center">{item.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GuideLines