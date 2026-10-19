function Footer() {
    const linkStyle = "flex items-center gap-[8px] text-[100%] text-[crimson] m-[2%] rounded-[10px] hover:text-[olivedrab] visited:text-[blueviolet] visited:active:text-[rgb(255,24,255)] max-[800px]:justify-start max-[800px]:[overflow-wrap:anywhere]";
    const borderStyle = "rounded-none border-l-2 border-[#2f2d2d] pl-3 max-[800px]:border-l-0 max-[800px]:pl-0 max-[800px]:pt-0"
    return (
        <footer className="flex bg-[rgb(234,205,205)] items-stretch rounded-[20px] max-[800px]:flex-col max-[800px]:items-stretch max-[800px]:gap-[15px]">
            <hr />
            <a className={`${linkStyle}`} href="https://github.com/Dima-mas">
                <img src="https://cdn-icons-png.flaticon.com/256/25/25231.png" width="30" height="30" alt="GitHub" />
                <span className="text-[20px]">GitHub</span>
            </a>
            <a className={`${linkStyle} ${borderStyle}`} href="https://t.me/Dima_mas06">
                <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/960px-Telegram_logo.svg.png?utm_source=ru.wikipedia.org&utm_campaign=index&utm_content=thumbnail" width="30" height="30" alt="Telegram" />
                <span className="text-[20px]">Telegram</span>
            </a>
            <a className={`${linkStyle} ${borderStyle}`} href="https://youtu.be/dQw4w9WgXcQ">
                <img src="https://png.pngtree.com/png-clipart/20241215/original/pngtree-3d-gold-dollar-coin-png-image_17881140.png" width="30" height="30" alt="Coin" />
                <span className="text-[20px]">100000000$ FREE BOBUX VBUCKS MINECOINS NO VIRUS DOWNLOAD 100% LEGIT</span>
            </a>
        </footer>
    );
}
export default Footer;
