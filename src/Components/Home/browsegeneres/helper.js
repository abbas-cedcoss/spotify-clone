export default function extractDataFromRequest(data = []) {
    // console.log(data['categories']['items'])
    let modifiedRows = [];
    Object.keys(data['categories']['items']).map((element, index) => {
        // console.log(data['categories']['items'][element])
        let { name, icons } = data['categories']['items'][element];
        modifiedRows.push({
            name, icons
        });
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