import imageOne from '../../assets/image-1.png';
import imageTwo from '../../assets/image-2.png';
import imageThree from '../../assets/image-3.png';
import '../../scss/components/Promote.scss'

const dataImage = [
    {
        id: 1,
        img: imageOne,
    },
    {
        id: 2,
        img: imageTwo,
    },
    {
        id: 3,
        img: imageThree,
    },
];

const Promote = () => {
    return (
        <section className="promote">
            <div className="promote__inner">
                <h2 className="promote__title">This is a copy and 3 pictures module</h2>
                <p className="promote__descr">
                    Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard
                    seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water
                    chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress.
                </p>
                <div className="promote__images">
                    {dataImage.map((item) => (
                        <img key={item.id} src={item.img} alt={`Human ${item.id}`} />
                    ))}
                </div>
                <h2 className="promote__title">Best picks for woman collection</h2>
                <p className="promote__descr">
                    Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard
                    seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander.
                </p>
            </div>
            <div className="promote__visible">
                <div className="promote__visible-info">
                    <h3 className="promote__visible-title">The title of the component</h3>
                    <p className="promote__visible-descr">
                        Very visible component to promote something.
                    </p>
                </div>
                <div className="">
                    <button className="promote__visible-button">Book an Appointment</button>
                </div>
            </div>
        </section>
    );
};

export default Promote;