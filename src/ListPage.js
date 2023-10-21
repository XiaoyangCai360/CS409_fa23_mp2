import ListContent from "./ListContent";
import { useState } from "react";
import useFetch from "./useFetch";

const ListPage = () => {
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const [ascDescOption, setAscDescOption] = useState('asc');
    const [sortOption, setSortOption] = useState('title');
    const [sort, setSort] = useState(false);

    const url = 'https://api.artic.edu/api/v1/artworks?page=' + page + '&limit=52';

    const { data: artworks, isPending } = useFetch(url);

    const search = (artworks) => {
        return artworks.filter(artwork =>
            artwork.title.toLowerCase().includes(query)
            // || artwork.place_of_origin.toLowerCase().includes(query)
            || artwork.artwork_type_title.toLowerCase().includes(query)
            // || artwork.department_title.toLowerCase().includes(query)
        );
    }
    // const handleClick = (e) => {
    //     e.preventDefault();
    //     console.log(sort);
    //     setSort(!sort);
    // }

    // useEffect(() => {
    //     if (artworks) {
    //         console.log(ascDescOption);
    //         if (ascDescOption === 'asc') {
    //             artworks.sort((a,b) =>  b.id - a.id )
    //         }
    //         // artworks.sort((a,b) =>  b.id - a.id )
    //     }
    // }, [sort])

    // copy
    // useEffect(() => {
    //     if (artworks) {
    //         setSortArtworks(artworks.sort((a,b) =>  b.id - a.id ));
    //         console.log(sortArtworks);
    //     }
    // }, [sort])

    const handleClick = (e) => {
        e.preventDefault();
        setSort(!sort);

        if (artworks) {
            // ASC sort
            if (ascDescOption === 'asc') {
                // sort date
                if (sortOption === 'date_start') {
                    artworks.sort((a, b) => a.date_start - b.date_start);
                }
                // sort title
                if (sortOption === 'title') {
                    artworks.sort((a, b) => (a.title > b.title ? 1 : -1));
                }
            } else {
                // DESC sort
                // sort date
                if (sortOption === 'date_start') {
                    artworks.sort((a, b) => b.date_start - a.date_start);
                }
                // sort title
                if (sortOption === 'title') {
                    artworks.sort((a, b) => (a.title < b.title ? 1 : -1));
                }
            }
        }
    }
    console.log(artworks);

    return (
        <div className="list-page">
            <h2>Artworks List</h2>
            <div className="list-header-container">
                <div className="list-search-bar">
                    <form>
                        <input type="text" placeholder="Search Artworks by Title or Artwork Type"
                            onChange={e => setQuery(e.target.value)}
                        />
                    </form>
                </div>
                <div className="list-sort-container">
                    <form>
                        <label>Sort Result</label>
                        <div className="list-sort-selector">
                            <select
                                value={sortOption}
                                onChange={e => setSortOption(e.target.value)}
                            >
                                <option value="title">Title</option>
                                {/* <option value="artwork_type">Artwork Type</option> */}
                                <option value="date_start">Date</option>
                            </select>
                        </div>
                        <div className="list-sort-asc-desc">
                            <div className="list-sort-asc">
                                <label>Ascending</label>
                                <input type="radio" value="asc" checked={ascDescOption === 'asc'}
                                    onChange={e => setAscDescOption('asc')}
                                />
                            </div>
                            <div className="list-sort-desc">
                                <label>Descending</label>
                                <input type="radio" value="desc" checked={ascDescOption === 'desc'}
                                    onChange={e => setAscDescOption('desc')}
                                />
                            </div>
                        </div>
                        {/* <button type="submit" onClick={e => {
                            e.preventDefault();
                            setSort(!sort);}}
                            >Apply</button> */}
                        <button type="submit" onClick={handleClick}>Apply</button>
                    </form>
                </div>
            </div>
            {isPending && <p>Loading...</p>}
            <ListContent artworks={artworks ? search(artworks) : ""} />
            <div className="page-select">
                <label>Page Number: </label>
                <select
                    value={page}
                    onChange={(e) => setPage(e.target.value)}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    );
}

export default ListPage;