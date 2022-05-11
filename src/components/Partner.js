export default function Partner() {
    return (
        <div className="bg-white my-6 p-6 md:p-0 h-[112px] xl:h-[214px] flex flex-col md:flex-row justify-between items-center bg-partner mx-4 md:mx-0 rounded-lg">
            <div className="flex flex-col md:ml-6 gap-y-2 text-left">
                <h3 className="text-lg md:text-[28px] font-bold text-primary-brand-color">İşletme sahibi misiniz?</h3>
                <p className="text-xs md:text-sm font-semibold text-gray-storm">GetirÇarşı işletme iş ortaklarından biri olun, işinizi daha az maliyetle büyütün, müşteri memnuniyetini artırın.</p>
            </div>
            <a href="#" className="px-8 py-4 rounded text-primary-brand-color font-semibold text-sm bg-brand-yellow md:mr-8">
                Hemen Başvur
            </a>
        </div>
    )
}