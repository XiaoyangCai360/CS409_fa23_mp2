import { useState } from "react";

const SearchBar = () => {
    const [query, setQuery] = useState('');

    return (
        <div className="list-search-bar">
            <form>
                <input type="text" placeholder="Search Artworks by Title, Origin Place, Artwork Type, Department"
                    onChange={e => setQuery(e.target.value)}
                />
            </form>
        </div>
    );
}

export default SearchBar;