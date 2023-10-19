import { useParams } from "react-router-dom";
import DetailContent from "./DetailContent";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const ArtworkDetails = () => {
    const history = useHistory();
    
    let { id } = useParams();
    const url = 'https://api.artic.edu/api/v1/artworks/' + id;

    const {data: artwork, isPending} = useFetch(url);


    const {data: artworkList, isPendingList} = useFetch('https://api.artic.edu/api/v1/artworks?limit=100');
    
    console.log(isPendingList);

    // console.log(artworkList && artworkList.map(item => item.id));

    const handlePrevClick = () => {
        if (artworkList) {
            const idxList = artworkList.map(item => item.id)
            const currentIdx = idxList.indexOf(parseInt(id));
            console.log(currentIdx);
            if (currentIdx > 0) {
                const prevId = idxList[currentIdx - 1]; 
                console.log(prevId);
                history.push(`/artworks/${prevId}`)
            }
        }
    }

    const handleNextClick = () => {
        if (artworkList) {
            const idxList = artworkList.map(item => item.id)
            const currentIdx = idxList.indexOf(parseInt(id));
            console.log("current idx: "+currentIdx);
            if (currentIdx + 1 < idxList.length) {
                const nextId = idxList[currentIdx + 1];
                console.log("next id: "+ nextId);
                history.push(`/artworks/${nextId}`);
            }
            // if (currentIdx > 0) {
            //     const prevId = idxList[currentIdx - 1]; 
            //     console.log(prevId);
            //     history.push(`/artworks/${prevId}`)
            // }
        }
    }

    return (
        <div className="artwork-detail-page">
            <div className="artwork-detail-buttons">
                <button
                    onClick={ handlePrevClick }
                >
                    Prev Page
                </button>
                <button
                    onClick={ handleNextClick }
                >
                    Next Page
                </button>
            </div>
            {isPending && <p>Loading...</p>}
            { artwork && <DetailContent artwork={artwork}/> }
        </div>
    );
}

export default ArtworkDetails;