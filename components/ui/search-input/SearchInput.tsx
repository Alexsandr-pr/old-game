
import { IconId } from "@/utils/iconSpriteId";
;
import "./search-input.scss";
import Icon from "../Icon";


const SearchInput = () => {
    return (
        <form className="search-min">
            <button className="search-min__chevron">
                <Icon color="--muted-coral" height={7.5} width={16} id={IconId.IconChevron}/>
            </button>
            <input type="text" className="search-min__input" placeholder="Поиск"/>
            <button className="search-min__button">
                <Icon color="--dark-brown" size={18} id={IconId.IconButtonSearch}/>
            </button>       
        </form>
    )
}

export default SearchInput