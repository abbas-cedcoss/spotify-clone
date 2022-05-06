export default function extractDataFromRequest(data = []) {
    let modifiedRows = [];
    Object.keys(data['albums']['items']).map((element, index) => {
        let { name, images, artists } = data['albums']['items'][element];
        modifiedRows.push({
            name,
            images,
            artists
        })
    });
    return modifiedRows;
};

export const carouselProps = {
    // slidesPerRow: 1,
    slidesToShow: 10,
    dots: false,
    arrows: true,
    prefixCls: 'ant-carousel',
    draggable: true,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            setting: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
}