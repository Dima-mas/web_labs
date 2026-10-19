function General_info() {
    return (
        <div className="font-sans text-right w-fit ml-auto list-none [&_li::after]:content-['•'] [&_li::after]:text-[125%]">
            <hr />
            <h2 className="text-center text-[175%] bg-[skyblue] mx-[0.4%] my-[0.2%] rounded-[30px]">Загальна інформація</h2>
            <hr />
            <ul className="text-[large] mx-[0.4%] my-[0.2%] ml-auto rounded-[30px] p-[2%] bg-[rgb(254,251,166)] text-[125%]">
                <li>ПІБ - Маслов Дмитро Сергійович</li>
                <li>Вік - 19 років</li>
                <li>Дата народження - 14.06.2007</li>
                <li>Стать - чоловіча</li>
                <li>Національність - українець</li>
                <li>Місто проживання - Львів, Львівська обл.</li>
            </ul>
        </div>
    );
}
export default General_info;
