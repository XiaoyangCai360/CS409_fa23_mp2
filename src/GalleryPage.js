import { useState, useEffect } from "react";
import GalleryContent from "./GalleryContent";
import useFetch from "./useFetch";

const GalleryPage = () => {
    const [page, setPage] = useState(1);
    const [artworkType, setArtworkType] = useState('');
    // const [filter, setFilter] = useState(false);

    const url = 'https://api.artic.edu/api/v1/artworks?page=' + page + '&limit=52';

    const { data: artworks, isPending } = useFetch(url);

    // const [artworksFiltered, setArtworksFiltered] = useState(artworks);
    // console.log(artworkType);

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     setFilter(!filter);
    //     // console.log(filter);
    //     // console.log(artworkType);
    //     if (artworks) {
    //         const newArtworks = artworks.filter(artwork => artwork.artwork_type_title === artworkType);
    //         setArtworksFiltered(newArtworks);
    //         console.log(newArtworks);
    //     }
    // }
    // console.log(artworksFiltered);

    const filter = (artworks) => {
        return (artworks && (artworks.filter(artwork => artwork.artwork_type_title.includes(artworkType))))
    }

    // console.log(artworks && (artworks.filter(artwork => artwork.artwork_type_title.includes(artworkType))))

    return (
        <div className="gallery-page">
            <h2>Artworks Gallery</h2>
            <div className="gallery-sort-container">
                <label>Sort by Artwork Type</label>
                <div className="gallery-sort-select">
                    <form>
                        <select
                            value={artworkType}
                            onChange={e => setArtworkType(e.target.value)}
                        >
                            <option value="Photograph">Photograph</option>
                            <option value="Painting">Painting</option>
                            <option value="Print">Print</option>
                            <option value="Drawing and Watercolor">Drawing and Watercolor</option>
                            <option value="Sculpture">Sculpture</option>
                        </select>
                        {/* <button type="submit" onClick={handleClick}>Apply</button> */}
                    </form>
                </div>
            </div>
            {isPending && <p>Loading...</p>}
            {artworks && <GalleryContent artworks={filter(artworks)} />}
            {/* {artworks && <GalleryContent artworks={artworksFiltered} />} */}
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

export default GalleryPage;