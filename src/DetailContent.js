import parse from 'html-react-parser';

const DetailContent = ({ artwork }) => {
    return (
            <div className="artwork-detail-container">
                <div className="artwork-detail-img">
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
                <div className="artwork-detail-info-container">
                    <div className="artwork-detail-title">
                        <h2>{ artwork.title }</h2>
                    </div>
                    <div className="artwork-detail-info">
                        <div className="artwork-detail-shortlist">
                            <p>Author: { artwork.artist_title ?? "N.A."}</p>
                            <p>Date: { artwork.date_display }</p>
                            <p>Origin Place: {artwork.place_of_origin} </p>
                            <p>Artwork Type: { artwork.artwork_type_title }</p>
                            <p>Department: { artwork.department_title }</p>
                            <p>Dimension: { artwork.dimensions }</p>
                        </div>
                        <div className="artwork-detail-longlist">
                            <p>Description:</p>
                            {parse(artwork.description ?? "<p>N.A.</p>")}
                        </div>
                    </div>
                </div>
            </div>
    );
}
 
export default DetailContent;