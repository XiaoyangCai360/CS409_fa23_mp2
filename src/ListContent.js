import { useHistory } from "react-router-dom/";

const ListContent = ({ artworks }) => {
    const history = useHistory();

    return (
        <div className="list-content">
            {
                (artworks) ? (
                    artworks.map(artwork => {
                        return (
                            <div className="artwork-list" key={artwork.id}
                                onClick={() => {
                                    history.push(`/artworks/${artwork.id}`)
                                }}
                            >
                                <div className="list-img-container">
                                    <img src={"https://www.artic.edu/iiif/2/" + artwork.image_id + "/full/843,/0/default.jpg"}
                                        className="list-img"
                                        onError={(e) => {
                                            const alt_img_ids = artwork.alt_image_ids;
                                            if (alt_img_ids.length > 0) {
                                                try {
                                                    let alt_img_url = "https://www.artic.edu/iiif/2/" + artwork.alt_image_ids[0] + "/full/843,/0/default.jpg";
                                                    if (e.target.src !== alt_img_url) {
                                                        e.target.src = alt_img_url;
                                                    }
                                                } catch (error) {
                                                }
                                            } else {
                                                e.target.src = "/default.jpg";
                                            }
                                        }}
                                        alt="" />
                                </div>
                                <div className="list-brief-container">
                                    <h2>{artwork.title}</h2>
                                    <div className="list-brief">
                                        <p>Author: {artwork.artist_title ?? "N.A."}</p>
                                        <p>Origin Place: {artwork.place_of_origin}</p>
                                        <p>Artwork Type: {artwork.artwork_type_title}</p>
                                        <p>Department: {artwork.department_title}</p>
                                        <p>Date: { artwork.date_start }</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                ) : ""
            }
        </div>

    );
}

export default ListContent;