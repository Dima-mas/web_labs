function Work_exp() {
    const listClasses = "list-decimal list-inside mx-[0.4%] my-[0.2%] ml-auto rounded-[60px] p-[2%] bg-[rgb(254,251,166)] text-[125%] text-left bg-white text-[rgb(191,243,251)] hover:text-red-600";
    return (
        <div>
            <hr />
            <h2 className="text-center text-[175%] bg-[skyblue] mx-[0.4%] my-[0.2%] rounded-[30px]">Досвід роботи</h2>
            <hr />
            <ol className={`${listClasses}`}>
                <li>Junior back-end developer - 2 роки</li>
                <li>Freelance - 1 рік</li>
                <li>AI model training - 3 місяці</li>
            </ol>
        </div>
    );
}
export default Work_exp;
